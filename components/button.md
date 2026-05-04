# Button

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / node `1058:185800` (production component, variable_defs)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`
>   - node `1:272462` — Button preview page (variable_defs)
>   - node `1:273388` — `Button use it` 가이드 페이지 (sparse metadata)
>   - node `1:274092` — `Icon button use it` 가이드 페이지 (sparse metadata)
> - `figma-export.json` (2026-05-04 export) — light/dark 양쪽 모드 참조용
>
> JS 토큰: `tokens/color/component.js#button`, `tokens/number/component.js#button`.

## Overview
- 토큰 prefix: `button/*`
- 모드: **light · dark** (light 값은 production 노드 변수 해석값 기준)
- 가이드 페이지의 인스턴스 이름은 `button_beta_v0.22_test` (현재 릴리즈에서 평가/테스트 중인 베타)
- 사이즈: 9단계 — xxs(20) / xs(24) / sm(28) / md(32) / lg(40) / xl(48) / 2xl(64) / 3xl(80) / 4xl(96)

## Number tokens (Mode 1)

> production variable_defs 기준. sm은 일부 슬라이스에서 누락이라 **(추정)** 표기.

| size | height | h-padding | text-padding | corner radius | border |
|---|---|---|---|---|---|
| xxs | 20 | 4 | 4 | 4 | 1 |
| xs | 24 | 6 | 4 | 4 | 1 |
| sm | 28 | 8 *(추정)* | 4 *(추정)* | 4 | 1 |
| md | 32 | 8 | 4 | 6 | 1 |
| lg | 40 | 12 | 4 | 6 | 1 |
| xl | 48 | 12 | 8 | 8 | 1.5 |
| 2xl | 64 | 16 | 8 | 8 | 2 |
| 3xl | 80 | 24 | 8 | 12 | 2.5 |
| 4xl | 96 | 24 | 8 | 14 | 3 |

- `corner radius/2xl 2` = **10** (2xl의 별도 변형 — 둥글기 약화 옵션)
- **h-padding** = 컨테이너 좌우 패딩 (외부)
- **text-padding** = 텍스트 컨테이너 내부 패딩 (라벨/아이콘 사이 갭)

## Color tokens

> Light는 production 노드(`1058:185800` · `1:272462`) variable_defs로 해석된 실제 값.
> Dark는 `figma-export.json` Color_component 기준 (별도 production 검증 미수행).

### bg
| token | light | dark |
|---|---|---|
| `bg/brand-primary` | `#eb6100` | (figma-export 미정의) |
| `bg/brand-secondary` | `#ffffff` | `#0e0e0e` |
| `bg/brand-tertiary` | `#fbdfcc` *(또는 `#f7c099`)* | (미정의) |
| `bg/neutral-primary` | `#2b2b2b` | `#bcbcbc` |
| `bg/neutral-secondary` | `#ffffff` | `#f4f4f4` |
| `bg/neutral-tertiary` | `#e9e9e9` *(또는 `#ffffff`)* | `#eeeeee` |
| `bg/destructive-primary` | `#f03823` | (미정의) |
| `bg/destructive-secondary` | `#ffffff00` (transparent) | `rgba(255,255,255,0)` |
| `bg/text` | `#ffffff00` (transparent) | (미정의) |
| `bg/subtle` | `#ffffff00` (transparent) | `rgba(255,255,255,0)` |
| `bg/disabled` | `#bcbcbc` | (미정의) |
| `bg/disabled-gray` | `#bcbcbc` | `#f4f4f4` |
| `bg/disabled-inactive` | `#8f8f8f` | `#bcbcbc` |

> bg/brand-tertiary, bg/neutral-tertiary는 두 production 노드 간 값 차이 존재 — 모드/컨테이너 바인딩 차이로 추정. UI 적용 시 실제 노드 컨텍스트 확인.

### fg (label · icon)
| token | light | dark |
|---|---|---|
| `fg/brand-primary` | `#f9f9f9` *(또는 `#ffffff`)* | `#0e0e0e` |
| `fg/brand-secondary` | `#eb6100` | (미정의) |
| `fg/brand-tertiary` | `#eb6100` | (미정의) |
| `fg/neutral-primary` | `#f9f9f9` *(또는 `#ffffff`)* | `#000000` |
| `fg/neutral-secondary` | `#565656` | `#8f8f8f` |
| `fg/neutral-tertiary` | `#565656` *(또는 `#505050`)* | `#0e0e0e` |
| `fg/destructive-primary` | `#f9f9f9` *(또는 `#ffffff`)* | `#0e0e0e` |
| `fg/destructive-secondary` | `#f03823` | (미정의) |
| `fg/text` | `#606881` | (미정의) |
| `fg/subtle` | `#565656` | `#8f8f8f` |
| `fg/disabled` | `#a5a5a5` | (미정의) |
| `fg/disabled-gray` | `#a5a5a5` | `#e9e9e9` |
| `fg/disabled-inactive` | `#a5a5a5` | `#bcbcbc` |

### border
| token | light | dark |
|---|---|---|
| `border/brand-primary` | `#eb6100` | (미정의) |
| `border/brand-secondary` | `#727272` | `#dddddd` |
| `border/brand-tertiary` | `#ffffff00` (transparent) | `#a5a5a5` |
| `border/neutral-primary` | `#2b2b2b` | `#bcbcbc` |
| `border/neutral-secondary` | `#a5a5a5` | `#dddddd` |
| `border/neutral-tertiary` | `#a5a5a5` *(또는 `#c6c6c6`)* | `#dddddd` |
| `border/destructive-primary` | `#f03823` | (미정의) |
| `border/destructive-secondary` | `#f03823` | (미정의) |
| `border/text` | `#373d4c00` (transparent) | (미정의) |
| `border/subtle` | `#373d4c00` (transparent) | `rgba(55,61,76,0)` |
| `border/disabled` | `#bcbcbc` | (미정의) |
| `border/disabled-gray` | `#a5a5a5` | `#f4f4f4` |
| `border/disabled-inactive` | `#8f8f8f` | `#8f8f8f` |

### icon (figma-export.json 기준)
| token | light | dark |
|---|---|---|
| `icon/neutral` | `#bcbcbc` | `#8f8f8f` |
| `icon/dark` | `#0e0e0e` | `#f4f4f4` |
| `icon/invert` | `#0e0e0e` | `#e9e9e9` |
| `icon/disabled-inactive` | `#a5a5a5` | `#bcbcbc` |
| `icon/disabled-gray` | `#393939` | `#bcbcbc` |

### common (state overlay · focus ring)
| token | light | dark |
|---|---|---|
| `common/default` | `#00000000` (transparent) | `rgba(0,0,0,0)` |
| `common/hover` | `#0000000d` (~5% black) | `rgba(0,0,0,0.05)` |
| `common/pressed` | `#0000001a` (~10% black) | `rgba(0,0,0,0.15)` |
| `common/hover-neutral` | `#ffffff0d` (~5% white) | `rgba(59,99,251,0.1)` |
| `common/pressed-neutral` | `#ffffff1a` (~10% white) | `rgba(59,99,251,0.2)` |
| `common/selected` | `rgba(59,99,251,0.2)` | `rgba(59,99,251,0.2)` |
| `common/focus-ring` | `#000000` | (미정의) |
| `common/focus-ring 2` | `#fefefe` (또는 `#020202`) | `#f9f9f9` |

> focus는 외부 ring 2.5px(black) + 내부 ring 2.5px(white)의 이중 링 패턴. `focus-ring`은 외부, `focus-ring 2`는 내부.

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| xxs | `button/xxs (SB)` | Pretendard 600 / 12 / 16 |
| xs | `button/xs (SB)` | Pretendard 600 / 14 / 20 |
| sm | `button/sm (SB)` | Pretendard 600 / 14 / 20 |
| md | `button/md (SB)` | Pretendard 600 / 16 / 24 |
| lg | `button/lg (SB)` | Pretendard 600 / 16 / 24 |
| xl | `button/xl (SB)` | Pretendard 600 / 18 / 24 |
| 2xl | `button/2xl (SB)` | Pretendard 600 / 24 / 30 |
| 3xl | `button/3xl (SB)` | Pretendard 600 / 28 / 36 |
| 4xl | `button/4xl (SB)` | Pretendard 600 / 32 / 40 |

> 가이드 페이지에서 추가 발견: `v0.3 (test)/button/4xl`(line-height=1, 비표준), `v0.4/button/*` 시리즈(현행).

## Style 9가지 (가이드 컬럼 verbatim)

| # | style | 비고 |
|---|---|---|
| 1 | `brand-primary` | 브랜드 강조 (orange #eb6100) |
| 2 | `brand-secondary` | 브랜드 보조 (white bg + orange text) |
| 3 | `brand-tertiary` | 브랜드 약함 (light orange bg) |
| 4 | `neutral-primary` | 기본 강조 (dark bg + white text) |
| 5 | `neutral-secondary` | 기본 보조 (white bg + gray border) |
| 6 | `neutral-tertiary` | 기본 약함 (light gray bg) |
| 7 | **`text`** | 텍스트 전용 (transparent bg/border, gray text · `#606881`) — 이전 메모리의 *ghost*와 동일 영역 |
| 8 | **`distructive-primary`** | ⚠️ Figma 원본 오타 (`destructive` 아님) — 빨강 강조 |
| 9 | **`distructive-secondary`** | ⚠️ Figma 원본 오타 — 빨강 보조 (transparent bg) |

> **오타 보존 주의**: variant prop 매칭/instance override 시 `distructive`로 호출해야 매칭된다 (Tab의 `indicatior_position`, Reservation Card의 `stae`/`defalut`와 동일 패턴).

## State 6단계 (가이드 행 라벨 verbatim)

| # | state | 트리거 | 시각 |
|---|---|---|---|
| 1 | `Default` | 평상시 | base 색 |
| 2 | `Hover` | 마우스 위에 | `common/hover` 또는 `common/hover-neutral` 알파 합성 |
| 3 | `Pressed` | 클릭 중 | `common/pressed` 또는 `common/pressed-neutral` 알파 합성 |
| 4 | `Focused` | 키보드 focus | `common/focus-ring` 외부 + `common/focus-ring 2` 내부 이중 링 |
| 5 | `Disabled-1` | 읽기 전용 비활성 (회색 톤 약함) | `bg/disabled-inactive` 계열 |
| 6 | `Disabled-2` | 완전 비활성 (회색 톤 강함) | `bg/disabled-gray` 또는 `bg/disabled` |

> Loading state는 별도 `state=Loading` variant로 처리 (가이드 6열에는 미포함).

## Variants / Layout

- **layout**: `icon labeled` / `icon only` / `text only` (+ Icon First / Icon Last)
- **type**: `hug` (기본)
- **selected**: `common/selected` 알파(브랜드 블루 20%)로 활성 표시 가능

## Icon Button (별도 가이드)

> `1:274092` Icon button use it 페이지 — Button과 별개 매트릭스로 문서화.

- 9 size × 9 style × 6 state 매트릭스 (Button과 동일 골격)
- **icon-only 정사각**: 20 × 20, 24 × 24, 28 × 28, 32 × 32, 40 × 40, 48 × 48, 64 × 64, 80 × 80, 96 × 96
- 라벨 없이 아이콘 1개만 — 접근성을 위해 `aria-label` 또는 tooltip 필수
- variant 매칭 시 `layout=icon only`로 호출하면 Button set에서 직접 가져올 수 있음

## Usage Notes

- 본 프로젝트에서는 **neutral 톤만 사용** (brand 톤은 사용자 명시 지시 시에만)
- 한 화면에 `*-primary` 1개만 (위계: primary → secondary → tertiary → text)
- `common/*` 오버레이는 state별로 base 위에 알파 합성 (default 위에 hover/pressed 알파 깔기)
- focused는 외부(`focus-ring`) + 내부(`focus-ring 2`) 이중 링 — 단일 ring 금지
- disabled 토큰 3종 공존:
  - `disabled` (단순)
  - `disabled-gray` (완전 비활성)
  - `disabled-inactive` (읽기 전용 느낌)
  → 호환성을 위해 모두 정의되어 있고, 신규 화면은 `disabled-gray` 권장
- variant/instance API 호출 시 `distructive-*` 오타를 그대로 사용
- 라벨은 Sentence case (한국어/영문 모두 첫글자만 대문자)
