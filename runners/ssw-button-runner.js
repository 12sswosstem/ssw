// =============================================================================
// SSW Button — Figma DS Runner (PoC v2)
// =============================================================================
// 출처:
//   - components/button.md (size · style · state · focus ring 토큰 verbatim)
//   - tokens/color/component.js#button (light mode hex)
//   - docs/spec.html#button (매트릭스 레이아웃 1:1 대응)
//   - ssw-login-runner.js (이모지 prefix VAR_CANDIDATES 패턴)
//
// v2 변경:
//   - Color variable candidate 확장 (`❤️` 이모지 prefix 포함)
//   - Number variable 바인딩 추가 (radius/padding/border/fontSize/lineHeight/height)
//   - Local textStyle 매칭 (button/* (SB) 시리즈)
//   - 진단 출력: 매칭 안 된 토큰 이름을 console에 표시 → 후속 candidate 보강 가능
//
// 실행:
//   1) Figma DS Runner를 연다
//   2) 이 파일 전체를 복사해 코드 입력란에 붙여넣고 실행
//   3) 캔버스에 매트릭스 페이지가 그려진다
//   4) 콘솔에서 매칭 카운트와 미매칭 토큰 확인
// =============================================================================

console.log("[SSW Button Runner v2] start");
figma.notify("SSW Button 매트릭스 시작");

// =============================================================================
// 1. Token 데이터 (button.md verbatim)
// =============================================================================

const SIZE = {
  xxs:   { h: 20,  hPad: 4,  radius: 4,  border: 1,   fontSize: 12, lineHeight: 16 },
  xs:    { h: 24,  hPad: 6,  radius: 4,  border: 1,   fontSize: 14, lineHeight: 20 },
  sm:    { h: 28,  hPad: 8,  radius: 4,  border: 1,   fontSize: 14, lineHeight: 20 },
  md:    { h: 32,  hPad: 8,  radius: 6,  border: 1,   fontSize: 16, lineHeight: 24 },
  lg:    { h: 40,  hPad: 12, radius: 6,  border: 1,   fontSize: 16, lineHeight: 24 },
  xl:    { h: 48,  hPad: 12, radius: 8,  border: 1.5, fontSize: 18, lineHeight: 24 },
  "2xl": { h: 64,  hPad: 16, radius: 8,  border: 2,   fontSize: 24, lineHeight: 30 },
  "3xl": { h: 80,  hPad: 24, radius: 12, border: 2.5, fontSize: 28, lineHeight: 36 },
  "4xl": { h: 96,  hPad: 24, radius: 14, border: 3,   fontSize: 32, lineHeight: 40 },
};

const SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];
const STATES = ["default", "hover", "pressed", "focused", "inactive", "disabled"];

const FOCUS = {
  xxs:   { weight: 1,   radius: 6  },
  xs:    { weight: 1,   radius: 6  },
  sm:    { weight: 1,   radius: 6  },
  md:    { weight: 1,   radius: 8  },
  lg:    { weight: 1,   radius: 8  },
  xl:    { weight: 1.5, radius: 10 },
  "2xl": { weight: 2,   radius: 10 },
  "3xl": { weight: 2.5, radius: 13 },
  "4xl": { weight: 3,   radius: 14 },
};
const FOCUS_GAP = 2;

// 9 style × (bg, fg, border) — light mode hex + variable name candidates
// candidates는 첫 매칭 사용. login-runner와 같은 prefix 패턴 (`❤️` 이모지 우선).
const STYLE = {
  "brand-primary": {
    isDark: true,
    bg:     { hex: "#eb6100", names: ["❤️button/bg/brand-primary", "button/bg/brand-primary", "common/brand-A_default"] },
    fg:     { hex: "#f9f9f9", names: ["❤️button/fg/brand-primary", "button/fg/brand-primary", "Color(New)/White/50", "Color/Neutral/White/50"] },
    border: { hex: "#eb6100", names: ["❤️button/border/brand-primary", "button/border/brand-primary"] },
  },
  "brand-secondary": {
    isDark: false,
    bg:     { hex: "#ffffff", names: ["❤️button/bg/brand-secondary", "button/bg/brand-secondary", "Color(New)/White/50"] },
    fg:     { hex: "#eb6100", names: ["❤️button/fg/brand-secondary", "button/fg/brand-secondary"] },
    border: { hex: "#727272", names: ["❤️button/border/brand-secondary", "button/border/brand-secondary"] },
  },
  "brand-tertiary": {
    isDark: false,
    bg:     { hex: "#fbdfcc", names: ["❤️button/bg/brand-tertiary", "button/bg/brand-tertiary", "common/brand-A_morelighter"] },
    fg:     { hex: "#eb6100", names: ["❤️button/fg/brand-tertiary", "button/fg/brand-tertiary"] },
    border: null,
  },
  "neutral-primary": {
    isDark: true,
    bg:     { hex: "#2b2b2b", names: ["❤️button/bg/neutral-primary", "button/bg/neutral-primary"] },
    fg:     { hex: "#f9f9f9", names: ["❤️button/fg/neutral-primary", "button/fg/neutral-primary"] },
    border: { hex: "#2b2b2b", names: ["❤️button/border/neutral-primary", "button/border/neutral-primary"] },
  },
  "neutral-secondary": {
    isDark: false,
    bg:     { hex: "#ffffff", names: ["❤️button/bg/neutral-secondary", "button/bg/neutral-secondary", "Color(New)/White/50"] },
    fg:     { hex: "#565656", names: ["❤️button/fg/neutral-secondary", "button/fg/neutral-secondary", "etc/text-secondary"] },
    border: { hex: "#a5a5a5", names: ["❤️button/border/neutral-secondary", "button/border/neutral-secondary"] },
  },
  "neutral-tertiary": {
    isDark: false,
    bg:     { hex: "#e9e9e9", names: ["❤️button/bg/neutral-tertiary", "button/bg/neutral-tertiary"] },
    fg:     { hex: "#565656", names: ["❤️button/fg/neutral-tertiary", "button/fg/neutral-tertiary"] },
    border: { hex: "#a5a5a5", names: ["❤️button/border/neutral-tertiary", "button/border/neutral-tertiary"] },
  },
  "text": {
    isDark: false,
    bg:     null,
    fg:     { hex: "#606881", names: ["❤️button/fg/text", "button/fg/text"] },
    border: null,
  },
  "distructive-primary": {
    isDark: true,
    bg:     { hex: "#f03823", names: ["❤️button/bg/distructive-primary", "button/bg/distructive-primary", "Color(New)/Red/500"] },
    fg:     { hex: "#f9f9f9", names: ["❤️button/fg/distructive-primary", "button/fg/distructive-primary"] },
    border: { hex: "#f03823", names: ["❤️button/border/distructive-primary", "button/border/distructive-primary"] },
  },
  "distructive-secondary": {
    isDark: false,
    bg:     null,
    fg:     { hex: "#f03823", names: ["❤️button/fg/distructive-secondary", "button/fg/distructive-secondary"] },
    border: { hex: "#f03823", names: ["❤️button/border/distructive-secondary", "button/border/distructive-secondary"] },
  },
};
const STYLES = Object.keys(STYLE);

const DISABLED = {
  bg:     { hex: "#dadada", names: ["❤️button/bg/disabled", "button/bg/disabled"] },
  fg:     { hex: "#a5a5a5", names: ["❤️button/fg/disabled", "button/fg/disabled"] },
  border: { hex: "#dadada", names: ["❤️button/border/disabled", "button/border/disabled"] },
};

const OVERLAY = {
  hover:   { dark: { color: "#ffffff", opacity: 0.15 }, light: { color: "#000000", opacity: 0.05 } },
  pressed: { dark: { color: "#ffffff", opacity: 0.25 }, light: { color: "#000000", opacity: 0.10 } },
};

const FOCUS_RING_COLOR = { hex: "#000000", names: ["❤️button/common/focus-ring", "button/common/focus-ring", "common/focus-ring"] };

// Number variable candidates — 사이즈별 토큰 이름 후보
function numVarsForSize(sz) {
  return {
    height:    [`❤️button/size/${sz}`,         `button/size/${sz}`,         `Size/height/button_${sz}`],
    hPad:      [`❤️button/h-padding/${sz}`,    `button/h-padding/${sz}`],
    radius:    [`❤️button/corner-radius/${sz}`,`button/corner-radius/${sz}`],
    border:    [`❤️button/border/${sz}`,       `button/border/${sz}`],
    fontSize:  [`❤️button/font-size/${sz}`,    `button/font-size/${sz}`,    `Typography/font size/button_${sz}`],
    lineHeight:[`❤️button/line-height/${sz}`,  `button/line-height/${sz}`,  `Size/height/button_lh_${sz}`],
  };
}

// TextStyle name candidates — button.md Typography 표 이름
function textStyleNamesForSize(sz) {
  return [
    `❤️button/${sz} (SB)`,
    `button/${sz} (SB)`,
    `❤️v0.4/button/${sz}`,
    `v0.4/button/${sz}`,
  ];
}

const PAGE_BG = "#ffffff";
const SUBTLE_TEXT = "#8f8f8f";
const SECTION_TEXT = "#1d1d1d";

// =============================================================================
// 2. Resolve maps (Variable + textStyle 매칭)
// =============================================================================

const COLOR_VAR_MAP = {};   // tokenObj.names의 첫 매칭 → variable 객체
const NUM_VAR_MAP = {};     // `${sz}/${field}` → variable 객체
const TEXT_STYLE_MAP = {};  // size → textStyle id

let allColorVarNames = [];  // 디버깅용
let allFloatVarNames = [];
let allTextStyleNames = [];

async function loadAll() {
  // 1. Variables
  const vars = await figma.variables.getLocalVariablesAsync();
  const colorByName = {};
  const floatByName = {};
  for (const v of vars) {
    if (v.resolvedType === "COLOR") {
      colorByName[v.name] = v;
      allColorVarNames.push(v.name);
    } else if (v.resolvedType === "FLOAT") {
      floatByName[v.name] = v;
      allFloatVarNames.push(v.name);
    }
  }

  // 2. Color matching: 모든 STYLE.{bg,fg,border} + DISABLED + FOCUS_RING_COLOR
  const colorTokens = collectColorTokens();
  for (const t of colorTokens) {
    for (const name of t.names) {
      if (colorByName[name]) {
        COLOR_VAR_MAP[t.names[0]] = colorByName[name]; // primary key = first name
        break;
      }
    }
  }

  // 3. Number matching: per-size 토큰
  for (const sz of SIZES) {
    const cands = numVarsForSize(sz);
    for (const [field, names] of Object.entries(cands)) {
      for (const name of names) {
        if (floatByName[name]) {
          NUM_VAR_MAP[`${sz}/${field}`] = floatByName[name];
          break;
        }
      }
    }
  }

  // 4. TextStyles
  const styles = await figma.getLocalTextStylesAsync();
  const styleByName = {};
  for (const s of styles) {
    styleByName[s.name] = s.id;
    allTextStyleNames.push(s.name);
  }
  for (const sz of SIZES) {
    for (const name of textStyleNamesForSize(sz)) {
      if (styleByName[name]) { TEXT_STYLE_MAP[sz] = styleByName[name]; break; }
    }
  }

  // 5. 진단 출력
  printDiagnostics(colorTokens);
}

function collectColorTokens() {
  const list = [];
  for (const s of Object.values(STYLE)) {
    if (s.bg) list.push(s.bg);
    if (s.fg) list.push(s.fg);
    if (s.border) list.push(s.border);
  }
  list.push(DISABLED.bg, DISABLED.fg, DISABLED.border, FOCUS_RING_COLOR);
  return list;
}

function printDiagnostics(colorTokens) {
  const colorTotal = colorTokens.length;
  const colorHits = colorTokens.filter(t => COLOR_VAR_MAP[t.names[0]]).length;
  const numTotal = SIZES.length * 6;
  const numHits = Object.keys(NUM_VAR_MAP).length;
  const styleTotal = SIZES.length;
  const styleHits = Object.keys(TEXT_STYLE_MAP).length;

  console.log(`╔═══ Variable / TextStyle 매칭 결과 ═══════════════════╗`);
  console.log(`║ Color Variable:  ${colorHits}/${colorTotal}`);
  console.log(`║ Number Variable: ${numHits}/${numTotal}`);
  console.log(`║ TextStyle:       ${styleHits}/${styleTotal}`);
  console.log(`╚═════════════════════════════════════════════════════╝`);

  // 미매칭 색상 토큰 출력
  const missingColors = colorTokens.filter(t => !COLOR_VAR_MAP[t.names[0]]);
  if (missingColors.length) {
    console.log(`\n❌ 미매칭 Color (${missingColors.length}):`);
    for (const t of missingColors) {
      console.log(`  · ${t.names[0]}  (시도한 후보: ${t.names.length}개)`);
    }
  }

  // 사용 가능한 'button' 또는 'btn' 들어간 변수 이름 노출 (사용자가 추가 candidate 보강 가능)
  const buttonish = (name) => /button|btn|fg|bg|border/i.test(name);
  const colorHints = allColorVarNames.filter(buttonish).slice(0, 30);
  if (colorHints.length) {
    console.log(`\n💡 로컬 Color 변수 중 button-like (max 30):`);
    for (const n of colorHints) console.log(`  · ${n}`);
  }
  const floatHints = allFloatVarNames.filter(n => /button|size|padding|radius|border|font/i.test(n)).slice(0, 30);
  if (floatHints.length) {
    console.log(`\n💡 로컬 Float 변수 중 size-like (max 30):`);
    for (const n of floatHints) console.log(`  · ${n}`);
  }
  const styleHints = allTextStyleNames.filter(n => /button/i.test(n)).slice(0, 30);
  if (styleHints.length) {
    console.log(`\n💡 로컬 TextStyle 중 button 포함 (max 30):`);
    for (const n of styleHints) console.log(`  · ${n}`);
  }
  console.log("");
}

// =============================================================================
// 3. fill / bind 헬퍼
// =============================================================================

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

function solidFromToken(tokenObj, opacity = 1) {
  if (!tokenObj) return null;
  const f = { type: "SOLID", color: hexToRgb(tokenObj.hex), opacity };
  const v = COLOR_VAR_MAP[tokenObj.names[0]];
  if (v) {
    f.boundVariables = { color: { type: "VARIABLE_ALIAS", id: v.id } };
  }
  return f;
}

function solidFromHex(hex, opacity = 1) {
  return { type: "SOLID", color: hexToRgb(hex), opacity };
}

function bindNum(node, field, sz, varKey) {
  const v = NUM_VAR_MAP[`${sz}/${varKey}`];
  if (v) {
    try { node.setBoundVariable(field, v); } catch (_) {}
  }
}

// =============================================================================
// 4. 빌더 헬퍼
// =============================================================================

function af(name, opts = {}) {
  const f = figma.createFrame();
  f.name = name;
  f.layoutMode = opts.dir || "VERTICAL";
  f.itemSpacing = opts.gap ?? 0;
  f.paddingTop    = opts.pt ?? opts.py ?? opts.p ?? 0;
  f.paddingBottom = opts.pb ?? opts.py ?? opts.p ?? 0;
  f.paddingLeft   = opts.pl ?? opts.px ?? opts.p ?? 0;
  f.paddingRight  = opts.pr ?? opts.px ?? opts.p ?? 0;
  f.primaryAxisSizingMode = opts.primary ?? "AUTO";
  f.counterAxisSizingMode = opts.counter ?? "AUTO";
  f.primaryAxisAlignItems = opts.justify ?? "MIN";
  f.counterAxisAlignItems = opts.align   ?? "MIN";
  f.fills = opts.fills ?? [];
  if (opts.cornerRadius != null) f.cornerRadius = opts.cornerRadius;
  return f;
}

async function tx(content, opts = {}) {
  const fontName = { family: opts.family || "Pretendard", style: opts.weight || "Regular" };
  await figma.loadFontAsync(fontName);
  const t = figma.createText();
  t.fontName = fontName;
  t.fontSize = opts.fontSize || 14;
  if (opts.lineHeight) t.lineHeight = { unit: "PIXELS", value: opts.lineHeight };
  if (opts.letterSpacing != null) t.letterSpacing = { unit: "PIXELS", value: opts.letterSpacing };
  t.characters = content;
  t.fills = opts.fills ?? [solidFromHex(SECTION_TEXT)];
  return t;
}

// =============================================================================
// 5. Button 빌더
// =============================================================================

async function buildButton(styleKey, sizeKey, stateKey, label = "Button") {
  const style = STYLE[styleKey];
  const size = SIZE[sizeKey];

  const useDisabled = stateKey === "disabled";
  const bg     = useDisabled ? DISABLED.bg     : style.bg;
  const fg     = useDisabled ? DISABLED.fg     : style.fg;
  const border = useDisabled ? DISABLED.border : style.border;

  // base button frame
  const btn = figma.createFrame();
  btn.name = `Button [${styleKey}/${sizeKey}/${stateKey}]`;
  btn.layoutMode = "HORIZONTAL";
  btn.primaryAxisSizingMode = "AUTO";
  btn.counterAxisSizingMode = "FIXED";
  btn.primaryAxisAlignItems = "CENTER";
  btn.counterAxisAlignItems = "CENTER";
  btn.paddingLeft = size.hPad;
  btn.paddingRight = size.hPad;
  btn.itemSpacing = 4;
  btn.cornerRadius = size.radius;
  btn.resize(100, size.h);

  // bg fill stack
  const fills = [];
  if (bg) fills.push(solidFromToken(bg));
  if (stateKey === "hover" || stateKey === "pressed") {
    const ov = OVERLAY[stateKey][style.isDark ? "dark" : "light"];
    fills.push(solidFromHex(ov.color, ov.opacity));
  }
  btn.fills = fills;

  // border
  if (border) {
    btn.strokes = [solidFromToken(border)];
    btn.strokeWeight = size.border;
    btn.strokeAlign = "INSIDE";
  } else {
    btn.strokes = [];
  }

  // 🔗 Number variable 바인딩 (있을 때만)
  bindNum(btn, "height", sizeKey, "height");
  bindNum(btn, "paddingLeft", sizeKey, "hPad");
  bindNum(btn, "paddingRight", sizeKey, "hPad");
  bindNum(btn, "topLeftRadius", sizeKey, "radius");
  bindNum(btn, "topRightRadius", sizeKey, "radius");
  bindNum(btn, "bottomLeftRadius", sizeKey, "radius");
  bindNum(btn, "bottomRightRadius", sizeKey, "radius");
  if (border) bindNum(btn, "strokeWeight", sizeKey, "border");

  // label
  const t = await tx(label, {
    family: "Pretendard",
    weight: "SemiBold",
    fontSize: size.fontSize,
    lineHeight: size.lineHeight,
    fills: fg ? [solidFromToken(fg)] : [solidFromHex(SUBTLE_TEXT)],
  });
  // 🔗 Text font size / lineHeight variable 바인딩
  bindNum(t, "fontSize", sizeKey, "fontSize");
  bindNum(t, "lineHeight", sizeKey, "lineHeight");
  // 🔗 TextStyle 매칭 시 우선 적용 (font/size/lineHeight 묶음 교체)
  if (TEXT_STYLE_MAP[sizeKey]) {
    try { await t.setTextStyleIdAsync(TEXT_STYLE_MAP[sizeKey]); } catch (_) {}
  }
  btn.appendChild(t);

  if (stateKey === "inactive") btn.opacity = 0.4;

  // focused → 외부 ring wrapper
  if (stateKey === "focused") {
    const ring = FOCUS[sizeKey];
    const wrap = figma.createFrame();
    wrap.name = `Focused Wrap [${styleKey}/${sizeKey}]`;
    wrap.layoutMode = "HORIZONTAL";
    wrap.primaryAxisSizingMode = "AUTO";
    wrap.counterAxisSizingMode = "AUTO";
    wrap.primaryAxisAlignItems = "CENTER";
    wrap.counterAxisAlignItems = "CENTER";
    wrap.paddingLeft = FOCUS_GAP;
    wrap.paddingRight = FOCUS_GAP;
    wrap.paddingTop = FOCUS_GAP;
    wrap.paddingBottom = FOCUS_GAP;
    wrap.itemSpacing = 0;
    wrap.cornerRadius = ring.radius;
    wrap.fills = [];
    wrap.strokes = [solidFromToken(FOCUS_RING_COLOR)];
    wrap.strokeWeight = ring.weight;
    wrap.strokeAlign = "INSIDE";
    wrap.appendChild(btn);
    return wrap;
  }

  return btn;
}

// =============================================================================
// 6. 매트릭스 빌더
// =============================================================================

const ROW_LABEL_W = 70;
const CELL_PAD = 8;
const CELL_W = 220;

async function buildMatrix(styleKey) {
  const section = af(`Matrix · ${styleKey}`, { dir: "VERTICAL", gap: 12, p: 0, fills: [] });

  section.appendChild(await tx(styleKey, {
    weight: "SemiBold", fontSize: 16, lineHeight: 24,
    fills: [solidFromHex(SECTION_TEXT)],
  }));

  // col header
  const colHeader = af("Col Header", { dir: "HORIZONTAL", gap: 0, align: "CENTER", fills: [] });
  const spacer = af("spacer", { dir: "HORIZONTAL", fills: [], primary: "FIXED", counter: "FIXED" });
  spacer.resize(ROW_LABEL_W, 24);
  colHeader.appendChild(spacer);
  for (const sz of SIZES) {
    const cell = af(`hcell-${sz}`, {
      dir: "HORIZONTAL", justify: "CENTER", align: "CENTER",
      primary: "FIXED", counter: "FIXED", fills: [],
    });
    cell.resize(CELL_W, 24);
    cell.appendChild(await tx(sz, {
      weight: "Medium", fontSize: 12, lineHeight: 16,
      fills: [solidFromHex(SUBTLE_TEXT)],
    }));
    colHeader.appendChild(cell);
  }
  section.appendChild(colHeader);

  // state rows
  for (const st of STATES) {
    const row = af(`row-${st}`, { dir: "HORIZONTAL", gap: 0, align: "CENTER", fills: [] });

    const labelCell = af(`rl-${st}`, {
      dir: "HORIZONTAL", align: "CENTER", justify: "MIN",
      primary: "FIXED", counter: "FIXED", fills: [],
    });
    labelCell.resize(ROW_LABEL_W, 110);
    labelCell.appendChild(await tx(st, {
      weight: "Medium", fontSize: 12, lineHeight: 16,
      fills: [solidFromHex(SUBTLE_TEXT)],
    }));
    row.appendChild(labelCell);

    for (const sz of SIZES) {
      const cell = af(`cell-${st}-${sz}`, {
        dir: "HORIZONTAL", justify: "CENTER", align: "CENTER",
        primary: "FIXED", counter: "FIXED",
        p: CELL_PAD, fills: [],
      });
      cell.resize(CELL_W, 110);
      const btn = await buildButton(styleKey, sz, st);
      cell.appendChild(btn);
      row.appendChild(cell);
    }

    section.appendChild(row);
  }

  return section;
}

// =============================================================================
// 7. 메인
// =============================================================================

async function build() {
  await Promise.all([
    figma.loadFontAsync({ family: "Pretendard", style: "Regular" }),
    figma.loadFontAsync({ family: "Pretendard", style: "Medium" }),
    figma.loadFontAsync({ family: "Pretendard", style: "SemiBold" }),
  ]);

  await loadAll();
  const colorHits = Object.keys(COLOR_VAR_MAP).length;
  const numHits = Object.keys(NUM_VAR_MAP).length;
  const styleHits = Object.keys(TEXT_STYLE_MAP).length;
  figma.notify(`바인딩: Color ${colorHits} · Number ${numHits} · TextStyle ${styleHits}`);

  const page = af("SSW Button Matrix", {
    dir: "VERTICAL", gap: 32, p: 40,
    fills: [solidFromHex(PAGE_BG)],
  });

  const head = af("Page Header", { dir: "VERTICAL", gap: 4, fills: [] });
  head.appendChild(await tx("버튼 (Button)", {
    weight: "SemiBold", fontSize: 24, lineHeight: 32,
    fills: [solidFromHex(SECTION_TEXT)],
  }));
  head.appendChild(await tx("9 style × 6 state × 9 size = 486 variants  ·  button_beta_v0.22_test", {
    weight: "Regular", fontSize: 12, lineHeight: 16,
    fills: [solidFromHex(SUBTLE_TEXT)],
  }));
  page.appendChild(head);

  for (const styleKey of STYLES) {
    page.appendChild(await buildMatrix(styleKey));
  }

  page.x = figma.viewport.center.x - 800;
  page.y = figma.viewport.center.y - 400;
  figma.currentPage.appendChild(page);
  figma.currentPage.selection = [page];
  figma.viewport.scrollAndZoomIntoView([page]);

  figma.notify("✅ 매트릭스 완료. 콘솔 진단 출력 확인");
  console.log("[SSW Button Runner v2] done");
}

try { await build(); }
catch (e) {
  console.error("[SSW Button Runner v2] 실패:", e);
  figma.notify(`❌ 실패: ${e.message}`);
}
