# Popup

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `3165:5679` `FooterElement` (footer button groups — 4 variants)
>   - `4919:49959` (header sub)
>   - `2339:28762` (popup full)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `93:1107`, `100:61034` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#popup`, `tokens/number/component.js#popup`.
> 토큰 prefix: `popup/*`.

## Overview
- modal보다 가볍지만 popover보다 큰 floating 다이얼로그
- 모드: **light** (production variable_defs 기준)
- 3-section vertical: header + surface(contents) + footer
- shadow: `v0.1/elevation-50` (modal과 동일 강도)

## Number tokens (Mode 1) — production 검증

| token | px |
|---|---|
| `popup/padding` | 4 (외부 wrapper) |
| `popup/border` | 1 |
| `popup/radius` | 4 |
| `popup/header_padding` | 8 |
| `popup/section_padding` | 12 (surface 내부) |
| `popup/section_gap` | 12 (section 사이) |
| `popup/section_contents_gap` | 16 (콘텐츠 내부 gap) |
| `popup/gap` | 4 (footer button group 내부) |

> 신규 토큰 추가: `padding`, `border`, `radius`, `header_padding`, `section_padding`, `section_gap` 등 — 이전 md에는 `section_contents_gap`만 표기되어 있었음.

## Color tokens — production (light)

### bg
| token | light |
|---|---|
| `popup/bg` | `#f4f4f4` (외부 wrapper) |
| `popup/bg-header` | `#f4f4f4` (header 영역) |
| `popup/bg-surface` | `#ffffff` (콘텐츠 흰 surface) |
| `popup/bg-footer` | `#f4f4f4` (footer 영역) |

### border / text
| token | light |
|---|---|
| `popup/border-surface` | `#dddddd` (surface 외곽선) |
| `popup/text-header-title` | `#000000` (header 타이틀 — 검정) |
| `popup/text-contents-title` | `#000000` (콘텐츠 타이틀 — 검정) |

### shadow (effect)
| token | value |
|---|---|
| `v0.1/elevation-50` | `(0, 4) blur 4 #0000004D` + `(0, 8) blur 12 spread 6 #00000026` |

> **중요 정정**: 이전 문서는 dark 값 (`#1d1d1d`/`#000000`) 표기. production light 기준으로 정정.

## Sub-component — `FooterElement` (1축, 4 variants)

set ID: `3165:5679`. 푸터 버튼 그룹 정렬 컨테이너 (width 531).

### prop verbatim
- **property1**: `center` / `left` / `right` / `splitrow` (4가지)

### Variant IDs

| property1 | variant ID | 정렬 |
|---|---|---|
| `left` | `3165:5675` | buttongroup1 좌측만 |
| `right` | `3165:5676` | buttongroup1 우측만 |
| `center` | `3165:5677` | buttongroup1 중앙만 |
| `splitrow` | `3165:5678` | buttongroup1 좌 + buttongroup2 우 (justify-between) |

### button group 구조
- buttongroup1 / buttongroup2 슬롯 (`splitrow`만 buttongroup2 활성)
- gap: 4 (`popup/gap`)
- 기본 버튼 사이즈: lg (40 height, button/lg SB)

### 버튼 패턴
- `splitrow` / `right` / `center`: 좌측 secondary (white bg) + 우측 primary (`#2b2b2b` neutral-primary)
- `left`: 좌측에 secondary 2개 또는 사용자 정의

## Anatomy

```
┌───────────────────────────────────────┐  ← popup wrapper (bg=#f4f4f4, radius=4, border 1px, padding=4, shadow elevation-50)
│ ┌───────────────────────────────────┐ │
│ │ Header                            │ │  ← bg-header=#f4f4f4, header_padding=8
│ │  Title (body/lg SB, #000000)      │ │
│ ├───────────────────────────────────┤ │
│ │ ┌────────── surface ──────────┐   │ │  ← bg-surface=#ffffff, border 1px #dddddd
│ │ │  Contents Title (title/sm)  │   │ │     section_padding=12, section_gap=12
│ │ │                             │   │ │
│ │ │  Body content...            │   │ │     section_contents_gap=16 (내부)
│ │ │                             │   │ │
│ │ └─────────────────────────────┘   │ │
│ ├───────────────────────────────────┤ │
│ │ Footer (bg-footer=#f4f4f4)        │ │  ← FooterElement (4 align variants)
│ │  [Button] [Button]                │ │     gap=4 button 사이
│ └───────────────────────────────────┘ │
└───────────────────────────────────────┘
```

### 3-Section Vertical 구조
1. **Header**: bg-header `#f4f4f4`, header_padding 8, text-header-title `#000` (`body/lg SB`)
2. **Surface (Contents)**: bg-surface `#ffffff`, border 1px `#dddddd`, section_padding 12, section_gap 12, contents_gap 16
3. **Footer**: bg-footer `#f4f4f4`, FooterElement (`property1=splitrow` 기본)

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| Header title | `body/lg (SB)` | Pretendard 600 / 18 / 26 |
| Contents title | `title/sm (SB)` | Pretendard 600 / 16 / 20 |
| Body | `body/sm` 또는 `body/md` | Pretendard 400 / 14~16 / 20~24 |
| Button | `button/lg (SB)` | Pretendard 600 / 16 / 24 |

## Footer button 색상

### Primary (확인 / Confirm)
- bg: `button/bg/neutral-primary` `#2b2b2b`
- fg: `button/fg/neutral-primary` `#f9f9f9`
- border: `button/border/neutral-primary` `#2b2b2b`
- size: lg (40h, min-w 56), corner radius md=6, h-padding 12

### Secondary (취소 / Cancel)
- bg: `button/bg/neutral-secondary` `#ffffff`
- fg: `button/fg/neutral-secondary` `#565656`
- border: `button/border/neutral-secondary` `#a5a5a5` 1px
- size 동일

## Usage Notes

- variant 매칭 verbatim:
  - FooterElement: `property1=splitrow` / `left` / `right` / `center` (4가지)
  - splitrow는 default (좌측 secondary + 우측 primary 가장 흔한 패턴)
  - left: 좌측 단독 정렬 (대안 액션)
  - right: 우측 단독 정렬 (다음/제출)
  - center: 중앙 정렬 (단일 액션 강조)
- popup vs modal:
  - **popup**: 3-section vertical (header + surface + footer), 흰 surface 영역 강조
  - **modal**: 단일 박스 + 아이콘 + 메시지 (간단 확인용)
- popup vs popover:
  - **popup**: 단독 floating (앵커 없음), 풍부한 콘텐츠 (form, list)
  - **popover**: 트리거 부착형 (앵커 있음, 화살표)
- 콘텐츠 surface는 흰색 (`#ffffff`) — header/footer는 옅은 회색 배경 (`#f4f4f4`)으로 분리
- shadow `v0.1/elevation-50` — modal과 동일 강도 (이중 그림자)
- footer gap=4 (`popup/gap`) — button 사이 간격
- section_gap=12 (section 사이) vs section_contents_gap=16 (콘텐츠 내부) 구분
- header title은 popup 의도/제목 (예: "프로필 편집")
- contents title은 surface 내부 추가 제목 (옵션)
- 키보드 ESC로 닫기 (footer cancel과 동일 효과)
