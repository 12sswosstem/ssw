# Card

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `2395:35765` `card_0407`
>   - `2395:35784` `card_slot` (wrapper — **25 variants**, 2축)
>   - `2395:36013` `card_element_0401` (내부 — **12 variants**, 3축)
>   - `2395:36182` `img_test_2` (이미지 placeholder 407×300)
>   - `2395:36218` `image_22` (이미지 small 70×70)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / `1:406332`
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#card`, `tokens/number/component.js#card`.
> 토큰 prefix: `card/*`.

## Overview
- 콘텐츠 그룹화 컨테이너
- 모드: **light** (production variable_defs 기준)
- 2 컴포넌트:
  - `card_slot` (외부 wrapper) — type 5종 × state 5종 = 25 variants
  - `card_element_0401` (내부 element/footer) — state × align × button count = 12 variants

## Number tokens (Mode 1)

| token | px |
|---|---|
| `card/corner radius sm` | 12 |
| `card/corner radius md` | 8 (figma-export 기준) |

> 가이드 기준 기본 radius는 sm=12 (둥근 모서리).

## Color tokens — production (light)

### bg / border (state별)
| token | light | 비고 |
|---|---|---|
| `Static/Neutral Gray/0` | `#ffffff` | bg default |
| `Static/Neutral Gray/50` | `#f4f4f4` | bg pressed |
| `Static/Gray/300` | `#dadada` | border default |
| `Static/Gray/800` | `#292929` | border hover/pressed |
| `Static/Orange/600` | `#fc7d00` | border selected (brand orange variant) |
| `Static/Neutral Gray/999` | `#020202` | focus ring outer |
| `Static/Gray/400` | `#c6c6c6` | disabled |

### text (text-on-color)
| token | light |
|---|---|
| 카드 title (Bold 16) | `text input/text/label` 또는 검정 |
| 카드 body (Medium 14) | `#393939` 또는 `text-secondary` |
| 카드 description (Regular 12) | `#a5a5a5` |

## Wrapper Variants — `card_slot` (2축, 25 variants)

### prop verbatim
- **type**: `basic` / `vertical` / `horizontal` / `harf` / `filled` (5가지 — `harf`는 `half` 오타!)
- **state**: `default` / `hover` / `pressed` / `focus` / `selected` (5가지)

총 5 × 5 = **25 variants**

### Variant IDs

| state \\ type | basic | vertical | horizontal | filled | harf |
|---|---|---|---|---|---|
| default | `2395:35797` | `2395:35785` | `2395:35805` | `2395:35829` | `2395:35817` |
| hover | `2395:35799` | `2395:35788` | `2395:35808` | `2395:35832` | `2395:35820` |
| pressed | `2395:35803` | `2395:35794` | `2395:35814` | `2395:35838` | `2395:35826` |
| focus | `2395:35841` | `2395:35845` | `2395:35850` | `2395:35855` | `2395:35860` |
| selected | `2395:35801` | `2395:35791` | `2395:35811` | `2395:35835` | `2395:35823` |

> 컴포넌트 셋 mannequin 크기는 모두 360×360. 실제 canvas instance는 type별로 크기 다름 (아래 참조).

### type별 의미 (UI-Kit-Guide `352:35727` verbatim — 신규 가이드 파일 `LxBPQF1oFOfiNdX5qzLcik`)

> 카드는 콘텐츠 성격과 배치 방식에 따라 구분합니다. **Basic, Vertical, Horizontal, Filled, Half**의 총 5가지 형태를 제공합니다.

> **시각화 사이즈 메모** (spec.html 한정): Figma 가이드 페이지는 label/설명을 display_xs(24px / lh 40)로 표기하지만, spec sheet 시각화에서는 가독성과 밀도를 위해 label 18px(SemiBold) / 설명 14px(Regular, lh 22)로 축소 렌더. type 카드 본체(360×*)와 내부 콘텐츠(328×*)는 Figma verbatim 유지.

> **시각화 비율 조정** (`1:406506` 가이드 실 사용 예 기반):
> - Horizontal: 가이드 mannequin은 image 80×328 / body 238×328 (총 360×360)이지만, 실 사용 예시(`352:35760`)는 image 296×218 사용. spec.html은 비율 균형을 위해 `max-width: 520px`, `image: 40% / body: flex 1`로 렌더 (좁은 컬럼 들어가도 협소하지 않게).
> - Filled/Half body: 가이드 spec은 fixed `height: 143px`이지만, body 콘텐츠(title + body text + button)가 좁은 폭에서 더 많은 줄을 차지하면 잘릴 수 있어 `min-height: 143px` + `gap: 4px` + `padding: 14px 16px`로 자동 확장하도록 조정. body width는 카드 폭에 맞춰 `width: 100%`로 반응형.
> - **body 내 button 하단 고정**: `.card-body-slot .card-btns { margin-top: auto; }` — Horizontal/Vertical/Filled/Half 모두 이미지와 button이 카드 상하 양 끝에 정렬되어 시각 균형 유지. 본문(title/body/desc/badge/price)은 자연 위에서부터 흐름.
> - **Horizontal 4면 정렬 핵심**: 카드의 fixed `height` 제거 + image `min-height: 220px`만 설정. parent의 `align-items: stretch`가 image와 body를 항상 같은 높이로 강제 → 이미지 상단 == 텍스트 상단, 이미지 하단 == 버튼 하단. 콘텐츠가 길어지면 image도 따라 늘어남. (이전 fixed 260px 높이는 좁은 컬럼에서 body text가 4줄 이상 wrap 되면 image와 정렬이 어긋났음.)

| type | 가이드 verbatim 설명 | 시각 구조 |
|---|---|---|
| `Basic` | 텍스트 중심의 기본 카드입니다. 제목, 보조 정보, 가격 또는 최소 상태, CTA 등 최소 구성으로 이루어지며, 가장 범용적으로 사용할 수 있습니다. | 이미지 없음, 텍스트만 |
| `Vertical` | 상단 이미지와 하단 정보가 수직으로 배치된 형태입니다. 상품 및 일반형 카드에 적합합니다. | 카드 padding 안쪽 상단에 이미지(rounded) + 하단 텍스트. **full bleed 아님** |
| `Horizontal` | 이미지와 텍스트가 좌우로 배치된 형태입니다. 리스트형 카드에 적합합니다. | 카드 padding 안쪽 좌측에 이미지(rounded) + 우측 텍스트. **full bleed 아님** |
| `Filled` | 카드 전체를 비주얼 또는 배경으로 활용하는 형태입니다. 프로모션 및 배너형 콘텐츠에 적합합니다. | 카드 전체가 이미지 배경, 텍스트는 이미지 위에 직접 (overlay 박스 없음) |
| `Half` | 상하 또는 좌우로 영역을 분할한 형태입니다. 정보와 비주얼을 구분해 보여줄 때 적합합니다. | 상단 이미지(border radius 0) + 하단 흰색 텍스트 영역 — 영역 분할 |

> **`harf` ↔ `Half` 표기 정정**: 신규 가이드 파일에서는 `Half`로 정정됨. 단, production component file (`2395:35784`)의 variant prop은 여전히 `harf` 오타 보존 — variant 매칭 시 코드는 `harf`, 디자인 문서는 `Half` 사용.

### type별 instance 실측 크기

| type | width × height | image slot | body slot |
|---|---|---|---|
| basic | 360 × 250 | (없음) | 328×218 (pad 16) |
| vertical | 360 × 330 | 328×70 top | 328×218 |
| horizontal | 777 × 332 | 407×300 left | 328×218 |
| filled | 360 × 420 | 360×420 full | 360×168 (bottom overlay, transparent) |
| harf | 360 × 420 | 360×420 full | 360×168 (bottom overlay, white BG) |

> mannequin variant 크기는 통일된 360×360, 실 사용 시 콘텐츠에 맞춰 instance resize.

## Element Variants — `card_element_0401` (3축, 12 variants)

set ID: `2395:36013`. 카드 내부의 텍스트+버튼 영역.

### prop verbatim
- **state**: `Default` / `disabled` (대문자 D)
- **align**: `left` / `right` / `center`
- **button count**: `1` / `2`

총 2 × 3 × 2 = **12 variants** (frame 328×218)

### Variant IDs

| state \\ align \\ count | left/1 | left/2 | right/1 | right/2 | center/1 | center/2 |
|---|---|---|---|---|---|---|
| Default | `2395:36014` | `2395:36066` | `2395:36040` | `2395:36096` | `2395:36126` | `2395:36152` |
| disabled | `2395:36027` | `2395:36081` | `2395:36053` | `2395:36111` | `2395:36139` | `2395:36167` |

> 일부 대체 ID (`2395:36053`, `36139` 등)는 같은 prop 조합의 중복/대체 variant로 추정.

## Anatomy

### card_slot (basic — 가장 단순)
```
┌─────────────────────────┐  ← bg #ffffff, border 1px #dadada (default)
│  ┌─────────────────┐    │
│  │ body text slot  │    │  ← card_element_0401 내부 (328×218)
│  │ (16 padding)    │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

### card_slot (vertical)
```
┌─────────────────────────┐
│  ┌─────────────────┐    │
│  │ image (328×70)  │    │  ← 상단 이미지
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │ body text       │    │  ← 하단 콘텐츠
│  └─────────────────┘    │
└─────────────────────────┘
```

### card_slot (horizontal)
```
┌─────────┬───────────┐
│         │           │
│ image   │ body text │  ← 좌 이미지(407×300) + 우 콘텐츠(328×218)
│ 407×300 │ 328×218   │
└─────────┴───────────┘
```

### card_slot (filled / harf — 이미지 위 텍스트 overlay)
```
┌─────────────────────────┐
│                         │
│       full image        │  ← 360×420 가득
│                         │
│  ┌─────────────────┐    │
│  │ text overlay    │    │  ← bottom 360×168
│  │ filled: trans   │    │     filled = 투명 BG
│  │ harf:   white   │    │     harf = 흰 BG (오타: harf=half)
│  └─────────────────┘    │
└─────────────────────────┘
```

### card_element_0401 (frame 328×218)
```
┌─────────────────────────┐
│ Title                   │  ← Pretendard Bold 16
│ Body text Medium 14     │
│ Description Regular 14  │
│ • Price Medium 16       │
│ [Badge Regular 12]      │
│ [Button SemiBold 16]    │  ← 1 또는 2 버튼 (button count)
└─────────────────────────┘
```

## State (UI-Kit-Guide `1:406577` verbatim)

> 카드는 상호작용과 정보 전달을 위해 상태를 가집니다.
> 모든 유형은 공통된 상태 원칙을 따르며, 유형별 표현 방식만 달라질 수 있습니다.

카드는 **6가지 상태**로 구성됩니다:

| state | bg | border | 시각 |
|---|---|---|---|
| `Default` | `#ffffff` | `#dadada` 1px | 기본 상태 — 흰 배경 + 라이트 그레이 외곽선 |
| `Hover` | `#ffffff` | `#292929` | 마우스 오버 — 진한 외곽선으로 강조 |
| `Pressed` | `#f4f4f4` | `#292929` | 클릭/탭 중 — 옅은 회색 배경 + 진한 외곽선 |
| `Focus` | `#ffffff` | black 2px outline ring | 키보드 tab focus — black outline ring |
| `Selected` | `#ffffff` | `#fc7d00` (brand orange) | 사용자가 선택한 활성 상태 — orange 외곽선 |
| `Disabled` | `#ffffff` | `#dadada` 1px | 비활성화 상태 — 콘텐츠 전체가 흐려짐 (opacity 0.4) |

> 가이드 페이지(`1:406577`) 2×3 그리드 verbatim. (이전 `352:35789` 6-state 메모리는 BUTTON 상태로 잘못 매핑된 것이었고, 본 표는 CARD 자체의 상태.)

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| Title | `body/sm (B)` | Pretendard 700 / 16 / 24 |
| Body | `body/xs (M)` | Pretendard 500 / 14 / 20 |
| Description | `body/xs (R)` | Pretendard 400 / 14 / 20 |
| Caption | `caption/sm (R)` | Pretendard 400 / 12 / 16 |
| Button | `button/lg (SB)` | Pretendard 600 / 16 / 24 |
| Body (Medium) | `body/sm (M)` | Pretendard 500 / 16 / 24 |

> v0.4 textStyle 기준. 이전 메모리 "Bold 16 / Medium 14"와 일치.

## Usage Notes

- variant 매칭 verbatim:
  - `type=basic` / `vertical` / `horizontal` / `filled` / **`harf`** (Figma 오타 — `half` 아님!)
  - `state=default` / `hover` / `pressed` / `focus` / `selected`
  - element: `state=Default` (대문자 D) / `disabled`
  - element: `align=left` / `right` / `center`
  - element: `button count=1` / `2` (공백 포함)
- `harf`는 의도적 오타 (Figma 원본 표기) — variant 매칭 시 그대로 사용
- type 차이 명확화:
  - `harf` (= half): 이미지 위 + **흰색 텍스트 영역** (overlay 가독성 ↑)
  - `filled`: 이미지 위 + **투명 텍스트 영역** (이미지가 텍스트 너머로 보임)
- selected 시 border = brand orange (`#fc7d00`)
- focus는 **이중 ring** (외곽 2px black + 내부 진한 회색) — 단일 ring 금지
- card_element_0401은 카드 내부의 콘텐츠 영역 (텍스트 + 버튼 묶음)
- button count=1: 단일 버튼 (예: "자세히 보기")
- button count=2: 2 버튼 (예: 좌 cancel + 우 primary action)
- align=left: 텍스트 좌측, 버튼 좌측
- align=center: 텍스트 중앙, 버튼 중앙 (강조 카드)
- align=right: 텍스트 우측, 버튼 우측
- 카드 mannequin 크기는 360×360, 실 사용 시 콘텐츠에 맞춰 resize 가능
- horizontal type만 너비 777 (이미지 영역 추가)
