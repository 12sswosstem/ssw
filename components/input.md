# Input (TextInput)

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#input`, `tokens/number/component.js#input`.
> 토큰 prefix: `text input/*`, `input common/*`, `textinput/*`.

## Overview
- 모드: **light · dark**
- 사이즈: xs_24 → sm_28 → md_32 → lg_40 → xl_48 → 2xl_64 → 3xl_80 → 4xl_96 (+ underline 변형)

## Number tokens (Mode 1)

### height (= size 명, px)
| size | px |
|---|---|
| xs_24 | 24 |
| sm_28 | 28 |
| md_32 | 32 |
| lg_40 | 40 |
| xl_48 | 48 |
| 2xl_64 | 64 |

### corner radius (px)
| size | radius |
|---|---|
| xs_24 / sm_28 / md_32 | 4 |
| lg_40 / xl_48 | 6 |
| 2xl_64 / 3xl_80 | 8 |
| 4xl_96 | 12 |
| underline | 0 |

### border (default · focus 시 굵게)
| size | default | hover/focus |
|---|---|---|
| xs_24 / sm_28 / md_32 / lg_40 | 1 | 2 |
| xl_48 | 1.5 | 3 |
| 2xl_64 | 2 | 3 |
| 3xl_80 | 3 | 4 |
| 4xl_96 | 4 | 5 |
| underline | 0 | 0 |

### padding (좌우, px)
| size | padding |
|---|---|
| xs_24 | 6 |
| sm_28 / md_32 | 8 |
| lg_40 / xl_48 | 12 |
| 2xl_64 | 16 |
| 3xl_80 | 24 |
| 4xl_96 | 32 |
| underline | 0 |

### common
- `textinput/common/height` = 20 (보조 라인 영역)
- `textinput/common/height 2` = 32

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `text input/bg/default` | `#000000` | `#fefefe` |
| `text input/bg/disabled` | `#2b2b2b` | `#eeeeee` |
| `input common/bg/default` | `#000000` | `#fefefe` |
| `input common/bg/disabled` | `#8f8f8f` | `#eeeeee` |

### text
| token | light | dark |
|---|---|---|
| `text input/text/default` | `#eeeeee` | `#393939` |
| `text input/text/placeholder` | `#bcbcbc` | `#a5a5a5` |
| `text input/text/read only` | `#d2d2d2` | `#a5a5a5` |
| `text input/text/read only-pms` | `#eeeeee` | `#a5a5a5` |
| `text input/text/disabled` | `#a5a5a5` | `#8f8f8f` |
| `text input/text/label` | `#dddddd` | `#0e0e0e` |
| `input common/text/default` | `#eeeeee` | `#393939` |
| `input common/text/placeholder` | `#bcbcbc` | `#a5a5a5` |
| `input common/text/read only` | `#d2d2d2` | `#a5a5a5` |
| `input common/text/disabled` | `#bcbcbc` | `#8f8f8f` |
| `input common/text/label` | `#dddddd` | `#0e0e0e` |
| `input common/text/fg/default` | `#bcbcbc` | `#727272` |
| `input common/text/fg/active` | `#eeeeee` | `#393939` |
| `input common/text/fg/disabled` | `#bcbcbc` | `#8f8f8f` |

### border
| token | light | dark |
|---|---|---|
| `text input/border/default` | `#a5a5a5` | `#e9e9e9` |
| `text input/border/disabled` | `#8f8f8f` | `#dddddd` |
| `input common/border/default` | `#8f8f8f` | `#eeeeee` |
| `input common/border/disabled` | `#a5a5a5` | `#dddddd` |

### icon · etc
| token | light | dark |
|---|---|---|
| `text input/icon/default` | `#bcbcbc` | `#bcbcbc` |
| `text input/etc/required mark` | `#df3422` | `#727272` |
| `input common/icon/default` | `#bcbcbc` | `#bcbcbc` |
| `input common/etc/required mark` | `#df3422` | `#727272` |

## Typography

| 영역 | textStyle | font / size / line-height |
|---|---|---|
| 기본 텍스트 (md_32 이하) | `body/sm` | Pretendard 400 / 14 / 20 |
| 기본 텍스트 (lg_40, xl_48) | `body/md` | Pretendard 400 / 16 / 24 |
| 기본 텍스트 (2xl_64) | `body/xl` | Pretendard 400 / 20 / 28 |
| 라벨 | `body/sm (M)` | Pretendard 500 / 14 / 20 |
| 헬프/카운트 | `caption/sm` | Pretendard 400 / 12 / 16 |

## Variants / States

- **type**: placeholder / inputed / read only / underline
- **state**: default / hover / focus / disabled / read-only
- **etc**: required mark (`*`) — 필수 표기 시 `text input/etc/required mark` 사용

## Usage Notes

- 모든 사이즈에서 hover/focus 시 border 굵기가 1단계 증가
- `read only-pms`는 PMS 화면 한정 변형 (default보다 진하게 표시)
- placeholder와 disabled 색상은 모드별로 반전됨에 유의
- required mark는 text가 아닌 컬러 토큰만 다름 — 텍스트는 `*` 그대로
- underline 변형은 padding/radius 모두 0
