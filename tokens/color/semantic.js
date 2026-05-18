// Color · Semantic Tokens
// Source: Figma Variable Collection — Color_semantic (light/dark modes)
// 각 leaf: { light: "#hex", dark: "#hex" }

export const alert = {
  strong: {
    caution: { light: "#E6AF00", dark: "#F5C700" },
    custom_1: { light: "#D92361", dark: "#FF709F" },
    custom_2_black: { light: "#000000", dark: "#FFFFFF" },
    custom_3_white_inverse: { light: "#FFFFFF", dark: "#000000" },
    error_danger: { light: "#F03823", dark: "#F03823" },
    info_progress: { light: "#3B63FB", dark: "#5D89FF" },
    question_discovery: { light: "#9A47E2", dark: "#B272EB" },
    ready_neutral: { light: "#565656", dark: "#BCBCBC" },
    success_positive: { light: "#05834E", dark: "#0BA45D" },
    warning: { light: "#EB6100", dark: "#EF8133" },
  },
  weak: {
    caution: { light: "#FFF8CC", dark: "#4B2F00" },
    custom_1: { light: "#FFE8F0", dark: "#880033" },
    custom_2_black: { light: "#FFFFFF", dark: "#000000" },
    custom_3_white: { light: "#FFFFFF", dark: "#000000" },
    error_danger: { light: "#FFEBE8", dark: "#501006" },
    info_progress: { light: "#E5F0FE", dark: "#0C1F69" },
    question: { light: "#F4EBFC", dark: "#3B006F" },
    ready_neutral: { light: "#DDDDDD", dark: "#565656" },
    success: { light: "#D7F7E1", dark: "#002E22" },
    warning: { light: "#FBDFCC", dark: "#2F1300" },
  },
};

export const brand = {
  "brand-A_dark": { light: "#BC4E00", dark: "#BC4E00" },
  "brand-A_darker": { light: "#8D3A00", dark: "#8D3A00" },
  "brand-A_default": { light: "#EB6100", dark: "#EB6100" },
  "brand-A_light": { light: "#F3A066", dark: "#F3A066" },
  "brand-A_light 2": { light: "#EF8133", dark: "#EF8133" },
  "brand-A_lighter": { light: "#F7C099", dark: "#F7C099" },
  "brand-A_lightest": { light: "#FEF7F2", dark: "#FEF7F2" },
  "brand-A_morelighter": { light: "#FBDFCC", dark: "#FBDFCC" },
};

export const common = {
  alpha: {
    default: { light: "#00000000", dark: "#FFFFFF00" },
    dim: { light: "#00000099", dark: "#00000099" },
    hover: { light: "#0000001A", dark: "#FFFFFF1A" },
    pressed: { light: "#00000033", dark: "#FFFFFF33" },
    shadow: { light: "#0000004D", dark: "#FFFFFF4D" },
  },
  bg: {
    base: { light: "#FEFEFE", dark: "#1D1D1D" },
    layer1: { light: "#F4F4F4", dark: "#020202" },
    layer2: { light: "#EEEEEE", dark: "#393939" },
    layer3: { light: "#E9E9E9", dark: "#565656" },
  },
  border: {
    "(active)": { light: "{brand.brand-A_default}", dark: "#FFFFFF" },
    "(default)": { light: "#BCBCBC", dark: "#E9E9E9" },
    "(disabled)": { light: "#A5A5A5", dark: "#A5A5A5" },
    "inverse??": { light: "#E9E9E9", dark: "#000000" },
  },
  "focus ring": { light: "#000000", dark: "#FFFFFF" },
  text: {
    inverse: { light: "#FFFFFF", dark: "#000000" },
    primary_active: { light: "#1D1D1D", dark: "#FFFFFF" },
    primary_default: { light: "#393939", dark: "#A5A5A5" },
    "secondary_(default)": { light: "#727272", dark: "#BCBCBC" },
    "tertiary_(disabled)": { light: "#8F8F8F", dark: "#A5A5A5" },
  },
};
