# Segmented Control

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#segmentedControl`, `tokens/number/component.js#segmentedControl`.
> 토큰 prefix: `segmented_control/*`.

## Overview
- 2~5개 옵션 중 단일 선택 (탭과 유사하지만 더 작고 컴팩트)
- type: outlined(default) / filled / contained
- shape: square / rounded
- size: sm(24) / md(28) / lg(32)
- state: default / hover / pressed / selected / disabled

## Number tokens (Mode 1)

### height (item, px)
| size | outlined | solid |
|---|---|---|
| sm | 24 | 20 |
| md | 28 | 24 |
| lg | 32 | 28 |

### width (solid item, px)
| size | width |
|---|---|
| sm | 24 |
| md | 28 |
| lg | 32 |

## Color tokens (light / dark)

### container
| token | light | dark |
|---|---|---|
| `segmented_control/container/bg-solid type` | `#393939` | `#ffffff` |
| `segmented_control/container/border-solid type` | `#393939` | `#d2d2d2` |
| `segmented_control/container/bg-contained type` | `#000000` | `#eeeeee` |
| `segmented_control/container/border-contained type` | `#a5a5a5` | `#dddddd` |
| `segmented_control/bg` | `#000000` | `#dddddd` |
| `segmented_control/border` | `#a5a5a5` | `#d2d2d2` |

### item bg
| token | light | dark |
|---|---|---|
| `bg-default` | `rgba(255,255,255,0)` | `rgba(255,255,255,0)` |
| `bg-hover` | `#1d1d1d` | `#e9e9e9` |
| `bg-pressed` | `#2b2b2b` | `#f4f4f4` |
| `bg-selected` | `#020202` | `#f4f4f4` |
| `bg-disabled` | `rgba(255,255,255,0)` | `#d2d2d2` |

### item text
| token | light | dark |
|---|---|---|
| `text-default` | — | `#727272` |
| `text-selected` | — | `#020202` |
| `text-selected-solid` | — | `#020202` |
| `text-disabled` | `#a5a5a5` | `#a5a5a5` |

## Variants

- **type**: outlined / filled / contained
- **shape**: square / rounded (radius 4)
- **size**: sm / md / lg
- **state**: default / hover / pressed / selected / disabled

## Usage Notes

- outlined: 각 item에 border, container 미적용
- filled: container bg가 채워지고 selected item이 흰 pill로 float
- contained: container border 추가
- 폰트는 Pretendard Medium 14 공통
- pressed state는 일시적 (마우스 누름 동안만)
