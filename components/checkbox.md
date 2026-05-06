# Checkbox

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `981:166538` `CheckboxV02` (production component)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:341738`, `1:341167`, `1:340767` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#checkbox`, `tokens/number/component.js#selectionControl`.
> 토큰 prefix: `control/*`, `selection control/*`.

## Overview
- Selection Control 그룹 (checkbox + radio + switch) 중 하나 — `control/*` 토큰 공유
- 모드: **light** (production variable_defs 기준)
- production 컴포넌트: `CheckboxV02` (`981:166538`)
- 4축 prop + 3 boolean (variants 풀 매트릭스)

## Number tokens (Mode 1)

### selection control / icon (체크박스 영역, px)
| size | container | inner box | token |
|---|---|---|---|
| sm | 20 | **16** | `selection control/icon/sm` = 16 |
| md | 24 | **19.2** | `selection control/icon/md` = 20 (figma-export) |
| lg | 32 | **24** | `selection control/icon/lg` = 24 |

> production 노드는 inner box가 sm=16 / md=19.2 / lg=24 — figma-export.json 기준 sm=16/md=20/lg=24와 미세 차이.

### selection control / text (라벨 사이즈)
| size | text size |
|---|---|
| sm | 14 (`body/sm`) |
| md | 16 (`body/md`) |
| lg | 18 (`body/lg`) |

### border 굵기 (size별)
| size | border |
|---|---|
| sm | 1 |
| md | 1.2 |
| lg | 1.5 (또는 1.875 indeterminate) |

### focus ring (size별, inset border)
| size | ring 두께 |
|---|---|
| sm | 2 |
| md | 2.4 |
| lg | 2 (inset 2px) |

## Variants — production prop verbatim

### prop verbatim
- **active**: `unchecked` / `checked` / `indeterminate`
- **state**: `default` / **`active`** / `disabled` (3 values — `hover`/`pressed`는 `active`로 통합!)
- **style**: `Standard` / `Ranking` (대문자 첫글자)
- **size**: `sm` / `md` / `lg`
- **focusRing**: boolean (focus ring 표시)
- **label**: boolean (라벨 표시)
- **requiredMark**: boolean (`*` 필수 표시)
- **text**: string (라벨 콘텐츠 — default "Label")
- **ver**: `default`

> **중요 정정**: state는 `default / hover / pressed / disabled` 4개가 아닌 **`default / active / disabled` 3개**. `hover`와 `pressed`는 `active`로 통합됨.

## Color tokens — production (light)

### bg
| token | light |
|---|---|
| `control/bg/bg-default` | `#fefefe` (unchecked 배경) |
| `control/bg/bg-brand-1` | `#eb6100` (checked / indeterminate 배경 — orange) |
| `control/bg/bg-disabled` | `#d2d2d2` |

### border
| token | light |
|---|---|
| `control/border/border-default` | `#727272` |
| `control/border/border-brand` | `#eb6100` (active/checked 시 brand) |
| `control/border/border-disabled` | `#a5a5a5` |

### fg (체크 마크)
| token | light |
|---|---|
| `control/fg/fg-default` | `#fefefe` (check 마크 흰색) |
| `control/fg/fg-disabled` | `#a5a5a5` |

### text
| token | light |
|---|---|
| `control/text/text-default` | `#565656` |
| `control/text/text-active` | `#1d1d1d` (active state 시 검정) |
| `control/text/text-disabled` | `#a5a5a5` |

### Ranking style
| token | light |
|---|---|
| `Color/selection/surface/surface-ranking` | `#faec88` (노란 배경) |
| `control/common/fg-ranking` | `#1d1d1d` (숫자 텍스트) |

> Ranking은 노란 동그라미 안에 숫자(1, 2, 3...) 표시 — 우선순위/등급 체크.

## State별 시각 (Standard style)

| state \\ active | unchecked | checked | indeterminate |
|---|---|---|---|
| default | bg=`#fefefe` + border=`#727272` | bg=`#eb6100` + check=`#fefefe` | bg=`#eb6100` + dash=`#fefefe` |
| active | bg=`#fefefe` + border=`#eb6100` | bg=`#eb6100` + check=`#fefefe` | bg=`#eb6100` + dash=`#fefefe` |
| disabled | bg=`#d2d2d2` + border=`#a5a5a5` | bg=`#d2d2d2` + check=`#a5a5a5` | bg=`#d2d2d2` + dash=`#a5a5a5` |

> active state는 hover/focus 통합 — keyboard tab 또는 마우스 hover 시 border만 brand로 변경.

## Anatomy

```
[ ☑ ] Label *   ← gap 4 (sm) / 8 (lg) — between box and label
  ↑     ↑    ↑
  box   text required mark
  
sm: 16×16 box, gap 4, text 14
md: 19.2×19.2 box, gap 4, text 16
lg: 24×24 box, gap 8, text 18
```

### Standard style anatomy
- 사각 box (radius 0 — 각진)
- check / dash 마크: `fg/fg-default` 흰색
- focus ring: 2~3.2px black inset

### Ranking style anatomy
- 동그라미 box (radius=full)
- 노란 배경 (`#faec88`)
- 숫자 텍스트 (`#1d1d1d`, Pretendard Bold)
- focus ring: rounded inset

## Typography

| size | textStyle (default) | textStyle (active state) |
|---|---|---|
| sm | `body/sm` (14/20 Regular) | `body/sm (SB)` (14/20 SemiBold) |
| md | `body/md` (16/24 Regular) | `body/md (SB)` (16/24 SemiBold) |
| lg | `body/lg` (18/26 Regular) | `body/lg (SB)` (18/26 SemiBold) |

> **state=active일 때 SemiBold 자동 적용** (이전 `unchecked → 400, checked → 600`도 같은 효과).

## Required mark
- 색상: `Color(New)/Red/500` `#ef0101`
- 폰트: Malgun Gothic Regular 14
- 위치: 라벨 우측 (gap 4)
- 표시: `*` 단일 문자

## Description (Figma `1:340767` verbatim)

체크박스(Checkbox)는 사용자에게 둘 이상의 항목 중에서 복수 선택이 가능하도록 제공하는 사용자 인터페이스(UI) 요소입니다. 각 항목은 서로 독립적이며, 사용자는 필요에 따라 하나 이상을 선택하거나 선택을 해제할 수 있습니다. 체크박스는 보통 설정 옵션이나 다중 응답이 필요한 설문 항목 등에서 사용되며, 선택 여부는 사각형 박스 안에 체크(✓)로 표시됩니다.

예외적으로 선택/해제의 여부 자체가 의미를 가지는 경우, 단일 응답에서도 사용합니다.

## Anatomy (verbatim)

체크박스는 checkbox와, Label로 구성되어 있습니다.

| 요소 | 설명 |
|---|---|
| 체크박스 (Checkbox) | 체크박스의 현재 선택 상태 |
| 라벨 (Label) | 선택하거나 선택 해제할 개체의 정보 |

## Properties (verbatim)

### Size
체크박스는 small, medium, large 총 3가지의 사이즈로 제공합니다.

### Layout (Figma `1:340885` verbatim)
체크박스는 3가지 레이아웃으로 제공합니다.

| Layout 종류 | 시각 |
|---|---|
| `checkbox only` | `[ ]` (체크박스만, 라벨/요구마크 없음) |
| `with label` | `[ ] Label` (체크박스 + 라벨) |
| `label and required mark` | `[ ] Label *` (체크박스 + 라벨 + 필수 마크) |

### State & Variant
체크박스는 default, active, disabled 3가지의 state를 가지며, unchecked, checked, indeterminate 의 선택 상태값과 각 상태별 focus 에 따른 다양한 variant를 나타낼 수 있습니다.

> Ranking variant는 production 컴포넌트(`981:166538`)에 추가 정의되어 있으며 가이드 페이지에는 별도 명시되지 않음 (노란 동그라미 + 숫자, 우선순위 표시).

## Guidelines (verbatim)

### 좌측 정렬 (Figma `1:340971` verbatim)
체크박스를 사용자 인터페이스(UI)에 배치할 때, 자연스러운 시선의 흐름을 위해 항목의 왼쪽(좌측)에 정렬하여 배치하는 것을 권장합니다. 사용자가 화면을 위에서 아래로, 왼쪽에서 오른쪽으로 자연스럽게 읽어나갈 때 시선이 흔들리지 않고 안정적으로 흐를 수 있습니다. 또한 체크박스들이 일정한 위치에 정렬되어 있으면 전체 레이아웃이 일관되고 정돈된 느낌을 주기 때문에, 사용자 입장에서 보기 쉽고 사용하기도 편해집니다.

Do/Don't (가이드 페이지 verbatim 표 layout):

**Do** — 체크박스가 좌측 첫 컬럼:
| ☐ | 구분 | 상태 |
|---|---|---|
| ☐ | [비보험] | 골유도재생술(GBR) |
| ☐ | [비보험] | 인조골이식 |
| ☐ | [보험] | 자가골 채취, 이식 |

**Don't** — 체크박스가 우측 마지막 컬럼:
| 구분 | 상태 | ☐ |
|---|---|---|
| [비보험] | 골유도재생술(GBR) | ☐ |
| [비보험] | 인조골이식 | ☐ |
| [보험] | 자가골 채취, 이식 | ☐ |

> **시각화 메모**: spec.html에서 Do/Don't 카드 내부 표는 **table 자체에만 `background: #ffffff` 적용** (외곽 wrapper 박스 padding 없음). 표 셀(td/th)만 흰색이고 카드 외곽 톤(Do gray / Don't pink)이 표 주위 padding 영역에 자연스럽게 노출 — Figma `1:340971` 표 영역과 동일.

### 라벨 제공 (Figma `1:341036` verbatim)
체크박스에는 명확하고 구체적인 레이블(텍스트)을 제공하여 사용자가 항목의 의미를 쉽게 이해하고 체크박스를 선택/해제 할 수 있도록 합니다. 명확한 레이블 없이 사용할 경우, 접근성이 낮아지고 불편함을 주며, 사용자 입장에서 체크의 의미가 모호할 수 있습니다.

**Do**:
- ☐ 알림받기 설정
- ☐ 오늘 하루 다시 보지 않기

**Don't**:
- ☐ 🔔 (이모지/아이콘만 — 의미 모호)
- ☐ 알림 (라벨이 있으나 너무 모호)

## 접근성 (Figma verbatim)

> ⚠ Figma 원본 본문은 "버튼"으로 표기 — Button 페이지에서 복사된 것으로 보임. 의미상은 "체크박스".

모든 사용자가 버튼의 기능을 인식하고 조작할 수 있도록, 아래 WCAG 및 ARIA 가이드라인을 준수합니다. 키보드, 스크린리더, 터치 등 다양한 입력 방식에서 일관된 접근성을 보장하여 사용 오류를 최소화합니다.

### WCAG 2.2

#### 키보드 접근성 (SC 2.1.1)
모든 버튼은 Tab·Shift+Tab으로 포커스 이동이 가능하고, Enter 또는 Space 키로 작동해야 합니다.

#### 포커스 가시성 (SC 2.4.7)
버튼에 키보드 포커스가 있을 때 2px 이상의 고대비 포커스 인디케이터를 표시해야 합니다.

#### 클릭 대상 크기 (PC 기준, SC 2.5.8)
마우스·트랙패드 환경에서 클릭 가능한 버튼 목표(target)는 최소 24×24 CSS 픽셀을 확보해야 하며, 목표가 이보다 작을 경우 요소 간 최소 24px 이상의 간격을 유지해야 합니다.

#### 비활성화 상태
비활성화된 버튼은 시각적으로 명확히 구분되고, 클릭이 불가능해야 하며 키보드 포커스에서 제외합니다.

## 상호작용 가이드라인 (Figma verbatim)

> ⚠ Figma 원본 본문은 "버튼"으로 표기 — Button 페이지에서 복사된 것으로 보임. 의미상은 "체크박스".

### 탐색

| 구분 | 설명 |
|---|---|
| Tab, Shift + Tab | 모든 버튼은 Tab, Shift + Tab 키를 눌렀을 때 접근할 수 있어야 한다. |

### 실행

| 구분 | 설명 |
|---|---|
| Click | 버튼의 동작을 실행시킨다. |
| Enter, Space | 버튼이 초점을 가진 상태에서 버튼의 동작을 실행시킨다. |

## Usage Notes

- variant 매칭 verbatim:
  - `active=unchecked` / `checked` / `indeterminate`
  - `state=default` / `active` / `disabled` (이전 hover/pressed/focused 단일화)
  - `style=Standard` (대문자 S) / `Ranking` (대문자 R)
  - `size=sm` / `md` / `lg`
  - boolean: `focusRing=true|false`, `label=true|false`, `requiredMark=true|false`
- text prop으로 라벨 텍스트 동적 (default "Label")
- checked 시 box bg = brand orange (`#eb6100`) — `control/bg/bg-brand-1`
- active state는 hover/focus 통합 — border만 orange로 변경
- Ranking style은 등급/우선순위 표시 (1, 2, 3 등)
- Required(`*`)는 폼 필수 입력 표시 — `Color(New)/Red/500` (`#ef0101`)
- focus ring은 키보드 포커스용 (Tab navigation)
- 폰트 두께는 state=active 시 SemiBold로 자동 변경 (active = checked + state.active 모두)
