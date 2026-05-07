// Color · Component Tokens
// Source: Figma Variable Collection Color_component (896:76023) + common (694:51198)
// 데이터 출처: components/*.md (figma-export.json 2026-05-04 + 일부 production variable_defs)
//
// 각 컴포넌트는 `light` / `dark` 키 아래 카테고리(bg/fg/border/icon/common/text 등) 보유.
// `dark`가 비어있는 컴포넌트는 production variable_defs가 light 단일 모드만 정의함.

// ============================================================
// Form / Input
// ============================================================

export const button = {
  light: {
    bg: {
      "brand-primary":         "#eb6100",
      "brand-secondary":       "#ffffff",
      "brand-tertiary":        "#fbdfcc",
      "neutral-primary":       "#2b2b2b",
      "neutral-secondary":     "#ffffff",
      "neutral-tertiary":      "#e9e9e9",
      "destructive-primary":   "#f03823",
      "destructive-secondary": "#ffffff00",
      "text":                  "#ffffff00",
      "subtle":                "#ffffff00",
      "disabled":              "#dadada",
      "disabled-gray":         "#bcbcbc",
      "disabled-inactive":     "#8f8f8f",
    },
    fg: {
      "brand-primary":         "#f9f9f9",
      "brand-secondary":       "#eb6100",
      "brand-tertiary":        "#eb6100",
      "neutral-primary":       "#f9f9f9",
      "neutral-secondary":     "#565656",
      "neutral-tertiary":      "#565656",
      "destructive-primary":   "#f9f9f9",
      "destructive-secondary": "#f03823",
      "text":                  "#606881",
      "subtle":                "#565656",
      "disabled":              "#a5a5a5",
      "disabled-gray":         "#a5a5a5",
      "disabled-inactive":     "#a5a5a5",
    },
    border: {
      "brand-primary":         "#eb6100",
      "brand-secondary":       "#727272",
      "brand-tertiary":        "#ffffff00",
      "neutral-primary":       "#2b2b2b",
      "neutral-secondary":     "#a5a5a5",
      "neutral-tertiary":      "#a5a5a5",
      "destructive-primary":   "#f03823",
      "destructive-secondary": "#f03823",
      "text":                  "#373d4c00",
      "subtle":                "#373d4c00",
      "disabled":              "#dadada",
      "disabled-gray":         "#a5a5a5",
      "disabled-inactive":     "#8f8f8f",
    },
    icon: {
      "neutral":           "#bcbcbc",
      "dark":              "#0e0e0e",
      "invert":            "#0e0e0e",
      "disabled-inactive": "#a5a5a5",
      "disabled-gray":     "#393939",
    },
    common: {
      "default":         "#00000000",
      "hover":           "#0000000d",
      "pressed":         "#0000001a",
      "hover-neutral":   "#ffffff0d",
      "pressed-neutral": "#ffffff1a",
      "selected":        "rgba(59,99,251,0.2)",
      "focus-ring":      "#000000",
      "focus-ring-2":    "#fefefe",
    },
  },
  dark: {
    bg: {
      "brand-secondary":       "#0e0e0e",
      "destructive-secondary": "rgba(255,255,255,0)",
      "neutral-primary":       "#bcbcbc",
      "neutral-secondary":     "#f4f4f4",
      "neutral-tertiary":      "#eeeeee",
      "subtle":                "rgba(255,255,255,0)",
      "disabled-gray":         "#f4f4f4",
      "disabled-inactive":     "#bcbcbc",
    },
    fg: {
      "brand-primary":       "#0e0e0e",
      "neutral-primary":     "#000000",
      "neutral-secondary":   "#8f8f8f",
      "neutral-tertiary":    "#0e0e0e",
      "destructive-primary": "#0e0e0e",
      "subtle":              "#8f8f8f",
      "disabled-gray":       "#e9e9e9",
      "disabled-inactive":   "#bcbcbc",
    },
    border: {
      "brand-secondary":   "#dddddd",
      "brand-tertiary":    "#a5a5a5",
      "neutral-primary":   "#bcbcbc",
      "neutral-secondary": "#dddddd",
      "neutral-tertiary":  "#dddddd",
      "subtle":            "rgba(55,61,76,0)",
      "disabled-gray":     "#f4f4f4",
      "disabled-inactive": "#8f8f8f",
    },
    icon: {
      "neutral":           "#8f8f8f",
      "dark":              "#f4f4f4",
      "invert":            "#e9e9e9",
      "disabled-inactive": "#bcbcbc",
      "disabled-gray":     "#bcbcbc",
    },
    common: {
      "default":         "rgba(0,0,0,0)",
      "hover":           "rgba(0,0,0,0.05)",
      "pressed":         "rgba(0,0,0,0.15)",
      "hover-neutral":   "rgba(59,99,251,0.1)",
      "pressed-neutral": "rgba(59,99,251,0.2)",
      "selected":        "rgba(59,99,251,0.2)",
      "focus-ring-2":    "#f9f9f9",
    },
  },
};

export const input = {
  light: {
    bg: {
      "default":  "#ffffff",
      "disabled": "#bcbcbc",
    },
    fg: {
      "default":       "#2b2b2b",
      "label":         "#565656",
      "placeholder":   "#8f8f8f",
      "disabled":      "#8f8f8f",
      "read-only-pms": "#2b2b2b",
    },
    border: {
      "default":        "#a5a5a5",
      "hover":          "#eb6100",
      "focused":        "#000000",
      "disabled":       "#a5a5a5",
      "common-default": "#bcbcbc",
      "error":          "#f03823",
      "success":        "#a5a5a5",
    },
    icon: {
      "default": "#8f8f8f",
    },
    common: {
      "required-mark": "#f03823",
      "error":         "#f03823",
      "success":       "#05834e",
    },
  },
  dark: {},
};

export const textarea = {
  light: {
    bg: {
      "default":  "#ffffff",
      "disabled": "#bcbcbc",
    },
    fg: {
      "default":     "#2b2b2b",
      "placeholder": "#8f8f8f",
      "disabled":    "#8f8f8f",
      "label":       "#565656",
    },
    border: {
      "default":  "#bcbcbc",
      "hover":    "#eb6100",
      "focused":  "#000000",
      "disabled": "#a5a5a5",
    },
    icon: {
      "default": "#8f8f8f",
    },
    common: {
      "error":         "#f03823",
      "success":       "#05834e",
      "required-mark": "#f03823",
    },
  },
  dark: {},
};

export const dropdown = {
  light: {
    bg: {
      "default":        "#ffffff",
      "menu-hover":     "#f4f4f4",
      "selected":       "#fef7f2",
      "disabled":       "#eeeeee",
      "common-default": "#ffffff",
    },
    fg: {
      "default":     "#2b2b2b",
      "placeholder": "#8f8f8f",
      "disabled":    "#a5a5a5",
      "label":       "#565656",
    },
    border: {
      "default":        "#a5a5a5",
      "hover":          "#eb6100",
      "focused":        "#000000",
      "selected":       "#f7c099",
      "disabled":       "#bcbcbc",
      "common-default": "#bcbcbc",
    },
    icon: {},
    common: {
      "required-mark": "#f03823",
    },
  },
  dark: {},
};

export const valueStepper = {
  light: {
    bg: {},
    fg: {
      "default": "#d2d2d2",
    },
    border: {
      "default": "#a5a5a5",
    },
    common: {
      // light 모드에서 컨테이너 bg가 검정 — MD 표기 그대로
      "container-bg": "#000000",
    },
  },
  dark: {
    fg: {
      "default": "#a5a5a5",
    },
    border: {
      "default": "#dddddd",
    },
    common: {
      "container-bg": "#ffffff",
    },
  },
};

// ============================================================
// Selection (control 공유 토큰 + 개별)
// ============================================================

export const checkbox = {
  light: {
    bg: {
      "default":  "#fefefe",
      "brand-1":  "#eb6100",  // checked / indeterminate
      "disabled": "#d2d2d2",
      "ranking":  "#faec88",  // Color/selection/surface/surface-ranking
    },
    fg: {
      "default":  "#fefefe",
      "disabled": "#a5a5a5",
      "ranking":  "#1d1d1d",
    },
    border: {
      "default":  "#727272",
      "brand":    "#eb6100",  // active/checked
      "disabled": "#a5a5a5",
    },
    common: {
      "text-default":  "#565656",
      "text-active":   "#1d1d1d",
      "text-disabled": "#a5a5a5",
      "required-mark": "#ef0101",
    },
  },
  dark: {},
};

export const radio = {
  light: {
    bg: {
      "default":  "#fefefe",
      "brand-1":  "#eb6100",  // checked-2
      "disabled": "#d2d2d2",
    },
    fg: {
      "default":  "#fefefe",  // 흰 dot
      "disabled": "#a5a5a5",
    },
    border: {
      "default":  "#727272",
      "brand":    "#eb6100",
      "disabled": "#a5a5a5",
    },
    text: {
      "default":  "#565656",
      "active":   "#1d1d1d",
      "disabled": "#a5a5a5",
    },
  },
  dark: {},
};

export const switchControl = {
  light: {
    bg: {
      "inactive": "#d2d2d2",  // off track
      "selected": "#eb6100",  // on track orange
      "disabled": "#d2d2d2",
    },
    fg: {
      "default":  "#fefefe",  // 흰 thumb
      "disabled": "#a5a5a5",
    },
    text: {
      "default":  "#565656",
      "active":   "#1d1d1d",
      "disabled": "#a5a5a5",
    },
    common: {
      "switch-border": "#d2d2d2",
    },
  },
  dark: {},
};

// checkbox/radio/switch 공유 토큰 (control/*).
// 각 컴포넌트의 통합 정의 — checkbox.md가 가장 완전한 출처.
export const control = {
  light: {
    bg: {
      "default":  "#fefefe",
      "brand-1":  "#eb6100",  // checked / indeterminate
      "inactive": "#d2d2d2",  // switch off
      "selected": "#eb6100",  // switch on
      "disabled": "#d2d2d2",
    },
    fg: {
      "default":  "#fefefe",
      "disabled": "#a5a5a5",
    },
    border: {
      "default":  "#727272",
      "brand":    "#eb6100",
      "disabled": "#a5a5a5",
    },
    text: {
      "default":  "#565656",
      "active":   "#1d1d1d",
      "disabled": "#a5a5a5",
    },
    common: {
      "switch-border":   "#d2d2d2",
      "fg-ranking":      "#1d1d1d",
      "surface-ranking": "#faec88",
    },
  },
  dark: {},
};

// ============================================================
// Navigation
// ============================================================

export const tab = {
  light: {
    lineTab: {
      bg: {
        "default":  "#ffffff00",
        "hover":    "#f4f4f4",
        "pressed":  "#eeeeee",
        "selected": "#ffffff00",
        "disabled": "#ffffff00",
      },
      text: {
        "default":     "#565656",
        "default-num": "#eb6100",
        "selected":    "#eb6100",
        "disabled":    "#a5a5a5",
      },
    },
    containedTab: {
      bg: {
        "default":  "#ffffff00",
        "hover":    "#f8f8f8",
        "pressed":  "#eeeeee",
        "selected": "#fefefe",
        "disabled": "#ffffff00",
      },
      border: {
        "default":  "#ffffff00",
        "selected": "#eb6100",
      },
      text: {
        "default":     "#000000",
        "default-num": "#eb6100",
        "selected":    "#eb6100",
        "disabled":    "#a5a5a5",
      },
      container: {
        "bg":     "#ffffff",
        "border": "#a5a5a5",
      },
    },
  },
  dark: {},
};

export const segmentedControl = {
  light: {
    bg: {
      "default":  "#ffffff00",
      "hover":    "#f4f4f4",
      "pressed":  "#eeeeee",
      "selected": "#fefefe",
      "disabled": "#ffffff00",
    },
    border: {
      "default":  "#a5a5a5",
      "selected": "#eb6100",
    },
    text: {
      "default":        "#727272",
      "selected":       "#eb6100",
      "selected-solid": "#1d1d1d",
      "disabled":       "#a5a5a5",
    },
    container: {
      "bg-contained":     "#ffffff",
      "border-contained": "#a5a5a5",
      "bg-solid":         "#e9e9e9",
      "border-solid":     "#e9e9e9",
    },
  },
  dark: {},
};

export const menu = {
  light: {
    bg: {
      "default":  "#ffffff",
      "hover":    "#e9e9e9",
      "selected": "#fef7f2",
      "disabled": "#e9e9e9",
    },
    border: {
      "active":   "#1d1d1d",  // focused ring
      "selected": "#f3a066",
    },
    icon: {
      "default":  "#393939",
      "hover":    "#393939",
      "selected": "#eb6100",
      "disabled": "#a5a5a5",
      "danger":   "#d73220",
    },
    text: {
      "primary":   "#1d1d1d",
      "secondary": "#393939",
      "selected":  "#eb6100",
      "disabled":  "#a5a5a5",
      "danger":    "#d73220",
    },
    common: {
      "divider":          "#bcbcbc",
      "divider-selected": "#f7c099",
      "divider-disabled": "#bcbcbc",
      "divider-danger":   "#d73220",
      "section-divider":  "#bcbcbc",
    },
  },
  dark: {},
};

export const breadcrumb = {
  light: {
    border: {
      "default":        "#000000",
      "selected_hover": "#bc4e00",
    },
    text: {
      "default":          "#565656",
      "current":          "#000000",
      "hover":            "#000000",
      "focused":          "#000000",
      "selected":         "#eb6100",
      "selected_hover":   "#bc4e00",
      "selected_focused": "#bc4e00",
    },
  },
  dark: {},
};

export const gnb = {
  light: {
    icon: {
      "default":       "#8f8f8f",
      "hover":         "#565656",
      "selected":      "#e9e9e9",
      "selected-line": "#f3a066",
      "stroke":        "#bcbcbc",
    },
    container: {
      "bg-default":         "#0e0e0e",
      "bg-hover":           "#eeeeee",
      "bg-selected":        "#000000",
      "bg-selected-brand":  "#fef7f2",
    },
    bg: {
      "gnb-bg":       "#727272",
      "gnb-bg-pms":   "#f9f9f9",
      "gnb-bg-onesw": "#d2d2d2",
      "bg_layer_2":   "#f4f4f4",
    },
    text: {
      "default":  "#565656",
      "active":   "#1d1d1d",
      "disabled": "#bcbcbc",
    },
    border: {
      "default": "#bcbcbc",
    },
    common: {
      "divider": "#a5a5a5",
    },
  },
  dark: {},
};

export const toolbar = {
  light: {
    icon: {
      "default":  "#a5a5a5",
      "hover":    "#d2d2d2",
      "selected": "#eeeeee",
      "stroke":   "#bcbcbc",
    },
    container: {
      "bg-default":     "#0e0e0e",
      "bg-hover":       "rgba(255,255,255,0.2)",
      "tool-bg-base":   "#393939",
      "tool-bg-layer1": "#1d1d1d",
    },
    bg: {
      "bg_base":    "#1d1d1d",
      "bg_ct":      "#0e0e0e",
      "bg_layer_1": "#e9e9e9",
      "bg_layer_2": "#1d1d1d",
    },
    text: {
      "default":  "#d2d2d2",
      "selected": "#f4f4f4",
    },
    border: {
      "default": "#a5a5a5",
    },
    common: {
      "divider": "#8f8f8f",
      "gnb-bg":  "#d2d2d2",
    },
  },
  dark: {
    icon: {
      "default":  "#d2d2d2",
      "hover":    "#a5a5a5",
      "selected": "#000000",
      "stroke":   "#8f8f8f",
    },
    container: {
      "bg-default":     "#d2d2d2",
      "bg-hover":       "#dddddd",
      "bg-selected":    "#ffffff",
      "tool-bg-base":   "#ffffff",
      "tool-bg-layer1": "#e9e9e9",
    },
    bg: {
      "bg_base":    "#e9e9e9",
      "bg_ct":      "#ffffff",
      "bg_layer_1": "#e9e9e9",
      "bg_layer_2": "#eeeeee",
    },
    text: {
      "default":        "#393939",
      "selected":       "#000000",
      "selected-brand": "#000000",
    },
    border: {
      "default": "#e9e9e9",
    },
    common: {
      "divider": "#d2d2d2",
      "gnb-bg":  "#bcbcbc",
    },
  },
};

// ============================================================
// Display
// ============================================================

export const tag = {
  light: {
    bg: {
      "red":       "#ffebe8",
      "orange":    "#fdefe5",
      "yellow":    "#fff8cc",
      "green":     "#d7f7e1",
      "blue":      "#e5f0fe",
      "turquoise": "#d1f5f5",
      "magenta":   "#ffe8f0",
      "indigo":    "#ebeeff",
      "gray":      "#dddddd",
    },
    accent: {
      "red":         "#d73220",
      "orange":      "#eb6100",
      "yellow":      "#f5c700",
      "yellow_dark": "#d29500",
      "green":       "#05834e",
      "blue":        "#3b63fb",
      "turquoise":   "#087e89",
      "magenta":     "#d92361",
      "indigo":      "#7155fa",
      "gray":        "#565656",
      "black":               "#000000",
      "white":               "#ffffff",
      // Figma 원본 오타 보존 (cautuion = caution)
      "black_for cautuion":  "#000000",
    },
  },
  dark: {
    bg: {
      "red":       "#501006",
      "orange":    "#471d00",
      "yellow":    "#4b2f00",
      "green":     "#002e22",
      "blue":      "#0c1f69",
      "turquoise": "#002e28",
      "magenta":   "#880033",
      "indigo":    "#2a0081",
      "gray":      "#565656",
    },
    accent: {
      "red":         "#ff513d",
      "orange":      "#ef8133",
      "yellow":      "#e6af00",
      "yellow_dark": "#e6af00",
      "green":       "#0ba45d",
      "blue":        "#5d89ff",
      "turquoise":   "#0c9eab",
      "magenta":     "#ff709f",
      "indigo":      "#8480fe",
      "gray":        "#bcbcbc",
      "black":               "#ffffff",
      "white":               "#000000",
      "black_for cautuion":  "#000000",
    },
  },
};

export const chip = {
  light: {
    bg: {
      "default":         "#ffffff",
      "hover":           "#f4f4f4",
      "disabled":        "#f4f4f4",
      "selected-orange": "#ef8133",
      "selected-gray":   "#505050",
    },
    outline: {
      "default":  "#bcbcbc",
      "selected": "#ef8133",
      "focused":  "#000000",
      "disabled": "#eeeeee",
    },
    fg: {
      "default":  "#393939",
      "selected": "#eb6100",
      "invert":   "#ffffff",
      "disabled": "#a5a5a5",
    },
    icon: {
      "default":  "#565656",
      "selected": "#eb6100",
      "invert":   "#ffffff",
      "disabled": "#a5a5a5",
    },
  },
  dark: {},
};

export const badge = {
  light: {
    border: {
      "default": "#ffffff",  // border boolean=true 시 외곽 ring
    },
    bg: {
      "neutral": "#1d1d1d",
      "accent":  "#f03823",
    },
    icon: {
      "invert":  "#ffffff",
      "default": "#dddddd",
    },
  },
  dark: {
    icon: {
      "default": "#bcbcbc",
      "invert":  "#f4f4f4",
    },
  },
};

export const avatar = {
  light: {
    bg: {
      "default": "#c6c6c6",  // common/avatar-bg-default
    },
    common: {
      "default": "#c6c6c6",
    },
    // 이니셜·image·ring 색상은 DS 토큰 미바인딩 (인스턴스 fill로 처리)
  },
  dark: {},
};

export const divider = {
  light: {
    common: {
      "line":           "#e9e9e9",
      "line_contents": "#bcbcbc",  // production 해석값 (figma-export는 #8f8f8f)
      "text":          "#a5a5a5",
      "etc-divider":   "#d2d2d2",  // 별도 namespace — etc/divider
    },
  },
  dark: {},
};

export const rating = {
  light: {
    fg: {
      "favorite-fill": "#3d2700",
      "bookmark-fill": "#5681ff",
      "default":       "#bcbcbc",
    },
    bg: {
      "rest": "#727272",
    },
  },
  dark: {
    fg: {
      "favorite-fill": "#3d2700",
      "bookmark-fill": "#5681ff",
      "default":       "#bcbcbc",
    },
    bg: {
      "rest": "#727272",
    },
  },
};

// ============================================================
// Layout
// ============================================================

export const card = {
  light: {
    bg: {
      "default":  "#ffffff",
      "pressed":  "#f4f4f4",
      "selected": "#ffffff",
      "hover":    "#ffffff",
      "focus":    "#ffffff",
      "disabled": "#ffffff",
    },
    fg: {
      "title":       "#000000",
      "body":        "#393939",
      "description": "#a5a5a5",
    },
    border: {
      "default":  "#dadada",
      "hover":    "#292929",
      "pressed":  "#292929",
      "selected": "#fc7d00",
      "focus":    "#020202",
      "disabled": "#dadada",
    },
    icon: {
      "default": "#393939",
    },
    common: {
      "gray400-disabled": "#c6c6c6",
    },
  },
  dark: {},
};

export const reservationCard = {
  light: {
    bg: {
      // Figma 원본 오타(stae/defalut/harf/ㅋ) 보존
      "defalut1case":   { fill: "#eeeeee", overlay: "rgba(255,255,255,0.9)" },
      "defalutKa":      { fill: "#8f8f8f", overlay: "rgba(255,255,255,0.9)" },
      "defalut2case":   { fill: "#eeeeee", overlay: "rgba(255,255,255,0.9)" },
      "defalut2_2case": { fill: "#8f8f8f", overlay: "rgba(255,255,255,0.9)" },
      "disabled1case":  { fill: "#393939", overlay: "rgba(255,255,255,0.9)" },
      "disabled2case":  { fill: "#393939", overlay: "rgba(255,255,255,0.9)" },
    },
    fg: {
      "defalut":       "#000000",
      "disabled1case": "#727272",
      "disabled2case": "#000000",
    },
    common: {
      "overlay-opacity": 0.9,
    },
  },
  dark: {},
};

export const table = {
  light: {
    bg: {
      "header":        "#f4f4f4",
      "subheader":     "#e9e9e9",
      "cell-default":  "#fefefe",
      "cell-zebra":    "#f4f4f4",
      "cell-hover":    "transparent",
      "cell-selected": "transparent",
      "sum":           "#dddddd",
    },
    fg: {
      "header": "#1d1d1d",
      "cell":   "#e9e9e9",
    },
    border: {
      "default":  "#d2d2d2",
      "divider":  "#d2d2d2",
      "selected": "#eb6100",
    },
    icon: {
      "default": "#727272",
    },
    common: {
      // PMS theme namespace
      "pms-cell-divider":   "#bdc9da",
      "pms-border-default": "#d2dae6",
      "pms-border-hover":   "#3796fe",
      "pms-border-selected":"#ff8000",
    },
  },
  dark: {
    bg: {
      "header":        "#dddddd",
      "subheader":     "#eeeeee",
      "cell-default":  "#f4f4f4",
      "cell-zebra":    "#eeeeee",
      "cell-hover":    "#dddddd",
      "cell-selected": "#fbdfcc",
      "sum":           "#e9e9e9",
    },
    fg: {
      "cell": "#393939",
    },
    border: {
      "default":  "#dddddd",
      "divider":  "#dddddd",
      "selected": "#ef8133",
    },
    icon: {
      "default": "#8f8f8f",
    },
  },
};

export const list = {
  light: {
    bg: {
      "default":  "#000000",
      "active":   "#000000",
      "hover":    "rgba(255,255,255,0.05)",
      "selected": "rgba(235,97,0,0.1)",
      "disabled": "#8f8f8f",
    },
    fg: {
      "primary-default":   "#dddddd",
      "primary-active":    "#fefefe",
      "secondary-label":   "#d2d2d2",
      "placeholder":       "#bcbcbc",
      "read":              "#d2d2d2",
      "disabled":          "#bcbcbc",
      "fg-default":        "#bcbcbc",
      "fg-active":         "#eeeeee",
      "fg-disabled":       "#bcbcbc",
    },
    border: {
      "default": "#8f8f8f",
    },
    icon: {
      "default": "#bcbcbc",
    },
    common: {
      "required-mark": "#df3422",
    },
  },
  dark: {
    bg: {
      "default":  "#fefefe",
      "active":   "#fefefe",
      "hover":    "#fefefe",
      "selected": "rgba(235,97,0,0.15)",
      "disabled": "#eeeeee",
    },
    fg: {
      "primary-default":  "#727272",
      "primary-active":   "#020202",
      "secondary-label":  "#d2d2d2",
      "placeholder":      "#a5a5a5",
      "read":             "#a5a5a5",
      "disabled":         "#8f8f8f",
      "fg-default":       "#727272",
      "fg-active":        "#393939",
      "fg-disabled":      "#8f8f8f",
    },
    border: {
      "default": "#e9e9e9",
    },
    icon: {
      "default": "#d2d2d2",
    },
    common: {
      "required-mark": "#727272",
    },
  },
};

export const expandableList = {
  light: {
    bg: {
      "default":  "#000000",
      "selected": "#1d1d1d",
      "disabled": "#393939",
    },
    fg: {
      "primary":   "transparent",
      "secondary": "transparent",
      "disabled":  "#a5a5a5",
    },
    border: {
      "default":  "#8f8f8f",
      "selected": "#8f8f8f",
      "disabled": "#727272",
    },
  },
  dark: {
    bg: {
      "default":  "#f9f9f9",
      "selected": "#e9e9e9",
      "disabled": "#393939",
    },
    fg: {
      "primary":   "#393939",
      "secondary": "#727272",
      "disabled":  "#a5a5a5",
    },
    border: {
      "default":  "#dddddd",
      "selected": "#dddddd",
      "disabled": "#727272",
    },
  },
};

export const hmi = {
  light: {
    bg: {
      "default":  "#000000",
      "active":   "#000000",
      "hover":    "rgba(255,255,255,0.05)",
      "selected": "rgba(235,97,0,0.1)",
      "disabled": "#8f8f8f",
      "dim":      "rgba(255,255,255,0.4)",
    },
    fg: {
      "primary-default":  "#dddddd",
      "primary-active":   "#fefefe",
      "secondary-label":  "#d2d2d2",
      "disabled":         "#bcbcbc",
      "placeholder":      "#bcbcbc",
      "read":             "#d2d2d2",
      "fg-default":       "#bcbcbc",
      "fg-active":        "#eeeeee",
      "fg-disabled":      "#bcbcbc",
    },
    border: {
      "default": "#8f8f8f",
      "illust":  "#dddddd",
      "logo":    "transparent",
    },
    icon: {
      "default": "#bcbcbc",
    },
    common: {
      "required-mark": "#df3422",
    },
  },
  dark: {
    bg: {
      "default":  "#fefefe",
      "active":   "#fefefe",
      "hover":    "#fefefe",
      "selected": "#fefefe",
      "disabled": "#eeeeee",
      "dim":      "rgba(0,0,0,0.4)",
    },
    fg: {
      "primary-default":  "#727272",
      "primary-active":   "#020202",
      "secondary-label":  "#d2d2d2",
      "disabled":         "#8f8f8f",
      "placeholder":      "#a5a5a5",
      "read":             "#a5a5a5",
      "fg-default":       "#727272",
      "fg-active":        "#393939",
      "fg-disabled":      "#8f8f8f",
    },
    border: {
      "default": "#bcbcbc",
      "illust":  "#393939",
      "logo":    "#000000",
    },
    icon: {
      "default": "#d2d2d2",
    },
    common: {
      "required-mark": "#727272",
    },
  },
};

// ============================================================
// Feedback
// ============================================================

export const tooltip = {
  light: {
    bg: {
      "default": "#eeeeee",
      "invert":  "#0e0e0e",
      "info":    "#0f1c52",
      "warning": "#2f1d00",
    },
    text: {
      "default":  "#000000",
      "inverted": "#ffffff",
      "info":     "#ffffff",
      "warning":  "#ffffff",
    },
    line: {
      "info":    "#122d9a",
      "warning": "#533400",
      "invert":  "#565656",
    },
  },
  dark: {
    bg: {
      "default": "#0e0e0e",
      "invert":  "#eeeeee",
      "info":    "#d5e7fe",
      "warning": "#da9f00",
    },
    text: {
      "default":  "#ffffff",
      "inverted": "#000000",
      "info":     "#000000",
      "warning":  "#000000",
    },
    line: {
      "info":    "#6995fe",
      "warning": "#825200",
      "invert":  "#dddddd",
    },
  },
};

export const popover = {
  light: {
    bg: {
      "default":  "#2b2b2b",
      "inverted": "#f9f9f9",
      "info":     "#e5f0fe",
      "warning":  "#fff197",
    },
    line: {
      "info":    "#accffd",
      "warning": "#f5c700",
    },
    shadow: "#d2d2d2",
  },
  dark: {},
};

export const popup = {
  light: {
    bg: {
      "default": "#f4f4f4",
      "header":  "#f4f4f4",
      "surface": "#ffffff",
      "footer":  "#f4f4f4",
    },
    border: {
      "surface": "#dddddd",
    },
    text: {
      "header-title":   "#000000",
      "contents-title": "#000000",
    },
    // v0.1/elevation-50 = (0,4) blur 4 #0000004D + (0,8) blur 12 spread 6 #00000026
    shadow: "v0.1/elevation-50",
  },
  dark: {},
};

export const modal = {
  light: {
    bg: "#ffffff",
    text: {
      "title-primary":  "#000000",
      "body-secondary": "#393939",
    },
    outline: {
      "critical": "#f03823",
      "warning":  "#e6af00",
      "info":     "#3b63fb",
      "success":  "#05834e",  // 가이드는 #0ba45d도 사용
      "question": "#9a47e2",
      "general":  "#727272",
    },
    shadow: "v0.1/elevation-50",
  },
  dark: {},
};

export const notification = {
  light: {
    bg: {
      "default":         "#000000",
      "general":         "#1d1d1d",
      "general-default": "#eeeeee",
      "general2":        "#eeeeee",
      "general3":        "#eeeeee",
      "warning":         "#eeeeee",
      "info-primary":    "#0c2175",
      "invert00":        "#393939",
    },
    text: {
      "default-title":       "#000000",
      "default-title2":      "#000000",
      "default-button-text": "#8f8f8f",
      "invert-title00":      "#ffffff",
    },
    primary: {
      "info":      "#5681ff",
      "info2":     "#0f1c52",
      "critical":  "#df3422",
      "critical2": "#440d05",
      "warning":   "#6b4300",
      "warning2":  "#251700",
      "success":   "#047c4b",
      "success2":  "#00261d",
      "question":  "#ad69e9",
      "question2": "#320060",
    },
    border: {
      "default": "#a5a5a5",
      "info2":   "#a5a5a5",
    },
    icon:     "#000000",
    shadow00: "#727272",
    invert2:  "#f4f4f4",
  },
  dark: {
    bg: {
      "default":         "#000000",
      "general":         "#1d1d1d",
      "general-default": "#1d1d1d",
      "general2":        "#1d1d1d",
      "general3":        "#1d1d1d",
      "warning":         "#1d1d1d",
      "info-primary":    "#1d1d1d",
      "invert00":        "#e9e9e9",
    },
    text: {
      "default-title":       "#ffffff",
      "default-title2":      "#ffffff",
      "default-button-text": "#dddddd",
      "invert-title00":      "#000000",
    },
    primary: {
      "info":      "#000000",
      "info2":     "#000000",
      "critical":  "#000000",
      "critical2": "#000000",
      "warning":   "#000000",
      "warning2":  "#000000",
      "success":   "#000000",
      "success2":  "#000000",
      "question":  "#000000",
      "question2": "#000000",
    },
    border: {
      "default": "#000000",
      "info2":   "#000000",
    },
    icon:     "#ffffff",
    shadow00: "#dddddd",
    invert2:  "#ffffff",
  },
};

// progress · progress-stepper · circle 통합
export const progress = {
  light: {
    bar: {
      bg: "#ffffff",
      track: {
        "rest-primary":   "#e1e1e199",  // ~60% alpha gray
        "rest-secondary": "#e9e9e9",
        "bg-rest":        "#e1e1e1",
      },
      active:  "#3b63fb",  // blue
      success: "#05834e",  // alert/strong/success_positive
      text: {
        "main": "#1d1d1d",
        "sub":  "#565656",
      },
    },
    circle: {
      active: {
        "primary-brand": "#eb6100",
        "invert":        "#ffffff",
      },
      track: {
        "rest-primary":   "#e1e1e199",
        "rest-secondary": "#e9e9e9",
        "rest-invert":    "#8f8f8f",
      },
      etc: {
        "progress-color":   "#40bf80",
        "uds-green-600":    "#0eb3d7",
      },
    },
    stepper: {
      "active":         "#1d1d1d",
      "active-invert":  "#ffffff",
      "inactive":       "#bcbcbc",
      text: {
        "main":     "#1d1d1d",
        "sub":      "#565656",
        "inactive": "#bcbcbc",
      },
      etc: {
        "fg-neutral-selected":     "#000000",
        "border-neutral-selected": "#373d4c",
        "border-default":          "#dadada",
        "fg-disabled-2":           "#dadada",
        "text-disabled":           "#c6c6c6",
        "common-inverse":          "#ffffff",
      },
    },
  },
  dark: {},
};

export const spinner = {
  light: {
    brand: {
      "default":     "#eb6100",  // brand-A_default
      "lighter":     "#f3a066",
      "darker":      "#8d3a00",
      "morelighter": "#fbdfcc",
    },
    track: {
      "rest-primary": "#e1e1e199",
    },
    active: "#eb6100",
  },
  dark: {},
};

export const slider = {
  light: {
    handle: {
      "bg":            "#000000",
      "bg-hover":      "#000000",
      "bg-select":     "#030100",
      "border":        "#d2d2d2",
      "border-hover":  "#d2d2d2",
      "border-select": "#ef8133",
    },
    track: {
      "progress-on":  "#8d3a00",
      "progress-off": "#393939",
    },
    text: "#dddddd",
  },
  dark: {
    handle: {
      "bg":            "#eeeeee",
      "bg-hover":      "#eeeeee",
      "bg-select":     "#f9cfb2",
      "border":        "#bcbcbc",
      "border-hover":  "#ef8133",
      "border-select": "#ef8133",
    },
    track: {
      "progress-on":  "#ef8133",
      "progress-off": "#dddddd",
    },
    text: "#a5a5a5",
  },
};

// ============================================================
// Calendar / Date
// ============================================================

export const calendar = {
  light: {
    bg: {
      "default": "#000000",
      "dual":    "#0e0e0e",
      "day":     "#2b2b2b",
      "date":    "#000000",
      "active":  "#180a00",
      "select":  "#180a00",
      "hover":   "#1d1d1d",
    },
    text: {
      "default":  "#ffffff",
      "select":   "#000000",
      "sunday":   "#df3422",
      "saturday": "#4069fd",
      "legend":   "#e9e9e9",
    },
    border: {
      "default":  "#393939",
      "disabled": "#a5a5a5",
      "thisweek": "#0d7dba",
    },
    mark: {
      "doctor1":        "#cf1f5c",
      "doctor2":        "#d549eb",
      "doctor3":        "#046959",
      "doctor4":        "#b0623b",
      "first":          "#533400",
      "return":         "#3c7a0f",
      "medication":     "#0d7dba",
      "imaging":        "#9d4ee4",
      "lab-test":       "#98073c",
      "icon":           "#dddddd",
      "bg-general":     "#df3422",
      "bg-inpatient":   "#03545c",
      "bg-reservation": "#73180b",
    },
    legend: {
      "bg-first":       "#533400",
      "bg-return":      "#3c7a0f",
      "bg-medication":  "#0d7dba",
      "bg-imaging":     "#9d4ee4",
      "bg-lab-test":    "#98073c",
      "bg-general":     "#df3422",
      "bg-inpatient":   "#03545c",
      "bg-reservation": "#7b002d",
      "bg-night":       "#53009f",
      "bg-icon":        "#dddddd",
    },
  },
  dark: {
    bg: {
      "default": "#eeeeee",
      "dual":    "#e9e9e9",
      "day":     "#e9e9e9",
      "date":    "#e9e9e9",
      "active":  "#fbdfcc",
      "select":  "#fbdfcc",
      "hover":   "#dddddd",
    },
    text: {
      "default":  "#1d1d1d",
      "select":   "#000000",
      "sunday":   "#b12617",
      "saturday": "#2549e5",
      "legend":   "#565656",
    },
    border: {
      "default":  "#e9e9e9",
      "disabled": "#dddddd",
      "thisweek": "#0d7dba",
    },
    mark: {
      "doctor1":        "#cf1f5c",
      "doctor2":        "#d549eb",
      "doctor3":        "#046959",
      "doctor4":        "#b0623b",
      "first":          "#533400",
      "return":         "#3c7a0f",
      "medication":     "#0d7dba",
      "imaging":        "#9d4ee4",
      "lab-test":       "#98073c",
      "icon":           "#a5a5a5",
      "bg-general":     "#df3422",
      "bg-inpatient":   "#03545c",
      "bg-reservation": "#73180b",
    },
    legend: {
      "bg-first":       "#da9f00",
      "bg-return":      "#64be23",
      "bg-medication":  "#0d7dba",
      "bg-imaging":     "#9d4ee4",
      "bg-lab-test":    "#98073c",
      "bg-general":     "#ff8678",
      "bg-inpatient":   "#0cad8e",
      "bg-reservation": "#ffa3c2",
      "bg-night":       "#eee0fa",
      "bg-icon":        "#a5a5a5",
    },
  },
};
