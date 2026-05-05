# Breadcrumb

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `2254:35041` `Breadcrumb` (wrapper)
>   - `2248:58964` `✅breadcrumb_item` (item — **30 variants**, 5축)
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

### Item 크기
| size | item h | type별 width 예 |
|---|---|---|
| sm | 18~20 | link 56 / overflow 38 / link_menu 80 |
| md | 24 | link 60 / overflow 39 / link_menu 84~85 |

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

## Item — `✅breadcrumb_item` (5축, 30 variants)

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
- 접근성:
  - `<nav aria-label="breadcrumb">`
  - `<ol>`로 항목 마크업
  - 마지막 항목(current)은 `aria-current="page"`
  - chevron은 `aria-hidden="true"` (시각적 separator)
- light 모드 기본 텍스트는 gray `#565656`, current/hover는 black `#000000`
- breadcrumb는 navigation 보조 — 메인 nav를 대체하지 않음
- separator는 일반적으로 chevron(▶), 한글 환경에서도 동일
