// Color · Semantic Tokens
// Source: Figma file lIIen1jmIhT0vuyXCMQDQA (공통 컴포넌트-test)
// Last sync: 2026-05-07 via Figma MCP get_variable_defs
//
// 출처 표기:
//   ✓ = Figma Variable 직접 확인 (get_variable_defs 결과)
//   △ = 컴포넌트 토큰에서 의미 역추적 (semantic 컬렉션 자체는 미확인)

// ---------------------------------------------------------------------------
// alert — notification/* 변수에서 직접 확인. light/dark 모두 정의 가능 시 분리.
// ---------------------------------------------------------------------------
export const alert = {
  // primary = solid icon/foreground, bg_light = soft background
  success: {
    primary:  "#0ba45d", // ✓ notification/success-primary
    bg_light: "#d7f7e1", // ✓ notification/success-primary 2
    dark:     "#05834e", // △ text-input success, tag/accent/green (legacy "success_positive")
  },
  warning: {
    primary:  "#e6af00", // ✓ notification/warning-primary
    bg_light: "#fff8cc", // ✓ notification/warning-primary 2
    dark:     "#d29500", // △ tag/accent/yellow_dark, accent/yellow
  },
  critical: { // = error/destructive
    primary:  "#f03823", // ✓ notification/critical-primary
    bg_light: "#ffebe8", // ✓ notification/critical-primary 2
    dark:     "#d73220", // △ tag/accent/red
  },
  info: {
    primary:  "#3b63fb", // ✓ notification/info-primary
    bg_light: "#e5f0fe", // ✓ notification/info-primary 2
    accent:   "#4b75ff", // ✓ system accent/blue
  },
  question: {
    primary:  "#9a47e2", // ✓ notification/question-primary, system accent/purple
    bg_light: "#f4ebfc", // ✓ notification/question-primary 2
  },
};

// ---------------------------------------------------------------------------
// common — brand · text · interaction state (button/common/* + system/*)
// ---------------------------------------------------------------------------
export const common = {
  // text
  "text-primary":   "#0e101b",  // △ avatar canvas
  "text-secondary": "#505050",  // △
  // border
  "border":         "#ffffff",  // △ avatar
  "border-inverse": "#ffffff",  // △
  // interaction states (button/common/*)
  "default":         "#00000000", // ✓ button/common/default
  "hover":           "#0000000d", // ✓ button/common/hover
  "pressed":         "#0000001a", // ✓ button/common/pressed
  "hover-neutral":   "#ffffff0d", // ✓ button/common/hover-neutral
  "pressed-neutral": "#ffffff1a", // ✓ button/common/pressed-neutral
  "selected":        "rgba(59,99,251,0.2)",
  "focus-ring":      "#000000",  // ✓ button/common/focus-ring
  "focus-ring-2":    "#fefefe",  // ✓ button/common/focus-ring 2
  // brand-A_*
  "brand-A_default":     "#eb6100", // △ button bg/brand-primary, tag/accent/orange
  "brand-A_light":       "#f3a066",
  "brand-A_darker":      "#8d3a00",
  "brand-A_morelighter": "#fbdfcc", // △ button bg/brand-tertiary
  // misc
  "avatar-bg-default":   "#c6c6c6", // △ avatar
};

// ---------------------------------------------------------------------------
// system — 💟 system/* 변수 (light/dark 토글 가능)
// ---------------------------------------------------------------------------
export const system = {
  light: {
    "default": "#565656", // ✓ 💟 system/default
    "invert":  "#ffffff", // ✓ 💟 system/invert
  },
  dark: {
    "invert": "#2b2b2b",  // ✓ 💟 system/invert 2 (notification context)
    "invert_alt": "#1d1d1d", // ✓ notification/invert2
  },
};

// ---------------------------------------------------------------------------
// accent — 💟 accent/* (system 강조색)
// ---------------------------------------------------------------------------
export const accent = {
  purple: "#9a47e2", // ✓ 💟 accent/purple
  blue:   "#4b75ff", // ✓ 💟 accent/blue
  yellow: "#d29500", // ✓ 💟 accent/yellow
  green:  "#079355", // ✓ 💟 accent/green
};

// ---------------------------------------------------------------------------
// bg — layer 시스템 (figma 컴포넌트에서 부분만 노출)
// ---------------------------------------------------------------------------
export const bg = {
  "layer1": "#f9f9f9", // ✓ ❤️common/layout/bg-layer1
  "layer2": "#f4f4f4", // △ gnb (xx-bg/bg_layer_2)
};

// ---------------------------------------------------------------------------
// etc — divider 등
// ---------------------------------------------------------------------------
export const etc = {
  "text-primary":   "#131313",  // △
  "text-secondary": "#505050",  // △
  "border-inverse": "#ffffff",  // △
  "divider":        "#d2d2d2",  // △ divider component
};

// ---------------------------------------------------------------------------
// light / Border / icon — 추가 namespace
// ---------------------------------------------------------------------------
export const light = {
  "text-01":           "#242424",
  "table-header2-bg":  "#D8E3F4",
};

export const border = {
  "gray-light":  "#e0e3ed",
  "input-default": "#bcbcbc", // ✓ ❤️input common/border/default
  "border-1":      "#c9c9c9", // ✓ --slds-g-color-border-1 (외부 SLDS 토큰)
};

export const icon = {
  "default_solid": "#6c90c1", // ✓ icon/Icon_default_Solid
};

// ---------------------------------------------------------------------------
// neutral white (별도 컬렉션 — Color/Neutral/White/N)
// ---------------------------------------------------------------------------
export const neutralWhite = {
  50: "#ffffff", // ✓ Color/Neutral/White/50
};
