#!/usr/bin/env node
// SSW Design System Docs Builder
// Reads MD components + tokens (color/number/typography) + icons → single HTML viewer

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const repoRoot = path.resolve(new URL(".", import.meta.url).pathname, "..");
const outFile = path.join(repoRoot, "docs", "components.html");

// ── Categories for sidebar ─────────────────────────────────
const CAT = {
  Form: ["input", "textarea", "button", "checkbox", "radio", "switch", "dropdown", "slider", "value-stepper"],
  Navigation: ["breadcrumb", "gnb", "menu", "tab", "segmented-control", "toolbar"],
  Display: ["avatar", "badge", "chip", "tag", "divider", "rating"],
  Feedback: ["tooltip", "popover", "popup", "modal", "notification", "progress", "progress-stepper", "spinner"],
  Layout: ["card", "list", "expandable-list", "reservation-card", "table", "hmi"],
  Date: ["calendar"],
};

// ── Load tokens via dynamic import ─────────────────────────
const load = (rel) => import(pathToFileURL(path.join(repoRoot, rel)).href);
const colorPrim = await load("tokens/color/primitive.js");
const colorSem = await load("tokens/color/semantic.js");
const colorComp = await load("tokens/color/component.js");
const numPrim = await load("tokens/number/primitive.js");
const numSem = await load("tokens/number/semantic.js");
const numComp = await load("tokens/number/component.js");
const fontFam = await load("tokens/typography/font-family.js");
const fontSize = await load("tokens/typography/font-size.js");
const textStyle = await load("tokens/typography/text-style.js");

// ── Walk helper ────────────────────────────────────────────
function walkLeaves(obj, leafTest, p = []) {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const np = [...p, String(k)];
    if (leafTest(v)) out.push({ path: np, value: v });
    else if (typeof v === "object" && v !== null) out.push(...walkLeaves(v, leafTest, np));
  }
  return out;
}

const isColor = (v) =>
  typeof v === "string" && /^(#[0-9a-fA-F]{3,8}|rgb|rgba|transparent|var\()/.test(v);
const isNumber = (v) => typeof v === "number";
const isTextStyle = (v) => v && typeof v === "object" && "family" in v && "size" in v;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ── Color foundation ───────────────────────────────────────
function colorSwatch(name, value) {
  return `<div class="swatch" title="${esc(name)}">
    <div class="swatch-box" style="background:${esc(value)}"></div>
    <div class="swatch-info">
      <div class="swatch-name">${esc(name)}</div>
      <div class="swatch-value"><code>${esc(value)}</code></div>
    </div>
  </div>`;
}

function buildColorSection(title, mod, prefix = "") {
  let html = `<h2>${title}</h2>`;
  for (const [grp, val] of Object.entries(mod)) {
    if (grp === "default" || typeof val !== "object" || val === null) continue;
    const leaves = walkLeaves(val, isColor);
    if (!leaves.length) continue;
    html += `<h3>${esc(grp)}</h3><div class="swatch-grid">`;
    for (const { path: p, value } of leaves) {
      html += colorSwatch(`${prefix}${grp}.${p.join(".")}`, value);
    }
    html += `</div>`;
  }
  return html;
}

function buildColorPage() {
  return `<h1>Color Tokens</h1>
  <p class="lead">primitive · semantic · component 3-layer 색상 토큰. ssw/tokens/color/*.js 기반.</p>
  ${buildColorSection("Primitive", colorPrim, "colorPrimitive.")}
  ${buildColorSection("Semantic", colorSem, "colorSemantic.")}
  ${buildColorSection("Component", colorComp, "colorComponent.")}`;
}

// ── Number foundation ──────────────────────────────────────
function rulerHTML(v) {
  const w = Math.min(v, 240);
  return `<div class="ruler" style="width:${w}px"></div>`;
}

function buildNumberSection(title, mod, prefix = "") {
  let html = `<h2>${title}</h2>`;
  for (const [grp, val] of Object.entries(mod)) {
    if (grp === "default" || typeof val !== "object" || val === null) continue;
    const leaves = walkLeaves(val, isNumber);
    if (!leaves.length) continue;
    html += `<h3>${esc(grp)}</h3><table class="num-table"><thead><tr><th>Token</th><th>Value</th><th>Preview</th></tr></thead><tbody>`;
    for (const { path: p, value } of leaves) {
      html += `<tr>
        <td><code>${prefix}${esc(grp)}.${esc(p.join("."))}</code></td>
        <td class="num-val">${value}</td>
        <td>${rulerHTML(value)}</td>
      </tr>`;
    }
    html += `</tbody></table>`;
  }
  return html;
}

async function buildNumberPage() {
  // 1. Figma UI-Kit-Guide에서 추출한 canonical scale 문서 (MD)
  const mdPath = path.join(repoRoot, "tokens/number.md");
  let md = "";
  try { md = await fs.readFile(mdPath, "utf8"); } catch {}

  // 2. JS 토큰에서 자동 추출한 의미별 매핑 테이블 (HTML)
  const tables = buildNumberSection("Primitive", numPrim, "numberPrimitive.")
    + buildNumberSection("Semantic", numSem, "numberSemantic.")
    + buildNumberSection("Component", numComp, "numberComponent.");

  // md(canonical) + HTML(자동 매핑) 합성. marked.js가 raw HTML도 passthrough.
  return md + `\n\n---\n\n# JS 토큰 매핑 (자동 생성)\n\n<p class="lead">tokens/number/*.js의 의미별 토큰을 자동 추출한 결과. canonical 39단계 스케일 위에 매핑됩니다.</p>\n\n${tables}`;
}

// ── Typography foundation ──────────────────────────────────
function buildTypographyPage() {
  let html = `<h1>Typography</h1>
  <p class="lead">font-family · font-size · text-style. v0.4 시리즈가 현행.</p>`;

  // Font family
  html += `<h2>Font Family</h2><div class="key-list">`;
  for (const [k, v] of Object.entries(fontFam)) {
    if (k === "default") continue;
    if (typeof v === "string") html += `<div class="key-row"><code>${esc(k)}</code><span>${esc(v)}</span></div>`;
    else if (typeof v === "object" && v !== null) {
      for (const [k2, v2] of Object.entries(v)) {
        if (typeof v2 === "string") html += `<div class="key-row"><code>${esc(k)}.${esc(k2)}</code><span>${esc(v2)}</span></div>`;
      }
    }
  }
  html += `</div>`;

  // Font size
  html += `<h2>Font Size</h2><div class="key-list">`;
  for (const [k, v] of Object.entries(fontSize)) {
    if (k === "default") continue;
    if (typeof v === "number") html += `<div class="key-row"><code>${esc(k)}</code><span>${v}px</span></div>`;
    else if (typeof v === "object" && v !== null) {
      for (const [k2, v2] of Object.entries(v)) {
        if (typeof v2 === "number") html += `<div class="key-row"><code>${esc(k)}.${esc(k2)}</code><span>${v2}px</span></div>`;
      }
    }
  }
  html += `</div>`;

  // Text styles — v0.4 (현행), v0.1, legacy heading/paragraph
  // body/button/display/title/caption 은 v04의 alias 라 중복 회피
  const sections = [
    { key: "v04", title: "v0.4 (현행)", prefix: "textStyle.v04." },
    { key: "v01", title: "v0.1 (legacy)", prefix: "textStyle.v01." },
    { key: "heading", title: "Legacy · heading", prefix: "textStyle.heading." },
    { key: "paragraph", title: "Legacy · paragraph", prefix: "textStyle.paragraph." },
  ];
  for (const sec of sections) {
    const styles = walkLeaves(textStyle[sec.key] ?? {}, isTextStyle);
    if (!styles.length) continue;
    html += `<h2>Text Styles — ${esc(sec.title)} <small>(${styles.length})</small></h2><div class="type-grid">`;
    for (const { path: p, value: s } of styles) {
      const lh = typeof s.lineHeight === "number" ? `${s.lineHeight}px` : s.lineHeight;
      const ls = s.letterSpacing ?? 0;
      const css = `font-family:"${esc(s.family)}",sans-serif;font-weight:${s.weight};font-size:${s.size}px;line-height:${typeof s.lineHeight === "number" ? s.lineHeight + "px" : s.lineHeight};letter-spacing:${ls}px;`;
      html += `<div class="type-card">
        <div class="type-meta">
          <code>${esc(sec.prefix)}${esc(p.join("."))}</code>
          <span>${esc(s.family)} · ${s.weight} · ${s.size}/${lh}</span>
        </div>
        <div class="type-preview" style="${css}">디자인시스템 SSW · Osstem Implant App</div>
      </div>`;
    }
    html += `</div>`;
  }

  return html;
}

// ── Icons foundation ───────────────────────────────────────
async function buildIconsPage() {
  const meta = JSON.parse(await fs.readFile(path.join(repoRoot, "icons/icons.json"), "utf8"));
  const RAW = "https://raw.githubusercontent.com/12sswosstem/ssw/main/icons/";
  let html = `<h1>Icons</h1>
  <p class="lead">${meta._meta.totalSystemComponentSets}개 system 컴포넌트 셋 (fill + line 모드). 소스: <code>${esc(meta._meta.fileKey)}</code></p>
  <input type="search" id="icon-search" placeholder="아이콘 이름 검색..." class="icon-search" />`;

  for (const [catName, cat] of Object.entries(meta.system)) {
    html += `<h2 class="icon-cat">${esc(catName)}</h2>`;
    for (const [mode, items] of Object.entries(cat)) {
      html += `<h3>${esc(mode)} <small>(${Object.keys(items).length})</small></h3>
      <div class="icon-grid">`;
      for (const [name, item] of Object.entries(items)) {
        html += `<div class="icon-card" data-name="${esc(name)}">
          <div class="icon-frame"><img src="${RAW}${esc(item.path)}" loading="lazy" width="28" height="28" alt="${esc(name)}"></div>
          <div class="icon-name">${esc(name)}</div>
        </div>`;
      }
      html += `</div>`;
    }
  }
  return html;
}

// ── Read MD components ─────────────────────────────────────
const readme = await fs.readFile(path.join(repoRoot, "README.md"), "utf8");
const compDir = path.join(repoRoot, "components");
const compFiles = (await fs.readdir(compDir)).filter(f => f.endsWith(".md") && f !== "README.md");

const docs = {
  __readme: { type: "md", content: readme },
  __color: { type: "html", content: buildColorPage() },
  __number: { type: "md", content: await buildNumberPage() },
  __typography: { type: "html", content: buildTypographyPage() },
  __icons: { type: "html", content: await buildIconsPage() },
};
for (const f of compFiles) {
  const name = f.replace(".md", "");
  docs[name] = { type: "md", content: await fs.readFile(path.join(compDir, f), "utf8") };
}

// ── Sidebar ────────────────────────────────────────────────
function sidebar() {
  let h = `<nav class="sidebar">
    <div class="brand">
      <span class="brand-mark">O</span>
      <span class="brand-name">SSW Design System</span>
    </div>
    <ul class="nav-list">
      <li><a href="#__readme" data-key="__readme">Overview</a></li>

      <li class="cat-head">Foundation</li>
      <li><a href="#__color" data-key="__color">🎨 Color</a></li>
      <li><a href="#__number" data-key="__number">📐 Number</a></li>
      <li><a href="#__typography" data-key="__typography">𝐀 Typography</a></li>
      <li><a href="#__icons" data-key="__icons">✦ Icons</a></li>`;
  for (const [cat, items] of Object.entries(CAT)) {
    h += `<li class="cat-head">${cat}</li>`;
    for (const k of items) if (docs[k]) h += `<li><a href="#${k}" data-key="${k}">${k}</a></li>`;
  }
  h += `</ul></nav>`;
  return h;
}

// ── HTML template ──────────────────────────────────────────
const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SSW Design System — Docs</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js"></script>
  <style>
    :root {
      --bg: #f9f9f9;
      --surface: #ffffff;
      --sidebar-bg: #1d1d1d;
      --sidebar-fg: #dddddd;
      --sidebar-fg-active: #ffffff;
      --sidebar-fg-cat: #8f8f8f;
      --text: #1d1d1d;
      --text-secondary: #565656;
      --text-muted: #8f8f8f;
      --border: #e9e9e9;
      --border-strong: #d2d2d2;
      --code-bg: #f4f4f4;
      --brand: #eb6100;
      --brand-pale: #fef7f2;
      --font: "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
    }
    *,*::before,*::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; height: 100%; }
    body {
      font-family: var(--font); color: var(--text); background: var(--bg);
      -webkit-font-smoothing: antialiased;
      display: grid; grid-template-columns: 260px 1fr; min-height: 100vh;
    }
    .sidebar {
      background: var(--sidebar-bg); color: var(--sidebar-fg);
      padding: 24px 0; position: sticky; top: 0; height: 100vh; overflow-y: auto;
    }
    .brand {
      display: flex; align-items: center; gap: 8px;
      padding: 0 20px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      margin-bottom: 16px;
    }
    .brand-mark {
      width: 28px; height: 28px; border-radius: 6px;
      background: var(--brand); color: #fff;
      font-weight: 700; font-size: 14px;
      display: grid; place-items: center;
    }
    .brand-name { font-size: 14px; font-weight: 600; color: var(--sidebar-fg-active); }
    .nav-list { list-style: none; padding: 0; margin: 0; }
    .nav-list .cat-head {
      padding: 16px 20px 4px;
      font-size: 11px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.06em;
      color: var(--sidebar-fg-cat);
    }
    .nav-list a {
      display: block; padding: 7px 20px;
      color: var(--sidebar-fg); text-decoration: none;
      font-size: 14px; transition: background .12s, color .12s;
    }
    .nav-list a:hover { background: rgba(255,255,255,0.05); color: var(--sidebar-fg-active); }
    .nav-list a.active {
      background: rgba(235,97,0,0.15); color: var(--brand);
      border-left: 3px solid var(--brand); padding-left: 17px;
      font-weight: 600;
    }
    .main { padding: 48px 64px 96px; max-width: 1100px; }
    .doc h1 { font-size: 32px; font-weight: 600; line-height: 40px; margin: 0 0 8px; }
    .doc h2 { font-size: 22px; font-weight: 600; line-height: 30px; margin: 40px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }
    .doc h3 { font-size: 18px; font-weight: 600; margin: 28px 0 10px; }
    .doc h4 { font-size: 16px; font-weight: 600; margin: 20px 0 8px; color: var(--text-secondary); }
    .doc p, .doc li { font-size: 15px; line-height: 24px; color: var(--text); }
    .doc p { margin: 12px 0; }
    .doc p.lead { color: var(--text-secondary); font-size: 16px; }
    .doc ul, .doc ol { padding-left: 22px; }
    .doc li { margin: 4px 0; }
    .doc code { background: var(--code-bg); padding: 2px 6px; border-radius: 4px; font-size: 13px; font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--brand); }
    .doc pre { background: #1d1d1d; color: #e9e9e9; padding: 16px; border-radius: 8px; overflow-x: auto; font-size: 13px; line-height: 20px; }
    .doc pre code { background: transparent; color: inherit; padding: 0; }
    .doc blockquote { margin: 16px 0; padding: 12px 16px; background: var(--brand-pale); border-left: 3px solid var(--brand); border-radius: 0 6px 6px 0; color: var(--text-secondary); font-size: 14px; }
    .doc blockquote p { margin: 4px 0; }
    .doc table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 14px; }
    .doc th, .doc td { border: 1px solid var(--border); padding: 8px 12px; text-align: left; }
    .doc th { background: var(--code-bg); font-weight: 600; }
    .doc tr:nth-child(even) td { background: #fafafa; }
    .doc a { color: var(--brand); text-decoration: none; }
    .doc a:hover { text-decoration: underline; }
    .doc hr { border: 0; border-top: 1px solid var(--border); margin: 32px 0; }

    /* Color swatches */
    .swatch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; margin: 12px 0; }
    .swatch { display: flex; gap: 10px; align-items: center; padding: 8px; border: 1px solid var(--border); border-radius: 6px; background: var(--surface); }
    .swatch-box { width: 48px; height: 48px; border-radius: 6px; flex-shrink: 0; border: 1px solid var(--border); background-image: linear-gradient(45deg, #f4f4f4 25%, transparent 25%, transparent 75%, #f4f4f4 75%), linear-gradient(45deg, #f4f4f4 25%, transparent 25%, transparent 75%, #f4f4f4 75%); background-size: 12px 12px; background-position: 0 0, 6px 6px; }
    .swatch-info { min-width: 0; }
    .swatch-name { font-size: 12px; font-weight: 600; color: var(--text); word-break: break-all; line-height: 1.4; }
    .swatch-value { margin-top: 2px; }
    .swatch-value code { font-size: 11px; padding: 1px 4px; }

    /* Number rulers */
    .num-table { width: 100%; }
    .num-val { font-variant-numeric: tabular-nums; color: var(--text-secondary); width: 80px; }
    .ruler { height: 14px; background: var(--brand); border-radius: 2px; }

    /* Typography */
    .type-grid { display: grid; gap: 12px; margin: 12px 0; }
    .type-card { padding: 16px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; }
    .type-meta { display: flex; gap: 12px; align-items: baseline; margin-bottom: 12px; font-size: 12px; color: var(--text-muted); }
    .type-meta code { color: var(--brand); font-size: 12px; }
    .type-preview { color: var(--text); }

    /* Key list */
    .key-list { display: grid; gap: 4px; margin: 12px 0; }
    .key-row { display: flex; gap: 16px; padding: 6px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 4px; align-items: center; }
    .key-row code { font-size: 12px; min-width: 200px; }
    .key-row span { color: var(--text-secondary); font-size: 13px; }

    /* Icons */
    .icon-search { width: 100%; padding: 10px 14px; border: 1.5px solid #a5a5a5; border-radius: 6px; font-size: 14px; margin: 12px 0; outline: none; font-family: inherit; }
    .icon-search:focus { border-color: var(--brand); }
    .icon-cat { text-transform: capitalize; }
    .icon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 8px; margin: 12px 0; }
    .icon-card { padding: 12px 8px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; text-align: center; transition: border-color .12s; }
    .icon-card:hover { border-color: var(--brand); }
    .icon-card.hidden { display: none; }
    .icon-frame { width: 48px; height: 48px; margin: 0 auto 6px; background: var(--bg); border-radius: 4px; display: grid; place-items: center; }
    .icon-frame img { display: block; }
    .icon-name { font-size: 11px; color: var(--text-secondary); word-break: break-all; line-height: 1.3; }

    @media (max-width: 768px) {
      body { grid-template-columns: 1fr; }
      .sidebar { position: relative; height: auto; }
      .main { padding: 24px; }
    }
  </style>
</head>
<body>
  ${sidebar()}
  <main class="main">
    <article class="doc" id="content"><p class="lead">왼쪽 메뉴에서 항목을 선택하세요.</p></article>
  </main>

  <script id="ssw-docs" type="application/json">${JSON.stringify(docs).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026")}</script>

  <script>
    const docs = JSON.parse(document.getElementById("ssw-docs").textContent);
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".nav-list a");

    function render(key) {
      const d = docs[key];
      if (!d) { content.innerHTML = "<p>문서를 찾을 수 없습니다.</p>"; return; }
      content.innerHTML = d.type === "md" ? marked.parse(d.content) : d.content;
      links.forEach(a => a.classList.toggle("active", a.dataset.key === key));
      window.scrollTo(0, 0);

      // Icon search wiring
      const search = document.getElementById("icon-search");
      if (search) {
        search.addEventListener("input", (e) => {
          const q = e.target.value.toLowerCase();
          document.querySelectorAll(".icon-card").forEach(c => {
            c.classList.toggle("hidden", q && !c.dataset.name.toLowerCase().includes(q));
          });
        });
      }
    }

    function fromHash() {
      const k = location.hash.slice(1);
      render(docs[k] ? k : "__readme");
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  </script>
</body>
</html>
`;

await fs.mkdir(path.dirname(outFile), { recursive: true });
await fs.writeFile(outFile, html);
const size = (await fs.stat(outFile)).size;
console.log(`✓ Wrote ${path.relative(repoRoot, outFile)} (${(size / 1024).toFixed(1)} KB)`);
console.log(`  Foundation: color · number · typography · icons`);
console.log(`  Components: ${compFiles.length}`);
