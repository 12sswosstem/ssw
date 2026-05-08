// Number · Component Tokens
// Source: Figma Variable Collection — Number_component (Mode 1)
//
// 24 컴포넌트 — 각 컴포넌트의 layout/spacing/radius/border 토큰.
// Sub-category 이름은 Figma 원본 verbatim:
//   - "h-padding"        : horizontal padding
//   - "conrner radius"   : Figma 원본 typo 그대로 (corner)
//   - "container size", "dot size", "icon size", "text size" : Badge sub-categories

export const button = {
  gap: {
    "4xl": 12,
    "3xl": 8,
    "2xl": 8,
    xl: 6,
    lg: 6,
    md: 4,
    sm: 4,
    xs: 4,
    xxs: 2,
  },
  "h-padding": {
    "4xl": 24,
    "3xl": 24,
    "2xl": 16,
    xl: 12,
    lg: 12,
    md: 8,
    sm: 8,
    xs: 6,
    xxs: 4,
  },
  border: {
    "4xl": 3,
    "3xl": 2.5,
    "2xl": 2,
    xl: 1.5,
    lg: 1,
    md: 1,
    sm: 1,
    xs: 1,
    xxs: 1,
  },
  "conrner radius": {
    "4xl": 14,
    "3xl": 12,
    "2xl 2": 10,
    "2xl": 8,
    xl: 8,
    lg: 6,
    md: 6,
    sm: 4,
    xs: 4,
    xxs: 4,
  },
  "text-padding": {
    "4xl": 8,
    "3xl": 8,
    "2xl": 8,
    xl: 8,
    lg: 4,
    md: 4,
    sm: 4,
    xs: 4,
    xxs: 4,
  },
  size: {
    "4xl": 96,
    "3xl": 80,
    "2xl": 64,
    xl: 48,
    lg: 40,
    md: 32,
    sm: 28,
    xs: 24,
    xxs: 20,
  },
};

export const badge = {
  "container size": {
    xl: 40,
    lg: 32,
    md: 24,
    sm: 18,
    xs: 14,
  },
  "dot size": {
    xl: 12,
    lg: 10,
    md: 8,
    sm: 6,
    xs: 4,
  },
  "icon size": {
    xl: 24,
    lg: 20,
    md: 14,
    sm: 10,
    xs: 10,
  },
  "text size": {
    xl: 24,
    lg: 18,
    md: 16,
    sm: 12,
    xs: 10,
  },
  border: {
    xl: 3,
    lg: 2.4,
    md: 1.8,
    sm: 1.35,
    xs: 1,
  },
};

export const gnb = {
  gap: 4,
  radius: 4,
  border_hover: 1,
  border_focused: 2,
  padding: 2,
  title: 2,
};

export const table = {
  padding: {
    xs_24: 8,
    sm_28: 8,
    md_32: 8,
    lg_40: 8,
    xl_48: 12,
    "2xl_56": 12,
  },
  height: {
    xs_24: 24,
    sm_28: 28,
    md_32: 32,
    lg_40: 40,
    xl_48: 48,
    "2xl_56": 56,
  },
  "text-size": {
    xs_24: 14,
    sm_28: 14,
    md_32: 14,
    lg_40: 16,
    xl_48: 16,
    "2xl_56": 18,
  },
  gap: {
    xs_24: 4,
    sm_28: 4,
    md_32: 8,
    lg_40: 8,
    xl_48: 12,
    "2xl_56": 16,
  },
};

export const chip = {
  gap: {
    xs: 4,
    sm: 6,
    md: 8,
  },
  radius: {
    xs: 4,
    circle: 999,
  },
  padding: {
    sm: 8,
    md: 10,
    lg: 12,
  },
  height: {
    xs: 28,
    sm: 32,
    md: 40,
  },
};

export const selectionControl = {
  icon: {
    sm: 16,
    md: 20,
    lg: 24,
  },
  text: {
    sm: 16,
    md: 20,
    lg: 24,
  },
};

export const inputDropdown = {
  padding: {
    xs_24: 4,
    sm_28: 8,
    md_32: 8,
    lg_40: 12,
    xl_48: 12,
    "2xl_64": 16,
  },
  height: {
    xs_24: 24,
    sm_28: 28,
    md_32: 32,
    lg_40: 40,
    xl_48: 48,
    "2xl_64": 64,
  },
  "corner radius": {
    xs_24: 4,
    sm_28: 4,
    md_32: 4,
    lg_40: 6,
    xl_48: 6,
    "2xl_64": 8,
  },
};

export const toolbar = {
  gap: 6,
  radius: 4,
  border_hover: 1,
  border_focused: 2,
  padding: 2,
  title: 2,
};

export const progressBar = {
  height_xs: 2,
  height_sm: 4,
  height_md: 8,
  height_lg: 12,
  "conrner radius_pill": 99,
  "conrner radius_square": 0,
};

export const notification = {
  "padding-md": 16,
  "padding-lg": 16,
  "gap-md": 8,
  "gap-lg": 12,
  "radius-md": 8,
  "radius-lg": 8,
  "radius-bar": 0,
  "text-padding-md": 2,
  "text-padding-lg": 4,
};

export const avatar = {
  stroke: {
    xs: 1,
    sm: 1.6,
    md: 2.2,
    lg: 2.6,
    xl: 3,
    "2xl": 4.2,
  },
  "corner radius": {
    circle: 999,
    rounded: 12,
    "rounded-ring": 14,
    square: 0,
  },
};

export const card = {
  "corner radius md": 8,
  "corner radius sm": 12,
};

export const textinput = {
  common: {
    height: 20,
    "height 2": 32,
  },
  padding: {
    "4xl_96": 32,
    "3xl_80": 24,
    "2xl_64": 16,
    xl_48: 12,
    lg_40: 12,
    md_32: 8,
    sm_28: 8,
    xs_24: 6,
    underline: 0,
  },
  "corner radius": {
    "4xl_96": 12,
    "3xl_80": 8,
    "2xl_64": 8,
    xl_48: 6,
    lg_40: 6,
    md_32: 4,
    sm_28: 4,
    xs_24: 4,
    underline: 0,
  },
  border: {
    "4xl_96": 4,
    "3xl_80": 3,
    "2xl_64": 2,
    xl_48: 1.5,
    lg_40: 1,
    md_32: 1,
    sm_28: 1,
    xs_24: 1,
    underline: 0,
  },
  "border-hover": {
    "4xl_96": 5,
    "3xl_80": 4,
    "2xl_64": 3,
    xl_48: 3,
    lg_40: 2,
    md_32: 2,
    sm_28: 2,
    xs_24: 2,
    underline: 0,
  },
};

export const tooltip = {
  "padding-md": 8,
  "padding-lg": 8,
  "radius-md": 4,
  "radius-lg": 4,
};

export const tab = {
  lined: {
    "height-xxs": 24,
    "height-xs": 28,
    "height-sm": 32,
    "height-md": 40,
    "height-lg": 48,
    "h-padding-xxs": 12,
    "h-padding-xs": 12,
    "h-padding-sm": 12,
    "h-padding-md": 16,
    "h-padding-lg": 20,
    "radius-xxs": 4,
    "radius-xs": 4,
    "radius-sm": 4,
    "radius-md": 4,
    "radius-lg": 6,
    "border-xxs": 2,
    "border-xs": 2,
    "border-sm": 2,
    "border-md": 2,
    "border-lg": 2,
    gap: 2,
  },
  contained: {
    "height-xxs": 24,
    "height-xs": 28,
    "height-sm": 32,
    "height-md": 40,
    "height-lg": 48,
    padding: 1,
    "h-padding-xxs": 12,
    "h-padding-xs": 12,
    "h-padding-sm": 12,
    "h-padding-md": 16,
    "h-padding-lg": 20,
    "border-xxs": 1,
    "border-xs": 1,
    "border-sm": 1,
    "border-md": 1,
    "border-lg": 2,
    gap: 2,
  },
};

export const tag = {
  height: {
    xs: 18,
    sm: 20,
    md: 24,
  },
  radius: {
    xs: 2,
  },
  padding: {
    xs: 6,
    sm: 8,
    md: 10,
  },
};

export const breadcrumb = {
  gap: 4,
  radius: 4,
  border_hover: 1,
  border_focused: 2,
  padding: 2,
};

export const segmentedControl = {
  "height-sm-outline": 24,
  "height-md-outline": 28,
  "height-lg-outline": 32,
  "height-sm-solid": 20,
  "height-md-solid": 24,
  "height-lg-solid": 28,
  "width-sm-solid": 24,
  "width-md-solid": 28,
  "width-lg-solid": 32,
  "h-padding-sm": 8,
  "h-padding-md": 12,
  "h-padding-lg": 12,
  "h-padding-sm-icon only": 2,
  "h-padding-md-icon only": 4,
  "h-padding-lg-icon only": 6,
  "radius-sm": 4,
  "radius-md": 4,
  "radius-lg": 4,
  "border-sm": 2,
  "border-md": 2,
  "border-lg": 2,
  gap: 2,
};

export const menu = {
  gap: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
  },
  radius: {
    xs: 2,
    sm: 4,
  },
  height: {
    sm: 32,
  },
  border: {
    xs: 1,
    sm: 2,
  },
  padding: {
    xxs: 2,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
  },
};

export const modal = {
  padding: 20,
  gap: 16,
  "gap-text": 8,
  "gap-icon": 12,
  radius: 2,
};

export const popover = {
  "padding-md": 12,
  "padding-lg": 8,
  "radius-md": 4,
  "radius-lg": 4,
  "gap-content": 8,
  gap: 12,
};

export const coachmark = {
  radius: 2,
  padding: 20,
  gap: 16,
  "gap-text": 8,
};

export const popup = {
  radius: 4,
  border: 1,
  padding: 4,
  header_padding: 8,
  footer_padding: 8,
  section_padding: 12,
  gap: 4,
  section_contents_gap: 16,
};

// quantityStepper: Figma 원본 namespace 이름에 한글 prefix `[민지-삭제예정 test]` 포함됨 (mojibake로 깨져 들어옴) — 정리/제거 후보
export const quantityStepper = {
  quantity_number: 95,
};
