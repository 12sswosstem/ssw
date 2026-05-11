// =============================================================================
// SSW Mobile Login — MINIMAL (hang-proof)
// =============================================================================
// 절대 hang 없도록 모든 위험 요소 제거:
//   ❌ figma.root.findAll / loadAllPagesAsync / findAllWithCriteria
//   ❌ figma.currentPage.findAll
//   ❌ figma.variables.getLocalVariablesAsync (큰 라이브러리에서 느릴 수 있음)
//   ❌ figma.getLocalTextStylesAsync
//   ❌ figma.loadFontAsync (Pretendard 미설치 시 hang 가능)
//   ❌ createInstance / setProperties
//
// 사용 가능:
//   ✅ figma.createFrame / createText / createRectangle
//   ✅ Inter (Figma 기본 폰트, 항상 존재)
//   ✅ hex 색상 직접 지정
//
// 토큰 출처 (인라인 hex):
//   - components/button.md (xl: h 48, hPad 12, radius 8)
//   - components/input.md (xl_48: h 48, padding 12, radius 6, border 1.5)
//   - tokens/color/{semantic,component}.js
// =============================================================================

console.log("[Login Minimal] start");
figma.notify("로그인 화면 생성 중");

// ===== 토큰 (hex 직접) =====
const C = {
  bg:        { r: 1, g: 1, b: 1 },              // #FFFFFF
  textHi:    { r: 0.1137, g: 0.1137, b: 0.1137 }, // #1D1D1D
  textMid:   { r: 0.3373, g: 0.3373, b: 0.3373 }, // #565656
  textLow:   { r: 0.5608, g: 0.5608, b: 0.5608 }, // #8F8F8F
  border:    { r: 0.7373, g: 0.7373, b: 0.7373 }, // #BCBCBC
  inputBd:   { r: 0.6471, g: 0.6471, b: 0.6471 }, // #A5A5A5
  brand:     { r: 0.9216, g: 0.3804, b: 0 },     // #EB6100
  brandFg:   { r: 0.9765, g: 0.9765, b: 0.9765 }, // #F9F9F9
};

const fill = (c) => [{ type: "SOLID", color: c }];
const stroke = (c, w) => ({ strokes: [{ type: "SOLID", color: c }], strokeWeight: w, strokeAlign: "INSIDE" });

// ===== async 메인 (단 1개 await — Inter 폰트만) =====
async function main() {
  console.log("[1/6] Inter 폰트 로드 (기본)");
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  console.log("[2/6] Screen frame");
  // ===== 메인 스크린 =====
  const screen = figma.createFrame();
  screen.name = "Login / Mobile";
  screen.resize(360, 720);
  screen.fills = fill(C.bg);
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

  console.log("[3/6] Header (logo + title + subtitle)");
  // ===== Header =====
  const header = createAutoFrame("Header", "VERTICAL", 16);
  header.counterAxisAlignItems = "CENTER";
  screen.appendChild(header);
  header.layoutSizingHorizontal = "FILL";
  header.layoutSizingVertical = "HUG";

  // Logo (브랜드 오렌지 64x64)
  const logo = figma.createFrame();
  logo.name = "Logo";
  logo.resize(64, 64);
  logo.cornerRadius = 16;
  logo.fills = fill(C.brand);
  logo.layoutMode = "HORIZONTAL";
  logo.primaryAxisAlignItems = "CENTER";
  logo.counterAxisAlignItems = "CENTER";
  header.appendChild(logo);

  const logoMark = createText("S", 32, "Bold", C.brandFg);
  logo.appendChild(logoMark);

  // Title + Subtitle
  const titleWrap = createAutoFrame("TitleWrap", "VERTICAL", 8);
  titleWrap.counterAxisAlignItems = "CENTER";
  header.appendChild(titleWrap);
  titleWrap.layoutSizingHorizontal = "FILL";
  titleWrap.layoutSizingVertical = "HUG";

  const title = createText("로그인", 24, "Bold", C.textHi);
  title.textAlignHorizontal = "CENTER";
  titleWrap.appendChild(title);

  const subtitle = createText("계정 정보를 입력하세요", 14, "Regular", C.textMid);
  subtitle.textAlignHorizontal = "CENTER";
  titleWrap.appendChild(subtitle);

  console.log("[4/6] Form (아이디 + 비밀번호)");
  // ===== Form =====
  const form = createAutoFrame("Form", "VERTICAL", 16);
  screen.appendChild(form);
  form.layoutSizingHorizontal = "FILL";
  form.layoutSizingVertical = "HUG";

  buildField(form, "아이디", "아이디를 입력하세요");
  buildField(form, "비밀번호", "비밀번호를 입력하세요");

  console.log("[5/6] Login Button");
  // ===== Login Button =====
  const btnWrap = createAutoFrame("ButtonWrap", "VERTICAL", 12);
  screen.appendChild(btnWrap);
  btnWrap.layoutSizingHorizontal = "FILL";
  btnWrap.layoutSizingVertical = "HUG";

  const btn = figma.createFrame();
  btn.name = "Button/Login";
  btn.resize(312, 48);
  btn.cornerRadius = 8;
  btn.fills = fill(C.brand);
  btn.layoutMode = "HORIZONTAL";
  btn.paddingLeft = 12;
  btn.paddingRight = 12;
  btn.primaryAxisAlignItems = "CENTER";
  btn.counterAxisAlignItems = "CENTER";
  btnWrap.appendChild(btn);
  btn.layoutSizingHorizontal = "FILL";

  const btnText = createText("로그인", 18, "Semi Bold", C.brandFg);
  btn.appendChild(btnText);

  console.log("[6/6] Link Row");
  // ===== Link Row =====
  const links = createAutoFrame("Links", "HORIZONTAL", 16);
  links.primaryAxisAlignItems = "CENTER";
  links.counterAxisAlignItems = "CENTER";
  btnWrap.appendChild(links);
  links.layoutSizingHorizontal = "FILL";
  links.layoutSizingVertical = "HUG";

  links.appendChild(createText("아이디 찾기", 14, "Regular", C.textMid));
  links.appendChild(createDivider());
  links.appendChild(createText("비밀번호 찾기", 14, "Regular", C.textMid));
  links.appendChild(createDivider());
  links.appendChild(createText("회원가입", 14, "Medium", C.brand));

  figma.viewport.scrollAndZoomIntoView([screen]);
  figma.notify("✅ 로그인 화면 생성 완료");
  console.log("[Login Minimal] done");
}

// ===== 헬퍼 =====
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

function createText(content, size, style, color) {
  const t = figma.createText();
  t.fontName = { family: "Inter", style };
  t.fontSize = size;
  t.characters = content;
  t.fills = fill(color);
  return t;
}

function createDivider() {
  const r = figma.createRectangle();
  r.resize(1, 12);
  r.fills = fill(C.border);
  r.name = "divider";
  return r;
}

function buildField(parent, labelText, placeholderText) {
  const field = createAutoFrame(`Field/${labelText}`, "VERTICAL", 6);
  parent.appendChild(field);
  field.layoutSizingHorizontal = "FILL";
  field.layoutSizingVertical = "HUG";

  const label = createText(labelText, 14, "Medium", C.textMid);
  field.appendChild(label);

  // Input frame (xl_48: h 48, padding 12, radius 6, border 1.5)
  const input = figma.createFrame();
  input.name = `Input/${labelText}`;
  input.resize(312, 48);
  input.cornerRadius = 6;
  input.fills = fill(C.bg);
  const s = stroke(C.inputBd, 1.5);
  input.strokes = s.strokes;
  input.strokeWeight = s.strokeWeight;
  input.strokeAlign = s.strokeAlign;
  input.layoutMode = "HORIZONTAL";
  input.paddingLeft = 12;
  input.paddingRight = 12;
  input.primaryAxisAlignItems = "MIN";
  input.counterAxisAlignItems = "CENTER";
  field.appendChild(input);
  input.layoutSizingHorizontal = "FILL";

  const ph = createText(placeholderText, 16, "Regular", C.textLow);
  input.appendChild(ph);
}

main().catch((e) => {
  console.error(e);
  figma.notify("에러: " + e.message);
});
