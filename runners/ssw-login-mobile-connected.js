// =============================================================================
// SSW Mobile Login — Connected (디자인시스템 변수 + 텍스트 스타일 자동 바인딩)
// =============================================================================
// minimal 버전 + 변수/스타일 매칭. 모든 async 호출에 5초 timeout으로 hang 차단.
//
// 동작:
//   1. Figma 로컬 Color variable 검색 (5초 timeout)
//   2. 토큰 이름 매칭 시 fill에 boundVariables 추가 → Figma에서 변수 값
//      변경 시 자동 반영 (= 디자인시스템과 연결)
//   3. 텍스트 스타일도 동일하게 매칭
//   4. 매칭 실패한 항목은 hex fallback (시각적으로 동일)
//   5. 콘솔에 매칭 카운트 출력
//
// 토큰 출처 (token name → variable name):
//   - tokens/color/component.js — button/bg/brand-primary, text input/border/default 등
//   - tokens/color/semantic.js  — common/text/primary-active, brand/brand-A_default 등
// =============================================================================

console.log("[Login Connected] start");
figma.notify("로그인 화면 (DS 연결) 생성 중");

// ===== Token 정의 (hex fallback + variable name 후보) =====
const T = {
  bg:        { hex: { r: 1, g: 1, b: 1 },                     names: ["common/bg/base", "bg/base"] },
  textHi:    { hex: { r: 0.1137, g: 0.1137, b: 0.1137 },      names: ["common/text/primary-active", "text/primary-active"] },
  textMid:   { hex: { r: 0.3373, g: 0.3373, b: 0.3373 },      names: ["common/text/primary-default", "text/primary-default"] },
  textLow:   { hex: { r: 0.5608, g: 0.5608, b: 0.5608 },      names: ["common/text/tertiary-(diabled)", "text/tertiary-(diabled)"] },
  border:    { hex: { r: 0.7373, g: 0.7373, b: 0.7373 },      names: ["common/border/(default)", "border/(default)"] },
  inputBg:   { hex: { r: 1, g: 1, b: 1 },                     names: ["text input/bg/default", "input common/bg/default"] },
  inputBd:   { hex: { r: 0.6471, g: 0.6471, b: 0.6471 },      names: ["text input/border/default", "input common/border/default"] },
  inputLabel:{ hex: { r: 0.3373, g: 0.3373, b: 0.3373 },      names: ["text input/text/label", "input common/text/label"] },
  inputPh:   { hex: { r: 0.5608, g: 0.5608, b: 0.5608 },      names: ["text input/text/placeholder", "input common/text/placeholder"] },
  brand:     { hex: { r: 0.9216, g: 0.3804, b: 0 },           names: ["brand/brand-A_default"] },
  btnBg:     { hex: { r: 0.9216, g: 0.3804, b: 0 },           names: ["button/bg/brand-primary"] },
  btnFg:     { hex: { r: 0.9765, g: 0.9765, b: 0.9765 },      names: ["button/fg/brand-primary"] },
};

// ===== 변수 / 텍스트 스타일 캐시 =====
const COLOR_VARS = {};
const TEXT_STYLES = {};
let MATCH_COUNTS = { colorTotal: 0, colorHits: 0, styleTotal: 0, styleHits: 0 };

// ===== timeout 헬퍼 =====
function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`${label} timeout (${ms}ms)`)), ms)),
  ]);
}

// ===== 로컬 변수 / 스타일 로드 (timeout 보호) =====
async function loadDesignSystem() {
  // Color variables (5초 timeout)
  try {
    console.log("  [DS] color variables 로드 중...");
    const cvars = await withTimeout(
      figma.variables.getLocalVariablesAsync("COLOR"),
      5000,
      "color variables"
    );
    console.log(`  [DS] color variables: ${cvars.length}개`);
    for (const v of cvars) COLOR_VARS[v.name] = v;
    // 토큰 이름 매칭
    for (const token of Object.values(T)) {
      MATCH_COUNTS.colorTotal++;
      for (const name of token.names) {
        if (COLOR_VARS[name]) {
          token.var = COLOR_VARS[name];
          MATCH_COUNTS.colorHits++;
          break;
        }
      }
    }
  } catch (e) {
    console.log(`  [DS] color variables 실패: ${e.message} → hex fallback`);
  }

  // Text styles (5초 timeout)
  try {
    console.log("  [DS] text styles 로드 중...");
    const styles = await withTimeout(figma.getLocalTextStylesAsync(), 5000, "text styles");
    console.log(`  [DS] text styles: ${styles.length}개`);
    for (const s of styles) TEXT_STYLES[s.name] = s.id;
    // 사용할 스타일 이름 후보들
    const styleSlots = {
      title:   ["v0.4/display/xs", "display/xs", "v0.4/display/sm", "display/sm"],
      subtitle:["v0.4/body/sm", "body/sm"],
      label:   ["v0.4/body/sm (M)", "body/sm (M)", "v0.4/body/sm", "body/sm"],
      input:   ["v0.4/body/md", "body/md"],
      button:  ["v0.4/button/xl (SB)", "button/xl (SB)"],
      link:    ["v0.4/body/sm", "body/sm"],
    };
    for (const [slot, names] of Object.entries(styleSlots)) {
      MATCH_COUNTS.styleTotal++;
      for (const name of names) {
        if (TEXT_STYLES[name]) {
          TEXT_STYLES[`__slot__${slot}`] = TEXT_STYLES[name];
          MATCH_COUNTS.styleHits++;
          break;
        }
      }
    }
  } catch (e) {
    console.log(`  [DS] text styles 실패: ${e.message} → 기본 폰트 fallback`);
  }
}

// ===== fill / text 헬퍼 (변수 바인딩 자동) =====
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

// ===== 메인 =====
async function main() {
  console.log("[1/7] 디자인시스템 로드 (timeout 보호)");
  await loadDesignSystem();

  console.log("[2/7] Inter 폰트 로드");
  await Promise.all([
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Regular" }),  3000, "Inter Regular"),
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Medium" }),   3000, "Inter Medium"),
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Semi Bold" }),3000, "Inter Semi Bold"),
    withTimeout(figma.loadFontAsync({ family: "Inter", style: "Bold" }),     3000, "Inter Bold"),
  ]).catch(e => console.log(`  [font] 실패: ${e.message}`));

  console.log("[3/7] Screen frame");
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

  console.log("[4/7] Header");
  const header = createAutoFrame("Header", "VERTICAL", 16);
  header.counterAxisAlignItems = "CENTER";
  screen.appendChild(header);
  header.layoutSizingHorizontal = "FILL";
  header.layoutSizingVertical = "HUG";

  // Logo (브랜드 변수 바인딩)
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

  // Title + Subtitle
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

  console.log("[5/7] Form");
  const form = createAutoFrame("Form", "VERTICAL", 16);
  screen.appendChild(form);
  form.layoutSizingHorizontal = "FILL";
  form.layoutSizingVertical = "HUG";

  buildField(form, "아이디", "아이디를 입력하세요");
  buildField(form, "비밀번호", "비밀번호를 입력하세요");

  console.log("[6/7] Login Button");
  const btnWrap = createAutoFrame("ButtonWrap", "VERTICAL", 12);
  screen.appendChild(btnWrap);
  btnWrap.layoutSizingHorizontal = "FILL";
  btnWrap.layoutSizingVertical = "HUG";

  const btn = figma.createFrame();
  btn.name = "Button/Login";
  btn.resize(312, 48);
  btn.cornerRadius = 8;
  btn.fills = fill(T.btnBg);
  btn.layoutMode = "HORIZONTAL";
  btn.paddingLeft = 12;
  btn.paddingRight = 12;
  btn.primaryAxisAlignItems = "CENTER";
  btn.counterAxisAlignItems = "CENTER";
  btnWrap.appendChild(btn);
  btn.layoutSizingHorizontal = "FILL";
  btn.appendChild(createText("로그인", 18, "Semi Bold", T.btnFg, "button"));

  console.log("[7/7] Link Row");
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

  // ===== 진단 출력 =====
  console.log(`\n╔═══ 디자인시스템 매칭 결과 ═══╗`);
  console.log(`║ Color Variable: ${MATCH_COUNTS.colorHits}/${MATCH_COUNTS.colorTotal}`);
  console.log(`║ Text Style:     ${MATCH_COUNTS.styleHits}/${MATCH_COUNTS.styleTotal}`);
  console.log(`╚═══════════════════════════╝`);

  if (MATCH_COUNTS.colorHits === 0 && MATCH_COUNTS.styleHits === 0) {
    console.log(`\n❌ 매칭된 변수/스타일 없음`);
    console.log(`   현재 파일에 디자인시스템 변수가 없거나, 변수 이름이 다릅니다.`);
    console.log(`   📂 공통컴포넌트 파일(${"5MV87M6oIKlLf7Pg35VSJI"})에서 실행 시 매칭됩니다.`);
  } else {
    // 미매칭 토큰 출력
    const missing = Object.entries(T).filter(([_, t]) => !t.var);
    if (missing.length) {
      console.log(`\n⚠️ 미매칭 Color (${missing.length}/${MATCH_COUNTS.colorTotal}):`);
      for (const [k, t] of missing) console.log(`  · ${k} → 시도: ${t.names.join(", ")}`);
    }
  }

  figma.viewport.scrollAndZoomIntoView([screen]);
  figma.notify(`✅ 로그인 화면 생성 완료 (변수 ${MATCH_COUNTS.colorHits}/${MATCH_COUNTS.colorTotal} 연결)`);
  console.log("[Login Connected] done");
}

function buildField(parent, labelText, placeholderText) {
  const field = createAutoFrame(`Field/${labelText}`, "VERTICAL", 6);
  parent.appendChild(field);
  field.layoutSizingHorizontal = "FILL";
  field.layoutSizingVertical = "HUG";

  field.appendChild(createText(labelText, 14, "Medium", T.inputLabel, "label"));

  // Input frame (xl_48)
  const input = figma.createFrame();
  input.name = `Input/${labelText}`;
  input.resize(312, 48);
  input.cornerRadius = 6;
  input.fills = fill(T.inputBg);
  input.strokes = [{ type: "SOLID", color: T.inputBd.hex }];
  input.strokeWeight = 1.5;
  input.strokeAlign = "INSIDE";
  // Border 변수 바인딩
  if (T.inputBd.var) {
    try { input.setBoundVariable("strokes", T.inputBd.var); } catch (_) {}
    // 또는 strokes의 boundVariables 직접 설정
    try {
      input.strokes = [{
        type: "SOLID",
        color: T.inputBd.hex,
        boundVariables: { color: { type: "VARIABLE_ALIAS", id: T.inputBd.var.id } },
      }];
    } catch (_) {}
  }
  input.layoutMode = "HORIZONTAL";
  input.paddingLeft = 12;
  input.paddingRight = 12;
  input.primaryAxisAlignItems = "MIN";
  input.counterAxisAlignItems = "CENTER";
  field.appendChild(input);
  input.layoutSizingHorizontal = "FILL";

  input.appendChild(createText(placeholderText, 16, "Regular", T.inputPh, "input"));
}

main().catch((e) => {
  console.error(e);
  figma.notify("에러: " + e.message);
});
