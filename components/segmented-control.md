# Segmented Control

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `2441:102875` `✅segmented control_items` (atom — 120+ variants, 5축)
>   - `2461:38873` `segmented control_icon_items` (스크롤 화살표)
>   - `2441:103526` `✅segmented control` (container/wrapper)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:322219`, `100:46962` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#segmentedControl`, `tokens/number/component.js#segmentedControl`.
> 토큰 prefix: `segmented_control/*`.

## Overview
- 2~N개 옵션 중 단일 선택 (탭의 작은/컴팩트 버전)
- 모드: **light** (production variable_defs 기준)
- 3 컴포넌트:
  - `segmented control_items` (item atom — 120+ variants)
  - `segmented control_icon_items` (좌우 화살표 — overflow 스크롤러)
  - `segmented control` (wrapper container)

## Number tokens (Mode 1)

### outlined style — height (px)
| size | token | height |
|---|---|---|
| sm | `segmented_control/height-sm-outline` | 24 |
| md | `segmented_control/height-md-outline` | 28 |
| lg | `segmented_control/height-lg-outline` | 32 |

### filled style — height (px)
| size | token | height |
|---|---|---|
| sm | `segmented_control/height-sm-solid` | 20 |
| md | `segmented_control/height-md-solid` | 24 |
| lg | `segmented_control/height-lg-solid` | 28 |

### filled style — width (icon only, px)
| size | token | width |
|---|---|---|
| sm | `segmented_control/width-sm-solid` | 24 |
| md | `segmented_control/width-md-solid` | 28 |
| lg | `segmented_control/width-lg-solid` | 32 |

### h-padding (좌우, px)
| size | type=icon+text | type=icon only |
|---|---|---|
| sm | 8 | 2 |
| md | 12 | 4 |
| lg | 12 | 6 |

### gap · radius
| token | px |
|---|---|
| `segmented_control/gap` | 2 (item 사이) |
| `segmented_control/radius-sm` | 4 |

## Color tokens — production (light)

### item bg
| token | light |
|---|---|
| `segmented_control/bg-default` | `#ffffff00` (transparent) |
| `segmented_control/bg-hover` | `#f4f4f4` |
| `segmented_control/bg-pressed` | `#eeeeee` |
| `segmented_control/bg-selected` | `#fefefe` (filled selected pill 배경) |
| `segmented_control/bg-disabled` | `#ffffff00` |

### item border / text
| token | light |
|---|---|
| `segmented_control/border` | `#a5a5a5` (item border) |
| `segmented_control/border-selected` | `#eb6100` (orange — NEW) |
| `segmented_control/text-default` | `#727272` |
| `segmented_control/text-selected` | `#eb6100` |
| `segmented_control/text-selected-solid` | `#1d1d1d` (solid 변형 — 검정 텍스트) |
| `segmented_control/text-disabled` | `#a5a5a5` |

### container
| token | light |
|---|---|
| `segmented_control/container/bg-contained type` | `#ffffff` |
| `segmented_control/container/border-contained type` | `#a5a5a5` |
| `segmented_control/container/bg-solid type` | `#e9e9e9` |
| `segmented_control/container/border-solid type` | `#e9e9e9` |

> **중요 정정**: 이전 문서는 dark 값 표기. production light로 정정.

## Variants — `segmented control_items` (5축, 120+ variants)

### prop verbatim
- **style**: `outlined(default)` / `filled` (괄호 포함 verbatim — `outlined(default)`)
- **shape**: `square` / `rounded`
- **size**: `sm(24)` / `md(28)` / `lg(32)` (괄호 포함)
- **state**: `default` / `hover` / `pressed` / `selected` / `disabled`
- **type**: `icon+text` / `icon only`
- **show icon**: `false` / `true` (icon+text는 false 기본, icon only는 true 기본)

조합: 2 × 2 × 3 × 5 × 2 = **120 variants** (visible)

## Variant IDs

### `style=outlined(default), type=icon+text, show icon=false, shape=square`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `2441:102876` | `2441:102889` | `2441:102902` | `2441:102915` | `2441:102928` |
| md(28) | `2441:103071` | `2441:103149` | `2441:103162` | `2441:103175` | `2441:103188` |
| lg(32) | `2441:103331` | `2441:103344` | `2441:103357` | `2441:103370` | `2441:103383` |

### `style=outlined(default), type=icon+text, show icon=false, shape=rounded`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `2441:102941` | `2441:102954` | `2441:102967` | `2441:102980` | `2441:102993` |
| md(28) | `2441:103006` | `2441:103019` | `2441:103032` | `2441:103045` | `2441:103058` |
| lg(32) | `2441:103084` | `2441:103097` | `2441:103110` | `2441:103123` | `2441:103136` |

### `style=filled, type=icon+text, show icon=false, shape=square`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `2441:107443` | `2441:107456` | `2441:107469` | `2441:107482` | `2441:107495` |
| md(28) | `2441:107638` | `2441:107716` | `2441:107729` | `2441:107742` | `2441:107755` |
| lg(32) | `2441:107768` | `2441:107781` | `2441:107794` | `2441:107807` | `2441:107820` |

### `style=filled, type=icon+text, show icon=false, shape=rounded`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `2441:107508` | `2441:107521` | `2441:107534` | `2441:107547` | `2441:107560` |
| md(28) | `2441:107573` | `2441:107586` | `2441:107599` | `2441:107612` | `2441:107625` |
| lg(32) | `2441:107651` | `2441:107664` | `2441:107677` | `2441:107690` | `2441:107703` |

### `style=outlined(default), type=icon only, show icon=true, shape=square`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `4230:55892` | `4230:55905` | `4230:55918` | `4230:55931` | `4230:55944` |
| md(28) | `4230:56087` | `4230:56165` | `4230:56178` | `4230:56191` | `4230:56204` |
| lg(32) | `4230:56217` | `4230:56230` | `4230:56243` | `4230:56256` | `4230:56269` |

### `style=outlined(default), type=icon only, show icon=true, shape=rounded`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `4230:55957` | `4230:55970` | `4230:55983` | `4230:55996` | `4230:56009` |
| md(28) | `4230:56022` | `4230:56035` | `4230:56048` | `4230:56061` | `4230:56074` |
| lg(32) | `4230:56100` | `4230:56113` | `4230:56126` | `4230:56139` | `4230:56152` |

### `style=filled, type=icon only, show icon=true, shape=square`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `4230:56282` | `4230:56295` | `4230:56308` | `4230:56321` | `4230:56334` |
| md(28) | `4230:56477` | `4230:56555` | `4230:56568` | `4230:56581` | `4230:56594` |
| lg(32) | `4230:56607` | `4230:56620` | `4230:56633` | `4230:56646` | `4230:56659` |

### `style=filled, type=icon only, show icon=true, shape=rounded`
| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| sm(24) | `4230:56347` | `4230:56360` | `4230:56373` | `4230:56386` | `4230:56399` |
| md(28) | `4230:56412` | `4230:56425` | `4230:56438` | `4230:56451` | `4230:56464` |
| lg(32) | `4230:56490` | `4230:56503` | `4230:56516` | `4230:56529` | `4230:56542` |

## Sub-component — `segmented control_icon_items` (`2461:38873`)

좌우 스크롤 화살표 (overflow 시 사용). variant ID는 별도 호출 필요.

## Wrapper — `✅segmented control` (`2441:103526`)

container 외곽 컴포넌트. style별 container 토큰:
- **outlined**: bg=transparent, border=`#a5a5a5`
- **contained**: bg=`#ffffff`, border=`#a5a5a5`
- **solid**: bg=`#e9e9e9`, border=`#e9e9e9` (selected pill이 흰색으로 float)

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| sm / md / lg | `body/sm (M)` (default) | Pretendard 500 / 14 / 20 |
| selected | `body/sm (SB)` | 600 / 14 / 20 |

## State별 시각 (light)

### outlined(default)
| state | bg | border | text |
|---|---|---|---|
| default | transparent | `#a5a5a5` | `#727272` |
| hover | `#f4f4f4` | `#a5a5a5` | `#727272` |
| pressed | `#eeeeee` | `#a5a5a5` | `#727272` |
| selected | `#fefefe` | **`#eb6100`** 1px | **`#eb6100`** (SB) |
| disabled | transparent | `#a5a5a5` | `#a5a5a5` |

### filled
| state | bg | text |
|---|---|---|
| default | transparent | `#727272` |
| hover | `#f4f4f4` | `#727272` |
| pressed | `#eeeeee` | `#727272` |
| selected | **`#fefefe`** (white pill) | `#1d1d1d` (검정 SB — `text-selected-solid`) |
| disabled | transparent | `#a5a5a5` |

## Anatomy

### outlined (각 item에 border)
```
┌─[ Item ]─┬─[ Item selected ]─┬─[ Item ]─┐
                ↑ orange border
```

### filled (container bg + selected pill)
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (container bg=#e9e9e9)
┃   Item     [ Item selected ]    Item     ┃ (selected pill bg=#fefefe float)
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### shape별
- `square`: corner 0~4 (각진 사각)
- `rounded`: corner 4 (부드러운 사각)

### type별
- `icon+text`: 아이콘 옵션 + 텍스트 (show icon으로 토글)
- `icon only`: 아이콘만 (정사각 width = height — 예: sm 24×20)

## Usage Notes

- variant 매칭 verbatim:
  - `style=outlined(default)` (괄호 포함! `outlined` 단독 매칭 실패)
  - `style=filled` (이전 `solid` 아님)
  - `shape=square` / `rounded`
  - `size=sm(24)` / `md(28)` / `lg(32)` (괄호 포함)
  - `state=default` / `hover` / `pressed` / `selected` / `disabled`
  - `type=icon+text` / `icon only` (공백+하이픈)
  - `show icon=false` / `true` (공백 포함)
- outlined: 각 item에 border 표시, selected는 orange border + bg 미세 변화
- filled: container 영역 채워지고 selected가 흰 pill로 float
- icon only는 정사각 (width=height)
- icon+text + show icon=true 조합은 별도 매트릭스 필요 (현재 false 기본)
- pressed state는 일시적 (마우스 누르고 있는 동안만)
- segmented control vs tab:
  - segmented control: 2~5 옵션 컴팩트 (form 안 inline)
  - tab: 큰 콘텐츠 영역 분할
- 폰트는 모두 Pretendard Medium 14 / SemiBold 14 (selected)
- variant text-selected-solid (`#1d1d1d`)는 filled 변형의 selected text — outlined보다 진함
