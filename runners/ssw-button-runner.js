// =============================================================================
// SSW Button — Figma DS Runner (PoC v1)
// =============================================================================
// 출처:
//   - components/button.md (size · style · state · focus ring 토큰 verbatim)
//   - tokens/color/component.js#button (light mode hex)
//   - docs/spec.html#button (매트릭스 레이아웃 1:1 대응)
//
// 실행:
//   1) Figma DS Runner를 연다
//   2) 이 파일 전체를 복사해 코드 입력란에 붙여넣고 실행
//   3) 캔버스에 매트릭스 페이지가 그려진다
//
// Variable 바인딩:
//   - 로컬 Figma 변수 컬렉션에 같은 이름의 토큰이 있으면 자동 바인딩 (fill 우선순위 1)
//   - 없으면 hex fallback (이 파일의 STYLE 객체에 인라인된 값)
//   - 즉 Figma 토큰 변경 → 매트릭스 자동 반영
// =============================================================================

console.log("[SSW Button Runner] start");
figma.notify("SSW Button 매트릭스 시작");

// =============================================================================
// 1. 토큰 (button.md verbatim — Source of Truth와 동기)
// =============================================================================

// size 토큰: components/button.md `Number tokens (Mode 1)` 표 verbatim
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

// focus ring spec: button.md `Focus ring 구조` 표 verbatim
// 갭 폭 = |inset| - weight = 모든 사이즈 일정 2px (button.md 명시)
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

// 9 style × (bg, fg, border) — light mode hex (button.md `Color tokens` light 컬럼 verbatim)
// `null` = transparent (fills/strokes 적용 안 함)
// Figma 변수명은 button.md prefix(`button/*`) 그대로 사용
const STYLE = {
  "brand-primary": {
    isDark: true,
    bg:     { token: "button/bg/brand-primary",     hex: "#eb6100" },
    fg:     { token: "button/fg/brand-primary",     hex: "#f9f9f9" },
    border: { token: "button/border/brand-primary", hex: "#eb6100" },
  },
  "brand-secondary": {
    isDark: false,
    bg:     { token: "button/bg/brand-secondary",     hex: "#ffffff" },
    fg:     { token: "button/fg/brand-secondary",     hex: "#eb6100" },
    border: { token: "button/border/brand-secondary", hex: "#727272" },
  },
  "brand-tertiary": {
    isDark: false,
    bg:     { token: "button/bg/brand-tertiary", hex: "#fbdfcc" },
    fg:     { token: "button/fg/brand-tertiary", hex: "#eb6100" },
    border: null,
  },
  "neutral-primary": {
    isDark: true,
    bg:     { token: "button/bg/neutral-primary",     hex: "#2b2b2b" },
    fg:     { token: "button/fg/neutral-primary",     hex: "#f9f9f9" },
    border: { token: "button/border/neutral-primary", hex: "#2b2b2b" },
  },
  "neutral-secondary": {
    isDark: false,
    bg:     { token: "button/bg/neutral-secondary",     hex: "#ffffff" },
    fg:     { token: "button/fg/neutral-secondary",     hex: "#565656" },
    border: { token: "button/border/neutral-secondary", hex: "#a5a5a5" },
  },
  "neutral-tertiary": {
    isDark: false,
    bg:     { token: "button/bg/neutral-tertiary",     hex: "#e9e9e9" },
    fg:     { token: "button/fg/neutral-tertiary",     hex: "#565656" },
    border: { token: "button/border/neutral-tertiary", hex: "#a5a5a5" },
  },
  "text": {
    isDark: false,
    bg:     null,
    fg:     { token: "button/fg/text", hex: "#606881" },
    border: null,
  },
  // ⚠️ Figma 원본 오타 보존: distructive (destructive 아님)
  "distructive-primary": {
    isDark: true,
    bg:     { token: "button/bg/distructive-primary",     hex: "#f03823" },
    fg:     { token: "button/fg/distructive-primary",     hex: "#f9f9f9" },
    border: { token: "button/border/distructive-primary", hex: "#f03823" },
  },
  "distructive-secondary": {
    isDark: false,
    bg:     null,
    fg:     { token: "button/fg/distructive-secondary",     hex: "#f03823" },
    border: { token: "button/border/distructive-secondary", hex: "#f03823" },
  },
};

const STYLES = Object.keys(STYLE);

// disabled 토큰 풀 교체 (button.md `disabled` row)
const DISABLED = {
  bg:     { token: "button/bg/disabled",     hex: "#dadada" },
  fg:     { token: "button/fg/disabled",     hex: "#a5a5a5" },
  border: { token: "button/border/disabled", hex: "#dadada" },
};

// state overlay (button.md `State overlay 분기`)
//   어두운 base: white 15% / 25%
//   밝은 base:   black 5%  / 10%
const OVERLAY = {
  hover:   { dark: { color: "#ffffff", opacity: 0.15 }, light: { color: "#000000", opacity: 0.05 } },
  pressed: { dark: { color: "#ffffff", opacity: 0.25 }, light: { color: "#000000", opacity: 0.10 } },
};

const FOCUS_RING_COLOR = { token: "button/common/focus-ring", hex: "#000000" };
const PAGE_BG = "#ffffff";
const SUBTLE_TEXT = "#8f8f8f";
const SECTION_TEXT = "#1d1d1d";

// =============================================================================
// 2. Variable 매핑 (find-by-name) + fill 헬퍼
// =============================================================================

let VAR_MAP = {}; // tokenName -> variableId

async function loadVariables() {
  try {
    const all = await figma.variables.getLocalVariablesAsync();
    const byName = {};
    for (const v of all) byName[v.name] = v.id;
    let hits = 0;
    const tokens = collectAllTokens();
    for (const name of tokens) {
      if (byName[name]) { VAR_MAP[name] = byName[name]; hits++; }
    }
    console.log(`✓ Variable 매핑: ${hits}/${tokens.length}`);
  } catch (e) {
    console.warn("loadVariables 실패:", e.message);
  }
}

function collectAllTokens() {
  const set = new Set();
  for (const s of Object.values(STYLE)) {
    if (s.bg) set.add(s.bg.token);
    if (s.fg) set.add(s.fg.token);
    if (s.border) set.add(s.border.token);
  }
  set.add(DISABLED.bg.token);
  set.add(DISABLED.fg.token);
  set.add(DISABLED.border.token);
  set.add(FOCUS_RING_COLOR.token);
  return [...set];
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

// SOLID fill — Variable 바인딩 시도, 실패 시 hex fallback
function solidFromToken(tokenObj, opacity = 1) {
  if (!tokenObj) return null;
  const f = { type: "SOLID", color: hexToRgb(tokenObj.hex), opacity };
  const id = VAR_MAP[tokenObj.token];
  if (id) f.boundVariables = { color: { type: "VARIABLE_ALIAS", id } };
  return f;
}

function solidFromHex(hex, opacity = 1) {
  return { type: "SOLID", color: hexToRgb(hex), opacity };
}

// =============================================================================
// 3. 빌더 헬퍼
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
// 4. Button 빌더 (style + size + state)
// =============================================================================

async function buildButton(styleKey, sizeKey, stateKey, label = "Button") {
  const style = STYLE[styleKey];
  const size = SIZE[sizeKey];

  // disabled state는 STYLE 무시하고 토큰 풀 교체
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

  // bg fill stack: base + (hover/pressed overlay)
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

  // height fixed, width auto-hug from text
  btn.resize(100, size.h); // width는 layoutMode AUTO로 후보정
  btn.primaryAxisSizingMode = "AUTO"; // hug

  // label
  const t = await tx(label, {
    family: "Pretendard",
    weight: "SemiBold",
    fontSize: size.fontSize,
    lineHeight: size.lineHeight,
    fills: fg ? [solidFromToken(fg)] : [solidFromHex(SUBTLE_TEXT)],
  });
  btn.appendChild(t);

  // inactive: opacity 0.4
  if (stateKey === "inactive") btn.opacity = 0.4;

  // focused: 외부 ring을 별도 wrapper로 감싸 반환
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
// 5. 매트릭스 빌더
// =============================================================================

const COL_HEADER_W = 70;
const ROW_LABEL_W = 70;
const CELL_PAD = 8;
// 4xl 기준 셀 너비 — 4xl 'Button' 라벨 자연 너비 + h-pad*2 + 여유
// 4xl: fontSize 32 × ~0.55 × 6char = 106 + hPad 24*2 = 154 → 여유 두고 200
const CELL_W = 220;

async function buildMatrix(styleKey) {
  const style = STYLE[styleKey];

  const section = af(`Matrix · ${styleKey}`, {
    dir: "VERTICAL", gap: 12, p: 0,
    fills: [],
  });

  // section title
  const title = await tx(styleKey, {
    weight: "SemiBold", fontSize: 16, lineHeight: 24,
    fills: [solidFromHex(SECTION_TEXT)],
  });
  section.appendChild(title);

  // col header row: ['', xxs, xs, ..., 4xl]
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

  // 각 state row
  for (const st of STATES) {
    const row = af(`row-${st}`, { dir: "HORIZONTAL", gap: 0, align: "CENTER", fills: [] });

    // row label
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

    // 9 size 셀
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
// 6. 메인
// =============================================================================

async function build() {
  // 폰트 사전 로드
  await Promise.all([
    figma.loadFontAsync({ family: "Pretendard", style: "Regular" }),
    figma.loadFontAsync({ family: "Pretendard", style: "Medium" }),
    figma.loadFontAsync({ family: "Pretendard", style: "SemiBold" }),
  ]);

  await loadVariables();
  figma.notify(`Variable 매핑: ${Object.keys(VAR_MAP).length}/${collectAllTokens().length} 토큰`);

  // page root
  const page = af("SSW Button Matrix", {
    dir: "VERTICAL", gap: 32, p: 40,
    fills: [solidFromHex(PAGE_BG)],
  });

  // page title
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

  // 9 style 매트릭스
  for (const styleKey of STYLES) {
    page.appendChild(await buildMatrix(styleKey));
  }

  // 캔버스 배치
  page.x = figma.viewport.center.x - 800;
  page.y = figma.viewport.center.y - 400;
  figma.currentPage.appendChild(page);
  figma.currentPage.selection = [page];
  figma.viewport.scrollAndZoomIntoView([page]);

  figma.notify("✅ SSW Button 매트릭스 완료 (9×9×6 = 486 buttons)");
  console.log("[SSW Button Runner] done");
}

try { await build(); }
catch (e) {
  console.error("[SSW Button Runner] 실패:", e);
  figma.notify(`❌ 실패: ${e.message}`);
}
