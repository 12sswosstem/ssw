// =============================================================================
// SSW Mobile Login — Connected v2 (컴포넌트 instance + 변수 + 텍스트 스타일)
// =============================================================================
// v1 대비 변경점:
//   1. button / input을 Figma 컴포넌트 set의 createInstance()로 생성 시도
//      → 실패 시 createFrame() fallback (현재 파일에 컴포넌트 없는 경우)
//   2. 색상 변수 매칭에 hyphen / underscore / space variant 모두 시도
//      + keyword fuzzy fallback (이름 형식이 달라도 매칭)
//   3. 미매칭 토큰의 hint (관련 키워드 포함된 로컬 변수명) 출력
//
// 컴포넌트 ID (button.md / input.md verbatim):
//   - button variant set: 7046:148536 (사용자 작업 파일 ↪️ Button (TEST⚠️))
//   - input wrapper:      2420:29885  (Textinput/Text Field)
//
// hang 방지:
//   - figma.getNodeByIdAsync (traversal 없음)
//   - 모든 async에 timeout
//   - findAll은 instance subtree 한정 (작은 범위)
// =============================================================================

console.log("[Login Connected v2] start");
figma.notify("로그인 화면 (DS 연결) 생성 중");

// ===== Token 정의 (hex + 이름 후보 + 키워드 for fuzzy) =====
const T = {
  bg:        { hex: { r: 1, g: 1, b: 1 },                names: ["common/bg/base", "bg/base"], keywords: ["bg", "base"] },
  textHi:    { hex: { r: 0.1137, g: 0.1137, b: 0.1137 }, names: ["common/text/primary_active", "common/text/primary-active", "text/primary_active", "text/primary-active"], keywords: ["text", "primary", "active"] },
  textMid:   { hex: { r: 0.3373, g: 0.3373, b: 0.3373 }, names: ["common/text/primary_default", "common/text/primary-default", "text/primary_default", "text/primary-default"], keywords: ["text", "primary", "default"] },
  textLow:   { hex: { r: 0.5608, g: 0.5608, b: 0.5608 }, names: ["common/text/tertiary_(diabled)", "common/text/tertiary-(diabled)", "text/tertiary"], keywords: ["text", "tertiary"] },
  border:    { hex: { r: 0.7373, g: 0.7373, b: 0.7373 }, names: ["common/border/(default)", "border/(default)"], keywords: ["common", "border", "default"] },
  inputBg:   { hex: { r: 1, g: 1, b: 1 },                names: ["text input/bg/default", "input common/bg/default"], keywords: ["input", "bg", "default"] },
  inputBd:   { hex: { r: 0.6471, g: 0.6471, b: 0.6471 }, names: ["text input/border/default", "input common/border/default"], keywords: ["input", "border", "default"] },
  inputLabel:{ hex: { r: 0.3373, g: 0.3373, b: 0.3373 }, names: ["text input/text/label", "input common/text/label"], keywords: ["input", "text", "label"] },
  inputPh:   { hex: { r: 0.5608, g: 0.5608, b: 0.5608 }, names: ["text input/text/placeholder", "input common/text/placeholder"], keywords: ["input", "text", "placeholder"] },
  brand:     { hex: { r: 0.9216, g: 0.3804, b: 0 },      names: ["brand/brand-A_default", "brand/brand-a_default"], keywords: ["brand", "default"] },
  btnBg:     { hex: { r: 0.9216, g: 0.3804, b: 0 },      names: ["button/bg/brand-primary"], keywords: ["button", "bg", "brand", "primary"] },
  btnFg:     { hex: { r: 0.9765, g: 0.9765, b: 0.9765 }, names: ["button/fg/brand-primary"], keywords: ["button", "fg", "brand", "primary"] },
};

// ===== 컴포넌트 set ID 후보 (button.md / input.md 의 verbatim ID) =====
const CMP_IDS = {
  button:       ["7046:148536"],   // ↪️ Button (TEST⚠️) variant set
  inputWrapper: ["2420:29885"],    // Textinput/Text Field
};

// ===== 캐시 =====
const COLOR_VARS = {};
const TEXT_STYLES = {};
const STYLE_FONTS = new Set();
let MATCH_COUNTS = { colorTotal: 0, colorHits: 0, colorFuzzy: 0, styleTotal: 0, styleHits: 0, components: 0 };

// ===== 헬퍼 =====
function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`${label} timeout (${ms}ms)`)), ms)),
  ]);
}

async function getCompSet(ids) {
  for (const id of ids) {
    try {
      const node = await withTimeout(figma.getNodeByIdAsync(id), 2000, `getNode ${id}`);
      if (node && (node.type === "COMPONENT_SET" || node.type === "COMPONENT")) return node;
    } catch (_) {}
  }
  return null;
}

// ===== 디자인시스템 로드 =====
async function loadDesignSystem() {
  // ===== Color variables =====
  try {
    console.log("  [DS] color variables 로드 중...");
    const cvars = await withTimeout(figma.variables.getLocalVariablesAsync("COLOR"), 5000, "color variables");
    console.log(`  [DS] color variables: ${cvars.length}개`);
    for (const v of cvars) COLOR_VARS[v.name] = v;

    // (1) exact 이름 매칭
    for (const [_, token] of Object.entries(T)) {
      MATCH_COUNTS.colorTotal++;
      for (const name of token.names) {
        if (COLOR_VARS[name]) {
          token.var = COLOR_VARS[name];
          token.matchedBy = name;
          MATCH_COUNTS.colorHits++;
          break;
        }
      }
    }

    // (2) fuzzy keyword 매칭 (모든 키워드가 변수명에 포함되면 매칭)
    for (const [_, token] of Object.entries(T)) {
      if (token.var || !token.keywords) continue;
      for (const [name, v] of Object.entries(COLOR_VARS)) {
        const lname = name.toLowerCase();
        if (token.keywords.every(k => lname.includes(k.toLowerCase()))) {
          token.var = v;
          token.matchedBy = `fuzzy:${name}`;
          MATCH_COUNTS.colorHits++;
          MATCH_COUNTS.colorFuzzy++;
          break;
        }
      }
    }
  } catch (e) {
    console.log(`  [DS] color variables 실패: ${e.message} → hex fallback`);
  }

  // ===== Text styles =====
  try {
    console.log("  [DS] text styles 로드 중...");
    const styles = await withTimeout(figma.getLocalTextStylesAsync(), 5000, "text styles");
    console.log(`  [DS] text styles: ${styles.length}개`);
    for (const s of styles) TEXT_STYLES[s.name] = s.id;
    const styleSlots = {
      title:    ["v0.4/display/xs", "display/xs", "v0.4/display/sm", "display/sm"],
      subtitle: ["v0.4/body/sm", "body/sm"],
      label:    ["v0.4/body/sm (M)", "body/sm (M)", "v0.4/body/sm", "body/sm"],
      input:    ["v0.4/body/md", "body/md"],
      button:   ["v0.4/button/xl (SB)", "button/xl (SB)"],
      link:     ["v0.4/body/sm", "body/sm"],
    };
    for (const [slot, names] of Object.entries(styleSlots)) {
      MATCH_COUNTS.styleTotal++;
      for (const name of names) {
        if (TEXT_STYLES[name]) {
          TEXT_STYLES[`__slot__${slot}`] = TEXT_STYLES[name];
          const style = styles.find(s => s.name === name);
          if (style && style.fontName && typeof style.fontName === "object") {
            STYLE_FONTS.add(JSON.stringify(style.fontName));
          }
          MATCH_COUNTS.styleHits++;
          break;
        }
      }
    }
  } catch (e) {
    console.log(`  [DS] text styles 실패: ${e.message}`);
  }

  // textStyle 폰트 prefetch
  if (STYLE_FONTS.size > 0) {
    const fonts = Array.from(STYLE_FONTS).map(s => JSON.parse(s));
    console.log(`  [DS] textStyle 폰트 ${fonts.length}종 로드 중`);
    try {
      await Promise.all(fonts.map(f =>
        withTimeout(figma.loadFontAsync(f), 3000, `font ${f.family} ${f.style}`)
      ));
      console.log(`  [DS] textStyle 폰트 로드 완료`);
    } catch (e) {
      console.log(`  [DS] textStyle 폰트 로드 실패: ${e.message} → textStyle 적용 스킵`);
      for (const k of Object.keys(TEXT_STYLES)) {
        if (k.startsWith("__slot__")) delete TEXT_STYLES[k];
      }
      MATCH_COUNTS.styleHits = 0;
    }
  }
}

// ===== fill / text 헬퍼 =====
function fill(token) {
  const f = { type: "SOLID", color: token.hex };
  if (token.var) {
    f.boundVariables = { color: { type: "VARIABLE_ALIAS", id: token.var.id } };
  }
  return [f];
}

function applyStyle(textNode, slot) {
  const id = TEXT_STYLES[`__slot__${slot}`];
  if (id) {
    try { textNode.textStyleId = id; return true; } catch (_) {}
  }
  return false;
}

function createText(content, size, weight, token, styleSlot) {
  const t = figma.createText();
  t.fontName = { family: "Inter", style: weight };
  t.fontSize = size;
  t.characters = content;
  t.fills = fill(token);
  if (styleSlot) applyStyle(t, styleSlot);
  return t;
}

function createAutoFrame(name, dir, gap) {
  const f = figma.createFrame();
  f.name = name;
  f.layoutMode = dir;
  f.itemSpacing = gap;
  f.fills = [];
  f.primaryAxisSizingMode = "AUTO";
  f.counterAxisSizingMode = "AUTO";
  f.primaryAxisAlignItems = "MIN";
  f.counterAxisAlignItems = "MIN";
  return f;
}

function createDivider() {
  const r = figma.createRectangle();
  r.resize(1, 12);
  r.fills = fill(T.border);
  r.name = "divider";
  return r;
}

// ===== 컴포넌트 instance 시도 =====
async function tryButtonInstance(label) {
  const set = await getCompSet(CMP_IDS.button);
  if (!set) return null;
  let inst;
  try {
    inst = (set.type === "COMPONENT_SET") ? set.defaultVariant.createInstance() : set.createInstance();
  } catch (e) {
    console.log(`  [button] createInstance 실패: ${e.message}`);
    return null;
  }
  // setProperties (button.md verbatim — 매칭 안 되는 prop은 무시되지만 throw 가능)
  try {
    inst.setProperties({
      style: "brand-primary",
      state: "default",
      size: "xl_48",
      layout: "icon labeled",
      type: "hug",
    });
  } catch (e) {
    console.log(`  [button] setProperties 실패: ${e.message}`);
  }
  // 라벨 텍스트 override (instance subtree만 — 작고 안전)
  try {
    const txtNodes = inst.findAll(n => n.type === "TEXT");
    if (txtNodes.length > 0) {
      const font = txtNodes[0].fontName;
      if (font && typeof font === "object") {
        try { await withTimeout(figma.loadFontAsync(font), 2000, "btn font"); } catch (_) {}
      }
      try { txtNodes[0].characters = label; } catch (_) {}
    }
  } catch (_) {}
  MATCH_COUNTS.components++;
  return inst;
}

async function tryInputInstance(labelText, placeholderText) {
  const set = await getCompSet(CMP_IDS.inputWrapper);
  if (!set) return null;
  let inst;
  try {
    inst = (set.type === "COMPONENT_SET") ? set.defaultVariant.createInstance() : set.createInstance();
  } catch (e) {
    console.log(`  [input] createInstance 실패: ${e.message}`);
    return null;
  }
  // 텍스트 override (subtree만)
  try {
    const txtNodes = inst.findAll(n => n.type === "TEXT");
    // 폰트 미리 로드
    const fonts = new Set();
    for (const t of txtNodes) {
      if (t.fontName && typeof t.fontName === "object") fonts.add(JSON.stringify(t.fontName));
    }
    for (const fs of fonts) {
      try { await withTimeout(figma.loadFontAsync(JSON.parse(fs)), 2000, "input font"); } catch (_) {}
    }
    // 휴리스틱: 첫 텍스트=라벨, 두 번째=placeholder
    if (txtNodes[0]) try { txtNodes[0].characters = labelText; } catch (_) {}
    if (txtNodes[1]) try { txtNodes[1].characters = placeholderText; } catch (_) {}
  } catch (_) {}
  MATCH_COUNTS.components++;
  return inst;
}

// ===== fallback frame builders =====
function buildButtonFrame(label) {
  const btn = figma.createFrame();
  btn.name = "Button/Login (frame fallback)";
  btn.resize(312, 48);
  btn.cornerRadius = 8;
  btn.fills = fill(T.btnBg);
  btn.layoutMode = "HORIZONTAL";
  btn.paddingLeft = 12;
  btn.paddingRight = 12;
  btn.primaryAxisAlignItems = "CENTER";
  btn.counterAxisAlignItems = "CENTER";
  btn.appendChild(createText(label, 18, "Semi Bold", T.btnFg, "button"));
  return btn;
}

function buildInputFrame(labelText, placeholderText) {
  const field = createAutoFrame(`Field/${labelText} (frame fallback)`, "VERTICAL", 6);
  field.appendChild(createText(labelText, 14, "Medium", T.inputLabel, "label"));

  const input = figma.createFrame();
  input.name = `Input/${labelText}`;
  input.resize(312, 48);
  input.cornerRadius = 6;
  input.fills = fill(T.inputBg);
  if (T.inputBd.var) {
    try {
      input.strokes = [{
        type: "SOLID",
        color: T.inputBd.hex,
        boundVariables: { color: { type: "VARIABLE_ALIAS", id: T.inputBd.var.id } },
      }];
    } catch (_) {}
  } else {
    input.strokes = [{ type: "SOLID", color: T.inputBd.hex }];
  }
  input.strokeWeight = 1.5;
  input.strokeAlign = "INSIDE";
  input.layoutMode = "HORIZONTAL";
  input.paddingLeft = 12;
  input.paddingRight = 12;
  input.primaryAxisAlignItems = "MIN";
  input.counterAxisAlignItems = "CENTER";
  field.appendChild(input);

  input.appendChild(createText(placeholderText, 16, "Regular", T.inputPh, "input"));
  return field;
}

// ===== 메인 =====
async function main() {
  console.log("[1/8] 디자인시스템 로드");
  await loadDesignSystem();

  console.log("[2/8] Inter 폰트 로드");
  await Promise.all([
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Regular" }),  3000, "Inter Regular"),
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Medium" }),   3000, "Inter Medium"),
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Semi Bold" }),3000, "Inter Semi Bold"),
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Bold" }),     3000, "Inter Bold"),
  ]).catch(e => console.log(`  [font] 실패: ${e.message}`));

  console.log("[3/8] Screen frame");
  const screen = figma.createFrame();
  screen.name = "Login / Mobile";
  screen.resize(360, 720);
  screen.fills = fill(T.bg);
  screen.layoutMode = "VERTICAL";
  screen.paddingTop = 80;
  screen.paddingBottom = 32;
  screen.paddingLeft = 24;
  screen.paddingRight = 24;
  screen.itemSpacing = 32;
  screen.primaryAxisSizingMode = "FIXED";
  screen.counterAxisSizingMode = "FIXED";
  screen.primaryAxisAlignItems = "MIN";
  screen.counterAxisAlignItems = "CENTER";
  screen.x = figma.viewport.center.x - 180;
  screen.y = figma.viewport.center.y - 360;

  console.log("[4/8] Header");
  const header = createAutoFrame("Header", "VERTICAL", 16);
  header.counterAxisAlignItems = "CENTER";
  screen.appendChild(header);
  header.layoutSizingHorizontal = "FILL";
  header.layoutSizingVertical = "HUG";

  const logo = figma.createFrame();
  logo.name = "Logo";
  logo.resize(64, 64);
  logo.cornerRadius = 16;
  logo.fills = fill(T.brand);
  logo.layoutMode = "HORIZONTAL";
  logo.primaryAxisAlignItems = "CENTER";
  logo.counterAxisAlignItems = "CENTER";
  header.appendChild(logo);
  logo.appendChild(createText("S", 32, "Bold", T.btnFg));

  const titleWrap = createAutoFrame("TitleWrap", "VERTICAL", 8);
  titleWrap.counterAxisAlignItems = "CENTER";
  header.appendChild(titleWrap);
  titleWrap.layoutSizingHorizontal = "FILL";
  titleWrap.layoutSizingVertical = "HUG";

  const title = createText("로그인", 24, "Bold", T.textHi, "title");
  title.textAlignHorizontal = "CENTER";
  titleWrap.appendChild(title);

  const subtitle = createText("계정 정보를 입력하세요", 14, "Regular", T.textMid, "subtitle");
  subtitle.textAlignHorizontal = "CENTER";
  titleWrap.appendChild(subtitle);

  console.log("[5/8] Form (input 컴포넌트 instance 시도)");
  const form = createAutoFrame("Form", "VERTICAL", 16);
  screen.appendChild(form);
  form.layoutSizingHorizontal = "FILL";
  form.layoutSizingVertical = "HUG";

  for (const [label, placeholder] of [["아이디", "아이디를 입력하세요"], ["비밀번호", "비밀번호를 입력하세요"]]) {
    const inst = await tryInputInstance(label, placeholder);
    if (inst) {
      form.appendChild(inst);
      try { inst.layoutSizingHorizontal = "FILL"; } catch (_) {}
      console.log(`  [input] ${label} — instance 사용`);
    } else {
      const fallback = buildInputFrame(label, placeholder);
      form.appendChild(fallback);
      fallback.layoutSizingHorizontal = "FILL";
      fallback.layoutSizingVertical = "HUG";
      console.log(`  [input] ${label} — frame fallback`);
    }
  }

  console.log("[6/8] Login Button (instance 시도)");
  const btnWrap = createAutoFrame("ButtonWrap", "VERTICAL", 12);
  screen.appendChild(btnWrap);
  btnWrap.layoutSizingHorizontal = "FILL";
  btnWrap.layoutSizingVertical = "HUG";

  const btnInst = await tryButtonInstance("로그인");
  if (btnInst) {
    btnWrap.appendChild(btnInst);
    try { btnInst.layoutSizingHorizontal = "FILL"; } catch (_) {}
    console.log("  [button] instance 사용");
  } else {
    const btn = buildButtonFrame("로그인");
    btnWrap.appendChild(btn);
    btn.layoutSizingHorizontal = "FILL";
    console.log("  [button] frame fallback");
  }

  console.log("[7/8] Link Row");
  const links = createAutoFrame("Links", "HORIZONTAL", 16);
  links.primaryAxisAlignItems = "CENTER";
  links.counterAxisAlignItems = "CENTER";
  btnWrap.appendChild(links);
  links.layoutSizingHorizontal = "FILL";
  links.layoutSizingVertical = "HUG";

  links.appendChild(createText("아이디 찾기", 14, "Regular", T.textMid, "link"));
  links.appendChild(createDivider());
  links.appendChild(createText("비밀번호 찾기", 14, "Regular", T.textMid, "link"));
  links.appendChild(createDivider());
  links.appendChild(createText("회원가입", 14, "Medium", T.brand, "link"));

  // ===== 진단 =====
  console.log("[8/8] 진단");
  console.log(`\n╔═══ 디자인시스템 매칭 결과 ═══╗`);
  console.log(`║ Color Variable: ${MATCH_COUNTS.colorHits}/${MATCH_COUNTS.colorTotal} (fuzzy ${MATCH_COUNTS.colorFuzzy})`);
  console.log(`║ Text Style:     ${MATCH_COUNTS.styleHits}/${MATCH_COUNTS.styleTotal}`);
  console.log(`║ Component:      ${MATCH_COUNTS.components}/3 (button + input×2)`);
  console.log(`╚═══════════════════════════╝`);

  console.log(`\n📋 토큰별 매칭:`);
  for (const [k, t] of Object.entries(T)) {
    console.log(`  ${t.var ? "✅" : "❌"} ${k.padEnd(12)} → ${t.matchedBy || `미매칭 (시도: ${t.names.join(", ")})`}`);
  }

  // 미매칭 토큰 hint
  const missing = Object.entries(T).filter(([_, t]) => !t.var);
  if (missing.length > 0 && Object.keys(COLOR_VARS).length > 0) {
    console.log(`\n💡 미매칭 토큰 hint (관련 키워드 포함된 로컬 변수):`);
    for (const [k, t] of missing) {
      const hints = Object.keys(COLOR_VARS).filter(name => {
        const lname = name.toLowerCase();
        return t.keywords && t.keywords.some(kw => lname.includes(kw.toLowerCase()));
      }).slice(0, 5);
      if (hints.length > 0) {
        console.log(`  ${k}:`);
        for (const h of hints) console.log(`    · ${h}`);
      }
    }
  }

  figma.viewport.scrollAndZoomIntoView([screen]);
  figma.notify(`✅ 완료 — Var ${MATCH_COUNTS.colorHits}/${MATCH_COUNTS.colorTotal}, Style ${MATCH_COUNTS.styleHits}/${MATCH_COUNTS.styleTotal}, Cmp ${MATCH_COUNTS.components}/3`);
  console.log("[Login Connected v2] done");
}

main().catch((e) => {
  console.error(e);
  figma.notify("에러: " + e.message);
});
