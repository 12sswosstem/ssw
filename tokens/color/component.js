// Color · Component Tokens
// Source: Figma Variable Collection — Color_component (light/dark modes)
// 각 leaf: { light: "#hex", dark: "#hex" }
// 컴포넌트별 nested 구조 (button.bg.brand-primary, modal.outline-critical 등)

export const hmi = {
  bg: {
    active: { light: "#FFFFFF", dark: "#020202" },
    default: { light: "#FFFFFF", dark: "#020202" },
    dim: { light: "#FFFFFF66", dark: "#00000066" },
    disabled: { light: "#BCBCBC", dark: "#2B2B2B" },
    hover: { light: "#FFFFFF0D", dark: "#020202" },
    selected: { light: "#EB61001A", dark: "#020202" },
  },
  border: {
    default: { light: "#BCBCBC", dark: "#8F8F8F" },
    illust: { light: "#565656", dark: "#E9E9E9" },
    logo: { light: "#EB6100", dark: "#FFFFFF" },
  },
  etc: {
    error: { light: "#F03823", dark: "#F03823" },
    "required mark": { light: "#F03823", dark: "#D2D2D2" },
    success: { light: "#05834E", dark: "#05834E" },
  },
  icon: {
    default: { light: "#8F8F8F", dark: "#727272" },
  },
  text: {
    accent: { light: "{HMI.text.secondary-label}", dark: "{HMI.text.secondary-label}" },
    disabled: { light: "#8F8F8F", dark: "#BCBCBC" },
    fg: {
      active: { light: "#2B2B2B", dark: "#E9E9E9" },
      default: { light: "#8F8F8F", dark: "#D2D2D2" },
      disabled: { light: "#8F8F8F", dark: "#BCBCBC" },
    },
    placeholder: { light: "#8F8F8F", dark: "#A5A5A5" },
    "primary-active": { light: "#020202", dark: "#FEFEFE" },
    "primary-default": { light: "#565656", dark: "#D2D2D2" },
    read: { light: "#727272", dark: "#A5A5A5" },
    "secondary-label": { light: "#727272", dark: "#727272" },
  },
};

export const string1 = { light: "year.month.day", dark: "year.month.day" };

export const badge = {
  "accent-bg": { light: "#F03823", dark: "#F03823" },
  border: { light: "#FFFFFF", dark: "#DDDDDD" },
  "brand-bg": { light: "#EB6100", dark: "#EB6100" },
  "icon-default": { light: "#565656", dark: "#8F8F8F" },
  "icon-invert": { light: "#FFFFFF", dark: "#1D1D1D" },
  "neutral-bg": { light: "#1D1D1D", dark: "#FFFFFF" },
};

export const bgActive = { light: "#FEF7F2", dark: "#5E2700" };

export const bgDate = { light: "#FFFFFF", dark: "#393939" };

export const bgDay = { light: "#EEEEEE", dark: "#393939" };

export const bgDefault = { light: "#FFFFFF", dark: "#2B2B2B" };

export const bgDual = { light: "#F9F9F9", dark: "#393939" };

export const bgFirst = { light: "#F5C700", dark: "#724800" };

export const bgGeneral = { light: "#F03823", dark: "#9C2113" };

export const bgGeneral2 = { light: "#F03823", dark: "#F03823" };

export const bgHover = { light: "#F4F4F4", dark: "#565656" };

export const bgIcon = { light: "#565656", dark: "#A5A5A5" };

export const bgImaging = { light: "#A65CE7", dark: "#A65CE7" };

export const bgInpatient = { light: "#27CAD8", dark: "#056C5C" };

export const bgInpatient2 = { light: "#27CAD8", dark: "#27CAD8" };

export const bgLabTest = { light: "#FF98BB", dark: "#FF98BB" };

export const bgMedication = { light: "#1286CD", dark: "#1286CD" };

export const bgNight = { light: "#DDC1F6", dark: "#3B006F" };

export const bgReservation = { light: "#FFB9D0", dark: "#880033" };

export const bgReservation2 = { light: "#FFBCB4", dark: "#FFBCB4" };

export const bgReturn = { light: "#52A119", dark: "#2C5C09" };

export const bgSelect = { light: "#FEF7F2", dark: "#5E2700" };

export const bgToday = { light: "#EB6100", dark: "#EB6100" };

export const brandAccent = { light: "#FFFFFF", dark: "#727272" };

export const breadcrumb = {
  border: { light: "#000000", dark: "#F4F4F4" },
  border_selected_hover: { light: "#BC4E00", dark: "#BC4E00" },
  "text-current": { light: "#000000", dark: "#F4F4F4" },
  "text-default": { light: "#565656", dark: "#BCBCBC" },
  "text-focused": { light: "#000000", dark: "#F4F4F4" },
  "text-hover": { light: "#000000", dark: "#F4F4F4" },
  "text-selected": { light: "#EB6100", dark: "#EB6100" },
  "text-selected_focused": { light: "#BC4E00", dark: "#BC4E00" },
  "text-selected_hover": { light: "#BC4E00", dark: "#BC4E00" },
};

export const button = {
  bg: {
    "brand-primary": { light: "#EB6100", dark: "#EB6100" },
    "brand-secondary": { light: "#FFFFFF", dark: "#F9F9F9" },
    "brand-tertiary": { light: "#FBDFCC", dark: "#BC4E00" },
    "destructive-primary": { light: "#F03823", dark: "#F03823" },
    "destructive-secondary": { light: "#FFFFFF00", dark: "#FFFFFF00" },
    "disabled-gray": { light: "#BCBCBC", dark: "#1D1D1D" },
    "disabled-inactive": { light: "#BCBCBC", dark: "#8F8F8F" },
    "neutral-primary": { light: "#2B2B2B", dark: "#8F8F8F" },
    "neutral-secondary": { light: "#FFFFFF", dark: "#1D1D1D" },
    "neutral-tertiary": { light: "#E9E9E9", dark: "#2B2B2B" },
    subtle: { light: "#FFFFFF00", dark: "#FFFFFF00" },
  },
  border: {
    "brand-primary": { light: "#EB6100", dark: "#EB6100" },
    "brand-secondary": { light: "#727272", dark: "#565656" },
    "brand-tertiary": { light: "#FFFFFF00", dark: "#FFFFFF00" },
    "destructive-primary": { light: "#F03823", dark: "#F03823" },
    "destructive-secondary": { light: "#F03823", dark: "#F03823" },
    "disabled-gray": { light: "#A5A5A5", dark: "#1D1D1D" },
    "disabled-inactive": { light: "#BCBCBC", dark: "#BCBCBC" },
    "neutral-primary": { light: "#2B2B2B", dark: "#8F8F8F" },
    "neutral-secondary": { light: "#A5A5A5", dark: "#565656" },
    "neutral-tertiary": { light: "#A5A5A5", dark: "#565656" },
    subtle: { light: "#373D4C00", dark: "#373D4C00" },
  },
  common: {
    default: { light: "#00000000", dark: "#00000000" },
    "focus-ring": { light: "#000000", dark: "#000000" },
    "focus-ring 2": { light: "#FEFEFE", dark: "#0E0E0E" },
    hover: { light: "#0000000D", dark: "#0000000D" },
    "hover-neutral": { light: "#FFFFFF0D", dark: "#3B63FB1A" },
    pressed: { light: "#0000001A", dark: "#00000026" },
    "pressed-neutral": { light: "#FFFFFF1A", dark: "#3B63FB33" },
    selected: { light: "#3B63FB33", dark: "#3B63FB33" },
  },
  etc: {
    border: { light: "#DADADA", dark: "#DADADA" },
    "container-bg-default": { light: "#FFFFFF", dark: "#FFFFFF" },
    "container-bg-hover": { light: "#F8F8F8", dark: "#F8F8F8" },
    "container-bg-selected": { light: "#FFFFFF", dark: "#FFFFFF" },
    "fg-default": { light: "#FFFFFF", dark: "#FFFFFF" },
    "fg-disabled": { light: "#FFFFFF", dark: "#FFFFFF" },
    "fg-selected": { light: "#00E1FF", dark: "#00E1FF" },
    "fg-selected-2": { light: "#CAD1DE", dark: "#CAD1DE" },
    "fg-selected-2-detail": { light: "#B5BDD0", dark: "#B5BDD0" },
    "fg-selected-detail": { light: "#00E1FF", dark: "#00E1FF" },
  },
  fg: {
    "brand-primary": { light: "#F9F9F9", dark: "#F9F9F9" },
    "brand-secondary": { light: "#EB6100", dark: "#F7C099" },
    "brand-tertiary": { light: "#EB6100", dark: "#FBDFCC" },
    "destructive-primary": { light: "#F9F9F9", dark: "#F9F9F9" },
    "destructive-secondary": { light: "#F03823", dark: "#F03823" },
    "disabled-gray": { light: "#A5A5A5", dark: "#393939" },
    "disabled-inactive": { light: "#A5A5A5", dark: "#8F8F8F" },
    "neutral-primary": { light: "#F9F9F9", dark: "#FFFFFF" },
    "neutral-secondary": { light: "#565656", dark: "#BCBCBC" },
    "neutral-tertiary": { light: "#565656", dark: "#F9F9F9" },
    subtle: { light: "#565656", dark: "#BCBCBC" },
  },
  icon: {
    brand: { light: "#EB6100", dark: "#EB6100" },
    dark: { light: "#F9F9F9", dark: "#1D1D1D" },
    destructive: { light: "#F03823", dark: "#F03823" },
    "disabled-gray": { light: "#E9E9E9", dark: "#8F8F8F" },
    "disabled-inactive": { light: "#A5A5A5", dark: "#8F8F8F" },
    invert: { light: "#F9F9F9", dark: "#393939" },
    neutral: { light: "#8F8F8F", dark: "#BCBCBC" },
  },
};

export const calendar = {
  bg: {
    bg_active: { light: "#FEF7F2", dark: "#5E2700" },
    bg_date: { light: "#FFFFFF", dark: "#393939" },
    bg_day: { light: "#EEEEEE", dark: "#393939" },
    bg_default: { light: "#FFFFFF", dark: "#2B2B2B" },
    bg_dual: { light: "#F9F9F9", dark: "#393939" },
    bg_hover: { light: "#F4F4F4", dark: "#565656" },
    bg_select: { light: "#FEF7F2", dark: "#5E2700" },
    bg_today: { light: "#EB6100", dark: "#EB6100" },
  },
  border: {
    default: { light: "#E9E9E9", dark: "#393939" },
    disabled: { light: "#A5A5A5", dark: "#565656" },
    focused: { light: "#000000", dark: "#000000" },
    hover: { light: "#EB6100", dark: "#EB6100" },
    thisweek: { light: "#1286CD", dark: "#1286CD" },
  },
  legend: {
    bg_first: { light: "#F5C700", dark: "#724800" },
    bg_general: { light: "#F03823", dark: "#9C2113" },
    bg_icon: { light: "#565656", dark: "#A5A5A5" },
    bg_imaging: { light: "#A65CE7", dark: "#A65CE7" },
    bg_inpatient: { light: "#27CAD8", dark: "#056C5C" },
    "bg_lab-test": { light: "#FF98BB", dark: "#FF98BB" },
    bg_medication: { light: "#1286CD", dark: "#1286CD" },
    bg_night: { light: "#DDC1F6", dark: "#3B006F" },
    bg_reservation: { light: "#FFB9D0", dark: "#880033" },
    bg_return: { light: "#52A119", dark: "#2C5C09" },
  },
  mark: {
    bg_general: { light: "#F03823", dark: "#F03823" },
    bg_inpatient: { light: "#27CAD8", dark: "#27CAD8" },
    bg_reservation: { light: "#FFBCB4", dark: "#FFBCB4" },
    "mark_doctor-1": { light: "#FF4885", dark: "#FF4885" },
    "mark_doctor-2": { light: "#B539C8", dark: "#B539C8" },
    "mark_doctor-3": { light: "#0DB595", dark: "#0DB595" },
    "mark_doctor-4": { light: "#B86D46", dark: "#B86D46" },
    mark_first: { light: "#F5C700", dark: "#F5C700" },
    mark_icon: { light: "#565656", dark: "#A5A5A5" },
    mark_imaging: { light: "#A65CE7", dark: "#A65CE7" },
    "mark_lab-test": { light: "#FF98BB", dark: "#FF98BB" },
    mark_medication: { light: "#1286CD", dark: "#1286CD" },
    mark_return: { light: "#52A119", dark: "#52A119" },
  },
  text: {
    default: { light: "#000000", dark: "#F4F4F4" },
    legend: { light: "#393939", dark: "#DDDDDD" },
    saturday: { light: "#4B75FF", dark: "#729EFD" },
    select: { light: "#FFFFFF", dark: "#FFFFFF" },
    sunday: { light: "#F03823", dark: "#FF7665" },
    today: { light: "#EB6100", dark: "#EF8133" },
  },
};

export const card = {
  bg: { light: "#FEFEFE", dark: "#0E0E0E" },
  icon: { light: "#565656", dark: "#D2D2D2" },
  "text-body": { light: "#393939", dark: "#E9E9E9" },
  "text-title": { light: "#1D1D1D", dark: "#FEFEFE" },
};

export const chip = {
  bg: {
    default: { light: "#FFFFFF", dark: "#1D1D1D" },
    disabled: { light: "#F4F4F4", dark: "#565656" },
    hover: { light: "#F4F4F4", dark: "#565656" },
    "selected-gray": { light: "#505050", dark: "#727272" },
    "selected-orange": { light: "#EF8133", dark: "#EB6100" },
  },
  font: {
    default: { light: "#393939", dark: "#FFFFFF" },
    disabled: { light: "#A5A5A5", dark: "#8F8F8F" },
    invert: { light: "#FFFFFF", dark: "#FFFFFF" },
    selected: { light: "#EB6100", dark: "#EB6100" },
  },
  icon: {
    default: { light: "#565656", dark: "#8F8F8F" },
    disabled: { light: "#A5A5A5", dark: "#8F8F8F" },
    invert: { light: "#FFFFFF", dark: "#FFFFFF" },
    selected: { light: "#EB6100", dark: "#EB6100" },
  },
  outline: {
    default: { light: "#BCBCBC", dark: "#393939" },
    disabled: { light: "#EEEEEE", dark: "#565656" },
    focused: { light: "#000000", dark: "#FFFFFF" },
    selected: { light: "#EF8133", dark: "#BC4E00" },
  },
};

export const coachmark = {
  bg: { light: "#FFFFFF", dark: "#393939" },
  "text-body": { light: "#393939", dark: "#FFFFFF" },
  "text-step": { light: "#8F8F8F", dark: "#A5A5A5" },
  "text-title": { light: "#000000", dark: "#FFFFFF" },
};

export const common = {
  "bg-test-border": { light: "#D2D2D2", dark: "#F9F9F9" },
  "bg-test-fg": { light: "#1D1D1D", dark: "#F9F9F9" },
  "focus-ring": { light: "#000000", dark: "#000000" },
  hover: { light: "#0000000D", dark: "#FFFFFF" },
  layout: {
    "bg-base": { light: "#FFFFFF", dark: "#020202" },
    "bg-layer1": { light: "#F9F9F9", dark: "#0E0E0E" },
    "bg-layer2": { light: "#E9E9E9", dark: "#1D1D1D" },
    "bg-layer3": { light: "#D2D2D2", dark: "#727272" },
  },
  pressed: { light: "#0000001A", dark: "#FFFFFF" },
  scroll: {
    bar: { light: "#D2D2D2", dark: "#565656" },
  },
};

export const control = {
  bg: {
    "bg-brand-1": { light: "#EB6100", dark: "#EB6100" },
    "bg-default": { light: "#FEFEFE", dark: "#1D1D1D" },
    "bg-disabled": { light: "#D2D2D2", dark: "#393939" },
    "bg-inactive": { light: "#D2D2D2", dark: "#393939" },
    "bg-selected": { light: "#EB6100", dark: "#EB6100" },
  },
  border: {
    "border-brand": { light: "#EB6100", dark: "#EB6100" },
    "border-default": { light: "#727272", dark: "#727272" },
    "border-disabled": { light: "#A5A5A5", dark: "#565656" },
  },
  common: {
    "bg-ranking": { light: "#D2D2D2", dark: "#393939" },
    default: { light: "#00000000", dark: "#00000000" },
    "fg-ranking": { light: "#1D1D1D", dark: "#1D1D1D" },
    "focus-ring": { light: "#000000", dark: "#000000" },
    hover: { light: "#00000033", dark: "#00000033" },
    "hover-brand": { light: "#3B63FB33", dark: "#3B63FB33" },
    pressed: { light: "#00000066", dark: "#00000033" },
    "pressed-brand": { light: "#3B63FB66", dark: "#3B63FB66" },
    "switch-border": { light: "#D2D2D2", dark: "#565656" },
  },
  fg: {
    "fg-default": { light: "#FEFEFE", dark: "#FEFEFE" },
    "fg-disabled": { light: "#A5A5A5", dark: "#727272" },
  },
  text: {
    "text-active": { light: "#1D1D1D", dark: "#FFFFFF" },
    "text-default": { light: "#565656", dark: "#E9E9E9" },
    "text-disabled": { light: "#A5A5A5", dark: "#565656" },
  },
};

// `default` is a reserved word in JS — renamed to `defaultColor`.
// `default2` is renamed alongside for naming consistency.
export const defaultColor = { light: "#000000", dark: "#F4F4F4" };

export const defaultColor2 = { light: "#E9E9E9", dark: "#393939" };

export const disabled = { light: "#A5A5A5", dark: "#565656" };

export const divider = {
  line: { light: "#E9E9E9", dark: "#565656" },
  line_contents: { light: "#BCBCBC", dark: "#565656" },
  text: { light: "#A5A5A5", dark: "#A5A5A5" },
};

export const dropdown = {
  bg: {
    default: { light: "#FFFFFF", dark: "#020202" },
    disabled: { light: "#EEEEEE", dark: "#2B2B2B" },
    menu_bg: { light: "#FFFFFF", dark: "#1D1D1D" },
    menu_hover: { light: "#F4F4F4", dark: "#565656" },
    selected: { light: "#FEF7F2", dark: "#5E2700" },
  },
  border: {
    default: { light: "#A5A5A5", dark: "#2B2B2B" },
    default_mpr: { light: "#A5A5A5", dark: "#1D1D1D" },
    disabled: { light: "#BCBCBC", dark: "#565656" },
    focused: { light: "#000000", dark: "#000000" },
    hover: { light: "#EB6100", dark: "#EB6100" },
    menu_border: { light: "#EEEEEE", dark: "#565656" },
    selected: { light: "#F7C099", dark: "#EF8133" },
  },
  etc: {
    error: { light: "#F03823", dark: "#F03823" },
    "required mark": { light: "#F03823", dark: "#D2D2D2" },
    "scroll-default": { light: "#E9E9E9", dark: "#565656" },
    success: { light: "#05834E", dark: "#05834E" },
  },
  text: {
    default: { light: "#2B2B2B", dark: "#E9E9E9" },
    disabled: { light: "#A5A5A5", dark: "#BCBCBC" },
    label: { light: "#565656", dark: "#F9F9F9" },
    placeholder: { light: "#8F8F8F", dark: "#A5A5A5" },
    "read only": { light: "#8F8F8F", dark: "#A5A5A5" },
  },
};

export const expandableList = {
  "bg-default": { light: "#FFFFFF", dark: "#0E0E0E" },
  "bg-disabled": { light: "#E9E9E9", dark: "#E9E9E9" },
  "bg-selected": { light: "#F4F4F4", dark: "#393939" },
  "border-default": { light: "#BCBCBC", dark: "#565656" },
  "border-disabled": { light: "#D2D2D2", dark: "#D2D2D2" },
  "border-selected": { light: "#BCBCBC", dark: "#565656" },
  "text-disabled": { light: "#A5A5A5", dark: "#A5A5A5" },
  "text-primary": { light: "#1D1D1D", dark: "#E9E9E9" },
  "text-secondary": { light: "#727272", dark: "#D2D2D2" },
};

export const focused = { light: "#000000", dark: "#000000" };

export const gnb = {
  bg: {
    "gnb-bg": { light: "#727272", dark: "#8F8F8F" },
    "gnb-bg-onesw": { light: "#D2D2D2", dark: "#8F8F8F" },
    "gnb-bg-pms": { light: "#F9F9F9", dark: "#8F8F8F" },
  },
  container: {
    "container-bg-default": { light: "#F9F9F9", dark: "#727272" },
    "container-bg-hover": { light: "#EEEEEE", dark: "#393939" },
    "container-bg-selected": { light: "#FFFFFF", dark: "#1D1D1D" },
    "container-bg-selected-brand": { light: "#FEF7F2", dark: "#F7C099" },
  },
  etc: {
    border: { light: "#BCBCBC", dark: "#393939" },
    divider: { light: "#A5A5A5", dark: "#727272" },
    "text default": { light: "#565656", dark: "#E9E9E9" },
    text_active: { light: "#1D1D1D", dark: "#FFFFFF" },
    text_disabled: { light: "#8F8F8F", dark: "#8F8F8F" },
  },
  icon: {
    "icon-default": { light: "#8F8F8F", dark: "#565656" },
    "icon-hover": { light: "#565656", dark: "#D2D2D2" },
    "icon-selected": { light: "#393939", dark: "#FFFFFF" },
    "icon-selected line": { light: "#EB6100", dark: "#EB6100" },
    "icon-stroke": { light: "#8F8F8F", dark: "#BCBCBC" },
  },
  "xx-bg": {
    bg_base: { light: "#F4F4F4", dark: "#393939" },
    bg_ct: { light: "#F9F9F9", dark: "#F9F9F9" },
    "bg_layer _1": { light: "#393939", dark: "#393939" },
    bg_layer_2: { light: "#F4F4F4", dark: "#2B2B2B" },
  },
};

export const hover = { light: "#EB6100", dark: "#EB6100" };

export const inputCommon = {
  bg: {
    default: { light: "#FFFFFF", dark: "#020202" },
    disabled: { light: "#BCBCBC", dark: "#2B2B2B" },
  },
  border: {
    default: { light: "#BCBCBC", dark: "#2B2B2B" },
    disabled: { light: "#A5A5A5", dark: "#565656" },
    focused: { light: "#000000", dark: "#000000" },
    hover: { light: "#EB6100", dark: "#BC4E00" },
  },
  etc: {
    error: { light: "#F03823", dark: "#F03823" },
    "required mark": { light: "#F03823", dark: "#D2D2D2" },
    success: { light: "#05834E", dark: "#05834E" },
  },
  icon: {
    default: { light: "#8F8F8F", dark: "#8F8F8F" },
  },
  text: {
    default: { light: "#2B2B2B", dark: "#E9E9E9" },
    disabled: { light: "#8F8F8F", dark: "#BCBCBC" },
    fg: {
      active: { light: "#2B2B2B", dark: "#E9E9E9" },
      default: { light: "#8F8F8F", dark: "#D2D2D2" },
      disabled: { light: "#8F8F8F", dark: "#BCBCBC" },
    },
    label: { light: "#565656", dark: "#F9F9F9" },
    placeholder: { light: "#8F8F8F", dark: "#A5A5A5" },
    "read only": { light: "#727272", dark: "#A5A5A5" },
    "read only-pms": { light: "#2B2B2B", dark: "#A5A5A5" },
  },
};

export const legend = { light: "#393939", dark: "#DDDDDD" };

export const list = {
  bg: {
    active: { light: "#FFFFFF", dark: "#020202" },
    default: { light: "#FFFFFF", dark: "#020202" },
    disabled: { light: "#BCBCBC", dark: "#2B2B2B" },
    hover: { light: "#FFFFFF0D", dark: "#020202" },
    selected: { light: "#EB61001A", dark: "#EB610026" },
  },
  border: {
    default: { light: "#BCBCBC", dark: "#393939" },
  },
  etc: {
    error: { light: "#F03823", dark: "#F03823" },
    "required mark": { light: "#F03823", dark: "#D2D2D2" },
    success: { light: "#05834E", dark: "#05834E" },
  },
  icon: {
    default: { light: "#8F8F8F", dark: "#727272" },
  },
  text: {
    disabled: { light: "#8F8F8F", dark: "#BCBCBC" },
    fg: {
      active: { light: "#2B2B2B", dark: "#E9E9E9" },
      default: { light: "#8F8F8F", dark: "#D2D2D2" },
      disabled: { light: "#8F8F8F", dark: "#BCBCBC" },
    },
    placeholder: { light: "#8F8F8F", dark: "#A5A5A5" },
    "primary-active": { light: "#020202", dark: "#FEFEFE" },
    "primary-default": { light: "#565656", dark: "#D2D2D2" },
    read: { light: "#727272", dark: "#A5A5A5" },
    "secondary-label": { light: "#727272", dark: "#727272" },
  },
};

export const markDoctor1 = { light: "#FF4885", dark: "#FF4885" };

export const markDoctor2 = { light: "#B539C8", dark: "#B539C8" };

export const markDoctor3 = { light: "#0DB595", dark: "#0DB595" };

export const markDoctor4 = { light: "#B86D46", dark: "#B86D46" };

export const markFirst = { light: "#F5C700", dark: "#F5C700" };

export const markIcon = { light: "#565656", dark: "#A5A5A5" };

export const markImaging = { light: "#A65CE7", dark: "#A65CE7" };

export const markLabTest = { light: "#FF98BB", dark: "#FF98BB" };

export const markMedication = { light: "#1286CD", dark: "#1286CD" };

export const markReturn = { light: "#52A119", dark: "#52A119" };

export const menu = {
  "bg-default": { light: "#FFFFFF", dark: "#1D1D1D" },
  "bg-disabled": { light: "#E9E9E9", dark: "#2B2B2B" },
  "bg-hover": { light: "#E9E9E9", dark: "#2B2B2B" },
  "bg-layout": { light: "#FFFFFF", dark: "#1D1D1D" },
  "bg-selected": { light: "#FEF7F2", dark: "#EB61004D" },
  "border-active": { light: "#1D1D1D", dark: "#FFFFFF" },
  "border-default": { light: "#BCBCBC", dark: "#E9E9E9" },
  "border-selected": { light: "#F3A066", dark: "#BC4E00" },
  divider: { light: "#BCBCBC", dark: "#8F8F8F" },
  "divider-danger": { light: "#D73220", dark: "#FF7665" },
  "divider-disabled": { light: "#BCBCBC", dark: "#565656" },
  "divider-selected": { light: "#F7C099", dark: "#EF8133" },
  "fg-default": { light: "#1D1D1D", dark: "#393939" },
  "fg-disabled": { light: "#A5A5A5", dark: "#2B2B2B" },
  "fg-hover": { light: "#1D1D1D", dark: "#2B2B2B" },
  "fg-selected": { light: "#EB6100", dark: "#1D1D1D" },
  icon: { light: "#565656", dark: "#E9E9E9" },
  "icon-danger": { light: "#D73220", dark: "#FF7665" },
  "icon-default": { light: "#393939", dark: "#FFFFFF" },
  "icon-disabled": { light: "#A5A5A5", dark: "#565656" },
  "icon-hover": { light: "#393939", dark: "#2B2B2B" },
  "icon-selected": { light: "#EB6100", dark: "#FFFFFF" },
  "section-divider": { light: "#BCBCBC", dark: "#565656" },
  "text-danger": { light: "#D73220", dark: "#FF7665" },
  "text-disabled": { light: "#A5A5A5", dark: "#565656" },
  "text-primary": { light: "#1D1D1D", dark: "#FEFEFE" },
  "text-secondary": { light: "#393939", dark: "#E9E9E9" },
  "text-selected": { light: "#EB6100", dark: "#FFFFFF" },
};

export const modal = {
  bg: { light: "#FFFFFF", dark: "#393939" },
  "outline-critical": { light: "#F03823", dark: "#F03823" },
  "outline-general": { light: "#727272", dark: "#BCBCBC" },
  "outline-info": { light: "#3B63FB", dark: "#3B63FB" },
  "outline-question": { light: "#9A47E2", dark: "#9A47E2" },
  "outline-success": { light: "#05834E", dark: "#05834E" },
  "outline-warning": { light: "#E6AF00", dark: "#E6AF00" },
  "text-body-secondary": { light: "#393939", dark: "#E9E9E9" },
  "text-title-primary": { light: "#000000", dark: "#FFFFFF" },
};

export const notification = {
  "bg-default": { light: "#FFFFFF", dark: "#FFFFFF" },
  "bg-general": { light: "#F4F4F4", dark: "#F4F4F4" },
  "bg-general-2": { light: "#2B2B2B", dark: "#F4F4F4" },
  "bg-general-3": { light: "#2B2B2B", dark: "#F4F4F4" },
  "bg-general-default": { light: "#2B2B2B", dark: "#F4F4F4" },
  "bg-info-primary": { light: "#CBE2FE", dark: "#F4F4F4" },
  "bg-invert-00": { light: "#E9E9E9", dark: "#393939" },
  "bg-warning": { light: "#2B2B2B", dark: "#F4F4F4" },
  "border-default": { light: "#A5A5A5", dark: "#FFFFFF" },
  "border-info 2": { light: "#A5A5A5", dark: "#FFFFFF" },
  "critical-primary": { light: "#F03823", dark: "#FFFFFF" },
  "critical-primary 2": { light: "#FFEBE8", dark: "#FFFFFF" },
  icon: { light: "#FFFFFF", dark: "#000000" },
  "info-primary": { light: "#3B63FB", dark: "#FFFFFF" },
  "info-primary 2": { light: "#E5F0FE", dark: "#FFFFFF" },
  invert2: { light: "#1D1D1D", dark: "#000000" },
  "question-primary": { light: "#9A47E2", dark: "#FFFFFF" },
  "question-primary 2": { light: "#F4EBFC", dark: "#FFFFFF" },
  "shadow-00": { light: "#D2D2D2", dark: "#565656" },
  "success-primary": { light: "#0BA45D", dark: "#FFFFFF" },
  "success-primary 2": { light: "#D7F7E1", dark: "#FFFFFF" },
  "text-default-button text": { light: "#BCBCBC", dark: "#565656" },
  "text-default-title": { light: "#FFFFFF", dark: "#000000" },
  "text-default-title 2": { light: "#FFFFFF", dark: "#000000" },
  "text-invert-title-00": { light: "#000000", dark: "#FFFFFF" },
  "warning-primary": { light: "#E6AF00", dark: "#FFFFFF" },
  "warning-primary 2": { light: "#FFF8CC", dark: "#FFFFFF" },
};

export const popover = {
  "bg-default": { light: "#2B2B2B", dark: "#F9F9F9" },
  "bg-info": { light: "#E5F0FE", dark: "#0C1F69" },
  "bg-inverted": { light: "#F9F9F9", dark: "#2B2B2B" },
  "bg-warning": { light: "#FFF197", dark: "#724800" },
  "line-info": { light: "#ACCFFD", dark: "#274DEA" },
  "line-warning": { light: "#F5C700", dark: "#AF7400" },
};

export const popup = {
  bg: { light: "#F4F4F4", dark: "#1D1D1D" },
  "bg-container": { light: "#F4F4F4", dark: "#1D1D1D" },
  "bg-footer": { light: "#F4F4F4", dark: "#1D1D1D" },
  "bg-header": { light: "#F4F4F4", dark: "#1D1D1D" },
  "bg-surface": { light: "#FFFFFF", dark: "#393939" },
  border: { light: "#A5A5A5", dark: "#393939" },
  "border-surface": { light: "#DDDDDD", dark: "#393939" },
  "text-contents-body": { light: "#000000", dark: "#E9E9E9" },
  "text-contents-title": { light: "#000000", dark: "#E9E9E9" },
  "text-header-sub title": { light: "#565656", dark: "#D2D2D2" },
  "text-header-title": { light: "#000000", dark: "#E9E9E9" },
};

export const progressCircleBar = {
  active: { light: "#1D1D1D", dark: "#FFFFFF" },
  "active-invert": { light: "#FFFFFF", dark: "#1D1D1D" },
  "active-primary-brand": { light: "#EB6100", dark: "#EB6100" },
  "active-primary-invert": { light: "#FEFEFE", dark: "#FEFEFE" },
  "active-primary-neutral": { light: "#EB6100", dark: "#EB6100" },
  bg: { light: "#FFFFFF", dark: "#1D1D1D" },
  inactive: { light: "#BCBCBC", dark: "#393939" },
  "progress bar_active": { light: "#3B63FB", dark: "#3B63FB" },
  "rest-invert": { light: "#8F8F8F", dark: "#D2D2D2" },
  "rest-primary": { light: "#E1E1E199", dark: "#565656" },
  "rest-secondary": { light: "#E9E9E9", dark: "#565656" },
  "text-inactive": { light: "#BCBCBC", dark: "#565656" },
  "text-main": { light: "#1D1D1D", dark: "#FFFFFF" },
  "text-sub": { light: "#565656", dark: "#D2D2D2" },
};

export const rating = {
  "bg-rest": { light: "#D2D2D2", dark: "#D2D2D2" },
  "bookmark-fill": { light: "#3B63FB", dark: "#3B63FB" },
  default: { light: "#8F8F8F", dark: "#8F8F8F" },
  "favorite-fill": { light: "#FFDE2C", dark: "#FFDE2C" },
  "like-fill": { light: "#EB6100", dark: "#EB6100" },
};

export const saturday = { light: "#4B75FF", dark: "#729EFD" };

export const segmentedControl = {
  bg: { light: "#FFFFFF", dark: "#565656" },
  "bg-default": { light: "#FFFFFF00", dark: "#FFFFFF00" },
  "bg-disabled": { light: "#FFFFFF00", dark: "#727272" },
  "bg-hover": { light: "#F4F4F4", dark: "#393939" },
  "bg-pressed": { light: "#EEEEEE", dark: "#1D1D1D" },
  "bg-selected": { light: "#FEFEFE", dark: "#1D1D1D" },
  border: { light: "#A5A5A5", dark: "#727272" },
  "border-selected": { light: "#EB6100", dark: "#EF8133" },
  container: {
    "bg-contained type": { light: "#FFFFFF", dark: "#2B2B2B" },
    "bg-solid type": { light: "#E9E9E9", dark: "#FFFFFF" },
    "border-contained type": { light: "#A5A5A5", dark: "#565656" },
    "border-solid type": { light: "#E9E9E9", dark: "#727272" },
  },
  "text-default": { light: "#727272", dark: "#D2D2D2" },
  "text-default-num": { light: "#EB6100", dark: "#EB6100" },
  "text-disabled": { light: "#A5A5A5", dark: "#A5A5A5" },
  "text-selected": { light: "#EB6100", dark: "#FEFEFE" },
  "text-selected-solid": { light: "#1D1D1D", dark: "#FEFEFE" },
};

export const select = { light: "#FFFFFF", dark: "#FFFFFF" };

export const slider = {
  handle_bg: { light: "#FFFFFF", dark: "#2B2B2B" },
  handle_bg_hover: { light: "#FFFFFF", dark: "#2B2B2B" },
  handle_bg_select: { light: "#FFFDFC", dark: "#8D3A00" },
  handle_border: { light: "#727272", dark: "#8F8F8F" },
  handle_border_hover: { light: "#727272", dark: "#EF8133" },
  handle_border_select: { light: "#EF8133", dark: "#EF8133" },
  handle_focused: { light: "{common.focus-ring}", dark: "{common.focus-ring}" },
  progress_off: { light: "#E9E9E9", dark: "#565656" },
  progress_on: { light: "#F9CFB2", dark: "#EF8133" },
  slider_text: { light: "#565656", dark: "#A5A5A5" },
};

export const sunday = { light: "#F03823", dark: "#FF7665" };

export const tab = {
  contained_tab: {
    "bg-default": { light: "#FFFFFF00", dark: "#FFFFFF00" },
    "bg-disabled": { light: "#FFFFFF00", dark: "#727272" },
    "bg-hover": { light: "#F8F8F8", dark: "#393939" },
    "bg-pressed": { light: "#EEEEEE", dark: "#1D1D1D" },
    "bg-selected": { light: "#FEFEFE", dark: "#393939" },
    "border-default": { light: "#FFFFFF00", dark: "#FFFFFF00" },
    "border-selected": { light: "#EB6100", dark: "#FFFFFF00" },
    "text-default": { light: "#000000", dark: "#D2D2D2" },
    "text-default-num": { light: "#EB6100", dark: "#EB6100" },
    "text-disabled": { light: "#A5A5A5", dark: "#A5A5A5" },
    "text-selected": { light: "#EB6100", dark: "#FEFEFE" },
  },
  container: {
    bg: { light: "#FFFFFF", dark: "#393939" },
    border: { light: "#A5A5A5", dark: "#1D1D1D" },
  },
  line_tab: {
    "bg-default": { light: "#FFFFFF00", dark: "#2B2B2B" },
    "bg-disabled": { light: "#FFFFFF00", dark: "#8F8F8F" },
    "bg-hover": { light: "#F4F4F4", dark: "#393939" },
    "bg-pressed": { light: "#EEEEEE", dark: "#1D1D1D" },
    "bg-selected": { light: "#FFFFFF", dark: "#393939" },
    "border-default": { light: "#FFFFFF00", dark: "#565656" },
    "border-selected": { light: "#000000", dark: "#BCBCBC" },
    "border-unselected": { light: "#A5A5A5", dark: "#A5A5A5" },
    icon: { light: "#393939", dark: "#F9F9F9" },
    "text-default": { light: "#565656", dark: "#F4F4F4" },
    "text-default-num": { light: "#EB6100", dark: "#EB6100" },
    "text-disabled": { light: "#A5A5A5", dark: "#565656" },
    "text-selected": { light: "#EB6100", dark: "#FEFEFE" },
  },
};

export const table = {
  bg: {
    "bg-cell-default": { light: "#FEFEFE", dark: "#1D1D1D" },
    "bg-cell-hover": { light: "#D2D2D2", dark: "#565656" },
    "bg-cell-selected": { light: "#F7C099", dark: "#5E2700" },
    "bg-cell-zebra": { light: "#F4F4F4", dark: "#2B2B2B" },
    "bg-header": { light: "#F4F4F4", dark: "#565656" },
    "bg-subheader": { light: "#E9E9E9", dark: "#2B2B2B" },
    "bg-sum": { light: "#DDDDDD", dark: "#393939" },
  },
  border: {
    "border-default": { light: "#D2D2D2", dark: "#565656" },
    "border-selected": { light: "#EB6100", dark: "#EF8133" },
    divider: { light: "#D2D2D2", dark: "#565656" },
  },
  icon: {
    default: { light: "#727272", dark: "#BCBCBC" },
  },
  text: {
    "text-cell": { light: "#393939", dark: "#E9E9E9" },
    "text-header": { light: "#1D1D1D", dark: "#FEFEFE" },
  },
};

export const tag = {
  accent: {
    black: { light: "#000000", dark: "#FFFFFF" },
    "black_for caution": { light: "#000000", dark: "#000000" },
    blue: { light: "#3B63FB", dark: "#5D89FF" },
    gray: { light: "#565656", dark: "#BCBCBC" },
    green: { light: "#05834E", dark: "#0BA45D" },
    indigo: { light: "#7155FA", dark: "#8480FE" },
    magenta: { light: "#D92361", dark: "#FF709F" },
    orange: { light: "#EB6100", dark: "#EF8133" },
    red: { light: "#D73220", dark: "#FF513D" },
    turquoise: { light: "#087E89", dark: "#0C9EAB" },
    white: { light: "#FFFFFF", dark: "#000000" },
    yellow: { light: "#F5C700", dark: "#E6AF00" },
    yellow_dark: { light: "#D29500", dark: "#E6AF00" },
  },
  bg: {
    blue: { light: "#E5F0FE", dark: "#0C1F69" },
    gray: { light: "#DDDDDD", dark: "#565656" },
    green: { light: "#D7F7E1", dark: "#002E22" },
    indigo: { light: "#EBEEFF", dark: "#2A0081" },
    magenta: { light: "#FFE8F0", dark: "#880033" },
    orange: { light: "#FDEFE5", dark: "#471D00" },
    red: { light: "#FFEBE8", dark: "#501006" },
    turquoise: { light: "#D1F5F5", dark: "#002E28" },
    yellow: { light: "#FFF8CC", dark: "#4B2F00" },
  },
};

export const text = { light: "text", dark: "text" };

export const textInput = {
  bg: {
    default: { light: "#FFFFFF", dark: "#020202" },
    disabled: { light: "#EEEEEE", dark: "#2B2B2B" },
  },
  border: {
    default: { light: "#A5A5A5", dark: "#393939" },
    disabled: { light: "#BCBCBC", dark: "#565656" },
    focused: { light: "#000000", dark: "#000000" },
    hover: { light: "#EB6100", dark: "#BC4E00" },
  },
  etc: {
    error: { light: "#F03823", dark: "#F03823" },
    "required mark": { light: "#F03823", dark: "#D2D2D2" },
    success: { light: "#05834E", dark: "#05834E" },
  },
  icon: {
    default: { light: "#8F8F8F", dark: "#8F8F8F" },
  },
  text: {
    default: { light: "#2B2B2B", dark: "#E9E9E9" },
    disabled: { light: "#A5A5A5", dark: "#BCBCBC" },
    label: { light: "#565656", dark: "#F9F9F9" },
    placeholder: { light: "#8F8F8F", dark: "#A5A5A5" },
    "read only": { light: "#727272", dark: "#A5A5A5" },
    "read only-pms": { light: "#2B2B2B", dark: "#A5A5A5" },
  },
};

export const thisweek = { light: "#1286CD", dark: "#1286CD" };

export const today = { light: "#EB6100", dark: "#EF8133" };

export const toolbar = {
  bg: {
    bg_base: { light: "#F4F4F4", dark: "#393939" },
    bg_ct: { light: "#F9F9F9", dark: "#000000" },
    "bg_layer _1": { light: "#393939", dark: "#393939" },
    bg_layer_2: { light: "#F4F4F4", dark: "#2B2B2B" },
  },
  container: {
    "container-bg-default": { light: "#F9F9F9", dark: "#727272" },
    "container-bg-hover": { light: "#FFFFFF33", dark: "#565656" },
    "container-bg-selected": { light: "#FEF7F2", dark: "#000000" },
    "tool-bg-base": { light: "#E9E9E9", dark: "#000000" },
    "tool-bg-layer1": { light: "#F4F4F4", dark: "#393939" },
  },
  etc: {
    border: { light: "#A5A5A5", dark: "#393939" },
    divider: { light: "#BCBCBC", dark: "#727272" },
    "gnb-bg": { light: "#727272", dark: "#8F8F8F" },
    "text-default": { light: "#727272", dark: "#E9E9E9" },
    "text-selected": { light: "#1D1D1D", dark: "#FFFFFF" },
    "text-selected-brand": { light: "#EB6100", dark: "#FFFFFF" },
  },
  icon: {
    "border-selected-brand": { light: "#EB6100", dark: "#EB6100" },
    "icon-default": { light: "#A5A5A5", dark: "#727272" },
    "icon-hover": { light: "#727272", dark: "#A5A5A5" },
    "icon-selected": { light: "#2B2B2B", dark: "#FFFFFF" },
    "icon-selected line": { light: "#EB6100", dark: "#EB6100" },
    "icon-selected-brand": { light: "#EB6100", dark: "#EB6100" },
    "icon-stroke": { light: "#8F8F8F", dark: "#BCBCBC" },
  },
};

export const tooltip = {
  "bg-default": { light: "#2B2B2B", dark: "#F9F9F9" },
  "bg-info": { light: "#E5F0FE", dark: "#0C1F69" },
  "bg-invert": { light: "#F9F9F9", dark: "#2B2B2B" },
  "bg-warning": { light: "#FFF197", dark: "#724800" },
  "line-info": { light: "#ACCFFD", dark: "#274DEA" },
  "line-invert": { light: "#DDDDDD", dark: "#565656" },
  "line-warning": { light: "#F5C700", dark: "#D29500" },
  "text-default": { light: "#FFFFFF", dark: "#000000" },
  "text-info": { light: "#000000", dark: "#FFFFFF" },
  "text-inverted": { light: "#000000", dark: "#FFFFFF" },
  "text-warning": { light: "#000000", dark: "#FFFFFF" },
};

export const valueStepper = {
  bg: { light: "#FFFFFF", dark: "#000000" },
  border: { light: "#A5A5A5", dark: "#565656" },
  fg: { light: "#727272", dark: "#A5A5A5" },
};
