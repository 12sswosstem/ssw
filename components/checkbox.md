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
