# Menu

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `1160:177493` `menu_item` (atom — **13 variants**, state×checked, 각 282×32)
>   - `1711:32775` `menu_item_sub` (header/divider — 2 variants, 각 282×32 / 282×4)
>   - `2533:20420` `menu` (wrapper — 단일)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:230731` 메뉴(Menu) spec — Anatomy / Properties / Guidelines / 상호작용 / 접근성
>   - `1:231278` Menu use it — composition × state showcase
>
> JS 토큰: `tokens/color/component.js#menu` (prefix `menu/*`).
> 시각 참조: [docs/spec.html#menu](../docs/spec.html#menu)

## Overview

3-tier 컴포넌트 계층:

| 계층 | 컴포넌트 | 역할 |
|---|---|---|
| Wrapper | `menu` | 메뉴 컨테이너 (border + shadow + padding) |
| Section | `menu_item_sub` | 섹션 헤더 또는 그룹 사이 divider |
| Atom | `menu_item` | 개별 행 (icon · label · sub_text · chevron · check 슬롯) |

여러 섹션은 `menu_item_sub divider`로 분리. 각 섹션은 `menu_item_sub header` + N `menu_items` 구성.

## Anatomy

### Wrapper — `menu` (`2533:20420`)

UI-Kit-Guide use-it 페이지(`1:231278`) 인스턴스 기준:

- frame width: **240** (가이드에 그려진 값) — 작은 옵션 메뉴용
- padding: **8** (`Size/padding/md`) — wrapper 내부 4면
- gap: **4** (`Size/gap/sm`) — item 사이
- inner content width: **224** = 240 − 8×2
- radius: **4** (`radius`)
- shadow: **`v0.1/elevation-20`** = `(0,1) blur 2` + `(0,2) blur 6 spread 2`
- bg: `#ffffff` (`menu/bg-default`)

> menu_item 컴포넌트 자체는 **282×32**가 canonical 너비 (atom 정의값). wrapper가 224 inner면 stretch/scale로 맞춤.

```
menu (240 wide, white bg, 8 pad, 4 gap, radius 4, elevation-20)
└─ Slot
   └─ Section A
      ├─ menu_item_sub (header)        ← 224×32
      ├─ menu_item                     ← 224×32
      ├─ menu_item                     ← 224×32
      └─ menu_item                     ← 224×32
   ├─ menu_item_sub (divider)          ← 224×4
   └─ Section B
      ├─ menu_item_sub (header)
      └─ menu_item × N
```

## Properties

가이드 spec 페이지(`1:230731`)는 **Type / Layout / State** 3축으로 정리.

### 1. Type — composition (use-it 가이드 verbatim, 6가지)

`menu_item` 슬롯 채움 패턴. 어느 슬롯을 활성화하느냐에 따른 layout 변형:

| Type | 슬롯 구성 | 용도 |
|---|---|---|
| **Standard** | label만 | 가장 단순한 텍스트 옵션 |
| **Icon** | icon (left, 20×20) + label | 아이콘 prefix 시각화 |
| **Sub text** | label + sub_text (right, 12px) | 단축키 / 카운트 / 부가정보 |
| **Chevron** | label + chevron (right, 20×20) | 서브메뉴 진입 표시 |
| **Check** | check (left, 20×20) + label | 다중 선택 / 토글 (`checked` 상태) |
| **Integrated** | check + icon + label + sub_text + chevron | 모든 슬롯 활성 (복합 옵션) |

### 2. Layout — wrapper 구성

`menu` wrapper 내부 섹션 구성:

| Layout | 구성 | 예 |
|---|---|---|
| **Single section** | menu_item_sub header + menu_items | 단일 그룹 메뉴 |
| **Multi section** | (header + items) × N, 사이에 `menu_item_sub divider` | 그룹 분리 메뉴 (예: 파일 작업 / 공유 / 위험 액션) |

### 3. State — `menu_item` (atom prop verbatim)

컴포넌트 정의 (`1160:177493`):
- **state**: `default` / `hover` / `disabled` / `selected` / `focused` / `danger` / `alert` (7가지)
- **checked**: `true` / `false`

> 실제 매트릭스 = 7×2 − 1 = **13 variants** (`alert`는 `checked=true`만 정의됨, `checked=false` 미존재).

#### Use-it 가이드(`1:231278`)의 State 매트릭스 — 6 states × 2 = 12

가이드 페이지에 그려진 공식 매트릭스는 **alert를 제외한 6 states**:
Default · Hover · Selected · Disabled · Focused · Danger × checked / unchecked.

> `alert`는 컴포넌트에는 존재하지만 일반 가이드에는 미공개 (특수 강조 케이스용 — 권장 옵션, 신규 알림 등).

#### Variant IDs (atom `menu_item`, 282×32)

| state \\ checked | true | false |
|---|---|---|
| default | `2527:21068` | `1160:178648` |
| hover | `1160:177508` | `1160:178661` |
| selected | `1160:177536` | `1160:178687` |
| disabled | `1160:177522` | `1160:178674` |
| focused | `2480:18586` | `2480:18599` |
| danger | `2595:59849` | `2527:28611` |
| alert | `1160:177494` | — |

#### `menu_item_sub` variants (282×N)

| type | variant ID | 크기 |
|---|---|---|
| header | `1711:32774` | 282 × 32 (Section Label, SB 14) |
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
| `menu/text-secondary` | `#393939` (sub_text · section header) |
| `menu/text-selected` | `#eb6100` |
| `menu/text-disabled` | `#a5a5a5` |
| `menu/text-danger` | `#d73220` (alert · danger 항목) |

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
| `menu/border-active` | `#1d1d1d` (focused 2px ring) |
| `menu/border-selected` | `#f3a066` |

### divider
| token | light |
|---|---|
| `menu/divider` | `#bcbcbc` |
| `menu/divider-selected` | `#f7c099` |
| `menu/divider-disabled` | `#bcbcbc` |
| `menu/divider-danger` | `#d73220` |
| `menu/section-divider` | `#bcbcbc` (menu_item_sub divider) |

## Number tokens (Mode 1)

| token | px | 적용 |
|---|---|---|
| `menu/height/sm` | 32 | menu_item · section header 높이 |
| `menu/padding/sm` | 6 | item 세로 padding |
| `menu/padding/md` | 8 | wrapper padding · item 가로 padding |
| `menu/gap/sm` | 4 | item 사이 / item 내부 요소 사이 |
| `menu/radius/sm` | 4 | wrapper · item radius |
| `menu/border/xs` | 1 | menu_item_sub divider 두께 |
| `menu/border/sm` | 2 | focused 2px inset ring |

## State별 시각

| state | bg | text/label | icon | sub_text |
|---|---|---|---|---|
| default | `#ffffff` | `#1d1d1d` | `#393939` | `#393939` |
| hover | `#e9e9e9` | `#1d1d1d` | `#393939` | `#393939` |
| selected | `#fef7f2` | `#eb6100` | `#eb6100` | secondary |
| focused | `#ffffff` | `#1d1d1d` | `#393939` | `#393939` (+ 2px `#1d1d1d` inset ring) |
| disabled | `#e9e9e9` | `#a5a5a5` | `#a5a5a5` | `#a5a5a5` |
| danger | `#ffffff` | `#d73220` | `#d73220` | red 톤 |
| alert | `#fef7f2` | `#1d1d1d` | `#393939` | (특수 강조) |

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| Label (menu_item) | `body/sm` | Pretendard 400 / 14 / 20 |
| sub_text | (number/7=12px) | Pretendard 400 / 12 / 14.4 |
| Section Label (menu_item_sub header) | `body/sm (SB)` | Pretendard 600 / 14 / 20 |

## Guidelines

UI-Kit-Guide spec 페이지(`1:230731`)의 Do/Don't 원칙:

- **너무 많지 않게**: 한 메뉴 안 항목 수가 과하지 않게 — 7±2 권장. 더 많아질 경우 검색·카테고리화·서브메뉴로 분할.
- **정렬 일관성**: icon/label/sub_text/chevron 슬롯은 한 메뉴 안에서 일관 정렬 — 일부만 icon 있고 일부 없으면 시각적 위계 깨짐.
- **위험 액션 분리**: 삭제·취소 등 위험 액션은 `state=danger`로, 그룹 사이는 `menu_item_sub divider`로 일반 항목과 분리.

## 상호작용 가이드라인

- 트리거: 우클릭(`oncontextmenu`) / overflow 버튼(⋯) / 액션 버튼 / 인풋(드롭다운) — 어떤 트리거든 floating 메뉴 자체는 동일 컴포넌트
- 위치: 트리거 anchor 또는 커서 좌표 기준. 화면 모서리 충돌 시 자동 flip
- 닫힘: ESC / 외부 클릭 / 항목 선택 후 즉시
- 키보드: ↑↓ 탐색, Enter 선택, ESC 닫기
- 모바일/터치: 우클릭 → long press(0.5s+) 대체, 작은 화면에선 sheet/dialog로 대체 권장

## 접근성 (WCAG 2.2)

- 시맨틱: `<ul role="menu">` + `<li role="menuitem">` (또는 `menuitemcheckbox` for `checked` state)
- 포커스: 메뉴 열림 시 첫 menuitem에 focus, ESC 닫힘 시 트리거에 focus 복귀
- 키보드 트랩: 메뉴 안에서 Tab은 다음 메뉴 항목 또는 메뉴 외부로 이동 (구현 선택)
- 명도 대비: text-primary `#1d1d1d` on bg `#ffffff` = 16.99:1 ✓ (WCAG AAA)
- 명도 대비: text-disabled `#a5a5a5` on bg `#e9e9e9` = 2.34:1 — disabled는 대비 면제 (WCAG 1.4.3 예외)

## Usage Notes

- variant 매칭 verbatim: `state=default|hover|disabled|selected|focused|danger|alert`, `checked=true|false`. alert는 checked=true만.
- wrapper 크기는 use-it 가이드 기준 **240 wide**. 다른 사용처(드롭다운 등)는 wrapper width를 조정하되 padding/gap/radius/shadow는 그대로.
- 6 composition (Standard / Icon / Sub text / Chevron / Check / Integrated)은 menu_item의 **slot 활성화 패턴**일 뿐 별도 prop 아님 — 컴포넌트 내부 슬롯을 토글해 표현.
- multi-section layout: 섹션 사이 `menu_item_sub divider` 강제. 단일 섹션이면 wrapper 안에 header + items만.
- `selected`는 light orange tint (`#fef7f2`) + brand orange text/icon. `danger`는 red text only (bg는 white 유지). `focused`는 keyboard focus, 2px black inset ring.
- `alert`는 컴포넌트에 존재하지만 use-it 가이드 매트릭스에 미포함 — 특수 강조용 (예: 권장 옵션, 신규 항목)
- shadow elevation-20: popover보다 강함, modal보다 약함

## 관련 사용 패턴

- [dropdown.md](./dropdown.md) — 입력형 옵션 선택 (트리거가 인풋, 위치는 인풋 anchor)
- 우클릭 컨텍스트 / ⋯ overflow / 액션 메뉴 — 모두 동일 menu 컴포넌트, trigger와 위치만 다름
