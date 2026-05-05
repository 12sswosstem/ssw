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

### type별 의미 (가이드 verbatim)

| type | 가이드 설명 | 시각 |
|---|---|---|
| `basic` | "전체 이미지/텍스트형 일반 배너" | 단순 콘텐츠 (이미지 슬롯 없음) |
| `vertical` | "상단 이미지 + 컨텐츠 수직 정렬" | 이미지 위 + 텍스트 아래 |
| `horizontal` | "좌측 이미지 + 컨텐츠 수평정렬" | 이미지 좌 + 텍스트 우 |
| `filled` | "전체이미지 + 컨텐츠(투명 BG)" | 이미지 가득 + 텍스트 영역 투명 |
| `harf` | "상단 이미지 + 컨텐츠(화이트 BG)" | 이미지 가득 + 텍스트 영역 흰 BG (overlay) |

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

## State별 시각 (production light)

| state | bg | border | 비고 |
|---|---|---|---|
| default | `#ffffff` | `#dadada` 1px | 기본 |
| hover | `#ffffff` | `#292929` | border만 진해짐 |
| pressed | `#f4f4f4` | `#292929` | bg 옅은 회색 |
| selected | `#ffffff` | `#fc7d00` | brand orange border |
| focus | transparent | inner `#393939` + outer 2px `#020202` | 이중 ring |

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
