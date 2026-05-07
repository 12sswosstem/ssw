// Color · Semantic Tokens
// Source: Figma Variable Collection  Color_semantic (966:86157)
// Modes: light · dark
//
// 데이터 출처: Figma get_variable_defs (LxBPQF1oFOfiNdX5qzLcik / 14:4156, 14:4208)
//   + components/*.md
//
// ⚠️ 부분 추출. Figma 세션 만료 후 재연결 필요.
// 더 채우려면 Figma에서 다양한 컴포넌트 페이지의 variable_defs 호출 필요.

// alert: normal · ready · info · success · warning · error · question
// TODO: Figma 직접 추출 필요 (Avatar 페이지에 alert 변수 노출 안 됨)
export const alert = {
  // notification.md에서 관측된 alert 컬러 시드
  strong: {
    "success_positive": "#05834e",
  },
};

// common: brand · text · disabled
export const common = {
  // Figma 직접 추출 (Avatar canvas)
  "text-primary":        "#0e101b",
  "border":              "#ffffff",
  "avatar-bg-default":   "#c6c6c6",
  // button.md (production variable_defs)
  "default":             "#00000000",
  "hover":               "#0000000d",
  "pressed":             "#0000001a",
  "hover-neutral":       "#ffffff0d",
  "pressed-neutral":     "#ffffff1a",
  "selected":            "rgba(59,99,251,0.2)",
  "focus-ring":          "#000000",
  "focus-ring-2":        "#fefefe",
  // brand-A_*
  "brand-A_default":     "#eb6100",
  "brand-A_light":       "#f3a066",
  "brand-A_darker":      "#8d3a00",
  "brand-A_morelighter": "#fbdfcc",
};

// bg: base · layer1 · layer2 · layer3
// TODO: Figma 직접 추출 필요 (구조 확인용 placeholder)
export const bg = {
  // gnb.md에서 관측 (xx-bg/bg_layer_2)
  "layer_2": "#f4f4f4",
};

// etc: divider · border-default · border-hover · border-disabled
export const etc = {
  // Figma 직접 추출
  "text-primary":   "#131313",
  "text-secondary": "#505050",
  "border-inverse": "#ffffff",
  // divider.md 관측
  "divider":        "#d2d2d2",
};

// system / Light / Border (figma 추출에서 발견된 추가 namespace)
export const system = {
  "invert": "#ffffff",
};

export const light = {
  "text-01":           "#242424",
  "table-header2-bg":  "#D8E3F4",  // Light/table/header2-bg
};

export const border = {
  "gray-light": "#e0e3ed",
};
