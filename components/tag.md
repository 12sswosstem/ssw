# Tag

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `2879:127689` `Tag` (mode test 컨테이너 — 다크 모드 검증)
>   - `2631:14801` `Tag` (실제 컴포넌트 셋 — **108 variants**, 3축)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:262662`, `1:263377` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#tag`, `tokens/number/component.js#tag`.
> 토큰 prefix: `tag/*`.

## Overview
- 작은 라벨 컴포넌트 (필터·태그·상태 표시 등)
- 모드: **light · dark** (production 노드는 dark 모드 검증, 가이드 노드는 light 기준)
- 컴포넌트 셋: `Tag` (`2631:14801`) — 108 variants
- atom only — 텍스트 단일 슬롯, 아이콘 슬롯 없음

## Number tokens (Mode 1)

### height (px)
| size | token | height |
|---|---|---|
| xs | `tag/height/xs` | 18 |
| sm | `tag/height/sm` | 20 |
| md | `tag/height/md` | 24 |

### padding · radius
| token | px |
|---|---|
| `tag/padding/xs` | 6 |
| `tag/padding/md` | 10 |
| `tag/radius/xs` | 2 |

> `tag/padding/sm`은 production variable_defs에 미노출. 통상 `tag/padding/xs`(6) 또는 `padding/md`(10) 보간 사용.

## Variants — 3축 (verbatim)

### prop verbatim
- **type**: `weak` / `neutral` / `outline` / `solid` (4가지 — 이전 표기 `subtle/mono/outline/filled`에서 변경)
- **color**: `red` / `orange` / `yellow` / `green` / `blue` / `turquoise` / `magenta` / **`indigo`** / `gray` (**9가지** — indigo 신규)
- **size**: `xs` (18) / `sm` (20) / `md` (24)

총 4 × 9 × 3 = **108 variants**

### type 이름 변경 (이전 → 현재)
| 이전 | 현재 |
|---|---|
| `subtle` | **`weak`** |
| `mono` | **`neutral`** |
| `outline` | `outline` (동일) |
| `filled` | **`solid`** |

### type별 시각

| type | bg | text/border | 용도 |
|---|---|---|---|
| `weak` | light tint (`tag/bg/{color}`) | accent text | 가장 약한 강조 (배경 위에 떠있는 라벨) |
| `neutral` | tint bg | gray text + 가독성 | 색상 의미 없을 때 (검정 텍스트) |
| `outline` | transparent | border + text accent | 외곽선만 강조 (배경 그대로) |
| `solid` | accent (`tag/accent/{color}`) | white text | 가장 강한 강조 (color 칠) |

## Color tokens

### Light mode (UI-Kit-Guide 기준)

| color | bg (`tag/bg/{color}`) | accent (`tag/accent/{color}`) |
|---|---|---|
| red | `#ffebe8` | `#d73220` |
| orange | `#fdefe5` | `#eb6100` |
| yellow | `#fff8cc` | `#f5c700` (light) / `#d29500` (dark) |
| green | `#d7f7e1` | `#05834e` |
| blue | `#e5f0fe` | `#3b63fb` |
| turquoise | `#d1f5f5` | `#087e89` |
| magenta | `#ffe8f0` | `#d92361` |
| **indigo** (NEW) | `#ebeeff` | `#7155fa` |
| gray | `#dddddd` | `#565656` |
| black | — | `#000000` |
| white | — | `#ffffff` |

### Dark mode (production 노드 `2879:127689` 기준)

| color | bg | accent |
|---|---|---|
| red | `#501006` | `#ff513d` |
| orange | `#471d00` | `#ef8133` |
| yellow | `#4b2f00` | `#e6af00` |
| green | `#002e22` | `#0ba45d` |
| blue | `#0c1f69` | `#5d89ff` |
| turquoise | `#002e28` | `#0c9eab` |
| magenta | `#880033` | `#ff709f` |
| indigo | `#2a0081` | `#8480fe` |
| gray | `#565656` | `#bcbcbc` |

### 특수 토큰
| token | 값 |
|---|---|
| `tag/accent/black` | `#000000` (light) / `#ffffff` (dark) |
| `tag/accent/white` | `#ffffff` (light) / `#000000` (dark) |
| `tag/accent/black_for cautuion` | `#000000` (오타 보존, `cautuion` = `caution`) |

> `yellow_dark` 토큰: light=`#d29500` / dark=`#e6af00` — yellow의 어두운 변형 (대비 강화 시).

## Variant IDs

### size=xs (18h)

| color \\ type | weak | neutral | outline | solid |
|---|---|---|---|---|
| red | `2631:14800` | `2680:67467` | `2680:67664` | `2680:67643` |
| orange | `2680:66943` | `2680:67469` | `2680:67666` | `2680:67645` |
| yellow | `2680:67153` | `2680:67471` | `2680:67668` | `2680:67647` |
| green | `2680:67155` | `2680:67473` | `2680:67670` | `2680:67649` |
| blue | `2680:67157` | `2680:67475` | `2680:67672` | `2680:67651` |
| turquoise | `2680:67159` | `2680:67477` | `2680:67674` | `2680:67653` |
| magenta | `2680:67161` | `2680:67479` | `2680:67676` | `2680:67655` |
| indigo | `4008:16240` | `4008:16252` | `4008:16246` | `4008:16258` |
| gray | `2680:67163` | `2680:67481` | `2680:67678` | `2680:67657` |

### size=sm (20h)

| color \\ type | weak | neutral | outline | solid |
|---|---|---|---|---|
| red | `2680:87372` | `2680:87376` | `2680:87374` | `2680:87378` |
| orange | `2680:87380` | `2680:87384` | `2680:87382` | `2680:87386` |
| yellow | `2680:87388` | `2680:87392` | `2680:87390` | `2680:87394` |
| green | `2680:87396` | `2680:87400` | `2680:87398` | `2680:87402` |
| blue | `2680:87404` | `2680:87408` | `2680:87406` | `2680:87410` |
| turquoise | `2680:87412` | `2680:87416` | `2680:87414` | `2680:87418` |
| magenta | `2680:87420` | `2680:87424` | `2680:87422` | `2680:87426` |
| indigo | `4008:16242` | `4008:16254` | `4008:16248` | `4008:16260` |
| gray | `2680:87428` | `2680:87432` | `2680:87430` | `2680:87434` |

### size=md (24h)

| color \\ type | weak | neutral | outline | solid |
|---|---|---|---|---|
| red | `2714:8445` | `2714:8449` | `2714:8447` | `2714:8451` |
| orange | `2714:8453` | `2714:8457` | `2714:8455` | `2714:8459` |
| yellow | `2714:8461` | `2714:8465` | `2714:8463` | `2714:8467` |
| green | `2714:8469` | `2714:8473` | `2714:8471` | `2714:8475` |
| blue | `2714:8477` | `2714:8481` | `2714:8479` | `2714:8483` |
| turquoise | `2714:8485` | `2714:8489` | `2714:8487` | `2714:8491` |
| magenta | `2714:8493` | `2714:8497` | `2714:8495` | `2714:8499` |
| indigo | `4008:16244` | `4008:16256` | `4008:16250` | `4008:16262` |
| gray | `2714:8501` | `2714:8505` | `2714:8503` | `2714:8507` |

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| xs / sm / md | `body/xxs (M)` | Pretendard 500 / 12 / 14 |

> 모든 사이즈에서 동일 폰트 (12px Medium) — 사이즈는 height/padding로만 조정.

## Anatomy

```
┌──── tag (radius=2) ────┐
│  Tag label             │  ← height: xs=18 / sm=20 / md=24
└─ padding=6/10 ─────────┘     padding 좌우, type별 bg/border/text 조합
```

### type별 anatomy

#### weak (`tag/bg/{color}` + `tag/accent/{color}` text)
```
[ ░░ Label ░░ ]   ← 옅은 색 배경 + 진한 색 텍스트
```

#### neutral (gray 톤)
```
[ ▓▓ Label ▓▓ ]   ← 회색 배경 + 검정 텍스트 (color 의미 약함)
```

#### outline (transparent + border)
```
[╌╌ Label ╌╌]    ← border만 + accent 색 텍스트 (배경 위)
```

#### solid (가장 강한 강조)
```
[██ Label ██]    ← accent 색 가득 + 흰 텍스트
```

## Usage Notes

- variant 매칭 verbatim:
  - `type=weak` (이전 `subtle` 아님)
  - `type=neutral` (이전 `mono` 아님)
  - `type=outline` (동일)
  - `type=solid` (이전 `filled` 아님)
  - `color=indigo` (NEW — 추가됨)
  - `size=xs` / `sm` / `md` (단순)
- 9 colors:
  - 의미 매핑 권장:
    - red: 오류·삭제 (destructive)
    - orange: 강조·brand
    - yellow: 주의·경고
    - green: 성공·완료
    - blue: 정보·기본
    - turquoise: 의료·과학 (PMS 컨텍스트)
    - magenta: 특별·이벤트
    - **indigo: 추가 강조 (보라 톤, NEW)**
    - gray: 중립·미분류
- yellow의 `accent`: light `#f5c700`(밝은) / `accent/yellow_dark`: `#d29500`(어두운) — 대비 강화 시 yellow_dark 사용
- `accent/black_for cautuion` 토큰 (Figma 오타 `cautuion` 보존) — yellow solid 위 검정 텍스트용 (가독성)
- light 모드 bg는 매우 옅은 tint, dark 모드는 매우 진한 deep 색 (반전)
- accent는 mid-tone (light/dark 모두 가독성 좋은 색)
- `weak`이 가장 흔한 사용 — 가벼운 메타 표시 (예: "신규", "Beta", "긴급")
- `solid`는 강조 필요 시 (예: 적극적 알림, 핵심 카테고리)
- `outline`은 배경이 다양할 때 (border만 사용)
- `neutral`은 색상 의미가 약할 때 (단순 카운트, 라벨)
- 일관성: 한 화면에 너무 많은 색상 섞지 않기 (3~4 색 이내 권장)
- 아이콘 슬롯 없음 — 텍스트 단일 (아이콘 필요 시 별도 wrapper 또는 chip 컴포넌트 사용)
