# Menu

> 출처 (Figma):
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`
>   - `1160:177493` `menu_item` (atom — 13 variants)
>   - `1711:32775` `menu_item_sub`
>   - `2533:20420` `menu` (wrapper)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`
>   - `1:230731` 메뉴(Menu) — spec 페이지
>   - `1:231278` Menu use it
>   - `284:12879` 구성 (Anatomy)
>   - `284:18380` Type
>
> JS 토큰: `tokens/color/component.js#menu` (prefix `menu/*`)
> 시각 참조: [docs/spec.html#menu](../docs/spec.html#menu)

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

## State — `menu_item` variants

> 출처: `1160:177493` 메타데이터 (Figma 컴포넌트 정의 verbatim)

13 variants = state × checked. 각 variant 282×32.

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

> 출처: `1711:32775` (frame 정보)

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
