// =============================================================================
// SSW Mobile Login — Figma DS Runner
// =============================================================================
// 출처:
//   - components/input.md (textinput xl_48: h 48, padding 12, radius 6, border 1.5)
//   - components/button.md (button xl: h 48, hPad 12, radius 8, border 1.5, font 18 SB)
//   - tokens/color/semantic.js (common/text, common/bg, common/border, brand/A_default)
//   - tokens/color/component.js (button/bg, button/fg, text input/border)
//   - tokens/typography/font-size.js (body md=16/24, button xl=18/24)
//   - ssw-button-runner.js (DS Runner 패턴 + VAR_CANDIDATES 매핑)
//
// 실행:
//   1) Figma DS Runner 열기
//   2) 이 파일 전체를 복사해 코드 입력란에 붙여넣고 실행
//   3) 캔버스에 360x720 모바일 로그인 화면이 그려짐
//   4) 콘솔에서 매칭 카운트 확인
// =============================================================================

console.log("[SSW Login Mobile Runner] start");
figma.notify("SSW 모바일 로그인 화면 생성 중");

// =============================================================================
// 1. Token 데이터 (input.md / button.md verbatim)
// =============================================================================

// 모바일 표준 (iPhone 13/14 base = 390, 안전한 360 사용)
const SCREEN_W = 360;
const SCREEN_H = 720;

// Container padding — Size/padding/4xl(24)
const CONTENT_PAD_X = 24;
const CONTENT_PAD_TOP = 80;
const CONTENT_PAD_BOTTOM = 32;

// Input — textinput xl_48 (input.md verbatim)
const INPUT = {
  height: 48,
  padding: 12,
  radius: 6,
  border: 1.5,        // xl_48 border
  borderHover: 3,     // textinput/border-hover xl_48
  fontSize: 16,       // body_md size
  lineHeight: 24,     // body_md lineHeight
};

// Button — button xl (button.md verbatim)
const BUTTON = {
  height: 48,
  hPad: 12,
  radius: 8,
  border: 1.5,
  fontSize: 18,       // button_xl
  lineHeight: 24,
};

// =============================================================================
// 2. Color 토큰 (light mode hex + 변수명 후보)
// =============================================================================

// production semantic.js + component.js 출처
const COLOR = {
  // common
  bgBase:           { hex: "#FEFEFE", names: ["common/bg/base", "bg/base"] },
  textPrimary:      { hex: "#1D1D1D", names: ["common/text/primary-active", "text/primary-active"] },
  textSecondary:    { hex: "#565656", names: ["common/text/primary-default", "text/primary-default"] },
  textTertiary:     { hex: "#8F8F8F", names: ["common/text/tertiary-(diabled)", "text/tertiary-(diabled)"] },
  borderDefault:    { hex: "#BCBCBC", names: ["common/border/(default)", "border/(default)"] },
  focusRing:        { hex: "#000000", names: ["common/focus ring", "focus-ring"] },

  // brand
  brandDefault:     { hex: "#EB6100", names: ["brand/brand-A_default"] },
  brandDark:        { hex: "#BC4E00", names: ["brand/brand-A_dark"] },
  brandLight:       { hex: "#F3A066", names: ["brand/brand-A_light"] },
  brandLightest:    { hex: "#FEF7F2", names: ["brand/brand-A_lightest"] },

  // button (brand-primary verbatim)
  btnBg:            { hex: "#EB6100", names: ["button/bg/brand-primary"] },
  btnFg:            { hex: "#F9F9F9", names: ["button/fg/brand-primary"] },
  btnBorder:        { hex: "#EB6100", names: ["button/border/brand-primary"] },

  // text input
  inputBg:          { hex: "#FFFFFF", names: ["text input/bg/default", "input common/bg/default"] },
  inputBorder:      { hex: "#A5A5A5", names: ["text input/border/default", "input common/border/default"] },
  inputBorderHover: { hex: "#EB6100", names: ["text input/border/hover", "input common/border/hover"] },
  inputText:        { hex: "#2B2B2B", names: ["text input/text/default", "input common/text/default"] },
  inputPlaceholder: { hex: "#8F8F8F", names: ["text input/text/placeholder", "input common/text/placeholder"] },
  inputLabel:       { hex: "#565656", names: ["text input/text/label", "input common/text/label"] },
  inputError:       { hex: "#F03823", names: ["text input/etc/error", "input common/etc/error"] },
};

// =============================================================================
// 3. Variable / TextStyle 바인딩
// =============================================================================

const COLOR_VAR_MAP = {};
const TEXT_STYLE_MAP = {};

const allColorVarNames = [];
const allTextStyleNames = [];

async function loadDesignSystem() {
  // 1. Color variables
  const colorVars = await figma.variables.getLocalVariablesAsync("COLOR");
  const colorByName = {};
  for (const v of colorVars) {
    colorByName[v.name] = v;
    allColorVarNames.push(v.name);
  }
  for (const token of Object.values(COLOR)) {
    for (const name of token.names) {
      if (colorByName[name]) {
        COLOR_VAR_MAP[token.names[0]] = colorByName[name];
        break;
      }
    }
  }

  // 2. Text styles — button xl (SB), body md
  const styles = await figma.getLocalTextStylesAsync();
  const styleByName = {};
  for (const s of styles) {
    styleByName[s.name] = s.id;
    allTextStyleNames.push(s.name);
  }
  const styleCandidates = {
    buttonXl:  ["v0.4/button/xl (SB)", "button/xl (SB)", "❤️v0.4/button/xl (SB)"],
    bodyMd:    ["v0.4/body/md", "body/md"],
    bodyMdSB:  ["v0.4/body/md (SB)", "body/md (SB)"],
    bodySm:    ["v0.4/body/sm", "body/sm"],
    bodyXs:    ["v0.4/body/xs (M)", "body/xs (M)"],
    titleSm:   ["v0.4/title/sm", "title/sm"],
    displayXs: ["v0.4/display/xs", "display/xs"],
    displaySm: ["v0.4/display/sm", "display/sm"],
  };
  for (const [key, names] of Object.entries(styleCandidates)) {
    for (const name of names) {
      if (styleByName[name]) { TEXT_STYLE_MAP[key] = styleByName[name]; break; }
    }
  }

  printDiagnostics();
}

function printDiagnostics() {
  const colorTotal = Object.keys(COLOR).length;
  const colorHits = Object.keys(COLOR_VAR_MAP).length;
  const styleTotal = 8;
  const styleHits = Object.keys(TEXT_STYLE_MAP).length;

  console.log(`╔═══ Variable / TextStyle 매칭 결과 ═══════════════════╗`);
  console.log(`║ Color Variable:  ${colorHits}/${colorTotal}`);
  console.log(`║ TextStyle:       ${styleHits}/${styleTotal}`);
  console.log(`╚═════════════════════════════════════════════════════╝`);

  const missing = Object.entries(COLOR).filter(([_, t]) => !COLOR_VAR_MAP[t.names[0]]);
  if (missing.length) {
    console.log(`\n❌ 미매칭 Color (${missing.length}):`);
    for (const [k, t] of missing) console.log(`  · ${k}  → ${t.names[0]}`);
  }

  const inputish = (n) => /input|text input|button|brand|focus|border|bg|text/i.test(n);
  const colorHints = allColorVarNames.filter(inputish).slice(0, 20);
  if (colorHints.length) {
    console.log(`\n💡 로컬 Color 변수 hint (max 20):`);
    for (const n of colorHints) console.log(`  · ${n}`);
  }
  console.log("");
}

// =============================================================================
// 4. fill / bind 헬퍼
// =============================================================================

function hexToRgba(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
    a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
  };
}

function solidFromToken(tokenObj, opacity = 1) {
  if (!tokenObj) return null;
  const c = hexToRgba(tokenObj.hex);
  const f = { type: "SOLID", color: { r: c.r, g: c.g, b: c.b }, opacity: opacity * c.a };
  const v = COLOR_VAR_MAP[tokenObj.names[0]];
  if (v) {
    f.boundVariables = { color: { type: "VARIABLE_ALIAS", id: v.id } };
  }
  return f;
}

function applyTextStyle(textNode, styleKey) {
  const id = TEXT_STYLE_MAP[styleKey];
  if (id) {
    try { textNode.textStyleId = id; return true; } catch (_) {}
  }
  return false;
}

// =============================================================================
// 5. 빌더 헬퍼
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
  if (opts.strokes) {
    f.strokes = opts.strokes;
    f.strokeWeight = opts.strokeWeight ?? 1;
    f.strokeAlign = opts.strokeAlign ?? "INSIDE";
  }
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
  t.fills = opts.fills ?? [solidFromToken(COLOR.textPrimary)];
  if (opts.styleKey) applyTextStyle(t, opts.styleKey);
  return t;
}

// =============================================================================
// 6. Component Instance 헬퍼 (옵션 B 패턴)
// =============================================================================
// 작업 파일에 button / textinput variant set이 있으면 instance를 직접 호출.
// 없으면 native frame fallback. ssw-button-instance-runner.js 패턴.

const COMP_CACHE = {};

async function findComponentSet(namePattern, label) {
  if (COMP_CACHE[label] !== undefined) return COMP_CACHE[label];

  // 1. 같은 파일 전체에서 이름 매칭
  const all = figma.root.findAll(n => n.type === "COMPONENT_SET" && namePattern.test(n.name));
  if (!all.length) {
    console.log(`[${label}] ❌ COMPONENT_SET 미발견 → native fallback`);
    COMP_CACHE[label] = null;
    return null;
  }
  // 정확도 높은 후보 선호 (✅, beta, v0 prefix)
  const preferred = all.find(c => /✅|beta|v0/i.test(c.name)) || all[0];
  console.log(`[${label}] ✅ COMPONENT_SET '${preferred.name}' (variants: ${preferred.children.length})`);
  COMP_CACHE[label] = preferred;
  return preferred;
}

function detectPropKeys(variants) {
  if (!variants.length || !variants[0].variantProperties) return null;
  const keys = Object.keys(variants[0].variantProperties);
  const valuesByKey = {};
  for (const v of variants) {
    if (!v.variantProperties) continue;
    for (const [k, val] of Object.entries(v.variantProperties)) {
      valuesByKey[k] = valuesByKey[k] || new Set();
      valuesByKey[k].add(val);
    }
  }
  const findKey = re => keys.find(k => re.test(k));
  return {
    style: findKey(/style|type|variant(?!t)/i),
    size:  findKey(/size/i),
    state: findKey(/state|status/i),
    layout: findKey(/layout|kind/i),
    keys, valuesByKey,
  };
}

function findVariant(variants, propKeys, target) {
  return variants.find(v => {
    const p = v.variantProperties;
    if (!p) return false;
    for (const [k, val] of Object.entries(target)) {
      const propKey = propKeys[k];
      if (propKey && p[propKey] !== val) return false;
    }
    return true;
  });
}

// instance 안의 첫 TEXT node에 텍스트 주입
function setInstanceText(instance, text) {
  // 1. componentProperties (TEXT 타입 prop) 우선
  if (instance.componentProperties) {
    for (const [k, v] of Object.entries(instance.componentProperties)) {
      if (v.type === "TEXT") {
        try { instance.setProperties({ [k]: text }); return true; } catch (_) {}
      }
    }
  }
  // 2. nested TEXT 노드 직접 변경
  const textNode = instance.findOne(n => n.type === "TEXT");
  if (textNode) {
    figma.loadFontAsync(textNode.fontName).then(() => {
      try { textNode.characters = text; } catch (_) {}
    });
    return true;
  }
  return false;
}

async function tryButtonInstance(parent, labelText) {
  const compSet = await findComponentSet(/button/i, "button");
  if (!compSet) return null;
  const variants = compSet.children.filter(c => c.type === "COMPONENT");
  const propKeys = detectPropKeys(variants);
  if (!propKeys) return null;

  // brand-primary / xl / default 우선, 매칭 실패 시 첫 variant
  const target = {
    style: "brand-primary",
    size: "xl",
    state: "default",
  };
  const v = findVariant(variants, propKeys, target) || variants[0];
  console.log(`[button] variant: ${v.name}`);
  const inst = v.createInstance();
  parent.appendChild(inst);
  inst.layoutSizingHorizontal = "FILL";
  setInstanceText(inst, labelText);
  return inst;
}

async function tryInputInstance(parent, placeholderText) {
  const compSet = await findComponentSet(/textinput|text input|^input$/i, "input");
  if (!compSet) return null;
  const variants = compSet.children.filter(c => c.type === "COMPONENT");
  const propKeys = detectPropKeys(variants);
  if (!propKeys) return null;

  // xl_48 또는 lg_40 / default 우선
  const target = { size: "xl_48", state: "default" };
  let v = findVariant(variants, propKeys, target);
  if (!v) {
    target.size = "lg_40";
    v = findVariant(variants, propKeys, target);
  }
  if (!v) v = variants[0];
  console.log(`[input] variant: ${v.name}`);
  const inst = v.createInstance();
  parent.appendChild(inst);
  inst.layoutSizingHorizontal = "FILL";
  setInstanceText(inst, placeholderText);
  return inst;
}

// =============================================================================
// 7. 컴포넌트 빌더 — Input / Button / Logo / Header (instance-first, fallback to native)
// =============================================================================

async function buildLogo(parent) {
  const logo = af("Logo", {
    dir: "HORIZONTAL", justify: "CENTER", align: "CENTER",
    cornerRadius: 16,
    fills: [solidFromToken(COLOR.brandDefault)],
  });
  logo.resize(64, 64);
  logo.primaryAxisSizingMode = "FIXED";
  logo.counterAxisSizingMode = "FIXED";
  parent.appendChild(logo);

  // 로고 안에 "S" 마크 — Pretendard SemiBold 32
  const mark = await tx("S", {
    weight: "SemiBold",
    fontSize: 32,
    lineHeight: 40,
    fills: [solidFromToken(COLOR.bgBase)],
  });
  logo.appendChild(mark);
  return logo;
}

async function buildHeader(parent) {
  const header = af("Header", {
    dir: "VERTICAL", gap: 16, justify: "MIN", align: "CENTER",
  });
  parent.appendChild(header);
  header.layoutSizingHorizontal = "FILL";
  header.layoutSizingVertical = "HUG";

  await buildLogo(header);

  // Title — display/xs (24/40 SB) 또는 body/lg (SB)
  const titleWrap = af("TitleWrap", { dir: "VERTICAL", gap: 8, align: "CENTER" });
  header.appendChild(titleWrap);
  titleWrap.layoutSizingHorizontal = "FILL";
  titleWrap.layoutSizingVertical = "HUG";

  const title = await tx("로그인", {
    weight: "Bold",
    fontSize: 24,
    lineHeight: 32,
    fills: [solidFromToken(COLOR.textPrimary)],
    styleKey: "displayXs",
  });
  title.textAlignHorizontal = "CENTER";
  titleWrap.appendChild(title);

  const subtitle = await tx("계정 정보를 입력하세요", {
    weight: "Regular",
    fontSize: 14,
    lineHeight: 20,
    fills: [solidFromToken(COLOR.textSecondary)],
    styleKey: "bodySm",
  });
  subtitle.textAlignHorizontal = "CENTER";
  titleWrap.appendChild(subtitle);
}

async function buildField(parent, labelText, placeholderText) {
  const field = af(`Field/${labelText}`, {
    dir: "VERTICAL", gap: 6,
  });
  parent.appendChild(field);
  field.layoutSizingHorizontal = "FILL";
  field.layoutSizingVertical = "HUG";

  // Label (native — input 컴포넌트 외부)
  const label = await tx(labelText, {
    weight: "Medium",
    fontSize: 14,
    lineHeight: 20,
    fills: [solidFromToken(COLOR.inputLabel)],
    styleKey: "bodySm",
  });
  field.appendChild(label);

  // Input — instance 우선, 없으면 native frame
  const inst = await tryInputInstance(field, placeholderText);
  if (inst) return field;

  // Fallback: native textinput xl_48
  const input = af(`Input/${labelText}`, {
    dir: "HORIZONTAL", justify: "MIN", align: "CENTER",
    px: INPUT.padding, py: 0,
    cornerRadius: INPUT.radius,
    fills: [solidFromToken(COLOR.inputBg)],
    strokes: [solidFromToken(COLOR.inputBorder)],
    strokeWeight: INPUT.border,
  });
  field.appendChild(input);
  input.resize(SCREEN_W - CONTENT_PAD_X * 2, INPUT.height);
  input.layoutSizingHorizontal = "FILL";
  input.primaryAxisSizingMode = "FIXED";
  input.counterAxisSizingMode = "FIXED";

  const ph = await tx(placeholderText, {
    weight: "Regular",
    fontSize: INPUT.fontSize,
    lineHeight: INPUT.lineHeight,
    fills: [solidFromToken(COLOR.inputPlaceholder)],
    styleKey: "bodyMd",
  });
  input.appendChild(ph);
  ph.layoutGrow = 1;

  return field;
}

async function buildLoginButton(parent, labelText) {
  // Instance 우선
  const inst = await tryButtonInstance(parent, labelText);
  if (inst) return inst;

  // Fallback: native button xl
  const btn = af("Button/Login", {
    dir: "HORIZONTAL", justify: "CENTER", align: "CENTER",
    px: BUTTON.hPad, py: 0, gap: 4,
    cornerRadius: BUTTON.radius,
    fills: [solidFromToken(COLOR.btnBg)],
    strokes: [solidFromToken(COLOR.btnBorder)],
    strokeWeight: BUTTON.border,
  });
  parent.appendChild(btn);
  btn.resize(SCREEN_W - CONTENT_PAD_X * 2, BUTTON.height);
  btn.layoutSizingHorizontal = "FILL";
  btn.primaryAxisSizingMode = "FIXED";
  btn.counterAxisSizingMode = "FIXED";

  const t = await tx(labelText, {
    weight: "SemiBold",
    fontSize: BUTTON.fontSize,
    lineHeight: BUTTON.lineHeight,
    fills: [solidFromToken(COLOR.btnFg)],
    styleKey: "buttonXl",
  });
  btn.appendChild(t);

  return btn;
}

async function buildLinkRow(parent) {
  const row = af("LinkRow", {
    dir: "HORIZONTAL", gap: 16, justify: "CENTER", align: "CENTER",
  });
  parent.appendChild(row);
  row.layoutSizingHorizontal = "FILL";
  row.layoutSizingVertical = "HUG";

  const findId = await tx("아이디 찾기", {
    weight: "Regular",
    fontSize: 14,
    lineHeight: 20,
    fills: [solidFromToken(COLOR.textSecondary)],
    styleKey: "bodySm",
  });
  row.appendChild(findId);

  // 구분선
  const divider = figma.createRectangle();
  divider.name = "divider";
  divider.resize(1, 12);
  divider.fills = [solidFromToken(COLOR.borderDefault)];
  row.appendChild(divider);

  const findPw = await tx("비밀번호 찾기", {
    weight: "Regular",
    fontSize: 14,
    lineHeight: 20,
    fills: [solidFromToken(COLOR.textSecondary)],
    styleKey: "bodySm",
  });
  row.appendChild(findPw);

  // 구분선 2
  const divider2 = figma.createRectangle();
  divider2.name = "divider";
  divider2.resize(1, 12);
  divider2.fills = [solidFromToken(COLOR.borderDefault)];
  row.appendChild(divider2);

  const signup = await tx("회원가입", {
    weight: "Medium",
    fontSize: 14,
    lineHeight: 20,
    fills: [solidFromToken(COLOR.brandDefault)],
    styleKey: "bodySm",
  });
  row.appendChild(signup);
}

// =============================================================================
// 7. 메인 빌드
// =============================================================================

async function main() {
  await loadDesignSystem();
  await figma.loadFontAsync({ family: "Pretendard", style: "Regular" });
  await figma.loadFontAsync({ family: "Pretendard", style: "Medium" });
  await figma.loadFontAsync({ family: "Pretendard", style: "SemiBold" });
  await figma.loadFontAsync({ family: "Pretendard", style: "Bold" });

  // Mobile screen frame
  const screen = af("Login / Mobile", {
    dir: "VERTICAL",
    pt: CONTENT_PAD_TOP,
    pb: CONTENT_PAD_BOTTOM,
    px: CONTENT_PAD_X,
    gap: 32,
    justify: "MIN",
    align: "CENTER",
    fills: [solidFromToken(COLOR.bgBase)],
  });
  screen.resize(SCREEN_W, SCREEN_H);
  screen.primaryAxisSizingMode = "FIXED";
  screen.counterAxisSizingMode = "FIXED";

  // Position to viewport center
  screen.x = figma.viewport.center.x - SCREEN_W / 2;
  screen.y = figma.viewport.center.y - SCREEN_H / 2;

  // Header (logo + title + subtitle)
  await buildHeader(screen);

  // Form (ID, Password)
  const form = af("Form", { dir: "VERTICAL", gap: 16 });
  screen.appendChild(form);
  form.layoutSizingHorizontal = "FILL";
  form.layoutSizingVertical = "HUG";

  await buildField(form, "아이디", "아이디를 입력하세요");
  await buildField(form, "비밀번호", "비밀번호를 입력하세요");

  // Login button
  const buttonWrap = af("ButtonWrap", { dir: "VERTICAL", gap: 12 });
  screen.appendChild(buttonWrap);
  buttonWrap.layoutSizingHorizontal = "FILL";
  buttonWrap.layoutSizingVertical = "HUG";

  await buildLoginButton(buttonWrap, "로그인");

  // Link row (아이디 찾기 · 비밀번호 찾기 · 회원가입)
  await buildLinkRow(buttonWrap);

  // Spacer flex grow to push content
  // (autolayout justify=MIN이므로 위쪽 정렬 유지)

  // 컴포넌트 인스턴스 매칭 결과 요약
  console.log(`\n╔═══ Component Instance 매칭 결과 ═══════════════════╗`);
  console.log(`║ button: ${COMP_CACHE.button ? "✅ instance 사용" : "❌ native fallback"}`);
  console.log(`║ input:  ${COMP_CACHE.input  ? "✅ instance 사용" : "❌ native fallback"}`);
  console.log(`╚═══════════════════════════════════════════════════╝`);
  if (!COMP_CACHE.button || !COMP_CACHE.input) {
    console.log(`\n💡 instance 매칭 실패 시:\n  1) UI-Kit 파일 또는 button/textinput variant set이 있는 작업 파일에서 실행\n  2) variant set 이름에 'button' / 'textinput' / 'text input' 포함 필요`);
  }

  figma.viewport.scrollAndZoomIntoView([screen]);
  figma.notify("✅ 모바일 로그인 화면 생성 완료");
  console.log("[SSW Login Mobile Runner] done");
}

main().catch((e) => {
  console.error(e);
  figma.notify("❌ 에러: " + e.message);
});
