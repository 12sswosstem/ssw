# Dropdown

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#dropdown`, `tokens/number/component.js#dropdown`.
> 토큰 prefix: `dropdown/*`, `input_(dropdown)/*` (number).

## Overview
- 선택 드롭다운 (단일/다중 선택)
- label position: top / side
- size: xs_24 / sm_28 / md_32 / lg_40 / xl_48 / 2xl_64
- type: placeholder / inputed
- state: default / hover / focus / disabled
- MPR mode: off / on

## Number tokens (Mode 1)

### height (px)
| size | height |
|---|---|
| xs_24 | 24 |
| sm_28 | 28 |
| md_32 | 32 |
| lg_40 | 40 |
| xl_48 | 48 |
| 2xl_64 | 64 |

### padding (좌우, px)
| size | padding |
|---|---|
| xs_24 | 4 |
| sm_28 / md_32 | 8 |
| lg_40 / xl_48 | 12 |
| 2xl_64 | 16 |

### corner radius (px)
| size | radius |
|---|---|
| xs_24 / sm_28 / md_32 | 4 |
| lg_40 / xl_48 | 6 |
| 2xl_64 | 8 |

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `dropdown/bg/default` | `#000000` | `#fefefe` |
| `dropdown/bg/disabled` | `#2b2b2b` | `#eeeeee` |
| `dropdown/bg/selected` | — | `#fbdfcc` |
| `dropdown/bg/menu_bg` | `#000000` | `#f4f4f4` |
| `dropdown/bg/menu_hover` | `#1d1d1d` | `#dddddd` |

### text
| token | light | dark |
|---|---|---|
| `dropdown/text/default` | `#eeeeee` | `#393939` |
| `dropdown/text/placeholder` | `#bcbcbc` | `#a5a5a5` |
| `dropdown/text/read only` | `#bcbcbc` | `#a5a5a5` |
| `dropdown/text/disabled` | `#a5a5a5` | `#8f8f8f` |
| `dropdown/text/label` | `#dddddd` | `#0e0e0e` |

### border
| token | light | dark |
|---|---|---|
| `dropdown/border/default` | `#a5a5a5` | `#eeeeee` |
| `dropdown/border/default_mpr` | `#a5a5a5` | `#f4f4f4` |
| `dropdown/border/disabled` | `#8f8f8f` | `#dddddd` |
| `dropdown/border/selected` | — | `#ef8133` |
| `dropdown/border/menu_border` | `#2b2b2b` | `#dddddd` |

### etc
| token | light | dark |
|---|---|---|
| `dropdown/etc/scroll-default` | `#393939` | `#dddddd` |
| `dropdown/etc/required mark` | `#df3422` | `#727272` |

## Variants

- **label position**: top / side
- **size**: xs_24 / sm_28 / md_32 / lg_40 / xl_48 / 2xl_64
- **type**: placeholder / inputed
- **state**: default / hover / focus / disabled
- **MPR mode**: off / on

## Usage Notes

- MPR(Multi-Patient Record) 모드는 의료 PMS 컨텍스트의 멀티 선택 드롭다운
- `border/default` vs `border/default_mpr` 분리 — MPR 활성 시 border 변경
- 메뉴 펼침 시 `bg/menu_bg`, hover 항목은 `bg/menu_hover`
- 메뉴 항목 선택 시 `bg/selected` (light=transparent / dark=`#fbdfcc`) + `border/selected` (orange)
