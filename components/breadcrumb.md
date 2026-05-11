# Breadcrumb

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `2254:35041` `Breadcrumb` (wrapper)
>   - `2248:58964` `breadcrumb_item` (item — **30 variants**, 5축)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:211588` (가이드 페이지)
>   - `100:59080` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#breadcrumb`.
> 토큰 prefix: `breadcrumb/*`.

## Overview
- 페이지 계층 경로 표시 (Home > Page > ... > Current)
- 모드: **light** (production variable_defs 기준)
- 2 컴포넌트:
  - **`Breadcrumb`** (wrapper): home 아이콘 + item 슬롯 + 마지막 current item
  - **`breadcrumb_item`**: 개별 항목 (link / overflow / link_menu)

## Number tokens (Mode 1)

| token | px |
|---|---|
| `breadcrumb/padding` | 2 |
| `breadcrumb/gap` | 4 |

## Properties — 4 독립 axis (Figma `1:211588` Properties 섹션 기준)

> Figma 가이드는 Size / Layout / Variant / State를 **각각 독립된 axis로 분리**해서 문서화. 매트릭스로 합쳐 표시하지 않음 (Use case 페이지에서만 size별 state matrix 보여줌).

### Property 1 — Size (axis 단독)

| size | item height | font | line-height | weight (default → current) |
|---|---|---|---|---|
| `sm` | 18~20 | 12 | 14 | 400 → 600 |
| `md` | 24 | 14 | 20 | 400 → 600 |

### Property 2 — Layout

- 한 줄 유지 (wrap 금지)
- 너비 부족 시 `overflow` (...) 로 중간 항목 압축
- 항목 width는 텍스트 길이에 따라 가변 (sm 기준 link ~56 / overflow ~38 / link_menu ~80, md 기준 link ~60 / overflow ~39 / link_menu ~84)

### Property 3 — Variant (`1:211767` verbatim, axis 단독)

> 브레드크럼은 link, overflow, link-menu, link-menu(expanded) 총 4가지 Variant로 구성됩니다.

레이아웃 (가이드 페이지 verbatim): 회색 카드 안에 3-컬럼 grid — 좌측 "Variant" gray label + orange chip + 우측 시각 예시. 4 행 모두 컬럼 X 좌표 일정.

| variant | 표시 |
|---|---|
| `link` | Page › (gray text) |
| `overflow` | … › (gray text) |
| `link-menu` | Page ▼ › (chevron-down 표시, gray text) |
| `link-menu(expanded)` | **Page** ▲ › + dropdown 메뉴 펼침 (text 색 **orange `#eb6100`**) — 메뉴: item 1 / **item 2** (selected, orange) / item 3 / item 4 |

> 핵심: `link-menu(expanded)`의 "Page" 텍스트는 default state라도 **brand orange로 강조** (펼침 활성 표시).

### Property 4 — State (`1:211804` verbatim, axis 단독)

> 버튼은 default, hover, focused, current 상태를 가집니다.

레이아웃 (가이드 페이지 verbatim): Variant × State 4×4 grid (단일 size, 일반적으로 md). 헤더 행 = "State" + orange chip (default/hover/focused/current), 좌측 행 라벨 = "Variant" + orange chip (link/overflow/link-menu/link-menu(expanded)).

| variant \\ state | default | hover | focused | current |
|---|---|---|---|---|
| `link` | Page › (gray) | Page › (black + underline) | Page › (black + ring) | Page (black SemiBold) |
| `overflow` | … › | … › | … › (focus ring) | … |
| `link-menu` | Page ▼ › | Page ▼ › underline | Page ▼ › ring | Page ▼ (no separator) |
| `link-menu(expanded)` | **Page** ▲ › + 펼친 메뉴 (orange) | **Page** ▲ › underline + 메뉴 | **Page** ▲ › ring + 메뉴 | **(빈 셀 — current × expanded는 정의되지 않음)** |

> **핵심 규칙**:
> - `link-menu(expanded)` 행의 "Page" 텍스트는 모든 state에서 **orange** 유지
> - `current × link-menu(expanded)` 셀은 **빈 셀** (`current`는 펼침 상태가 의미 없음 — `expanded=false`일 때만 정의)

State × Variant 4×4 매트릭스는 가이드 `1:211804`에 단일 size로 1회만 등장. (sm/md 각각의 state 매트릭스는 Properties가 아닌 Use case 페이지 `100:59097`에 별도 시연.)

## Color tokens — production (light)

### text
| token | light |
|---|---|
| `breadcrumb/text-default` | `#565656` (default link gray) |
| `breadcrumb/text-current` | `#000000` (current 페이지 — 검정 강조) |
| `breadcrumb/text-hover` | `#000000` |
| `breadcrumb/text-focused` | `#000000` |
| `breadcrumb/text-selected` | `#eb6100` (link_menu의 selected 메뉴 항목 — orange) |
| `breadcrumb/text-selected_hover` | `#bc4e00` (orange darker) |
| `breadcrumb/text-selected_focused` | `#bc4e00` |

### border
| token | light |
|---|---|
| `breadcrumb/border` | `#000000` (focused ring) |
| `breadcrumb/border_selected_hover` | `#bc4e00` |

> **중요 정정**: 이전 문서는 dark 모드 값으로 표기됨. production light 기준으로 갱신.

## Wrapper — `Breadcrumb`

### prop
- **size**: `md` / `sm`
- **showHomeIcon**: boolean (default: true)
- **children**: 슬롯 (여러 breadcrumb_item)

### Variant IDs (wrapper)
| size | ID |
|---|---|
| sm | `2254:40757` |
| md | `2254:32877` |

### 구조
```
[home_icon] [item slot ...] [current item]
       ↑ showHomeIcon=true
```

- home 아이콘 = `system/general/fill/home` (20×20)
- 마지막 current item은 `state=current, show divider=false` 자동 적용 (chevron 없음)

## Item — `breadcrumb_item` (5축, 30 variants)

### prop verbatim
- **size**: `sm` / `md`
- **type**: `link` / `overflow` / `link_menu`
- **state**: `default` / `hover` / `focused` / `current`
- **expanded**: `false` / `true` (`link_menu` 전용 — 드롭다운 펼침 표시)
- **show divider**: `true` / `false` (`current`는 항상 false, separator 없음)

### type 의미
| type | 용도 | 시각 |
|---|---|---|
| `link` | 일반 페이지 링크 | "Page name" + chevron(▶) |
| `overflow` | 생략 표시 (계층 너무 많을 때) | "..." + chevron(▶) |
| `link_menu` | 드롭다운 메뉴 가진 링크 | "Page" + ▼ chevron, expanded=true 시 메뉴 표시 |

### Variant IDs — `size=sm`

| type \\ state | default (show divider=true) | hover (show divider=true) | focused (show divider=true) | current (show divider=false) |
|---|---|---|---|---|
| link | `2248:58722` | `2254:13937` | `2254:15107` | `2254:33777` |
| overflow | `2254:8940` | `2254:13975` | `2254:15145` | `2254:33793` |
| link_menu (expanded=false) | `2250:61167` | `2254:14013` | `2254:15183` | `2254:33825` |
| link_menu (expanded=true) | `2248:58965` | `2254:13994` | `2254:15164` | — |

### Variant IDs — `size=md`

| type \\ state | default (show divider=true) | hover (show divider=true) | focused (show divider=true) | current (show divider=false) |
|---|---|---|---|---|
| link | `4682:76926` | `2254:38828` | `2254:38895` | `2254:38732` |
| overflow | `2254:38748` | `2254:38847` | `2254:38911` | `2254:38796` |
| link_menu (expanded=false) | `2254:38780` | `2254:38879` | `2254:38943` | `2254:38812` |
| link_menu (expanded=true) | `2254:38764` | `2254:38863` | `2254:38927` | — |

> 합계: sm 15개 + md 15개 = **30 variants** (link_menu의 current는 expanded=false만 정의됨)

## Typography

| size | textStyle (default) | textStyle (current) |
|---|---|---|
| sm | `body/xxs` (Pretendard 400 / 12 / lh 14) | `body/xxs (SB)` (600 / 12 / 14) |
| md | `body/sm` (400 / 14 / lh 20) | `body/sm (SB)` (600 / 14 / 20) |

### text 색상 매핑 (state별)
| state | text 색 (token) |
|---|---|
| default | `text-default` `#565656` |
| hover | `text-hover` `#000000` |
| focused | `text-focused` `#000000` |
| current | `text-current` `#000000` (SemiBold) |

### link_menu 메뉴 항목 색상
- 메뉴 hover/focused: `text-selected_hover` / `text-selected_focused` (`#bc4e00`)
- 메뉴 selected: `text-selected` (`#eb6100`)

## Anatomy

### sm (default 크기)
```
🏠 ▸ Page ▸ Page ▸ Page ▸ Current
↑    ↑    ↑    ↑    ↑    ↑
home gap=4 padding=2 chevron 20×20  bold black
```

### md
```
🏠 ▸ Page Name ▸ Page Name ▸ Current
```

### link_menu (expanded=true) 시
```
🏠 ▸ Page ▸ Page ▼   ← chevron-down (펼침 표시)
                ┌──────────────┐
                │ Sub page 1   │
                │ Sub page 2 (selected)  ← orange
                │ Sub page 3   │
                └──────────────┘
```

## Separator (chevron)

- 기본: `system/arrow/fill/right` (20×20, fill=false)
- show divider=true 시 표시
- show divider=false 시 미표시 (current item에 적용)
- `showSlash` prop: `/` 문자 separator 옵션 (드물게 사용)

## link_menu chevron 아이콘 (`1:211783` verbatim)

`link-menu` / `link-menu(expanded)` variant의 chevron-down/up 아이콘은 **plain chevron이 아니라 원형 outline 안에 chevron이 들어간 형태**.

```
Page (˅) ›    ← collapsed: circle + chevron-down inside
Page (˄) ›    ← expanded:  circle + chevron-up inside
```

- circle outline: 1px stroke, currentColor 사용 (기본 gray, hover/focused 시 black, default+expanded 시 orange)
- circle 크기: sm 14×14, md 16×16
- chevron 크기: sm ~8×8, md ~10×10 (원 안쪽 ~60%)
- chevron stroke: stroke-width 2, line-cap/join round (fill 아님)

## Dropdown menu (`1:211788` verbatim)

`link-menu(expanded)`일 때 Page 아래에 나타나는 드롭다운 메뉴:

- **컨테이너**:
  - bg: `#ffffff`
  - border: 1px gray (`#e9e9e9`)
  - corner radius: 6px
  - padding: 6px (메뉴 항목 외각 여백)
  - shadow: `0 2px 8px rgba(0,0,0,0.08)` (subtle drop shadow)
  - min-width: ~120px
- **메뉴 항목 공통**:
  - padding: 6px 10px
  - corner radius: 4px
  - font-size: 13px
- **default 항목** (item 1, item 3, item 4): gray text `#1d1d1d` (또는 `#565656`), bg transparent
- **hover 항목**: bg `#f4f4f4` 추가
- **selected 항목** (item 2):
  - text: orange `#eb6100`
  - border: 1px orange `#eb6100`
  - **background: peach `#fef7f2`** (연한 오렌지 fill — 흰 배경이 아님)
  - corner radius: 4px (컨테이너와 동일)
- **selected hover**: text/border `#bc4e00` (darker orange), bg `#fef7f2` 유지
- 메뉴 위치: Page 아래로 4px gap

## Guidelines Do/Don't 카드 디자인 (`1:207493` verbatim)

가이드라인의 Do/Don't 카드 시각 스타일:

| 요소 | Do 카드 | Don't 카드 |
|---|---|---|
| 배경 | `#ffffff` (흰색) | `#fef0ee` (연한 핑크) |
| 외곽선 | `1px solid #e9e9e9` | `1px solid #fbd1cb` |
| 헤더 underline | `2px solid #00b85e` (녹색) | `2px solid #f03823` (빨강) |
| 헤더 텍스트 색 | `#00803e` | `#f03823` |
| 아이콘 (원형 + symbol) | bg `#00b85e` + ✓ 흰색 | bg `#f03823` + × 흰색 |
| 패딩 / 모서리 | padding 20px, radius 8px | 동일 |

핵심: 카드 전체에 톤 배경을 깔지 않고, **헤더 영역(아이콘 + Do/Don't 텍스트) 아래에 underline**으로 분리. Don't 카드만 연한 핑크 배경.

## Guidelines (`1:211894` verbatim)

### 사용 시 유의사항

#### Breadcrumbs와 Back Button
사이트 계층이나 구조가 단순한 경우에는 Breadcrumbs보다 Back Button 사용을 권장합니다. 일반적으로 Back Button이 제공되는 화면에서는 Breadcrumbs를 함께 사용하지 않는 것이 좋습니다.

#### Breadcrumbs는 Global Navigation을 대체하지 않음
Breadcrumbs는 사용자의 현재 위치를 보조적으로 안내하는 탐색 요소이며, Global Navigation Bar를 대체할 수 없습니다. 주요 화면 이동은 기존 Navigation Menu를 통해 제공되어야 합니다.

#### 다단계 프로세스에는 Steps 사용
Breadcrumbs는 페이지 계층을 보여주는 탐색 컴포넌트이므로, 사용자가 순차적인 단계에 따라 진행해야 하는 프로세스에는 적합하지 않습니다. 회원가입, 설정, 신청 절차와 같이 단계 기반 흐름이 필요한 경우에는 Steps 컴포넌트를 사용합니다.

### 시작 경로

브레드크럼의 첫 번째 항목은 메인 화면으로 연결되는 링크로 구성합니다. 사용자가 현재 위치와 관계없이 언제든 사이트의 시작 지점으로 빠르게 이동할 수 있도록 지원합니다.

| | 예시 |
|---|---|
| ✓ Do | 🏠 Home › Depth1 › **Depth2** |
| ✗ Don't | Depth3 › Depth4 › **Depth5** (Home 시작점 누락) |

### 단일 행 유지

브레드크럼은 탐색 경로의 계층 구조를 한눈에 이해할 수 있도록 한 줄(단일 행)로 제공한다. 여러 줄로 줄바꿈되면 경로의 순서와 관계를 인지하기 어려워진다. 경로가 5개 이상인 경우에는 메인 화면 링크 다음 단계의 경로를 말줄임표(...)로 축약하여 전체 브레드크럼이 한 줄 안에 유지되도록 한다.

| | 예시 |
|---|---|
| ✓ Do | 🏠 Home › ... › **Depth5** (overflow로 압축, 한 줄) |
| ✗ Don't | 🏠 Home › Depth1 › Depth2 ›<br>Depth3 › Depth4 › **Depth5** (두 줄 wrap) |

### Hover 시각적 피드백 제공

브레드크럼 링크는 기본 상태에서 밑줄을 사용하지 않더라도, 사용자가 클릭 가능한 요소임을 인지할 수 있도록 Hover 상태를 제공한다. 마우스를 올렸을 때 밑줄 표시를 통한 시각적 피드백을 적용하여 링크로 동작함을 명확하게 전달해야 한다. Hover 효과는 일관된 방식으로 적용하여 예측 가능한 상호작용 경험을 제공한다.

| | 예시 |
|---|---|
| ✓ Do | 🏠 Home › <u>Depth1</u> 🖱 › **Depth2** (hover 시 밑줄 표시) |
| ✗ Don't | 🏠 Home › Depth1 🖱 › **Depth2** (hover 시 밑줄 없음 — 시각적 피드백 누락) |

## 접근성 (`1:212003` verbatim)

모든 사용자가 현재 위치를 인지하고 상위 경로로 이동할 수 있도록, 브레드크럼은 WCAG 및 ARIA 가이드라인을 준수해야 합니다. 키보드, 스크린리더, 터치 등 다양한 입력 환경에서 동일한 탐색 경험을 제공하여 사용 오류를 최소화합니다.

### WCAG 2.2

#### 구조 및 랜드마크 (SC 1.3.1)
브레드크럼은 nav 영역으로 제공하고, `aria-label="Breadcrumb"` 또는 이에 준하는 이름을 지정해야 합니다.

#### 현재 위치 표시 (SC 4.1.2)
마지막 항목은 현재 페이지를 의미하며, `aria-current="page"` 속성을 사용해 명확히 전달해야 합니다.

#### 키보드 접근성 (SC 2.1.1)
모든 이동 가능한 항목은 Tab / Shift + Tab으로 초점 이동이 가능해야 하며, Enter 키로 이동할 수 있어야 합니다.

## 상호작용 가이드라인 (`1:212046` verbatim)

### 탐색

| 구분 | 설명 |
|---|---|
| Tab, Shift + Tab | 이전/다음 브레드크럼 링크로 이동할 수 있어야 한다. |

### 실행

| 구분 | 설명 |
|---|---|
| Click | 선택한 단계의 페이지로 이동합니다. |
| Enter | 포커스된 링크 페이지로 이동합니다. |
| Space | 링크 요소에는 사용하지 않으며, 버튼형 브레드크럼일 경우에만 사용합니다. |

## Usage Notes

- variant 매칭 verbatim:
  - `size=sm` / `md`
  - `type=link` / `overflow` / `link_menu`
  - `state=default` / `hover` / `focused` / `current`
  - `expanded=false` / `true` (link_menu만 의미 있음)
  - `show divider=true` / `false` (공백 포함)
- current state는 자동으로 `show divider=false` (chevron 없음, SemiBold 텍스트, black)
- `link_menu` selected 메뉴 항목은 brand orange (`#eb6100`)
- 너무 많은 단계는 `overflow` (...) 로 압축 (모바일/좁은 영역에서 권장)
- showHomeIcon: 루트 페이지로 빠른 이동
- light 모드 기본 텍스트는 gray `#565656`, current/hover는 black `#000000`
- breadcrumb는 navigation 보조 — 메인 nav를 대체하지 않음
- separator는 일반적으로 chevron(▶), 한글 환경에서도 동일
