# Table

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#table`, `tokens/number/component.js#table`.
> 토큰 prefix: `❤️table/*`.

## Overview
- 모드: **light · dark**
- 사이즈: xs_24 → sm_28 → md_32 → lg_40 → xl_48 → 2xl_56
- type: cell / header / subheader / sum

## Number tokens (Mode 1)

### height (px)
| size | px |
|---|---|
| xs_24 | 24 |
| sm_28 | 28 |
| md_32 | 32 |
| lg_40 | 40 |
| xl_48 | 48 |
| 2xl_56 | 56 |

### padding (좌우, px)
| size | padding |
|---|---|
| xs_24 / sm_28 / md_32 / lg_40 | 8 |
| xl_48 / 2xl_56 | 12 |

### gap (px)
| size | gap |
|---|---|
| xs_24 / sm_28 | 4 |
| md_32 / lg_40 | 8 |
| xl_48 | 12 |
| 2xl_56 | 16 |

### text-size (px)
| size | font-size |
|---|---|
| xs_24 / sm_28 / md_32 | 14 |
| lg_40 / xl_48 | 16 |
| 2xl_56 | 18 |

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `table/bg/bg-header` | `#1d1d1d` | `#dddddd` |
| `table/bg/bg-subheader` | `#393939` | `#eeeeee` |
| `table/bg/bg-cell-default` | `#020202` | `#f4f4f4` |
| `table/bg/bg-cell-zebra` | `#1d1d1d` | `#eeeeee` |
| `table/bg/bg-cell-hover` | `#727272` | `#dddddd` |
| `table/bg/bg-cell-selected` | — | `#fbdfcc` |
| `table/bg/bg-sum` | `#565656` | `#e9e9e9` |

### text
| token | light | dark |
|---|---|---|
| `table/text/text-header` | `#f4f4f4` | `#020202` |
| `table/text/text-cell` | `#e9e9e9` | `#393939` |

### border
| token | light | dark |
|---|---|---|
| `table/border/border-default` | `#727272` | `#dddddd` |
| `table/border/border-divider` | `#727272` | `#dddddd` |
| `table/border/border-selected` | — | `#ef8133` |

### icon
| token | light | dark |
|---|---|---|
| `table/icon/default` | `#d2d2d2` | `#8f8f8f` |

## Typography

| 영역 | textStyle | size · weight |
|---|---|---|
| header | `body/sm (SB)` 또는 `body/md (SB)` | 14·600 / 16·600 |
| cell (xs_24~md_32) | `body/sm` | 14·400 |
| cell (lg_40~xl_48) | `body/md` | 16·400 |
| cell (2xl_56) | `body/lg` | 18·400 |
| sum | `body/* (SB)` | 동일 사이즈 SemiBold |

## Variants / States

- **type**: cell / header / subheader / sum
- **style**: body / icon / button / checkbox / no(번호) / slot-h / slot-v
- **align**: left / center / right
- **zebra**: false / true (cell only)
- **compact**: false / true (header/subheader/sum only)
- **state**: default / hover / selected

## Usage Notes

- Row 패턴: `checkbox → no → body(×N) → icon/button` (좌→우)
- zebra row는 짝수 행에 `bg-cell-zebra` 적용
- selected 시 `border-selected`(orange) + `bg-cell-selected` 동시 적용
- cell text와 header text는 모드별로 명확한 대비 (light에서 헤더가 어두움)
- divider/border 모두 `#727272`(light)·`#dddddd`(dark)로 동일
