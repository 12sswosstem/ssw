# Badge

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `671:30059` `✅badge_v0.22` (production component)
> - atom set: `671:29566` `✅badges_v0.22_atom` (~70 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:83679` (가이드 페이지 — 세션 만료로 일부 미회수)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#badge`, `tokens/number/component.js#badge`.
> 토큰 prefix: `badge/*`.

## Overview
- 아이콘/카운트/상태 표시용 작은 라벨 (요소 우상단 overlay 또는 inline)
- 모드: **light** (production 노드 기준; figma-export.json에 dark도 일부 정의)
- 컴포넌트 셋: `✅badges_v0.22_atom` (key `3664bb6eb310be08681f5876b31f582729a096d9`)

## Number tokens (Mode 1)

| size | container | dot | icon | text | border |
|---|---|---|---|---|---|
| xs | 14 | 4 | 10 | 10 | 1 |
| sm | 18 | 6 | 10 | 12 | 1.35 |
| md | 24 | 8 | 14 | 16 | 1.8 |
| lg | 32 | 10 | 20 | 18 | 2.4 |
| xl | 40 | 12 | 24 | 24 | 3 |

> `number long`/`text` 폭은 컨테이너보다 길게 표시: xl=85·78 / lg=65.2·60.2 / md=55.4·50.4 / sm=41.8·37.8 / xs=36.8·33.8

## Color tokens (production variable_defs 기준)

| token | light | 비고 |
|---|---|---|
| `badge/border` | `#ffffff` | 외곽 ring (border boolean=true 시) |
| `badge/neutral-bg` | `#1d1d1d` | color=neutral 배경 (dark gray) |
| `badge/accent-bg` | `#f03823` | color=accent 배경 (red — alert) |
| `badge/icon-invert` | `#ffffff` | 아이콘/텍스트 fg (흰색) |

### figma-export.json 추가 토큰 (검증 미완)
| token | light | dark |
|---|---|---|
| `badge/icon-default` | `#dddddd` | `#bcbcbc` |
| `badge/icon-invert` | `#000000` | `#f4f4f4` |

> production 변수 해석값과 figma-export.json 사이 일부 차이 존재 (mode 바인딩 변경 가능성). 신뢰 우선순위: production variable_defs.

## Variants — 4축

verbatim prop 이름:
- **type**: `number` / `number long` / `new` / `icon` / `text` / `dot-new` (6가지 — `dot` 아님!)
- **size**: `xs` / `sm` / `md` / `lg` / `xl` (5단계)
- **color**: `neutral` / `accent` (2가지 — 색상명 아님!)
- **max number (999+)**: `false` / `true` (괄호+`+` 포함 — `number long`에만 의미 있음)

조합 수: number/new/icon/text/dot-new × size × color × 1 = 50 + number long × size × color × 2 = 20 = **70 variants**

## Variant IDs (size × type × color)

### color=neutral
| size \\ type | number | number long | new | icon | text | dot-new |
|---|---|---|---|---|---|---|
| xs | `3830:5975` | `3830:5984` | `3830:5978` | `3830:5981` | `3830:5987` | `3830:6008` |
| sm | `671:29631` | `671:29691` | `671:29643` | `671:29663` | `671:29703` | `3755:33203` |
| md | `671:29627` | `671:29687` | `671:29639` | `671:29651` | `671:29699` | `3755:33202` |
| lg | `671:29629` | `671:29689` | `671:29641` | `671:29657` | `671:29701` | `3755:33201` |
| xl | `671:29567` | `671:29587` | `671:29571` | `671:29575` | `3755:38132` | `3755:33200` |

### color=accent
| size \\ type | number | number long | new | icon | text | dot-new |
|---|---|---|---|---|---|---|
| xs | `3830:5996` | `3830:5990` | `3830:5999` | `3830:6002` | `3830:5993` | `3830:6005` |
| sm | `671:29739` | `671:29715` | `671:29751` | `671:29771` | `671:29727` | `3755:33207` |
| md | `671:29735` | `671:29711` | `671:29747` | `671:29759` | `671:29723` | `3755:33206` |
| lg | `671:29737` | `671:29713` | `671:29749` | `671:29765` | `671:29725` | `3755:33205` |
| xl | `671:29603` | `671:29595` | `671:29607` | `671:29611` | `671:29599` | `3755:33204` |

> `number long` variants는 `max number (999+)=true` 기본 (다른 type은 `false`). max=false도 별도 존재 가능.

## Type 별 설명

| type | 용도 | 콘텐츠 |
|---|---|---|
| `number` | 알림 카운트 (1~99) | 정사각 cell + 숫자 텍스트 |
| `number long` | 99 초과 카운트 (99+) | 가로 길이 확장된 cell + "99+" 텍스트 |
| `new` | 신규 표시 | "N" 또는 "NEW" 텍스트 |
| `icon` | 아이콘 표시 (체크/경고/잠금 등) | 아이콘 단일 |
| `text` | 짧은 라벨 (HOT, BETA 등) | 텍스트 단일 |
| `dot-new` | 점 + 신규 (visual indicator) | 작은 dot + new 결합형 |

## Color 별 의미

| color | bg | 의미 |
|---|---|---|
| `neutral` | `#1d1d1d` (dark gray) | 일반 알림/카운트 |
| `accent` | `#f03823` (red) | 경고/긴급/오류 |

## Usage Notes

- variant 매칭 시 verbatim prop 이름 사용:
  - `"type=number long"` (공백 포함)
  - `"max number (999+)=true"` (괄호+`+` 포함 — 특수문자 escape 주의)
  - `"type=dot-new"` (`dot`이 아님!)
- avatar / icon button 우상단 overlay 패턴이 가장 흔함
- 99 초과는 `number long` + `max number (999+)=true`로 `99+` 표시
- `border` boolean true 시 외곽에 흰색 ring (`badge/border` `#ffffff`, size별 1~3px)
- `accent` color는 alert/error 한정 — 일반 알림은 `neutral`
- `dot-new`는 단순 dot 표시 + new 강조의 결합형 (`dot` 단독 type은 없음)
- 컴포넌트 set 이름이 v0.22 (이전 메모리는 v0.21로 표기 — 현행 v0.22 사용)
