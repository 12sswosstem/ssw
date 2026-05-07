// Color · Primitive Tokens
// Source: Figma file lIIen1jmIhT0vuyXCMQDQA (공통 컴포넌트-test)
// Last sync: 2026-05-07 via Figma MCP get_variable_defs
//
// 출처 표기:
//   ✓ = Figma Variable 직접 확인 (get_variable_defs 결과)
//   ⚠ = Color 가이드 페이지 라벨에서 hex 추출 (변수 정의 아님 — 시각 가이드)
//   △ = 컴포넌트 토큰 hex에서 역추적 (단계 번호는 미확인)

// ---------------------------------------------------------------------------
// Static/Neutral Gray — 17단계 (tint/shade % 기반 네이밍)
// 0=흰색, 999=거의 검정 (#020202)
// ---------------------------------------------------------------------------
export const neutral = {
  0:   "#ffffff", // ✓
  1:   "#fefefe", // ✓
  25:  "#f9f9f9", // ✓
  50:  "#f4f4f4", // ✓
  75:  "#eeeeee", // ✓
  100: "#e9e9e9", // ✓
  150: "#dddddd", // ✓
  200: "#d2d2d2", // ⚠
  300: "#bcbcbc", // ⚠
  400: "#a5a5a5", // ⚠
  500: "#8f8f8f", // ⚠
  600: "#727272", // ⚠
  700: "#565656", // ⚠
  800: "#393939", // ✓
  850: "#2b2b2b", // ✓
  900: "#1d1d1d", // ✓
  950: "#0e0e0e", // ✓
  999: "#020202", // ✓
};

// ---------------------------------------------------------------------------
// Static/Gray — Neutral Gray와 별개 컬렉션 (컴포넌트에서 부분만 노출)
// ---------------------------------------------------------------------------
export const gray = {
  300: "#dadada", // ✓
  800: "#292929", // ✓
};

// ---------------------------------------------------------------------------
// Static/Orange — 변수 600만 직접 확인.
// Color 페이지의 17단계 swatch는 변수 미바인딩이라 나머지 단계 hex 미추출.
// TODO: 디자이너가 Orange swatch에 변수 바인딩 또는 hex 라벨 추가 시 재추출
// ---------------------------------------------------------------------------
export const orange = {
  600: "#fc7d00", // ✓ Static/Orange/600
  // 컴포넌트에서 직접 hex로 관측된 것 (단계 매핑 미확정):
  // △ "#eb6100" — base/brand (button bg/brand-primary, tag/accent/orange)
  // △ "#fbdfcc" — light tertiary (button bg/brand-tertiary)
  // △ "#fdefe5" — extra-light tag bg (tag/bg/orange)
};

// ---------------------------------------------------------------------------
// 이하 컬러는 컴포넌트 토큰에서 관측된 hex만 모음.
// Figma Color primitive collection 자체에 동일 단계가 정의돼있는지는 미확인.
// 키는 의미 기반(primary/dark/bg_light)으로 부여.
// ---------------------------------------------------------------------------

// blue (info)
export const blue = {
  primary:  "#3b63fb", // △ notification/info-primary
  bg_light: "#e5f0fe", // △ notification/info-primary 2 (light bg)
  accent:   "#4b75ff", // △ system accent/blue
};

// red (destructive / critical)
export const red = {
  primary:  "#f03823", // △ notification/critical-primary, button destructive
  bg_light: "#ffebe8", // △ notification/critical-primary 2, tag/bg/red
  dark:     "#d73220", // △ tag/accent/red
};

// green (success)
export const green = {
  primary:  "#0ba45d", // △ notification/success-primary
  bg_light: "#d7f7e1", // △ notification/success-primary 2, tag/bg/green
  dark:     "#05834e", // △ tag/accent/green, text-input success
  accent:   "#079355", // △ system accent/green
};

// yellow (warning)
export const yellow = {
  primary:  "#e6af00", // △ notification/warning-primary
  bg_light: "#fff8cc", // △ notification/warning-primary 2, tag/bg/yellow
  dark:     "#d29500", // △ tag/accent/yellow_dark, system accent/yellow
  base:     "#f5c700", // △ tag/accent/yellow
};

// purple (question)
export const purple = {
  primary:   "#9a47e2", // △ notification/question-primary, system accent/purple
  bg_light:  "#f4ebfc", // △ notification/question-primary 2
};

// indigo
export const indigo = {
  primary:  "#7155fa", // △ tag/accent/indigo
  bg_light: "#ebeeff", // △ tag/bg/indigo
};

// magenta
export const magenta = {
  primary:  "#d92361", // △ tag/accent/magenta
  bg_light: "#ffe8f0", // △ tag/bg/magenta
};

// turquoise
export const turquoise = {
  primary:  "#087e89", // △ tag/accent/turquoise
  bg_light: "#d1f5f5", // △ tag/bg/turquoise
};
