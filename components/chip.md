# Chip

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `2913:178643` `Chip`
> - 컴포넌트 셋:
>   - `2879:150759` `chip` (atom — **42 variants**, 3축)
>   - `3799:9153` `Chip Group` (group wrapper — 3 variants, size 단일축)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:220044`, `1:220647` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#chip`, `tokens/number/component.js#chip`.
> 토큰 prefix: `chip/*`.

## Overview
- 필터/선택형 작은 라벨 버튼
- 모드: **light** (production variable_defs 기준)
- 2 컴포넌트:
  - `chip` (atom): 단일 chip 인스턴스
  - `Chip Group` (wrapper): 여러 chip 슬롯 컨테이너 (size 통일)

## Number tokens (Mode 1)

### height (px)
| size | token | height |
|---|---|---|
| xs | `chip/height/xs` | 28 |
| sm | `chip/height/sm` | 32 |
| md | `chip/height/md` | 40 |

### padding (좌우, px)
| size | token | padding |
|---|---|---|
| xs | `chip/padding/sm` | 8 |
| sm | `chip/padding/md` | 10 |
| md | `chip/padding/lg` | 12 |

### gap (icon ↔ text, px)
| size | token | gap |
|---|---|---|
| xs | `chip/gap/xs` | 4 |
| sm | `chip/gap/sm` | 6 |
| md | `chip/gap/md` | 8 |

### radius (px)
| shape | token | radius |
|---|---|---|
| rounded (pill) | `chip/radius/circle` | 999 (production) / 480 (가이드 추정값) |
| sqaure | `chip/radius/xs` | 4 |

> **shape 오타 보존**: `sqaure` (Figma 원본 그대로, `square` 아님).

## Color tokens — production (light)

### bg (state별)
| token | light |
|---|---|
| `chip/bg/default` | `#ffffff` |
| `chip/bg/hover` | `#f4f4f4` |
| `chip/bg/disabled` | `#f4f4f4` |
| `chip/bg/selected-orange` | `#ef8133` (selected_filled_brand 의 bg) |
| `chip/bg/selected-gray` | `#505050` (selected_filled_gray 의 bg) |

### outline (border)
| token | light |
|---|---|
| `chip/outline/default` | `#bcbcbc` |
| `chip/outline/selected` | `#ef8133` (selected_outline 의 border) |
| `chip/outline/focused` | `#000000` (focus state ring) |
| `chip/outline/disabled` | `#eeeeee` |

### font
| token | light |
|---|---|
| `chip/font/default` | `#393939` |
| `chip/font/selected` | `#eb6100` (selected_outline 등에서 텍스트) |
| `chip/font/invert` | `#ffffff` (filled brand/gray 위 흰 텍스트) |
| `chip/font/disabled` | `#a5a5a5` |

### icon
| token | light |
|---|---|
| `chip/icon/default` | `#565656` |
| `chip/icon/selected` | `#eb6100` |
| `chip/icon/invert` | `#ffffff` |
| `chip/icon/disabled` | `#a5a5a5` |

## Variants — 3축 (verbatim)

### atom prop verbatim
- **state**: `default` / `hover` / `selected_outline` / **`selected_filled_brand`** / **`selected_filled_gray`** / `focus` / `disabled` (7가지)
- **shape**: `rounded` / **`sqaure`** (Figma 오타 보존)
- **size**: `xs` / `sm` / `md` (3가지)

총 7 × 2 × 3 = **42 variants**

> **이전 문서 정정**:
> - `selected_filled_orange` → **`selected_filled_brand`** (이름 변경됨)
> - `focused` → **`focus`** (state 명 단축)
> - atom의 size는 `xs/sm/md` (이전 `xsm/sm/md`는 group 전용)

### state별 시각 매핑
| state | bg | outline | font | icon |
|---|---|---|---|---|
| default | `bg/default` `#ffffff` | `outline/default` `#bcbcbc` | `font/default` `#393939` | `icon/default` `#565656` |
| hover | `bg/hover` `#f4f4f4` | `outline/default` | `font/default` | `icon/default` |
| selected_outline | `bg/default` (transparent fill) | `outline/selected` `#ef8133` | `font/selected` `#eb6100` | `icon/selected` `#eb6100` |
| selected_filled_brand | `bg/selected-orange` `#ef8133` | none | `font/invert` `#ffffff` | `icon/invert` `#ffffff` |
| selected_filled_gray | `bg/selected-gray` `#505050` | none | `font/invert` `#ffffff` | `icon/invert` `#ffffff` |
| focus | `bg/default` | `outline/focused` `#000000` 2px | `font/default` | `icon/default` |
| disabled | `bg/disabled` `#f4f4f4` | `outline/disabled` `#eeeeee` | `font/disabled` `#a5a5a5` | `icon/disabled` `#a5a5a5` |

## Variant IDs — atom

### state=default
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2879:150758` | `2913:177840` |
| sm | `2913:179637` | `2913:179641` |
| md | `2913:181102` | `2913:181106` |

### state=hover
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2913:152780` | `2913:177844` |
| sm | `2913:179645` | `2913:179649` |
| md | `2913:181110` | `2913:181114` |

### state=selected_outline
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2913:152832` | `2913:177848` |
| sm | `2913:179653` | `2913:179673` |
| md | `2913:181118` | `2913:181138` |

### state=selected_filled_brand
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2913:178273` | `2913:178487` |
| sm | `2913:179657` | `2913:179661` |
| md | `2913:181122` | `2913:181126` |

### state=selected_filled_gray
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2913:178331` | `2913:178491` |
| sm | `2913:179665` | `2913:179669` |
| md | `2913:181130` | `2913:181134` |

### state=focus
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2913:177787` | `2913:177852` |
| sm | `2913:179677` | `2913:179681` |
| md | `2913:181142` | `2913:181146` |

### state=disabled
| size \\ shape | rounded | sqaure |
|---|---|---|
| xs | `2913:177732` | `2913:177856` |
| sm | `2913:179685` | `2913:179689` |
| md | `2913:181150` | `2913:181154` |

## Wrapper — `Chip Group` (3 variants)

set ID: `3799:9153`. `Property 1` 단일 prop (size).

| Property 1 | variant ID | 크기 |
|---|---|---|
| `xsm` | `3799:9362` | 96 × 28 |
| `sm` | `3799:9154` | 116 × 32 |
| `md` | `3794:7999` | 136 × 40 |

> **size 명명 차이**: atom은 `xs/sm/md`, group은 **`xsm`**/`sm`/`md` (group의 xs는 `xsm` 표기 — 오타 또는 의도적 구분).

## Boolean Properties (instance level)

가이드(`4025:23305` Frame)에 정의된 추가 prop (variant 매트릭스 외):

| prop | values | 의미 |
|---|---|---|
| `show icon` | true / false | 좌측 아이콘 표시 |
| `show delete` | true / false | 우측 X(삭제) 버튼 표시 |
| `icon swap` | `edit` | 아이콘 교체 옵션 (단일 값) |

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| xs | `body/xxs (M)` | Pretendard 500 / 12 / 14 |
| sm | `body/sm (M)` | Pretendard 500 / 14 / 20 |
| md | `body/md (M)` | Pretendard 500 / 16 / 24 |

## Anatomy

```
[icon]  Label  [×]
 ↑       ↑      ↑
gap=4-8  font  optional delete (show delete=true)
```

- icon (옵션): show icon=true 시 좌측 표시 (`chip/icon/*`)
- text: 중앙 라벨 (`chip/font/*`)
- delete (옵션): show delete=true 시 우측 X 버튼

### shape별
- `rounded`: pill 형태 (radius=999 또는 480)
- `sqaure`: 4px radius (각진 사각)

## Usage Notes

- variant 매칭 verbatim:
  - `state=selected_filled_brand` (이전 `_orange` 아님)
  - `state=focus` (이전 `focused` 아님)
  - `shape=sqaure` (Figma 오타 보존)
  - atom: `size=xs` / `sm` / `md` 사용
  - group: `Property 1=xsm` (xs가 아닌 xsm) / `sm` / `md`
- selected는 3가지 변형:
  - `selected_outline`: 외곽선 brand orange + 내부 transparent (가벼운 선택)
  - `selected_filled_brand`: orange 가득 채움 (강한 선택 — 단일 토글)
  - `selected_filled_gray`: 회색 가득 채움 (대안 선택 — 색맹/주의 분산)
- focus state는 **2px black ring** (키보드 탐색)
- disabled는 회색 배경 + 옅은 텍스트
- 필터 패턴 (다중 선택): 보통 `selected_outline` 사용 (시각적 가벼움)
- 단일 토글 (라디오 형태): `selected_filled_brand` 사용
- icon swap=edit은 chip 내 아이콘이 편집 가능 표시 (예: 색상 선택 chip)
- chip group은 같은 size로 통일된 chip 줄 — 다른 size 섞을 때는 직접 layout
