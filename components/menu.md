# Menu

> **Base 컴포넌트** — 모든 메뉴형 패턴(우클릭 컨텍스트, 드롭다운, 액션 오버플로우 등)이 공유하는 기반.
>
> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `2533:20420` `menu` (wrapper — 단일)
>   - `1160:177493` `menu_item` (atom — **13 variants**, 2축)
>   - `1711:32775` `menu_item_sub` (header/divider — 2 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:230731`, `1:231278`, `1:230235`, `1:230092` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#menu` (prefix `menu/*`).
> 시각 참조: [docs/spec.html#menu](../docs/spec.html#menu)

## Overview

- 컴포넌트 계층:
  - **menu** (wrapper): 메뉴 컨테이너 (298 frame width / 282 inner)
  - **menu_item_sub**: 헤더("Section Label") 또는 divider
  - **menu_item**: 개별 행 (icon + label + sub_text + chevron)
- 모드: **light** (production variable_defs 기준)

## Wrapper — `menu` (`2533:20420`)

- frame width: **298** (282 inner + 16 padding)
- min-width: 128
- bg: `#ffffff` (`Static/Neutral Gray/0`)
- padding: **8** (`Size/padding/md`)
- gap: **4** (`Size/gap/sm`)
- radius: **4** (`radius`)
- shadow: **`v0.1/elevation-20`** = `(0, 1) blur 2` + `(0, 2) blur 6 spread 2`

```
menu (white bg, 8 pad, 4 gap, 4 radius, elevation-20)
└─ Slot
   ├─ menu_item_sub (header/divider) × N
   ├─ menu_item × N
   └─ ...
```

## Atom — `menu_item` (2축, 13 variants)

### prop verbatim
- **state**: `default` / `hover` / `disabled` / `selected` / `focused` / `danger` / `alert` (7가지)
- **checked**: `true` / `false`

> `alert` state는 `checked=true`만 정의됨 → 7×2−1 = **13 variants** (alert/false 미존재).

### Variant IDs

| state \\ checked | true | false |
|---|---|---|
| default | `2527:21068` | `1160:178648` |
| hover | `1160:177508` | `1160:178661` |
| disabled | `1160:177522` | `1160:178674` |
| selected | `1160:177536` | `1160:178687` |
| focused | `2480:18586` | `2480:18599` |
| danger | `2595:59849` | `2527:28611` |
| alert | `1160:177494` | — |

### Item 크기 · 구조
- 282 × 32 (전체 row)
- 좌측 padding 8, 세로 padding 6
- gap 4 (item 내부 요소 간)
- radius 4

```
[front (246 width)]                                [split_btn (32)]
├─ check icon (20×20, checked=true 시)
├─ edit icon (20×20, optional)
├─ label (text_container, 14/20 Regular)
└─ sub_text (12, 우측 정렬)
```

## Sub-component — `menu_item_sub` (2 variants)

### prop verbatim
- **type**: `header` / `divider`

### Variant IDs

| type | variant ID | 크기 |
|---|---|---|
| header | `1711:32774` | 282 × 32 (padding 8/10, "Section Label" SB 14) |
| divider | `1711:32780` | 282 × 4 (1px 선) |

## Color tokens — production (light)

### bg
| token | light |
|---|---|
| `menu/bg-default` | `#ffffff` |
| `menu/bg-hover` | `#e9e9e9` |
| `menu/bg-selected` | `#fef7f2` (light orange tint) |
| `menu/bg-disabled` | `#e9e9e9` |

### text
| token | light |
|---|---|
| `menu/text-primary` | `#1d1d1d` (label) |
| `menu/text-secondary` | `#393939` (sub_text, section header) |
| `menu/text-selected` | `#eb6100` |
| `menu/text-disabled` | `#a5a5a5` |
| `menu/text-danger` | `#d73220` (alert/danger 항목) |

### icon
| token | light |
|---|---|
| `menu/icon-default` | `#393939` |
| `menu/icon-hover` | `#393939` |
| `menu/icon-selected` | `#eb6100` |
| `menu/icon-disabled` | `#a5a5a5` |
| `menu/icon-danger` | `#d73220` |

### border
| token | light |
|---|---|
| `menu/border-active` | `#1d1d1d` |
| `menu/border-selected` | `#f3a066` |

### divider
| token | light |
|---|---|
| `menu/divider` | `#bcbcbc` (item 사이) |
| `menu/divider-selected` | `#f7c099` |
| `menu/divider-disabled` | `#bcbcbc` |
| `menu/divider-danger` | `#d73220` |
| `menu/section-divider` | `#bcbcbc` (menu_item_sub divider) |

## Number tokens (Mode 1)

| token | px |
|---|---|
| `menu/height/sm` | 32 |
| `menu/padding/sm` | 6 (item 세로) |
| `menu/padding/md` | 8 (item 가로) |
| `menu/gap/sm` | 4 (item 사이 / item 내부 요소) |
| `menu/radius/sm` | 4 (item radius) |
| `menu/border/xs` | 1 |
| `menu/border/sm` | 2 |

## Anatomy

### menu wrapper (298 width)
```
┌──────────────────────────────────────┐  ← elevation-20 shadow
│  ┌────────────────────────────────┐  │
│  │ Section Label 1 (sub: header)  │  │  ← 282×32, SB 14, #393939
│  ├────────────────────────────────┤  │
│  │ ✓ 🖉 Label              sub  ▶ │  │  ← menu_item: check + edit + label + sub_text + split_btn
│  │ ✓ 🖉 Label              sub  ▶ │  │
│  ├──────────────────── divider ───┤  │  ← sub: divider 282×4 line
│  │ Section Label 2                │  │
│  │ ✓ 🖉 Label              sub  ▶ │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

### menu_item 내부 (282×32)
```
┌─front (246, pad 8/6, gap 24)──────────────┐  ┌─split_btn (32×32)─┐
│ [check 20] [edit 20] [Label] [sub_text]   │  │  ▶ chevron 20     │
└────────────────────────────────────────────┘  └────────────────────┘
```

- `front`: title 영역 (check + edit + Label + sub_text 우측 정렬)
- `split_btn`: 서브메뉴 진입 chevron 20×20 (rotate 90° vertical divider 1px 후)
- gap 24: title ↔ sub_text 사이

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| Label (menu_item) | `body/sm` | Pretendard 400 / 14 / 20 |
| sub_text | (number/7=12px) | Pretendard 400 / 12 / 14.4 |
| Section Label (menu_item_sub header) | `body/sm (SB)` | Pretendard 600 / 14 / 20 |

## State별 시각

| state | bg | text/label | icon | sub_text |
|---|---|---|---|---|
| default | `#ffffff` | `#1d1d1d` | `#393939` | `#393939` |
| hover | `#e9e9e9` | `#1d1d1d` | `#393939` | `#393939` |
| selected | `#fef7f2` | `#eb6100` | `#eb6100` | secondary |
| focused | `#ffffff` | `#1d1d1d` | `#393939` | `#393939` (+ border 2px black ring) |
| disabled | `#e9e9e9` | `#a5a5a5` | `#a5a5a5` | `#a5a5a5` |
| danger | `#ffffff` | `#d73220` | `#d73220` | red 톤 |
| alert | `#fef7f2` | `#1d1d1d` | `#393939` | (특수 용도) |

## Usage Notes

- variant 매칭 verbatim:
  - `state=default` / `hover` / `disabled` / `selected` / `focused` / `danger` / `alert`
  - `checked=true` / `false`
  - alert state는 `checked=true`만 정의됨
- 컨테이너 width 298 (frame) / inner 282 — **고정 너비** (가변 시 직접 조정)
- `selected`는 light orange 배경 (`#fef7f2`) + brand orange 텍스트
- `focused`는 키보드 포커스 (border 2px `#1d1d1d`)
- `disabled`는 옅은 회색 + 클릭 불가
- `danger`는 삭제·위험 액션 (`text-danger` red)
- `alert`는 특수 강조 (예: 새 알림, 권장 항목)
- check icon (20×20)은 `checked=true` 시 표시 — 다중 선택/토글 패턴
- edit icon (20×20)은 항목별 빠른 액션 (옵션)
- sub_text (12px, gray)는 단축키, 카운트, 부가정보 등
- split_btn chevron은 서브메뉴 진입 표시 (`▶`) — 클릭 시 nested 메뉴
- Section Label (header)은 그룹 구분 — 14 SB
- divider는 그룹 사이 1px 선
- 시각적 grouping 패턴:
  ```
  [Section A]
    item, item, item
  [divider]
  [Section B]
    item, item
  ```
- 접근성:
  - `<menu>` 또는 `<ul role="menu">`
  - 각 item: `<li role="menuitem">` (또는 `menuitemcheckbox` for checked)
  - 키보드: ↑↓ 탐색, Enter 선택, ESC 닫기
- shadow elevation-20은 비교적 가벼운 그림자 (popover보다 강함, modal보다 약함)

## 관련 사용 패턴

- [dropdown.md](./dropdown.md) — 입력형 옵션 선택
- 우클릭 컨텍스트 메뉴 / ⋯ overflow / 액션 오버플로우 — 모두 동일 menu 컴포넌트 사용 (별도 spec 없음, trigger·위치만 다름)
