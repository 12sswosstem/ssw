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

## Description (Figma `1:220044` verbatim)

칩(Chip)은 정보를 필터링하거나 선택 항목을 표현하는 컴팩트한 UI 요소입니다.

사용자가 다수의 항목 중 하나 또는 여러 개를 선택할 때 활용되며, 색상과 모양 조합으로 선택 여부를 명확히 전달합니다.

칩은 필터(Filter)와 선택(Choice) 두 가지 용도로 구분되며, 편집 아이콘(✎)과 삭제 아이콘(×)을 함께 표시할 수 있습니다.

## Anatomy (verbatim)

칩은 Container와 Label로 구성되며, 왼쪽에 Prefix Icon, 오른쪽에 Suffix(삭제) 아이콘을 선택적으로 표시할 수 있습니다.

| 요소 | 설명 (verbatim) |
|---|---|
| 아이콘 (prefix Icon) | 칩의 맥락을 보조하는 아이콘. show icon 속성으로 표시 여부 제어 |
| 레이블 (Lable) | 칩의 내용을 나타내는 텍스트. 필수 요소 |
| 아이콘 (Suffic Icon) | 입력 칩에서 항목 제거 시 사용. show delete 속성으로 표시 여부 제어 |
| 컨테이너 (Container) | 전체 칩 영역. 형태(rounded/square)와 크기(xsm/sm/md) 적용 |

> ⚠ Figma 원본 verbatim — "레이블 (Lable)" / "아이콘 (Suffic Icon)" 오타 그대로 보존.

## Properties (verbatim)

### Size
칩은 xsmall, small, medium의 총 3가지 사이즈로 제공합니다. xsmall부터 medium까지의 사이즈는 다양한 디바이스 환경에서 요소의 중요도와 배치 맥락에 맞게 선택하여 사용합니다. 상태에 따라 테두리, 배경, 텍스트 색상이 변경됩니다.

### Shape
칩의 외형 형태를 결정합니다. Rounded는 완전한 pill 형태이며, Square는 모서리가 4px인 직사각형입니다.

### Layout
칩은 아이콘과 레이블의 조합으로 구성되며, 아이콘은 칩의 맥락을 시각적으로 보조합니다. 아이콘을 앞에 배치하거나 삭제 아이콘을 뒤에 배치할 수 있어 상황에 맞게 유연하게 활용할 수 있습니다. Icon Only 레이아웃은 아이콘만으로 의미를 전달하기 때문에 접근성이 떨어집니다. 꼭 필요한 경우에만 사용하는 것을 권장합니다.

### Varient
칩의 선택 상태를 색상으로 표현하는 스타일입니다. Default 상태는 동일하며 Selected 상태는 맥락에 따라 Outline 또는 Filled(Orange, Gray)를 사용합니다.

> ⚠ Figma 원본 헤딩 오타 — "Variant"가 "Varient"로 표기됨.

### State
칩은 Default, Hover, Selected, Selected-Filled(Orange/Gray), Focused, Disabled 총 7가지 상태를 가집니다. 상태에 따라 테두리, 배경, 텍스트 색상이 변경됩니다.

| State | 설명 (verbatim) |
|---|---|
| Default | 메뉴 아이템의 기본 상태로, 사용자의 행동을 유도하는 액션 목록을 제공합니다. |
| Hover | 마우스가 올라간 상태로, 상호작용 가능함을 시각적으로 안내합니다. |
| Selected Outline | 현재 활성화되어 선택된 상태로, 선택형 항목에서 적용 중인 값을 나타냅니다. |
| Selected Filled (Orange) | 현재 활성화되어 선택된 상태로, 선택형 항목에서 적용 중인 값을 나타냅니다. |
| Selected Filled (Gray) | 현재 활성화되어 선택된 상태로, 선택형 항목에서 적용 중인 값을 나타냅니다. |
| Focused | 키보드 탐색 등으로 포커스가 위치한 상태로, 접근성을 위한 시각적 표시입니다. |
| Disabled | 사용자가 메뉴 아이템에 동작을 요구하지 못하는 비활성화 상태입니다. |

> ⚠ Figma 원본 verbatim — Hover/Disabled 등 일부 설명이 "메뉴 아이템"으로 표기됨 (Dropdown 페이지 복사). 의미상은 "칩".

## Guidelines (verbatim)

### Chip의 활용 (Figma `1:220329` verbatim)
Chip은 사용자가 선택하거나 입력하는 값을 표시할 때 단독으로 사용할 수 있으며 여러 개의 Chip을 함께 사용하는 경우 Chip Group 템플릿을 사용합니다. Chip Group은 단일 또는 다중 선택(Selection)의 용도로 사용할 수 있습니다.

가이드 페이지의 시각 예시 (3 행):

| Usage | 시각 |
|---|---|
| `Chip` | 단일 chip 5종: 채용중 (default / outline / filled-orange / filled-gray / disabled) — 각 person 아이콘 prefix |
| `Chip Group - 다중선택` | 5 chips outline orange: 전체 27 / 예약 22 / 미이행 0 / 취소 0 / 이행 5 |
| `Chip Group - 단일선택` | 3 chips: 전체 (filled orange) / Master Course (default) / Short Term Seminar (default) |

### Hierarchy (Figma `1:220371` verbatim)
칩은 단독으로 사용하거나 여러 개를 Chip Group으로 묶어 사용할 수 있습니다. Chip Group은 단일 선택(Single Selection)과 다중 선택(Multi Selection) 두 가지 용도로 사용할 수 있습니다.

단일 선택에는 Filled(Solid) 스타일을 사용합니다. 하나의 항목만 강조되므로 채움 색상으로 눈에 띄게 강조합니다.

다중 선택에는 Outline 스타일을 사용합니다. 선택된 항목이 여러 개일 때 Solid로 표현하면 시각적으로 너무 세기 때문에, 주목도가 낮은 Outline이 적합합니다.

가이드 페이지의 Emphasis Level 표 (verbatim):

| Emphasis Level | Varient | Usage |
|---|---|---|
| **Single Selection** (단일 선택) | `selected-filled-orange` / `selected-filled-gray` | 단일 선택(Single Selection)에 사용. 선택 항목 하나를 강하게 강조할 때 적합 |
| **Multi Selection** (다중 선택) | `selected` | 다중 선택(Multi Selection)에 사용. 여러 항목이 선택돼도 시각적으로 과하지 않음 |

### 같은 그룹 내 일관성 (Figma `1:220411` verbatim)
동일한 칩 그룹 안에서 크기, 형태, 아이콘 유무를 통일합니다.

| ✓ Do | ✗ Don't |
|---|---|
| 5 chips 모두 sm/rounded 동일, suffix 없음 (prefix만 일부) | sm/rounded는 같지만 prefix/suffix 아이콘 유무 혼용 |

### 색상 적용 (Figma `1:220452` verbatim)
같은 그룹 내에서 Filled Orange와 Filled Gray를 혼용하지 않습니다. 오렌지 또는 그레이 중 하나를 일관되게 사용하여 단일 색상 테마로 선택 상태를 명확히 전달합니다.

| ✓ Do | ✗ Don't |
|---|---|
| 1 filled-gray + 4 default (모두 prefix 아이콘) — 단일 Gray 테마 | 1 filled-gray + 1 filled-orange + 3 default — Orange/Gray 혼용 |

### 비활성화 처리 (Figma `1:220493` verbatim)
선택 불가 칩은 Disabled 처리합니다. 항목의 존재를 인지시켜야 하기 때문에 선택 불가 항목을 아예 숨기지 않습니다.

| ✓ Do | ✗ Don't |
|---|---|
| 3 chips: filled-gray + default + **disabled** (존재 인지) | 2 chips만: filled-gray + default — disabled 항목 숨김 |

### 같은 그룹 내 일관성
동일한 칩 그룹 안에서 크기, 형태, 아이콘 유무를 통일합니다.

### 색상 적용
같은 그룹 내에서 Filled Orange와 Filled Gray를 혼용하지 않습니다. 오렌지 또는 그레이 중 하나를 일관되게 사용하여 단일 색상 테마로 선택 상태를 명확히 전달합니다.

### 비활성화 처리
선택 불가 칩은 Disabled 처리합니다. 항목의 존재를 인지시켜야 하기 때문에 선택 불가 항목을 아예 숨기지 않습니다.

## 접근성 (Figma verbatim)

> ⚠ Figma 원본 본문은 일부 "버튼" 또는 "메뉴"로 표기 — 다른 페이지에서 복사된 것으로 보임. 의미상은 "칩".

모든 사용자가 버튼의 기능을 인식하고 조작할 수 있도록, 아래 WCAG 및 ARIA 가이드라인을 준수합니다. 키보드, 스크린리더, 터치 등 다양한 입력 방식에서 일관된 접근성을 보장하여 사용 오류를 최소화합니다.

### WCAG 2.2

#### 키보드 접근성 (SC 2.1.1)
Tab 키로 칩에 포커스를 이동할 수 있어야 합니다. Enter 또는 Space 키로 칩을 선택 및 해제할 수 있어야 합니다.

#### 포커스 가시성 (SC 2.4.7)
메뉴에 키보드 포커스가 있을 때 2px 이상의 고대비 포커스 인디케이터를 표시해야 합니다.

#### 클릭 대상 크기 (PC 기준, SC 2.5.8)
마우스·트랙패드 환경에서 클릭 가능한 메뉴 목표(target)는 최소 24×24 CSS 픽셀을 확보해야 하며, 목표가 이보다 작을 경우 요소 간 최소 24px 이상의 간격을 유지해야 합니다.

#### 비활성화 상태
비활성화된 메뉴는 시각적으로 명확히 구분되고, 클릭이 불가능해야 하며 키보드 포커스에서 제외합니다.

## 상호작용 가이드라인 (verbatim)

### 탐색

| 구분 | 설명 |
|---|---|
| Tab | 칩 그룹 내 다음 칩으로 포커스 이동 |
| Shift + Tab | 칩 그룹 내 이전 칩으로 포커스 이동 |
| ← / → | 칩 그룹 내 좌우 이동 (선택적 구현) |

### 실행

| 구분 | 설명 |
|---|---|
| Enter / Space | 칩 선택 또는 해제 |
| Delete / Backspace | 삭제 버튼이 있는 경우 항목 제거 |

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
