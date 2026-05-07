// Color · Primitive Tokens
// Source: Figma Variable Collection  Color_primitive (642:26063)
// Modes: light · dark
//
// 추출 출처:
// - neutral: docs/spec.html `:root` (완전 추출)
// - 그 외 팔레트: components/*.md 에서 관측된 hex 모음
//   (스케일 번호 매핑은 figma-export.json 또는 Figma 직접 추출 필요 — 일부 추정)

export const neutral = {
  0: "#ffffff",
  50: "#f9f9f9",
  100: "#f4f4f4",
  200: "#e9e9e9",
  300: "#dddddd",
  400: "#c6c6c6",
  500: "#a5a5a5",
  600: "#8f8f8f",
  700: "#565656",
  800: "#393939",
  850: "#2b2b2b",
  900: "#1d1d1d",
  950: "#0e0e0e",
};

// brand orange (`#eb6100` 중심). 스케일 번호는 추정.
export const newOrange = {
  50: "#fef7f2",   // brand-pale
  100: "#fef0ee",
  200: "#fbdfcc",  // brand-light
  300: "#f7c099",
  400: "#f9cfb2",
  500: "#eb6100",  // brand
  600: "#bc4e00",
  700: "#8d3a00",
  800: "#6b4300",
  900: "#533400",
  950: "#251700",
};

// 보조 orange 팔레트 — newOrange와 별개로 존재 (legacy or alt). 값 미확인.
// TODO: Figma Color_primitive (642:26063)에서 직접 확인 필요
export const orange = {};

// blue: 컴포넌트 MD 관측 hex (스케일 번호 추정)
export const blue = {
  50: "#ebeeff",
  100: "#e5f0fe",
  200: "#d5e7fe",
  300: "#accffd",
  400: "#5d89ff",
  500: "#3b63fb",
  600: "#2549e5",
  700: "#122d9a",
  800: "#0c2175",
  900: "#0c1f69",
  950: "#0f1c52",
};

// red (destructive 포함)
export const red = {
  50: "#ffebe8",
  100: "#fbd1cb",
  200: "#fef0ee",
  400: "#ff513d",
  500: "#f03823",
  600: "#d73220",
  700: "#b12617",
  800: "#73180b",
  900: "#501006",
  950: "#440d05",
};

export const green = {
  50: "#d7f7e1",
  300: "#40bf80",
  400: "#0ba45d",
  500: "#05834e",
  600: "#047c4b",
  700: "#046959",
  800: "#03545c",
  900: "#002e28",
  950: "#002e22",
};

export const yellow = {
  50: "#fff8cc",
  100: "#faec88",
  200: "#fff197",
  500: "#f5c700",
  600: "#e6af00",
  700: "#d29500",
  800: "#825200",
  900: "#4b2f00",
};

export const purple = {
  50: "#eee0fa",
  300: "#ad69e9",
  400: "#9d4ee4",
  500: "#9a47e2",
  600: "#7155fa",
  700: "#53009f",
  800: "#320060",
  900: "#2a0081",
};

export const magenta = {
  50: "#ffe8f0",
  100: "#ffa3c2",
  300: "#ff709f",
  500: "#d92361",
  600: "#cf1f5c",
  800: "#98073c",
  900: "#880033",
  950: "#7b002d",
};
