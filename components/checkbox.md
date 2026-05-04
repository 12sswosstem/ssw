# Checkbox

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#checkbox`, `tokens/number/component.js#selectionControl`.
> 토큰 prefix: `control/*`, `selection control/*`.

## Overview
- Selection Control 그룹(checkbox · radio · switch)이 동일 토큰 공유
- 모드: **light · dark**
- 사이즈: sm / md / lg
- active: unchecked / checked / indeterminate
- style: Standard / Ranking

## Number tokens (Mode 1)

### selection control / icon (체크 박스 영역, px)
| size | px |
|---|---|
| sm | 16 |
| md | 20 |
| lg | 24 |

### selection control / text (텍스트 라벨 사이즈, px)
| size | px |
|---|---|
| sm | 16 |
| md | 20 |
| lg | 24 |

## Color tokens (light / dark)

### control common (default · hover · pressed 알파 오버레이)
| token | light | dark |
|---|---|---|
| `control/common/default` | `rgba(0,0,0,0)` | `rgba(0,0,0,0)` |
| `control/common/hover` | `rgba(0,0,0,0.2)` | `rgba(0,0,0,0.2)` |
| `control/common/hover-brand` | `rgba(59,99,251,0.2)` | `rgba(59,99,251,0.2)` |
| `control/common/pressed` | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.2)` |
| `control/common/pressed-brand` | `rgba(59,99,251,0.4)` | `rgba(59,99,251,0.4)` |

### control bg
| token | light | dark |
|---|---|---|
| `control/bg/bg-default` | `#020202` | `#f4f4f4` |
| `control/bg/bg-disabled` | `#727272` | `#e9e9e9` |
| `control/bg/bg-inactive` | `#727272` | `#e9e9e9` |

### control fg (체크 표시 등 전경)
| token | light | dark |
|---|---|---|
| `control/fg/fg-default` | `#020202` | `#020202` |
| `control/fg/fg-disabled` | `#a5a5a5` | `#d2d2d2` |

### control border
| token | light | dark |
|---|---|---|
| `control/border/border-default` | `#d2d2d2` | `#d2d2d2` |
| `control/border/border-disabled` | `#a5a5a5` | `#dddddd` |

### control text (라벨)
| token | light | dark |
|---|---|---|
| `control/text/text-default` | `#dddddd` | `#393939` |
| `control/text/text-active` | `#f4f4f4` | `#000000` |
| `control/text/text-disabled` | `#a5a5a5` | `#dddddd` |

### Ranking (체크박스 단계 표시 변형)
| token | light | dark |
|---|---|---|
| `control/common/bg-ranking` | `#727272` | `#e9e9e9` |
| `control/common/fg-ranking` | `#f4f4f4` | `#f4f4f4` |

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| sm | `body/sm` | Pretendard 400 / 14 / 20 |
| md | `body/md` | Pretendard 400 / 16 / 24 |
| lg | `body/xl` | Pretendard 400 / 20 / 28 |

> checked 시 weight 600 (SemiBold)으로 변경

## Variants / States

- **state**: default / hover / pressed / disabled
- **active**: unchecked / checked / indeterminate
- **style**: Standard (기본) / Ranking (단계 표시)
- **size**: sm / md / lg

## Usage Notes

- checked 시 box bg = brand orange(`#eb6100` 계열) — Selection control 공통 룰
- unchecked 시 weight=400, checked/indeterminate 시 weight=600
- Required 표시는 `*` 텍스트 + `text input/etc/required mark`(red) 사용
- hover/pressed는 알파 오버레이로 표현 (control/common/* 토큰)
- Ranking style은 checked 상태만 존재 (yellow bg + white fg 별도 토큰)
