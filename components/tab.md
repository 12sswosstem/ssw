# Tab

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#tab`.
> 토큰 prefix: `❤️tab/line_tab/*`, `❤️tab/contained_tab/*`, `❤️tab/container/*`.

## Overview
- 모드: **light · dark**
- 두 가지 스타일: **line_tab** (밑줄/측면 라인) / **contained_tab** (캡슐형)
- 사이즈: xxs(24) / xs(28) / sm(32) / md(40) / lg(48)

## Number tokens (Mode 1)

### line tab — height (px)
| size | px |
|---|---|
| xxs | 24 |
| xs | 28 |
| sm | 32 |
| md | 40 |
| lg | 48 |

### contained tab — height (px) · padding
| size | px |
|---|---|
| xxs | 24 |
| xs | 28 |
| sm | 32 |
| md | 40 |
| lg | 48 |
| (공통) padding | 1 |

## Color tokens (light / dark)

### line_tab — bg
| token | light | dark |
|---|---|---|
| `line_tab/bg-default` | `rgba(255,255,255,0)` | `#eeeeee` |
| `line_tab/bg-hover` | `#1d1d1d` | `#e9e9e9` |
| `line_tab/bg-pressed` | `#2b2b2b` | `#f4f4f4` |
| `line_tab/bg-selected` | `#000000` | `#e9e9e9` |
| `line_tab/bg-disabled` | `rgba(255,255,255,0)` | `#bcbcbc` |

### line_tab — text
| token | light | dark |
|---|---|---|
| `line_tab/text-default` | `#dddddd` | `#1d1d1d` |
| `line_tab/text-selected` | — | `#020202` |
| `line_tab/text-disabled` | `#a5a5a5` | `#dddddd` |

### line_tab — border · icon
| token | light | dark |
|---|---|---|
| `line_tab/border-default` | `rgba(255,255,255,0)` | `#dddddd` |
| `line_tab/border-unselected` | `#a5a5a5` | `#a5a5a5` |
| `line_tab/border-selected` | `#ffffff` | `#8f8f8f` |
| `line_tab/icon` | `#e9e9e9` | `#0e0e0e` |

### contained_tab — bg
| token | light | dark |
|---|---|---|
| `contained_tab/bg-default` | `rgba(255,255,255,0)` | `rgba(255,255,255,0)` |
| `contained_tab/bg-hover` | `#1b1b1b` | `#e9e9e9` |
| `contained_tab/bg-pressed` | `#2b2b2b` | `#f4f4f4` |
| `contained_tab/bg-selected` | `#020202` | `#e9e9e9` |
| `contained_tab/bg-disabled` | `rgba(255,255,255,0)` | `#d2d2d2` |

### contained_tab — text · border
| token | light | dark |
|---|---|---|
| `contained_tab/text-default` | `#ffffff` | `#727272` |
| `contained_tab/text-selected` | — | `#020202` |
| `contained_tab/text-disabled` | `#a5a5a5` | `#a5a5a5` |
| `contained_tab/border-default` | `rgba(255,255,255,0)` | `rgba(255,255,255,0)` |
| `contained_tab/border-selected` | — | `rgba(255,255,255,0)` |

### container (둘 공통)
| token | light | dark |
|---|---|---|
| `container/bg` | `#000000` | `#e9e9e9` |
| `container/border` | `#a5a5a5` | `#f4f4f4` |

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| xxs / xs / sm / md | `body/sm (M)` | Pretendard 500 / 14 / 20 |
| lg | `body/md (M)` | Pretendard 500 / 16 / 24 |
| selected | 동일 size + weight 600 (SB) | — |

## Variants / States

- **style**: line_tab / contained_tab
- **direction**: horizontal / vertical (line_tab만)
- **state**: default / hover / pressed / selected / disabled
- **layout**: text-only / icon+text / icon-only

## Usage Notes

- line_tab은 indicator(border-selected)로 활성 표시
- contained_tab은 bg 변화로 활성 표시 (캡슐 영역이 밝아짐)
- selected 텍스트는 SemiBold(600)로 두께 증가
- light 모드에서는 다크 배경 + 밝은 글자, dark 모드에서는 반전
- vertical line_tab의 prop명은 `indicatior_position` (오타 그대로)
