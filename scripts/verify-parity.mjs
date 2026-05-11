#!/usr/bin/env node
// SSW Component Parity Check
// GitHub MD ↔ Figma library variant matrix diff
//
// Env:
//   FIGMA_TOKEN     (required) — Figma Personal Access Token (scope: file_content:read)
//   FIGMA_FILE_KEY  (optional) — defaults to current source-of-truth library file
//
// Exit codes:
//   0 = no drift
//   1 = drift detected
//   2 = config/auth error

import fs from "node:fs/promises";
import path from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY || "lIIen1jmIhT0vuyXCMQDQA";
const COMPONENTS_DIR = "components";
const OUTPUT_MD = "parity-report.md";

if (!TOKEN) {
  console.error("ERROR: FIGMA_TOKEN env var is required.");
  process.exit(2);
}

// ── Figma REST API ───────────────────────────────────────
async function figma(endpoint) {
  const res = await fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: { "X-Figma-Token": TOKEN },
  });
  if (!res.ok) {
    throw new Error(`Figma API ${res.status} on ${endpoint}: ${await res.text()}`);
  }
  return res.json();
}

console.error(`▸ Fetching Figma file ${FILE_KEY}...`);
const [compResp, setResp] = await Promise.all([
  figma(`/files/${FILE_KEY}/components`),
  figma(`/files/${FILE_KEY}/component_sets`),
]);

const variants = compResp.meta?.components ?? [];
const sets = setResp.meta?.component_sets ?? [];
console.error(`  · ${variants.length} variant components, ${sets.length} component sets`);

// ── Index Figma sets ─────────────────────────────────────
// figmaSets: setNodeId -> { name, axes: { prop: Set<value> } }
const figmaSets = new Map();
for (const s of sets) {
  figmaSets.set(s.node_id, { name: s.name, axes: {} });
}
for (const v of variants) {
  const setId = v.containing_frame?.nodeId;
  if (!setId || !figmaSets.has(setId)) continue;
  const set = figmaSets.get(setId);
  for (const part of v.name.split(",")) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    const val = part.slice(eq + 1).trim();
    if (!key || !val) continue;
    set.axes[key] ??= new Set();
    set.axes[key].add(val);
  }
}

// ── Parse MD files ───────────────────────────────────────
function normalize(s) {
  return s.toLowerCase().replace(/[\s\/_\-]/g, "");
}

function extractMDAxes(md) {
  const axes = {};
  const sectionMap = [
    { re: /^##\s*Style\b/i,     name: "style"  },
    { re: /^##\s*State\b/i,     name: "state"  },
    { re: /^##\s*Size\b/i,      name: "size"   },
    { re: /^##\s*\사이즈\b/,    name: "size"   },
    { re: /^##\s*Layout\b/i,    name: "layout" },
    { re: /^##\s*Type\b/i,      name: "type"   },
    { re: /^##\s*Variants?\b/i, name: "variant"},
  ];
  let current = null;
  for (const line of md.split("\n")) {
    if (/^##\s/.test(line)) {
      current = null;
      for (const s of sectionMap) {
        if (s.re.test(line)) { current = s.name; break; }
      }
      continue;
    }
    if (!current) continue;
    // backtick code-spans = canonical values
    for (const m of line.matchAll(/`([^`]+)`/g)) {
      const t = m[1].trim();
      // Skip hex / numbers / node IDs / px
      if (!t) continue;
      if (t.startsWith("#")) continue;
      if (/^\d+$/.test(t)) continue;
      if (/^[\d.]+(px|rem|em|%)?$/.test(t)) continue;
      if (/^[0-9]+:[0-9]+$/.test(t)) continue;
      if (/^[a-fA-F0-9]{6,8}$/.test(t)) continue;
      axes[current] ??= new Set();
      axes[current].add(t);
    }
  }
  return axes;
}

const mdDir = path.resolve(COMPONENTS_DIR);
const mdFiles = (await fs.readdir(mdDir)).filter(
  f => f.endsWith(".md") && f !== "README.md"
);

// ── Diff ─────────────────────────────────────────────────
const drift = [];
const orphanMD = []; // MD with no matching Figma set
const figmaArr = [...figmaSets.values()];

for (const mdFile of mdFiles) {
  const compName = mdFile.replace(".md", "");
  const md = await fs.readFile(path.join(mdDir, mdFile), "utf8");
  const mdAxes = extractMDAxes(md);

  // match by normalized name (handle "find-id" vs "FindId" etc.)
  const cn = normalize(compName);
  const matches = figmaArr.filter(s => {
    const sn = normalize(s.name);
    return sn.includes(cn) || cn.includes(sn);
  });

  if (matches.length === 0) {
    orphanMD.push(compName);
    continue;
  }
  // Use the most specific match: shortest name diff
  matches.sort((a, b) => Math.abs(a.name.length - compName.length) - Math.abs(b.name.length - compName.length));
  const fset = matches[0];

  for (const axis of Object.keys(mdAxes)) {
    const mdVals = mdAxes[axis];
    const fgVals = fset.axes[axis];
    if (!fgVals) {
      drift.push({
        component: compName, figmaSet: fset.name, axis,
        kind: "axis-missing-in-figma",
        onlyMD: [...mdVals], onlyFigma: [],
      });
      continue;
    }
    const onlyMD = [...mdVals].filter(v => !fgVals.has(v));
    const onlyFigma = [...fgVals].filter(v => !mdVals.has(v));
    if (onlyMD.length || onlyFigma.length) {
      drift.push({
        component: compName, figmaSet: fset.name, axis,
        kind: "value-diff", onlyMD, onlyFigma,
      });
    }
  }
}

// Figma sets with no matching MD
const documentedNames = mdFiles.map(f => normalize(f.replace(".md", "")));
const orphanFigma = figmaArr
  .filter(s => !documentedNames.some(n => normalize(s.name).includes(n) || n.includes(normalize(s.name))))
  .map(s => s.name);

// ── Markdown report ──────────────────────────────────────
let out = "# SSW Component Parity Report\n\n";
out += `**Figma File:** \`${FILE_KEY}\`\n`;
out += `**Generated:** ${new Date().toISOString()}\n`;
out += `**Inputs:** ${mdFiles.length} MDs · ${sets.length} Figma sets · ${variants.length} variants\n\n`;

if (drift.length === 0 && orphanMD.length === 0) {
  out += "## ✅ No drift detected\n\nAll MD-documented variant axes match the Figma library.\n";
} else {
  out += `## ⚠ Drift summary\n\n`;
  out += `- Drift items: **${drift.length}**\n`;
  out += `- MDs with no matching Figma set: **${orphanMD.length}**\n`;
  out += `- Figma sets with no matching MD: **${orphanFigma.length}** (informational)\n\n`;

  if (orphanMD.length) {
    out += "### MDs without matching Figma set\n";
    for (const c of orphanMD) out += `- \`${c}\`\n`;
    out += "\n";
  }

  if (drift.length) {
    out += "### Variant axis drift\n\n";
    const byComp = {};
    for (const d of drift) {
      (byComp[d.component] ??= []).push(d);
    }
    for (const comp of Object.keys(byComp).sort()) {
      out += `#### \`${comp}\` → \`${byComp[comp][0].figmaSet}\`\n`;
      for (const d of byComp[comp]) {
        out += `- **axis** \`${d.axis}\``;
        if (d.kind === "axis-missing-in-figma") out += " · _axis missing in Figma_";
        out += "\n";
        if (d.onlyMD.length)
          out += `  - 📘 MD only: ${d.onlyMD.map(v => "`" + v + "`").join(", ")}\n`;
        if (d.onlyFigma.length)
          out += `  - 🎨 Figma only: ${d.onlyFigma.map(v => "`" + v + "`").join(", ")}\n`;
      }
      out += "\n";
    }
  }
}

if (orphanFigma.length) {
  out += "<details><summary>Figma sets without matching MD (informational)</summary>\n\n";
  for (const n of orphanFigma.slice(0, 50)) out += `- \`${n}\`\n`;
  if (orphanFigma.length > 50) out += `- _…${orphanFigma.length - 50} more_\n`;
  out += "\n</details>\n";
}

await fs.writeFile(OUTPUT_MD, out);
console.log(out);

const failCount = drift.length + orphanMD.length;
if (failCount > 0) {
  console.error(`\n▸ Parity drift: ${failCount} issues`);
  process.exit(1);
}
console.error("\n▸ No drift");
process.exit(0);
