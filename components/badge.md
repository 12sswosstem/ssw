# Badge

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `671:30059` `badge_v0.22` (production component)
> - atom set: `671:29566` `badges_v0.22_atom` (~70 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:83679` (가이드 페이지 — 세션 만료로 일부 미회수)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#badge`, `tokens/number/component.js#badge`.
> 토큰 prefix: `badge/*`.

## Overview
- 아이콘/카운트/상태 표시용 작은 라벨 (요소 우상단 overlay 또는 inline)
- 모드: **light** (production 노드 기준; figma-export.json에 dark도 일부 정의)
- 컴포넌트 셋: `badges_v0.22_atom` (key `3664bb6eb310be08681f5876b31f582729a096d9`)

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

## Position (가이드 페이지 `1:83931` verbatim)

> 배지는 1의 자리와 10의 자리, 100의 자리, 최대 자리수에 따라 배지의 위치가 달라집니다.
> 버튼과 텍스트의 경우 요소의 우측 상단에 고정되며 왼쪽으로 자리수가 늘어나게 됩니다.
> 아이콘일 경우 중앙을 기준으로 자리수가 늘어나게 됩니다.
>
> \*예외적으로 아이콘이나 컨텐츠에 따라 별도의 위치가 지정될 수 있습니다.

### 핵심 규칙

| 호스트 타입 | 기준점 | 자리수 증가 시 확장 방향 |
|---|---|---|
| 버튼 / 텍스트 | 요소의 **우측 상단** 고정 | 왼쪽으로 늘어남 |
| 아이콘 | **중앙** 기준 (가운데 위쪽) | 양쪽(좌우)으로 늘어남 |

### 시각 예시 (가이드 페이지 4 행 verbatim)

1. **Button row** (4 단계 자리수 시연): `Button + 9` / `Button + 99` / `Button + 999` / `Button + 999+` — 우측 상단 고정, 왼쪽으로 확장
2. **Tab navigation row**: `홈+99+` / `구독+99` / `이웃+9` / `인기글+dot` / `내소식+dot` / `채팅` — 탭 라벨 우측 상단
3. **Icon row** (4 단계 자리수 시연): 말풍선+`9` / 슬라이더+`90` / 메일+`900+` / 명함+`dot` — 아이콘 중앙 기준
4. **GNB row**: 마이크(no badge, active) / 카메라+`dot` / 홈+`N` / 폴더+`50` / 사진+`999+` — 하단 nav 아이콘별 다양한 자리수

> 자리수가 늘어나면 button/text에서는 왼쪽 인접 콘텐츠를 침범할 수 있으나 아이콘에서는 좌우 대칭으로 펼쳐짐 — 두 호스트 타입의 본질적 anchor 차이.

## Use case (가이드 페이지 `1:84012` verbatim)

> 숫자 배지는 신규 또는 업데이트된 항목의 개수를 알수 있고 사용자가 정확한 업데이트 횟수를 파악하는 것이 중요할 때 사용됩니다. 이 배지는 최대 세 자리 숫자로 구성되며, 그 이상의 개수가 카운트 될때 마지막 자리는 더하기 기호로 표시됩니다.
>
> **숫자 배지는 큰 아이콘 버튼 (48px)과 함께만 사용할 수 있습니다.**
>
> 점 배지는 새 알림이 있지만 정확한 알림 개수가 사용자에게 알려지지 않았거나 중요하지 않은 경우에 사용됩니다. 이 점 배지는 숫자 배지보다 눈에 띄지 않지만 아이콘 버튼으로 사용자의 주의를 효과적으로 끌어당기는 역할을 합니다. 툴바의 아이콘 버튼에서 흔히 볼수 있습니다.
>
> 점 배지의 경우 대부분의 경우 사용자가 확인 또는 한번 클릭 이후에는 미노출상태로 변경됩니다.
> 단발성이 아닌 신규 서비스 런칭 등 일정기간 동안 알림이 노출되어야 할때는 해당 서비스 진입 이후에도 정해진 기간 동안 지속적으로 노출 됩니다.

### Number badge 규칙 정리

- **용도**: 신규/업데이트된 항목 개수를 정확히 알려야 할 때
- **최대 자리수**: 3 (그 이상은 마지막 자리를 `+`로 표시 → `999+`)
- **호스트 제약**: **큰 아이콘 버튼(48px)과 함께만** 사용 (그 외 아이콘 사이즈에는 number badge 부착 금지)

### Dot badge 규칙 정리

- **용도**: 새 알림이 있지만 개수가 알려지지 않았거나 중요도가 낮을 때
- **시각**: number보다 눈에 덜 띄지만 아이콘 버튼에서 사용자 주의 환기 역할
- **흔한 위치**: 툴바의 아이콘 버튼
- **소멸 규칙**:
  - 일반 dot: 사용자가 확인 / 한번 클릭 이후 미노출로 변경
  - 신규 서비스 런칭 등 기간성 알림: 해당 서비스 진입 이후에도 정해진 기간 지속 노출

### 시각 예시 (가이드 페이지 verbatim)

가이드 페이지에 등장하는 실제 사용 화면:

1. **Number 4단계 + dot 시연**: 말풍선 아이콘 + (`9` / `99` / `999` / `999+`) accent + 우측에 dot 단독 1개
2. **"읽기 전" vs "읽은 후"**: 읽기 전 행 = 좌측에 작은 빨간 dot + 텍스트 / 읽은 후 행 = dot 없음
3. **채팅 메시지 카드**: avatar + 메시지 본문 + 우측에 number `9` (accent)
4. **Inbox 메뉴 행**: 메일 아이콘 + "Inbox" + 우측에 number `9` (neutral 검정 배경)
5. **모터 설정 행**: "속도 / 거리 `9` ›" — inline trailing badge + chevron
6. **챗방 행**: avatar(SS 이니셜) + "서울하이안치과" + dot 부착 + 즐겨찾기 별 + 시간
7. **메뉴 row 6 시연**: 동일 4메뉴(접수/통계/히포챗/지원)에 자리수만 다름 — `999+` / `99` / `9` / `dot` / `inline 9` / `inline only`

> **금지 패턴 (가이드 verbatim 외 운영 원칙)**:
> 1. 일반 버튼(20~40px) + number badge — 가이드 명시 위반
> 2. dot badge가 클릭 후에도 영구 잔존 — UX 원칙 위반 (기간성 예외 제외)
> 3. avatar `xs_24`에 badge — 가독성 부족 (avatar `sm_32` 이상 권장)

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
