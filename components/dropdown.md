# Dropdown

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `3294:332337` ` Dropdown`
>   - 컴포넌트 셋: `3661:108106` `Dropdown_v1.1` (12 variants 가시 — Size × Label Position)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:311147`, `1:310994` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export) — `Dropdown_v1.0` (`3294:183091`, 192 variants — 이전 버전)
>
> JS 토큰: `tokens/color/component.js#dropdown`, `tokens/number/component.js#dropdown`.
> 토큰 prefix: `dropdown/*`, `input_(dropdown)/*` (number).

## Overview
- 단일 선택 또는 다중 선택 드롭다운
- 모드: **light** (production variable_defs 기준)
- 현재 production 컴포넌트: **`Dropdown_v1.1`** (`3661:108106`)
  - 2축 prop: Size × Label Position (12 variants)
- 이전 버전 `Dropdown_v1.0` (`3294:183091`, 192 variants) — figma-export.json 기준 (state/type/MPR 풀 매트릭스)

## Number tokens (Mode 1)

### height (px) — `input_(dropdown)/height/{size}`
| size | height |
|---|---|
| xs_24 | 24 |
| sm_28 | 28 |
| md_32 | 32 |
| lg_40 | 40 |
| xl_48 | 48 |
| 2xl_64 | 64 |

### padding (좌우, px) — `input_(dropdown)/padding/{size}`
| size | padding |
|---|---|
| xs_24 | 4 |
| sm_28 | 8 |
| md_32 | 8 |
| lg_40 | 12 |
| xl_48 | 12 |
| 2xl_64 | 16 |

### corner radius (px) — `input_(dropdown)/corner radius/{size}`
| size | radius |
|---|---|
| xs_24 / sm_28 / md_32 | 4 |
| lg_40 / xl_48 | 6 |
| 2xl_64 | 8 |

### border 굵기 (textinput 공유)
| size | border |
|---|---|
| xs_24 ~ lg_40 | 1 |
| xl_48 | 1.5 |
| 2xl_64 | 2 |

## Color tokens — production (light)

### bg
| token | light |
|---|---|
| `dropdown/bg/default` | `#ffffff` |
| `dropdown/bg/menu_hover` | `#f4f4f4` |
| `dropdown/bg/selected` | `#fef7f2` (light orange tint) |
| `dropdown/bg/disabled` | `#eeeeee` |

### border
| token | light |
|---|---|
| `dropdown/border/default` | `#a5a5a5` |
| `dropdown/border/hover` | `#eb6100` (orange — NEW) |
| `dropdown/border/focused` | `#000000` (NEW) |
| `dropdown/border/selected` | `#f7c099` (light orange tint) |
| `dropdown/border/disabled` | `#bcbcbc` |

### text
| token | light |
|---|---|
| `dropdown/text/default` | `#2b2b2b` |
| `dropdown/text/placeholder` | `#8f8f8f` |
| `dropdown/text/disabled` | `#a5a5a5` |

### 공유 (input common)
| token | light |
|---|---|
| `text input/text/label` | `#565656` (label 텍스트) |
| `text input/etc/required mark` | `#f03823` (필수 표시 *) |
| `input common/bg/default` | `#ffffff` |
| `input common/border/default` | `#bcbcbc` |
| `input common/text/placeholder` | `#8f8f8f` |

> **중요 정정**: 이전 문서는 dark 모드 값 표기. production light로 정정:
> - bg/default: `#000000` → **`#ffffff`**
> - text/default: `#eeeeee` → **`#2b2b2b`**
> - text/placeholder: `#bcbcbc` → **`#8f8f8f`**
> - border/default: `#a5a5a5` (확인)
> - border/disabled: `#8f8f8f` → **`#bcbcbc`**
> - bg/selected: `#fbdfcc`(dark) → **`#fef7f2`** (light orange)
> - 신규: `border/hover` `#eb6100`, `border/focused` `#000000`

## Variants — `Dropdown_v1.1` (2축, 12 variants)

### prop verbatim
- **Size**: `xs_24` / `sm_28` / `md_32` / `lg_40` / `xl_48` / `2xl_64`
- **Label Position**: `Top` / `Side` (대문자 T/S)

### Variant IDs

#### Label Position=Top (label 위, dropdown 아래)
| size | variant ID | 크기 |
|---|---|---|
| xs_24 | `3661:108105` | 280 × 50 |
| sm_28 | `3661:108749` | 280 × 56 |
| md_32 | `3661:108963` | 280 × 60 |
| lg_40 | `3661:109175` | 280 × 68 |
| xl_48 | `3661:109413` | 280 × 80 |
| 2xl_64 | `3661:109653` | 280 × 96 |

#### Label Position=Side (label 좌, dropdown 우)
| size | variant ID | 크기 |
|---|---|---|
| xs_24 | `3661:108621` | 321 × 24 |
| sm_28 | `3661:108756` | 325 × 28 |
| md_32 | `3661:108970` | 325 × 32 |
| lg_40 | `3661:109182` | 325 × 40 |
| xl_48 | `3661:109420` | 328 × 48 |
| 2xl_64 | `3661:109660` | 328 × 64 |

> v1.1은 wrapper 수준 (state/type/MPR mode는 내부 인스턴스로 처리 추정). 풀 state 매트릭스가 필요하면 v1.0 (`3294:183091`, 192 variants) 참고.

## v1.0 vs v1.1 차이

| 측면 | v1.0 (`3294:183091`) | v1.1 (`3661:108106`) |
|---|---|---|
| variants | 192 | 12 (가시) |
| props | label position × size × type × state × MPR mode | Size × Label Position |
| state | default/hover/focus/disabled (variant) | 인스턴스 prop으로 처리 추정 |
| type | placeholder/inputed (variant) | 인스턴스 prop |
| MPR mode | off/on (variant) | (별도 처리) |

> 신규 작업은 **v1.1** 사용 권장. state/type/MPR은 인스턴스 properties API로 토글.

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| xs_24 / sm_28 / md_32 | `body/sm` | Pretendard 400 / 14 / 20 |
| lg_40 / xl_48 | `body/md` | Pretendard 400 / 16 / 24 |
| 2xl_64 | `body/xl` | Pretendard 400 / 20 / 28 |
| label | `body/sm` (Medium 500) | Pretendard 500 / 14 / 20 |

## Anatomy

### Label Position=Top
```
[Label  *]   ← `text input/text/label` #565656 + required mark #f03823
[─────────────────────  ▼]   ← input + chevron right (size별 height)
[help text · char count]
```

### Label Position=Side
```
[Label] [─────────────────  ▼]   ← label 좌측 + dropdown 우측
```

### state별 (production light)
| state | bg | border | text |
|---|---|---|---|
| default | `#ffffff` | `#a5a5a5` 1px | `#2b2b2b` |
| placeholder | `#ffffff` | `#a5a5a5` 1px | `#8f8f8f` |
| hover | `#ffffff` | `#eb6100` 1.5~2px | `#2b2b2b` |
| focused | `#ffffff` | `#000000` 2px | `#2b2b2b` |
| selected | `#ffffff` | `#f7c099` 1px | `#2b2b2b` |
| menu_hover (메뉴 항목) | `#f4f4f4` | — | `#2b2b2b` |
| disabled | `#eeeeee` | `#bcbcbc` 1px | `#a5a5a5` |

## Usage Notes

- variant 매칭 verbatim:
  - `Size=xs_24` (대문자 S)
  - `Label Position=Top` / `Side` (공백 + 대문자)
  - 풀네임 size (`xs_24`, `md_32` 등 — 단축 `xs`/`md`는 매칭 실패)
- v1.1은 wrapper 수준 — state/type 변형은 인스턴스 prop으로 처리
- v1.0은 풀 매트릭스 (state/type/MPR 모두 variant) — legacy 화면 사용 시 참조
- Label Position 비교:
  - `Top`: label 위 + dropdown 아래 (form 일반)
  - `Side`: label 좌 + dropdown 우 (수직 공간 부족 시, table row)
- hover 시 border가 brand orange (`#eb6100`)로 1.5~2px 굵어짐 (size별)
- focus 시 border 검정 (`#000000`) 2px — 키보드 탐색
- selected는 `bg/selected` 옅은 orange tint (`#fef7f2`) + border tint (`#f7c099`)
- 메뉴 펼침 시 항목 hover는 `bg/menu_hover` (`#f4f4f4`)
- placeholder 색상 `#8f8f8f` (이전 dark 값 `#bcbcbc` 와 다름)
- 필수 표기 `*` text 옆 → `text input/etc/required mark` (`#f03823`)
- v1.1 컴포넌트는 input_(dropdown) number 토큰 사용 (height/padding/corner radius)
- border 굵기는 size별 다름: xs~lg=1, xl=1.5, 2xl=2 (textinput 공유)
- size 별 권장 컨텍스트:
  - xs_24 ~ md_32: form filter, table dropdown
  - lg_40 / xl_48: form input (일반)
  - 2xl_64: 모바일 또는 강조
