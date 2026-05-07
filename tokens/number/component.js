// Number · Component Tokens
// Source: Figma Variable Collection Number_component (923:58268)
// 데이터 출처: components/*.md (figma-export.json 2026-05-04 + 일부 production variable_defs)

// ============================================================
// Form / Input
// ============================================================

export const button = {
  size: {
    xxs: { height: 20, hPadding: 4,  textPadding: 4, cornerRadius: 4,  border: 1 },
    xs:  { height: 24, hPadding: 6,  textPadding: 4, cornerRadius: 4,  border: 1 },
    sm:  { height: 28, hPadding: 8,  textPadding: 4, cornerRadius: 4,  border: 1 },   // hPadding/textPadding 추정
    md:  { height: 32, hPadding: 8,  textPadding: 4, cornerRadius: 6,  border: 1 },
    lg:  { height: 40, hPadding: 12, textPadding: 4, cornerRadius: 6,  border: 1 },
    xl:  { height: 48, hPadding: 12, textPadding: 8, cornerRadius: 8,  border: 1.5 },
    "2xl": { height: 64, hPadding: 16, textPadding: 8, cornerRadius: 8,  border: 2 },
    "3xl": { height: 80, hPadding: 24, textPadding: 8, cornerRadius: 12, border: 2.5 },
    "4xl": { height: 96, hPadding: 24, textPadding: 8, cornerRadius: 14, border: 3 },
  },
  cornerRadius2xlAlt: 10,  // 2xl 둥글기 약화 변형
  focusRing: {
    xxs:   { inset: -3,   weight: 1,   radius: 6 },
    xs:    { inset: -3,   weight: 1,   radius: 6 },
    sm:    { inset: -3,   weight: 1,   radius: 6 },
    md:    { inset: -3,   weight: 1,   radius: 8 },
    lg:    { inset: -3,   weight: 1,   radius: 8 },
    xl:    { inset: -3.5, weight: 1.5, radius: 10 },
    "2xl": { inset: -4,   weight: 2,   radius: 10 },
    "3xl": { inset: -4.5, weight: 2.5, radius: 13 },
    "4xl": { inset: -5,   weight: 3,   radius: 14 },
  },
};

// input/textinput/dropdown 공유 사이즈 (input_(dropdown)/* + textinput/border)
export const input = {
  size: {
    "xs_24":  { height: 24, hPadding: 4,  cornerRadius: 4, border: 1 },   // hPadding 4 추정
    "sm_28":  { height: 28, hPadding: 8,  cornerRadius: 4, border: 1 },
    "md_32":  { height: 32, hPadding: 8,  cornerRadius: 4, border: 1 },
    "lg_40":  { height: 40, hPadding: 12, cornerRadius: 6, border: 1 },
    "xl_48":  { height: 48, hPadding: 12, cornerRadius: 6, border: 1.5 },
    "2xl_64": { height: 64, hPadding: 16, cornerRadius: 8, border: 2 },
  },
};

// textarea: 별도 토큰 미정의 — Size 스펙 표 기준 (W×H, textArea height)
export const textarea = {
  size: {
    sm: { width: 288, height: 116, textAreaHeight: 68 },  // textAreaHeight 추정
    md: { width: 288, height: 124, textAreaHeight: 68 },
    lg: { width: 288, height: 134, textAreaHeight: 78 },
  },
};

// dropdown: input과 동일 토큰 공유
export const dropdown = {
  size: {
    "xs_24":  { height: 24, hPadding: 4,  cornerRadius: 4, border: 1 },
    "sm_28":  { height: 28, hPadding: 8,  cornerRadius: 4, border: 1 },
    "md_32":  { height: 32, hPadding: 8,  cornerRadius: 4, border: 1 },
    "lg_40":  { height: 40, hPadding: 12, cornerRadius: 6, border: 1 },
    "xl_48":  { height: 48, hPadding: 12, cornerRadius: 6, border: 1.5 },
    "2xl_64": { height: 64, hPadding: 16, cornerRadius: 8, border: 2 },
  },
};

// valueStepper: 별도 토큰 없음 (input과 공유)
export const valueStepper = {};

// ============================================================
// Selection — control 공유
// ============================================================

// selection control/* — checkbox/radio/switch 공유
export const selectionControl = {
  size: {
    sm: { container: 20, innerBox: 16,   text: 14, gap: 4, border: 1,    focusRing: 2   },
    md: { container: 24, innerBox: 19.2, text: 16, gap: 4, border: 1.2,  focusRing: 2.4 },
    lg: { container: 32, innerBox: 24,   text: 18, gap: 8, border: 1.5,  focusRing: 2   },
  },
  // figma-export.json은 md innerBox=20이지만 production은 19.2 (미세차)
  // lg border 1.875는 indeterminate 변형 추정값
};

// switch 전용 (track + thumb)
export const switchControl = {
  size: {
    sm: { trackW: 28, trackH: 16, thumb: 12, textSize: 14, gap: 4 },
    md: { trackW: 36, trackH: 20, thumb: 16, textSize: 16, gap: 4 },
    lg: { trackW: 44, trackH: 24, thumb: 20, textSize: 18, gap: 8 },
  },
  trackRadius: 100,  // pill
  thumbRadius: 100,
};

// ============================================================
// Navigation
// ============================================================

export const tab = {
  lined: {
    size: {
      xxs: { height: 24, hPadding: 12, border: 2, radius: 4 },
      xs:  { height: 28, hPadding: 12, border: 2, radius: 4 },
      sm:  { height: 32, hPadding: 12, border: 2, radius: 4 },
      md:  { height: 40, hPadding: 16, border: 2, radius: 4 },
      lg:  { height: 48, hPadding: 20, border: 2, radius: 6 },
    },
    gap: 2,
  },
  contained: {
    size: {
      xxs: { height: 24, hPadding: 12, border: 1 },
      xs:  { height: 28, hPadding: 12, border: 1 },
      sm:  { height: 32, hPadding: 12, border: 1 },
      md:  { height: 40, hPadding: 16, border: 1 },
      lg:  { height: 48, hPadding: 20, border: 2 },
    },
    gap: 2,
  },
};

export const segmentedControl = {
  outlined: {
    size: {
      sm: { height: 24 },
      md: { height: 28 },
      lg: { height: 32 },
    },
  },
  filled: {
    size: {
      sm: { height: 20, width: 24 },  // width = icon only
      md: { height: 24, width: 28 },
      lg: { height: 28, width: 32 },
    },
  },
  hPadding: {
    sm: { iconText: 8,  iconOnly: 2 },
    md: { iconText: 12, iconOnly: 4 },
    lg: { iconText: 12, iconOnly: 6 },
  },
  gap: 2,
  radiusSm: 4,
};

export const menu = {
  height:  { sm: 32 },
  padding: { sm: 6, md: 8 },
  gap:     { sm: 4 },
  radius:  { sm: 4 },
  border:  { xs: 1, sm: 2 },
};

export const breadcrumb = {
  padding: 2,
  gap: 4,
  size: {
    sm: { itemHeight: 20, font: 12, lineHeight: 14 },  // itemHeight 18~20
    md: { itemHeight: 24, font: 14, lineHeight: 20 },
  },
};

// gnb는 별도 number tokens 표 미제공 — anatomy 폭만
export const gnb = {
  cloudx: {
    collapsed: { width: 44,  height: 908 },  // 추정
    expanded:  { width: 118, height: 908 },
  },
  hmi: {
    "lg_10": { width: 80, height: 80 },
    "sm_7":  { width: 48, height: 48 },
  },
};

export const toolbar = {};  // 70 tool components × 3 states (별도 size 토큰 없음)

// ============================================================
// Display
// ============================================================

export const tag = {
  height: { xs: 18, sm: 20, md: 24 },
  padding: {
    xs: 6,
    // sm: 미정의 (production variable_defs 미노출, 통상 6 또는 10 보간)
    md: 10,
  },
  radius: { xs: 2 },
};

export const chip = {
  height:  { xs: 28, sm: 32, md: 40 },
  padding: { xs: 8,  sm: 10, md: 12 },
  gap:     { xs: 4,  sm: 6,  md: 8 },
  radius: {
    rounded: 999,  // production 또는 가이드 480 추정
    sqaure:  4,    // Figma 원본 오타 보존
  },
};

export const badge = {
  size: {
    xs: { container: 14, dot: 4,  icon: 10, text: 10, border: 1 },
    sm: { container: 18, dot: 6,  icon: 10, text: 12, border: 1.35 },
    md: { container: 24, dot: 8,  icon: 14, text: 16, border: 1.8 },
    lg: { container: 32, dot: 10, icon: 20, text: 18, border: 2.4 },
    xl: { container: 40, dot: 12, icon: 24, text: 24, border: 3 },
  },
  longWidth: {
    xs: { numberLong: 36.8, text: 33.8 },
    sm: { numberLong: 41.8, text: 37.8 },
    md: { numberLong: 55.4, text: 50.4 },
    lg: { numberLong: 65.2, text: 60.2 },
    xl: { numberLong: 85,   text: 78 },
  },
};

export const avatar = {
  radius: {
    "circle":        999,
    "rounded":       12,
    "rounded-ring":  14,
    "square":        0,
  },
  stroke: {
    "xs_24":  1,
    "sm_32":  1.6,
    "md_40":  2.2,
    "lg_48":  2.6,
    "xl_64":  3,
    "2xl_80": 4.2,
  },
  size: {
    "xs_24":  24,
    "sm_32":  32,
    "md_40":  40,
    "lg_48":  48,
    "xl_64":  64,
    "2xl_80": 80,
  },
  array: {
    spread: {
      "xs_24":  { width: 24, spacing: 26, gap: 2 },
      "sm_32":  { width: 32, spacing: 36, gap: 4 },
      "md_40":  { width: 40, spacing: 46, gap: 6 },
      "lg_48":  { width: 48, spacing: 56, gap: 8 },
      "xl_64":  { width: 64, spacing: 74, gap: 10 },
      "2xl_80": { width: 80, spacing: 92, gap: 12 },
    },
    stack: {
      "xs_24":  { width: 24, spacing: 22, overlap: -2 },
      "sm_32":  { width: 32, spacing: 28, overlap: -4 },
      "md_40":  { width: 40, spacing: 34, overlap: -6 },
      "lg_48":  { width: 48, spacing: 40, overlap: -8 },
      "xl_64":  { width: 64, spacing: 54, overlap: -10 },
      "2xl_80": { width: 80, spacing: 68, overlap: -12 },
    },
  },
};

export const divider = {
  thickness: {
    "xs":          0.5,
    "sm_Default":  1,
    "md":          2,
    "lg":          4,
  },
  inset: {
    "inset-sm":  16,
    "inset-md":  24,
    "inset_lg":  32,  // lg만 underscore
    "full":      0,
  },
  frame: {
    width:       300,
    titleHeight: 24,  // Title=true 시
  },
};

export const rating = {};  // type/state variant만 정의됨

// ============================================================
// Layout
// ============================================================

export const card = {
  cornerRadius: { sm: 12, md: 8 },
  size: {
    "basic":      { width: 360, height: 250 },
    "vertical":   { width: 360, height: 330, imageHeight: 70 },
    "horizontal": { width: 777, height: 332, imageWidth: 407, imageHeight: 300 },
    "filled":     { width: 360, height: 420, overlayHeight: 168 },
    "harf":       { width: 360, height: 420, overlayHeight: 168 },  // harf=half (Figma 오타)
  },
  body: { width: 328, height: 218, padding: 16 },
  focusRing: 2,
  borderWidth: 1,
  disabledOpacity: 0.4,
};

export const reservationCard = {
  size: {
    "case1Default":   { width: 190, height: 46 },  // 30분
    "case1Disabled":  { width: 190, height: 32 },
    "case2Default":   { width: 190, height: 92 },  // 1시간
    "case2Default2":  { width: 186, height: 92 },  // stae=defalut-2
    "case2Disabled":  { width: 186, height: 92 },
  },
  font: { size: 12, lineHeight: 14, weight: 600 },
};

export const table = {
  size: {
    "xs_24":  { height: 24, padding: 8,  gap: 4,  textSize: 14 },
    "sm_28":  { height: 28, padding: 8,  gap: 4,  textSize: 14 },
    "md_32":  { height: 32, padding: 8,  gap: 8,  textSize: 14 },
    "lg_40":  { height: 40, padding: 8,  gap: 8,  textSize: 16 },
    "xl_48":  { height: 48, padding: 12, gap: 12, textSize: 16 },
    "2xl_56": { height: 56, padding: 12, gap: 16, textSize: 18 },
  },
  frame: { width: 995, height: 2351 },
};

export const list = {};  // MD에 number tokens 미정의 (divider 1px만 언급)

export const expandableList = {
  nestedPaddingStep: 16,  // depth별 +16 권장
};

export const hmi = {
  touchTarget: { min: 48 },  // Apple HIG / Material 권장
};

// ============================================================
// Feedback
// ============================================================

export const tooltip = {
  padding: { md: 8, lg: 8 },
};

export const popover = {
  padding: { md: 12 },
  gap: 12,
  gapContent: 8,
  radius: { md: 4 },  // tooltip/radius-md 공유
};

export const popup = {
  padding:            4,
  border:             1,
  radius:             4,
  headerPadding:      8,
  sectionPadding:     12,
  sectionGap:         12,
  sectionContentsGap: 16,
  gap:                4,  // footer button group
};

export const modal = {
  padding:     20,
  gap:         16,
  gapText:     8,
  gapIcon:     12,
  radius:      2,
  borderWidth: 2,
  width: { horizontal: 400, vertical: 320 },
};

export const notification = {
  padding:     { md: 16, lg: 16 },
  radius:      { md: 8,  lg: 8 },
  gap:         { md: 8,  lg: 12 },
  textPadding: { md: 2,  lg: 4 },
  radiusBar:   { md: 0,  lg: 0 },
};

export const progress = {
  bar: {
    height:       { xs: 2, sm: 4, md: 8, lg: 12 },
    cornerRadius: { pill: 99, square: 0 },  // "conrner" Figma 원본 오타
  },
  stepper: {
    atom: {
      md: { width: 40 },
      sm: { width: 40 },
      vertical:   { height: { md: 84, sm: 54 } },
      horizontal: { height: { md: 20, sm: 10 } },
    },
  },
  circle: {
    animatedSize: { xxs: 20, xs: 48, sm: 64, md: 96, lg: 160 },
    staticSize:   { sm: 48, md: 64, lg: 96, xl: 160 },
  },
};

// spinner: 별도 전용 토큰 없음 — atom 48×48 + 가이드 sample 추정
// (color/component.js 의 spinner와 매칭)
// number 영역에는 export 없음

// slider: 별도 number 토큰 없음 (color만 정의)
// calendar: 별도 number 토큰 없음 (color만 정의)
