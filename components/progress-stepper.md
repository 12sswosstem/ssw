# Progress Stepper

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `671:38516` `progress stepper`
> - 컴포넌트 셋:
>   - `671:38517` `progress stepper_atom` (atom — ~72 variants, 5축)
>   - `732:34819` `progress stepper_module` (module — ~72 variants, 5축)
>   - `671:38741` `Progress Tracker` (dot/circle 6 variants)
>   - `671:38760` `track line` (연결선 12 variants)
>   - `671:38858` `step text` (라벨 12 variants)
>   - `3962:92518` `🌵progress_slot` (slot 2 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:189106`
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#progress`, `tokens/number/component.js#progress` (`progress` namespace 공유).
> 토큰 prefix: `progress circle & bar/*` (color), `etc/*` (보조).

## Overview
- 단계별 진행 상황 표시 (wizard / checkout / setup flow 등)
- progress bar / circle과 다름 — % 채움이 아닌 **단계 표시**
- 모드: **light** (production variable_defs 기준)
- 핵심 컴포넌트: `progress stepper_atom` (단일 step) / `progress stepper_module` (텍스트 + dot 통합)

## Number tokens
- 별도 stepper 전용 토큰 없음 (progress namespace 공유)
- atom 사이즈: md(40 width)·sm(40 width) / vertical 84·54h, horizontal 20·10h

## Color tokens — production (light)

### state별 (progress namespace 공유)
| token | light | 용도 |
|---|---|---|
| `progress circle & bar/active` | `#1d1d1d` | current / complete dot 색 (어두운 강조) |
| `progress circle & bar/active-invert` | `#ffffff` | 반전 시 |
| `progress circle & bar/inactive` | `#bcbcbc` | incomplete dot 색 (옅은 회색) |
| `progress circle & bar/text-main` | `#1d1d1d` | active text |
| `progress circle & bar/text-sub` | `#565656` | sub label |
| `progress circle & bar/text-inactive` | `#bcbcbc` | incomplete text |

### 보조 (`etc/*` namespace)
| token | light |
|---|---|
| `etc/fg-neutral-selected` | `#000000` |
| `etc/border-neutral-selected` | `#373d4c` |
| `etc/border-default` | `#dadada` |
| `etc/fg-disabled 2` | `#dadada` |
| `etc/text-disabled` | `#c6c6c6` |
| `common/inverse` | `#ffffff` |

> stepper는 bar(blue)·circle(orange)과 달리 **neutral dark/gray** 색상 사용 — 흐름의 단계 표시는 채움이 아닌 강도 단계로 표현.

## Atom Variants — `progress stepper_atom` (5축)

### prop verbatim
- **size**: `md` / `sm`
- **step**: `start` / `middle` / `end` (시퀀스 위치)
- **state**: `incomplete` / `current` / `complete`
- **layout**: `vertical` / `horizontal`
- **style**: `line` / `dash`

조합: 2 × 3 × 3 × 2 × 2 = **72 variants**

### Variant IDs — `layout=horizontal, style=line`
| step \\ state \\ size | start (incomplete) | start (current) | start (complete) | middle (incomplete) | middle (current) | middle (complete) | end (incomplete) | end (current) | end (complete) |
|---|---|---|---|---|---|---|---|---|---|
| md | `671:38630` | `671:38622` | `671:38614` | `671:38670` | `671:38654` | `671:38638` | `671:38702` | `671:38694` | `671:38686` |
| sm | `671:38634` | `671:38626` | `671:38618` | `671:38682` | `671:38666` | `671:38650` | `671:38706` | `671:38698` | `671:38690` |

### Variant IDs — `layout=horizontal, style=dash`
| step \\ state \\ size | start (incomplete) | start (current) | start (complete) | middle (incomplete) | middle (current) | middle (complete) | end (incomplete) | end (current) | end (complete) |
|---|---|---|---|---|---|---|---|---|---|
| md | `732:46714` | `732:46702` | `732:46694` | `732:46762` | `732:46738` | `732:46722` | `732:46798` | `732:46786` | `732:46778` |
| sm | `732:46718` | `732:46710` | `732:46698` | `732:46774` | `732:46758` | `732:46734` | `732:46802` | `732:46794` | `732:46782` |

### Variant IDs — `layout=vertical, style=line`
| step \\ state \\ size | start (incomplete) | start (current) | start (complete) | middle (incomplete) | middle (current) | middle (complete) | end (incomplete) | end (current) | end (complete) |
|---|---|---|---|---|---|---|---|---|---|
| md | `671:38518` | `671:38550` | `671:38582` | `671:38526` | `671:38558` | `671:38574` | `671:38542` | `671:38598` | `671:38606` |
| sm | `671:38522` | `671:38554` | `671:38594` | `671:38534` | `671:38566` | `671:38586` | `671:38546` | `671:38602` | `671:38610` |

### Variant IDs — `layout=vertical, style=dash`
| step \\ state \\ size | start (incomplete) | start (current) | start (complete) | middle (incomplete) | middle (current) | middle (complete) | end (incomplete) | end (current) | end (complete) |
|---|---|---|---|---|---|---|---|---|---|
| md | `732:47700` | `732:47732` | `732:47764` | `732:47708` | `732:47740` | `732:47756` | `732:47724` | `732:47780` | `732:47788` |
| sm | `732:47704` | `732:47736` | `732:47776` | `732:47716` | `732:47748` | `732:47768` | `732:47728` | `732:47784` | `732:47792` |

## Module Variants — `progress stepper_module` (5축)

atom + 라벨 텍스트 통합 컴포넌트. atom과 동일한 5축 prop, ~72 variants.

### prop verbatim (atom과 동일)
- **state**: `incomplete` / `current` / `complete`
- **size**: `md` / `sm`
- **step**: `start` / `middle` / `end`
- **layout**: `vertical` / `horizontal`
- **style**: `line` / `dash`

### 모듈 사이즈
- horizontal: 104.5 width × md=68h / sm=54h
- vertical: 229 width × md=48h / sm=44h

### Variant IDs — `layout=horizontal, style=line`
| state \\ step \\ size | start (md) | start (sm) | middle (md) | middle (sm) | end (md) | end (sm) |
|---|---|---|---|---|---|---|
| incomplete | `732:35727` | `3967:93862` | `732:35730` | `3967:93880` | `732:35724` | `3967:93916` |
| current | `732:35654` | `3967:93856` | `732:35657` | `3967:93874` | `732:35663` | `3967:93910` |
| complete | `732:34817` | `3967:93850` | `732:34856` | `3967:93868` | `732:34955` | `3967:93904` |

### Variant IDs — `layout=horizontal, style=dash`
| state \\ step \\ size | start (md) | start (sm) | middle (md) | middle (sm) | end (md) | end (sm) |
|---|---|---|---|---|---|---|
| incomplete | `732:45969` | `3967:93865` | `732:45978` | `3967:93883` | `732:45996` | `3967:93919` |
| current | `4009:15483` | `4009:15578` | `4009:15486` | `4009:15581` | `4009:15492` | `4009:15587` |
| complete | `732:45963` | `3967:93853` | `732:45972` | `3967:93871` | `732:45990` | `3967:93907` |

### Variant IDs — `layout=vertical, style=line`
| state \\ step \\ size | start (md) | start (sm) | middle (md) | middle (sm) | end (md) | end (sm) |
|---|---|---|---|---|---|---|
| incomplete | `732:34818` | `3967:97989` | `732:34853` | `3967:97998` | `732:34952` | `3967:98016` |
| current | `732:36074` | `3967:97992` | `732:36077` | `3967:98001` | `732:36083` | `3967:98019` |
| complete | `732:36126` | `3967:97995` | `732:36129` | `3967:98004` | `732:36123` | `3967:98022` |

### Variant IDs — `layout=vertical, style=dash`
| state \\ step \\ size | start (md) | start (sm) | middle (md) | middle (sm) | end (md) | end (sm) |
|---|---|---|---|---|---|---|
| incomplete | `4009:16653` | `4034:4817` | `4009:16662` | `4034:4826` | `4009:16680` | `4034:4844` |
| current | `4009:16656` | `4034:4820` | `4009:16665` | `4034:4829` | `4009:16683` | `4034:4847` |
| complete | `4009:16659` | `4034:4823` | `4009:16668` | `4034:4832` | `4009:16686` | `4034:4850` |

## Sub-component — `Progress Tracker` (dot/circle 6 variants)

set ID: `671:38741`. step indicator의 dot/circle 부분.

### prop
- **state**: `incomplete` / `current` / `complete`
- **type**: `Default` / `icon`

### Variant IDs
| state \\ type | Default | icon |
|---|---|---|
| incomplete | `671:38752` | `671:38756` |
| current | `671:38742` | `671:38750` |
| complete | `671:38746` | `671:38758` |

### 크기
- Default type: 20×20 (dot)
- icon type: 14×14 (current) / 10×10 (incomplete · complete)

## Sub-component — `track line` (연결선 12 variants)

set ID: `671:38760`. step 사이를 잇는 선.

### prop
- **state**: `active` / `inactive` / `none`
- **type**: `vertical` / `horizontal`
- **style**: `line` / `dash`

### Variant IDs
| state \\ type \\ style | vertical-line | vertical-dash | horizontal-line | horizontal-dash |
|---|---|---|---|---|
| active | `671:38761` | `732:45638` | `671:38763` | `732:36926` |
| inactive | `732:45661` | `4009:16840` | `671:38769` | `732:36923` |
| none | `671:38767` | `732:41327` | `671:38775` | `732:42952` |

### 크기
- vertical: 2 × 66
- horizontal: 66 × 2

## Sub-component — `step text` (라벨 12 variants)

set ID: `671:38858`. step 라벨 텍스트.

### prop
- **size**: `md` / `sm`
- **state**: `active` / `inactive` / `slot`
- **type**: `vertical` / `horizontal`

### Variant IDs
| state \\ size \\ type | md-vertical | md-horizontal | sm-vertical | sm-horizontal |
|---|---|---|---|---|
| active | `671:38859` | `671:38862` | `671:38871` | `671:38874` |
| inactive | `671:38865` | `671:38868` | `671:38877` | `671:38880` |
| slot | `732:36454` | `4000:13623` | `4000:13621` | `4000:13625` |

### 크기
- md: 189 × 48 (active/inactive) / 189 × 40 (slot)
- sm: 189 × 44 (active/inactive) / 189 × 40 (slot)

## Sub-component — `🌵progress_slot` (2 variants)

set ID: `3962:92518`. step 외곽 슬롯 컨테이너.

| Property 1 | variant ID | 크기 |
|---|---|---|
| horizontal | `3962:91625` | 104 × 72 |
| vertical | `3962:92519` | 104 × 72 |

> 전용 컨테이너 — 다중 step 인스턴스를 가로/세로로 배치할 때 슬롯 가이드.

## Anatomy

### Horizontal stepper
```
[●─────][○─────][○─────]
 active  inact   inact
 Step 1  Step 2  Step 3
```
- dot/circle (Progress Tracker) + line (track line) + label (step text)
- step=start: 좌측 (앞에 line 없음)
- step=middle: 중간 (앞뒤 모두 line)
- step=end: 우측 (뒤에 line 없음)
- state=current: 채워진 dot (검정)
- state=complete: 체크 dot (검정 + 체크 아이콘)
- state=incomplete: 빈 dot (회색 외곽)

### Vertical stepper
```
●  Step 1 (active)
│
○  Step 2 (inactive)
│
○  Step 3 (inactive)
```
- horizontal과 동일 구조, 90° 회전
- vertical은 좌측에 dot+line, 우측에 텍스트

## Variants 요약

- **stepper size**: md / sm
- **stepper step**: start / middle / end
- **stepper state**: incomplete / current / complete
- **stepper layout**: vertical / horizontal
- **stepper style**: line / dash

- **tracker state**: incomplete / current / complete
- **tracker type**: Default / icon

- **track line state**: active / inactive / none
- **track line type**: vertical / horizontal
- **track line style**: line / dash

- **step text size**: md / sm
- **step text state**: active / inactive / slot
- **step text type**: vertical / horizontal

## Usage Notes

- variant 매칭 verbatim:
  - `state=incomplete` / `current` / `complete` (atom·module)
  - `state=active` / `inactive` / `none` (track line — atom과 다름!)
  - `state=active` / `inactive` / `slot` (step text — slot은 placeholder 콘텐츠)
  - `step=start`, `step=middle`, `step=end` (시퀀스 위치)
  - `style=line` (실선) / `style=dash` (점선)
  - `type=Default` (대문자 D) / `type=icon` (Progress Tracker)
- atom과 module 차이:
  - **atom**: 단일 step 시각 요소만 (dot + line)
  - **module**: dot + line + 텍스트 통합 (실제 사용은 module 권장)
- 시퀀스 조립:
  - 좌측/상단부터 `step=start` → `step=middle × N` → `step=end`
  - 각 step의 state는 사용자 진행 상태 따라 설정
- bar/circle과 색상이 다름: bar=blue / circle=orange / **stepper=neutral dark gray** (`#1d1d1d`)
- style=dash는 미확정/조건부 단계 표시 (실선=확정, 점선=미확정)
- horizontal layout은 가로 wizard (예: 회원가입 4단계)
- vertical layout은 세로 timeline (예: 주문 처리 단계)
- step text의 `slot` state는 placeholder — 실제 콘텐츠 주입용
- `track line state=none`은 시각적 line 미표시 (start의 앞, end의 뒤에 사용)
- icon type tracker (Progress Tracker)는 체크 마크/숫자 등 커스텀 콘텐츠
