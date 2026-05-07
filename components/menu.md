# Menu

> 출처 (Figma):
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`
>   - `1160:177493` `menu_item` (atom — 13 variants)
>   - `1711:32775` `menu_item_sub`
>   - `2533:20420` `menu` (wrapper)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`
>   - `1:230734` 메뉴(Menu) — 페이지 설명 (Overview)
>   - `1:230731` 메뉴(Menu) — spec 페이지
>   - `284:12879` 구성 (Anatomy)
>   - `284:18380` Type
>   - `1:230751` 메뉴 샘플 (centered)
>   - `1:230825` Layout
>   - `1:230908` State
>
> JS 토큰: `tokens/color/component.js#menu` (prefix `menu/*`)
> 시각 참조: [docs/spec.html#menu](../docs/spec.html#menu)
> 아이콘 출처: 레포지토리 [`/icons/svg/system/*/fill/`](../icons/) 폴더의 실제 SVG 파일 (모두 fill 기반)
>  - 편집/연필 prefix → `general/fill/edit.svg` (viewBox `19.63 × 19.63`, 45° 회전 적용)
>  - chevron `>` → `arrow/fill/right.svg` (viewBox `6.50 × 11.50`)
>  - check `✓` → `general/fill/check.svg` (viewBox `13.50 × 9.50`)
>  - 인라인 시 `var(--fill-0, #565656)` 토큰을 `currentColor`로 치환해 모드/상태 색상 자동 적용

## Overview

> 출처: `1:230734` (UI-Kit-Guide · verbatim)

메뉴(Menu)는 트리거 또는 특정 영역과 연결되어 사용자의 액션에 따라 노출되는 컨텍스트 액션 목록입니다. 동일한 기능 영역 안에서 수행 가능한 액션들을 목록 형태로 모아 제공하며, 사용자가 항목을 선택하면 해당 액션이 실행되고 메뉴는 닫힙니다.

메뉴는 열리는 방식에 따라 Context Menu, Action Menu, Dynamic Menu로 구분됩니다. 각 유형은 사용 목적과 트리거 방식이 다르므로, 인터페이스의 맥락에 맞는 유형을 선택해야 합니다. 메뉴 항목은 리딩 아이콘, 텍스트, 트레일링 아이콘, 보조 텍스트, 화살표 등의 요소를 필요에 따라 조합해 구성하며, 헤더와 디바이더로 관련 항목을 그룹화합니다.

## 구성

> 출처: `284:12879` (verbatim)

| 한글 (English) | 설명 |
|---|---|
| 섹션 라벨 (Section Label) | 메뉴 아이템을 그룹화하는 레이블 |
| 컨테이너 (Container) | 메뉴 전체를 감싸는 영역. 그림자와 테두리로 배경과 구분 |
| 아이콘 (Prefix Icon) | 아이템의 의미를 시각적으로 보조하는 아이콘. 그룹 내 일관되게 사용 |
| 메뉴 아이템 라벨 (Label) | 메뉴 아이템의 내용을 나타내는 텍스트. 필수 요소 |
| 보조 텍스트 (Sub text) | 항목에 대한 부연 설명, 상태, 조건 등을 12px로 표시 |
| 화살표 (Chevron) | 선택 불가한 읽기 전용의 그룹 소제목. 14px 로 표시. |
| 디바이더 (Divider) | 항목 그룹 간을 시각적으로 구분하는 가로 구분선. 상하 여백 4px |
| 체크 아이콘 (Check icon) | 필요시 Selected 상태에서만 표시. 체크 타입 사용시 미선택 항목은 동일 너비 빈 공간으로 정렬 유지 |

### 시각 가이드 보충 (`286:19690` 콜아웃 도면 verbatim)

- **Prefix Icon 시각** — Figma 콜아웃 도면에 그려진 "기울어진 연필"은 `general/edit` 컴포넌트를 **45° 회전**시킨 형태입니다. 원본 SVG(`icons/svg/system/general/line/edit.svg`)는 viewBox `6 × 17.97`의 세로형 지우개·연필 실루엣이며, 회전을 적용하지 않으면 화면에 수직으로 서 있는 모양으로 잘못 표시됩니다. anatomy 다이어그램에서 prefix icon을 그릴 때는 `transform: rotate(45deg)` (또는 -45°)를 반드시 적용합니다.
- **Sub text ↔ Chevron Divider** — `Icon + Text + Subtext + Chevron` 레이아웃에서는 `sub_text`와 `chevron` 사이에 **세로 1px × 20px 디바이더**가 들어갑니다 (Figma `split_btn` 그룹의 첫 자식, `Divider` 요소를 90°로 세운 라인). 색상은 `menu/divider` (`#bcbcbc`). 가로 디바이더(섹션 그룹 사이)와 명칭만 같고 별개 요소입니다.
- **콜아웃 점은 대상 요소 위에 직접 얹힌다** — `286:19690` 도면의 모든 콜아웃 점은 메뉴 가장자리가 아닌 **대상 요소 위 정확한 좌표**에 얹혀야 합니다. 점이 메뉴 바깥(가장자리에서 6px 이상 떨어진 위치)에 있으면 어떤 부분을 가리키는지 식별이 어려워집니다.

#### 콜아웃 점 좌표 (메뉴 좌상단 = 0,0 기준 · 메뉴 240×~313)

| 콜아웃 | 위치 (x, y) | 가리키는 대상 |
|---|---|---|
| Section Label | (18, 24) | 섹션 헤더 `Section Label 1` 텍스트 시작점 |
| Prefix icon | (26, 96) | 2번째 menu_item의 연필 아이콘 중심 |
| Label | (44, 132) | 3번째 menu_item의 `Label` 텍스트 시작점 |
| Check icon | (26, 289) | selected 행의 ✓ 체크 아이콘 중심 |
| Container | (236, 8) | 메뉴 우상단 코너 |
| Sub text | (190, 60) | 1번째 menu_item의 `sub text` 텍스트 우측 끝 |
| Chevron | (216, 96) | 2번째 menu_item의 `>` chevron 아이콘 |
| Divider | (232, 156) | 섹션 1/2 사이 가로 구분선 우측 끝 |

> 좌표 기준: `.menu` 컨테이너 (width: 240, padding: 8). header/menu_item min-height 32, 자식 간 gap 4. 행 중심 y = `8 + (n-1)×36 + 16` (n: 1-based 자식 순번).

## Type

> 출처: `284:18380` (verbatim)

메뉴는 사용 맥락에 따라 세 가지 유형으로 구분됩니다. 상황에 맞는 유형을 선택하여 사용합니다.

### 컨텍스트 메뉴 (Context menu)

우클릭 또는 특정 영역의 길게 누르기(모바일) 동작으로, 커서가 위치한 지점에 나타나는 메뉴입니다.

별도의 트리거 버튼 없이 노출되며, 현재 포커스된 오브젝트나 영역에서 수행 가능한 액션만 표시합니다. 사용자가 예측 가능한 위치에 나타나야 하며, 뷰포트 경계를 벗어나지 않도록 위치를 자동 조정합니다.

일반적으로 편집 영역, 파일 탐색기, 데이터 테이블 셀 등 오브젝트에 직접 종속된 액션을 제공할 때 사용합니다.

### 액션 메뉴 (Action menu)

버튼, 아이콘 트리거(⋯ , ⋮)를 클릭하거나 탭해서 여는 메뉴입니다. 특정 UI 오브젝트(카드, 테이블 행, 툴바 항목 등)에 종속된 액션들을 제공하며, 트리거 바로 아래 또는 인접한 위치에 노출됩니다. 오브젝트별로 수행 가능한 액션이 많아 UI 표면에 모두 노출하기 어려울 때 사용합니다. 텍스트 레이블 트리거는 액션의 범주를 명시적으로 알리는 경우에, 아이콘 트리거는 공간이 제한적인 경우에 사용합니다.

### 다이나믹 메뉴 (Dynamic menu)

메뉴 항목에 화살표(>)가 표시된 경우, 해당 항목에 호버하거나 선택하면 연결된 2차 메뉴(서브메뉴)가 우측에 펼쳐지는 형태입니다. 하나의 액션 범주 안에 선택 가능한 세부 옵션이 여러 개 존재할 때 사용하며, 메인 메뉴의 항목 수를 줄이고 관련 옵션을 그룹화하는 데 효과적입니다.

## Layout

> 출처: `1:230825` (verbatim)

메뉴 아이템은 아이콘, 텍스트, 배지, 단축키, 화살표를 조합하여 구성할 수 있습니다. 같은 그룹 내에서는 레이아웃을 통일합니다.

| Layout | 구성 | sub↔chevron divider |
|---|---|---|
| Text Only | 텍스트만 | — |
| Icon + Text | 아이콘 + 텍스트 | — |
| Check + Text | 체크 + 텍스트 | — |
| Text + Chevron | 텍스트 + 화살표 | ✓ (label↔chevron) |
| Text + Sub text | 텍스트 + 보조 텍스트 | — |
| Icon + Text + Subtext + Chevron | 아이콘 + 텍스트 + 보조 텍스트 + 화살표 | ✓ (sub↔chevron) |

### Layout 시각 보충 (`1:230825` 도면 verbatim)

- **Selected (각 layout 그룹의 첫 행)** — `bg-selected` (`#fef7f2`)만이 아니라 **1px orange border** (`menu/border-selected` = `#f3a066`) 가 함께 들어갑니다. bg + border 둘 다 적용해야 비선택 행과 명확히 구분됩니다.
- **Chevron이 있는 모든 layout** — `Text + Chevron`, `Icon + Text + Subtext + Chevron` 두 layout에서는 chevron 직전에 **세로 1px × 20px split_btn divider**가 들어갑니다 (`menu/divider` = `#bcbcbc`). selected 행에서는 divider 색이 `menu/divider-selected` (`#f7c099`)로 변경.
- **Prefix Icon (편집 아이콘)** — `Icon + Text`, `Icon + Text + Subtext + Chevron` layout의 연필 아이콘은 `general/edit` 컴포넌트를 **45° 회전**한 형태. (anatomy 섹션과 동일 룰)

## State

> 출처: `1:230908` (verbatim)

메뉴(Menu)는 Default, Hover Pressed, Selected, Disabled, Focused 상태로 분류됩니다.  각 상태는 배경색과 텍스트 색상으로 구분되며, 사용자가 현재 어떤 항목과 상호작용 중인지 명확하게 전달해야 합니다. Selected 상태는 선택형 항목(서브메뉴 포함)에서만 사용하며, Active 상태는 클릭(mousedown) 순간에만 짧게 유지됩니다.

| State | 설명 | bg | border / shadow | text |
|---|---|---|---|---|
| Default | 메뉴 아이템의 기본 상태로, 사용자의 행동을 유도하는 액션 목록을 제공합니다. | `#ffffff` | — | `#1d1d1d` |
| Hover | 마우스가 올라간 상태로, 상호작용 가능함을 시각적으로 안내합니다. | `#e9e9e9` | — | `#1d1d1d` |
| Selected | 현재 활성화되어 선택된 상태로, 선택형 항목에서 적용 중인 값을 나타냅니다. | `#fef7f2` | 1px solid `#f3a066` | `#eb6100` |
| Focused | 키보드 탐색 등으로 포커스가 위치한 상태로, 접근성을 위한 시각적 표시입니다. | `#fef7f2` | 2.5px solid `#1d1d1d` | `#eb6100` |
| Disabled | 사용자가 메뉴 아이템에 동작을 요구하지 못하는 비활성화 상태입니다. | `#e9e9e9` | — | `#a5a5a5` |

### State 시각 보충 (`1:230923` 도면 verbatim)

- **모든 state 샘플은 `Icon + Text + Subtext + Chevron` layout** — Default/Hover/Selected/Focused/Disabled 5개 행 모두 동일 layout. 따라서 모든 행에서 sub_text와 chevron 사이에 **세로 split_btn divider** (1px × 20px)가 들어갑니다.
- **편집 아이콘은 anatomy와 동일하게 45° 회전** — State 샘플의 연필 아이콘도 `general/edit` 45° 회전 형태로 표시. 회전을 빠뜨리면 5개 행 모두 아이콘이 수직으로 서 있는 잘못된 모양이 됩니다.
- **Selected vs Focused** — 둘 다 `bg-selected` + `text-selected` 동일. **border만** 차이 (Selected: 1px orange / Focused: 2.5px dark). Focused가 Selected를 덮어쓰는 형태로 키보드 탐색 가시성을 강화합니다.

## menu_item Variant IDs

> 출처: `1160:177493` 메타데이터 (Figma 컴포넌트 정의 verbatim). 13 variants = state × checked. 각 variant 282×32.

| state \\ checked | true | false |
|---|---|---|
| default | `2527:21068` | `1160:178648` |
| hover | `1160:177508` | `1160:178661` |
| selected | `1160:177536` | `1160:178687` |
| disabled | `1160:177522` | `1160:178674` |
| focused | `2480:18586` | `2480:18599` |
| danger | `2595:59849` | `2527:28611` |
| alert | `1160:177494` | — |

## `menu_item_sub` variants

> 출처: `1711:32775`

| type | variant ID | 크기 |
|---|---|---|
| header | `1711:32774` | 282 × 32 |
| divider | `1711:32780` | 282 × 4 |

## Color tokens

> 출처: 레포지토리 `tokens/color/component.js#menu` namespace (prefix `menu/*`).

### bg
| token | light |
|---|---|
| `menu/bg-default` | `#ffffff` |
| `menu/bg-hover` | `#e9e9e9` |
| `menu/bg-selected` | `#fef7f2` |
| `menu/bg-disabled` | `#e9e9e9` |

### text
| token | light |
|---|---|
| `menu/text-primary` | `#1d1d1d` |
| `menu/text-secondary` | `#393939` |
| `menu/text-selected` | `#eb6100` |
| `menu/text-disabled` | `#a5a5a5` |
| `menu/text-danger` | `#d73220` |

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
| `menu/divider` | `#bcbcbc` |
| `menu/divider-selected` | `#f7c099` |
| `menu/divider-disabled` | `#bcbcbc` |
| `menu/divider-danger` | `#d73220` |
| `menu/section-divider` | `#bcbcbc` |

## Number tokens

> 출처: 레포지토리 `tokens/number/component.js` namespace.

| token | px |
|---|---|
| `menu/height/sm` | 32 |
| `menu/padding/sm` | 6 |
| `menu/padding/md` | 8 |
| `menu/gap/sm` | 4 |
| `menu/radius/sm` | 4 |
| `menu/border/xs` | 1 |
| `menu/border/sm` | 2 |
