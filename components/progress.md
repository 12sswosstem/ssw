# Progress

> 출처:
> **Bar**:
> - 공통 컴포넌트(Copy) file `lIIen1jmIhT0vuyXCMQDQA` / section `671:38020` `progress bar_v0.1`
>   - `671:38133` `bar_atom` (atom — 80 variants, 4축)
>   - `671:38059` `progress bar` (wrapper — 20 variants, 2축)
>   - `2241:20359` `progress bar module` (3 type)
>   - `671:38052` `text` (6 variants)
> - UI-Kit-Guide `ky00DVb1Q3RmiMlYWwdSGG` / `1:184225`
>
> **Circle**:
> - 공통 컴포넌트(Copy) / section `671:39499` `progress circle_v0.1`
>   - `671:39500` `circle_module` (5 variants — Property 1: icon/outer/inner/both/test)
>   - `671:39533` `Animated progress circle-v0.12` (60 variants — state×size×invert)
>   - `671:39827` `static progress circle` (~84 variants — Property 1×size×style)
> - UI-Kit-Guide / `1:186642`
>
> `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#progress`, `tokens/number/component.js#progress`.
> 토큰 prefix: `progress circle & bar/*` (공유), `progress bar/*`, `progress/*`.

## Overview
- 작업 진행률 표시 — **Bar** (수평/수직 막대) 또는 **Circle** (원형)
- 모드: **light** (production variable_defs 기준)
- 컴포넌트 계층:
  - **Bar**: atom (`bar_atom`) → wrapper (`progress bar`) → module (vertical/adjustable/inline)
  - **Circle**: animated (애니메이션 진행) / static (고정 % 단계) / module (icon/outer/inner/both)
- **active 색상 차이 주의**:
  - Bar: blue `#3b63fb` (`progress circle & bar/progress bar_active`)
  - Circle: orange `#eb6100` (`progress circle & bar/active-primary-brand`)
  - 둘은 같은 `progress circle & bar/*` namespace에서 다른 token 사용
- **Progress Stepper**(단계별 진행 표시)는 별도 문서: [`progress-stepper.md`](./progress-stepper.md) — bar/circle과 다른 컴포넌트군 (neutral dark gray 색상)

## Number tokens (Mode 1)

### bar height (px)
| size | token | height |
|---|---|---|
| xs | `progress bar/height_xs` | 2 |
| sm | `progress bar/height_sm` | 4 |
| md | `progress bar/height_md` | 8 |
| lg | `progress bar/height_lg` | 12 |

### bar corner radius
| shape | token | radius |
|---|---|---|
| pill | `progress bar/conrner radius_pill` | 99 |
| square | `progress bar/conrner radius_square` | 0 |

> 토큰 이름 `conrner`는 Figma 원본 오타 그대로 사용.

## Color tokens — production (light)

### bg / track
| token | light |
|---|---|
| `progress circle & bar/bg` | `#ffffff` |
| `progress circle & bar/rest-primary` | `#e1e1e199` (~60% alpha gray) |
| `progress circle & bar/rest-secondary` | `#e9e9e9` |
| `progress/bg-rest` | `#e1e1e1` (다른 namespace) |

### active (fill)
| token | light |
|---|---|
| `progress circle & bar/progress bar_active` | `#3b63fb` (blue — 기본 진행 색) |
| `alert/strong/success_positive` | `#05834e` (green — step=success) |

### text
| token | light |
|---|---|
| `progress circle & bar/text-main` | `#1d1d1d` |
| `progress circle & bar/text-sub` | `#565656` |

> **주요 변경**: 진행 바의 active 색은 **blue `#3b63fb`** (기본). 완료 강조는 **success green `#05834e`** (step=success). 이전 버전의 `active-primary-brand` orange는 별도 토큰 — 기본 동작 색은 blue.

## Bar — Atom Variants `bar_atom` (4축)

### prop verbatim
- **bar size**: `xs` (2h) / `sm` (4h) / `md` (8h) / `lg` (12h)
- **step**: `0` / `25` / `50` / `75` / `100` / `success` (determinate); `0` / `50` / `100` / `success` (indeterminate)
- **type**: `determinate` / `indeterminate`
- **style**: `rounded` / `square`

총 ~80 variants (determinate 6 step × 4 size × 2 style = 48 + indeterminate 4 step × 4 size × 2 style = 32).

### Variant IDs — `type=determinate, style=rounded`
| step \\ size | xs | sm | md | lg |
|---|---|---|---|---|
| 0 | `2253:30003` | `2253:29955` | `2253:29895` | `2253:29882` |
| 25 | `2253:30005` | `2253:29957` | `2253:29897` | `2253:29880` |
| 50 | `2253:30007` | `2253:29959` | `2253:29899` | `2253:29878` |
| 75 | `2253:30009` | `2253:29961` | `2253:29901` | `2253:29876` |
| 100 | `2253:30011` | `2253:29963` | `2253:29903` | `2253:29874` |
| success | `2253:30013` | `2253:29965` | `2253:29905` | `2253:29872` |

### Variant IDs — `type=determinate, style=square`
| step \\ size | xs | sm | md | lg |
|---|---|---|---|---|
| 0 | `2253:39064` | `2253:39040` | `2253:35883` | `2253:29881` |
| 25 | `2253:39066` | `2253:39042` | `2253:35885` | `2253:29879` |
| 50 | `2253:39068` | `2253:39044` | `2253:35887` | `2253:29877` |
| 75 | `2253:39070` | `2253:39046` | `2253:35889` | `2253:29875` |
| 100 | `2253:39072` | `2253:39048` | `2253:35891` | `2253:29873` |
| success | `2253:39074` | `2253:39050` | `2253:35893` | `2253:29871` |

### Variant IDs — `type=indeterminate, style=rounded`
| step \\ size | xs | sm | md | lg |
|---|---|---|---|---|
| 0 | `671:38246` | `671:38238` | `671:38230` | `671:38150` |
| 50 | `671:38270` | `671:38262` | `671:38254` | `671:38158` |
| 100 | `671:38294` | `671:38286` | `671:38278` | `671:38166` |
| success | `671:38318` | `671:38310` | `671:38302` | `671:38174` |

### Variant IDs — `type=indeterminate, style=square`
| step \\ size | xs | sm | md | lg |
|---|---|---|---|---|
| 0 | `671:38250` | `671:38242` | `671:38234` | `671:38154` |
| 50 | `671:38274` | `671:38266` | `671:38258` | `671:38162` |
| 100 | `671:38298` | `671:38290` | `671:38282` | `671:38170` |
| success | `671:38322` | `671:38314` | `671:38306` | `671:38178` |

## Bar — Wrapper Variants `progress bar` (2축)

### prop verbatim
- **type**: `label_value` / `indeterminate` / `full` / `full-h` / `horizontal`
- **size**: `default` / `wide` / `narrow` / `compact`

5 type × 4 size = 20 variants.

### Variant IDs
| type \\ size | default | wide | narrow | compact |
|---|---|---|---|---|
| label_value | `671:38060` | `671:38064` | `671:38068` | `671:38072` |
| indeterminate | `671:38076` | `671:38079` | `671:38082` | `671:38085` |
| full | `671:38088` | `671:38096` | `671:38105` | `671:38113` |
| full-h | `671:38092` | `671:38100` | `671:38109` | `671:38117` |
| horizontal | `671:38121` | `671:38124` | `671:38127` | `671:38130` |

### Wrapper size별 frame height
| size | type=full | type=horizontal/full-h | type=indeterminate/label_value |
|---|---|---|---|
| wide | 52 | 14 | 34 |
| default | 48 | 12~14 | 30 |
| narrow | 36 | 12 | 20 |
| compact | 34 | 12 | 18 |

## Bar — Module Variants `progress bar module`

| type | variant ID | 용도 |
|---|---|---|
| `vertical` | `2241:20358` | 세로 형태 progress (높이 기반) |
| `adjustable` | `2253:39286` | 사용자가 핸들로 조정 가능 (range slider 형태) |
| `inline` | `2241:23964` | 텍스트 옆 inline 표시 (작은 크기) |

별도 `adjustable bar` 컴포넌트: `2253:39295` (384×13)

## Bar — Text labels `text` (label/value)

| size | upper (label/title) | lower (value/desc) | font·size·lh |
|---|---|---|---|
| sm | `671:38056` | `2241:20323` | 12 / 12 |
| md | `671:38053` | `2241:20319` | 14 / 14 |
| lg | `2241:20332` | `2241:20335` | 19 / 19 |

## Anatomy

### Atom (bar_atom)
```
[━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━]  (track: rest-primary 60% alpha gray)
[████████████░░░░░░░░░░░░░░░░░░░]  (fill: progress bar_active blue, length = step%)
```
- height: size별 2/4/8/12
- radius: pill=99 (둥근 끝) / square=0 (각진 끝)
- determinate: step별 fill 길이 (0/25/50/75/100/success)
- indeterminate: 애니메이션으로 좌우 이동 (step은 의미 없는 단계)
- step=success: fill 색이 blue → green으로 전환

### Wrapper (progress bar)
```
[Label upper text]                          [Value upper]
[━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━]
[Label lower text]                          [Value lower]
```
- size별로 layout 조정: wide(상하 분리 풍부) → default → narrow → compact (압축)
- type=label_value: label + value 텍스트 동반
- type=indeterminate: 무한 로딩 (label은 표시되어도 value는 없음)
- type=full / full-h: 전체 화면용 (heroic)
- type=horizontal: 한 줄에 텍스트 + 바

---

## Circle — Module Variants `circle_module`

set ID: `671:39500`. `Property 1` 단일 prop.

| Property 1 | variant ID | 크기 | 용도 |
|---|---|---|---|
| `icon` | `671:39501` | 48×48 | 아이콘 형태 (작은 단독 표시) |
| `outer` | `671:39506` | 160×232 | 외부 ring 강조 (텍스트 + 외곽) |
| `inner` | `671:39515` | 160×160 | 내부 영역 강조 |
| `both` | `671:39524` | 160×200 | outer + inner 조합 |
| `test` | `4351:151031` | 160×200 | (검토용 — 일반 사용 비권장) |

## Circle — Animated `Animated progress circle-v0.12` (4축, 60 variants)

### prop verbatim

- **state**: `start` / `step1` / `step2` / `step3` / **`state4`** / `end` (총 6단계 — `state4`는 Figma 원본 오타, `step4` 아님)
- **size**: `xxs_20` / `xs_48` / `sm_64` / `md_96` / `lg_160` (5 사이즈, 동일 px)
- **type**: `animate` (단일 값)
- **invert**: `false` / `true`

총 6 × 5 × 1 × 2 = 60 variants.

### Variant IDs — `invert=false`
| state \\ size | xxs_20 | xs_48 | sm_64 | md_96 | lg_160 |
|---|---|---|---|---|---|
| start | `1142:147403` | `671:39534` | `671:39548` | `671:39562` | `671:39576` |
| step1 | `1142:147417` | `671:39590` | `671:39604` | `671:39618` | `671:39632` |
| step2 | `1142:147431` | `671:39646` | `671:39660` | `671:39674` | `671:39688` |
| step3 | `1142:147445` | `671:39702` | `671:39716` | `671:39730` | `671:39744` |
| state4 | `1142:147459` | `671:39758` | `671:39772` | `671:39786` | `671:39800` |
| end | `1142:147473` | `671:39814` | `671:39816` | `671:39818` | `671:39820` |

### Variant IDs — `invert=true`
| state \\ size | xxs_20 | xs_48 | sm_64 | md_96 | lg_160 |
|---|---|---|---|---|---|
| start | `3476:622` | `3476:608` | `3476:636` | `3476:650` | `3476:664` |
| step1 | `3476:692` | `3476:678` | `3476:706` | `3476:720` | `3476:734` |
| step2 | `3476:762` | `3476:748` | `3476:776` | `3476:790` | `3476:804` |
| step3 | `3476:832` | `3476:818` | `3476:846` | `3476:860` | `3476:874` |
| state4 | `3476:902` | `3476:888` | `3476:916` | `3476:930` | `3476:944` |
| end | `3476:960` | `3476:958` | `3476:962` | `3476:964` | `3476:966` |

## Circle — Static `static progress circle` (3축, ~84 variants)

### prop verbatim

- **Property 1** (step %): `0` / `10` / `20` / `30` / `40` / `50` / `60` / `70` / `80` / `90` / `100` / `end` (12 step — 10 단위)
- **size**: `sm` (48) / `md` (64) / `lg` (96) / `xl` (160) (4 사이즈 — animated와 매핑 다름)
- **style**: `Default` / `slim` / `slim-round` / `slim-round-22` (slim 계열은 **xl 전용**)

조합: Default × 4 size × 12 step = 48 + slim/slim-round/slim-round-22 × 1 size × 12 step = 36 → 총 84 variants.

> **size 매핑 차이**: animated의 xs_48 ↔ static의 sm(48), 이하 비슷하게 매핑된다 (size 명만 다름).

### Variant IDs — `style=Default`
| Property 1 \\ size | sm (48) | md (64) | lg (96) | xl (160) |
|---|---|---|---|---|
| 0 | `671:39828` | `671:39834` | `671:39840` | `671:39846` |
| 10 | `671:39852` | `671:39858` | `671:39864` | `671:39870` |
| 20 | `671:39876` | `671:39882` | `671:39888` | `671:39894` |
| 30 | `671:39900` | `671:39906` | `671:39912` | `671:39918` |
| 40 | `671:39924` | `671:39930` | `671:39936` | `671:39942` |
| 50 | `671:39948` | `671:39954` | `671:39960` | `671:39966` |
| 60 | `671:39972` | `671:39978` | `671:39984` | `671:39990` |
| 70 | `671:39996` | `671:40002` | `671:40008` | `671:40014` |
| 80 | `671:40044` | `671:40050` | `671:40056` | `671:40062` |
| 90 | `671:40020` | `671:40026` | `671:40032` | `671:40038` |
| 100 | `671:40068` | `671:40074` | `671:40080` | `671:40086` |
| end | `671:40092` | `671:40098` | `671:40104` | `671:40110` |

### Variant IDs — `size=xl, style=slim / slim-round / slim-round-22`
| Property 1 | slim | slim-round | slim-round-22 |
|---|---|---|---|
| 0 | `4599:42243` | `4599:42387` | `4610:42711` |
| 10 | `4599:42249` | `4599:42393` | `4610:42686` |
| 20 | `4599:42255` | `4599:42399` | `4610:42678` |
| 30 | `4599:42261` | `4599:42405` | `4610:42679` |
| 40 | `4599:42267` | `4599:42411` | `4610:42681` |
| 50 | `4599:42273` | `4599:42417` | `4610:42685` |
| 60 | `4599:42279` | `4599:42423` | `4610:42683` |
| 70 | `4599:42285` | `4599:42429` | `4610:42677` |
| 80 | `4599:42297` | `4599:42441` | `4610:42684` |
| 90 | `4599:42291` | `4599:42435` | `4610:42680` |
| 100 | `4599:42303` | `4599:42447` | `4610:42682` |
| end | `4599:42309` | `4599:42453` | `4610:42720` |

## Circle — Color tokens

### active (fill — orange brand)
| token | light |
|---|---|
| `progress circle & bar/active-primary-brand` | `#eb6100` (orange — circle 기본 active) |
| `progress circle & bar/active-invert` | `#ffffff` (반전 시) |

### track (rest)
| token | light |
|---|---|
| `progress circle & bar/rest-primary` | `#e1e1e199` (60% alpha gray) |
| `progress circle & bar/rest-secondary` | `#e9e9e9` |
| `progress circle & bar/rest-invert` | `#8f8f8f` (invert=true 시 track) |

### 기타
| token | light |
|---|---|
| `progress-color` | `#40BF80` (green-ish — 별도 namespace, 일부 컨텍스트) |
| `v0.1/UDS green-600` | `#0EB3D7` (legacy/teal — 일부 인스턴스만) |

## Circle — Anatomy

```
       ╭────╮
      ╱      ╲
     │  XX%  │   ← center text (size별 / 옵션)
      ╲      ╱
       ╰────╯
        ↑↑
   track (rest) + active arc (orange)
```

- track: 풀 360° 원형 (rest 색)
- active arc: 진행 % 만큼 그린 호 (orange `#eb6100`)
- center text: %, 라벨, 또는 아이콘
- invert=true 시 track 색이 어두운 배경 위에 적합하게 변경 (rest-invert)

### Style별 차이 (xl 전용)
- `Default`: 굵은 stroke + 둥근 cap
- `slim`: 얇은 stroke
- `slim-round`: 얇은 stroke + 더 둥근 양 끝
- `slim-round-22`: slim-round 변형 (stroke 22px 등 미세 조정 — 검증 필요)

## Variants 요약

### Bar
- **bar size**: xs(2) / sm(4) / md(8) / lg(12)
- **bar style**: rounded(pill) / square
- **bar type**: determinate / indeterminate
- **bar step**: 0 / 25 / 50 / 75 / 100 / success
- **wrapper type**: label_value / indeterminate / full / full-h / horizontal
- **wrapper size**: default / wide / narrow / compact
- **module type**: vertical / adjustable / inline

### Circle
- **module Property 1**: icon / outer / inner / both / test
- **animated state**: start / step1 / step2 / step3 / **state4** (오타) / end
- **animated size**: xxs_20 / xs_48 / sm_64 / md_96 / lg_160
- **animated invert**: false / true
- **static Property 1** (step%): 0 / 10 / 20 / 30 / 40 / 50 / 60 / 70 / 80 / 90 / 100 / end
- **static size**: sm(48) / md(64) / lg(96) / xl(160)
- **static style**: Default / slim / slim-round / slim-round-22 (slim 계열은 xl만)

## Usage Notes

### Bar
- variant 매칭 verbatim:
  - `bar size=xs` 등 (sm/md/lg는 단위 없는 값)
  - `step=0` ~ `step=100`, `step=success`
  - `style=rounded` (pill 형태) / `style=square`
  - `type=determinate` / `indeterminate`
- 진행 색 기본은 **blue `#3b63fb`** (info color) — bar는 blue
- 완료 표시는 **step=success** (green `#05834e`) — 단순 100%과 구분
- determinate (결정성): 정확한 % 알 때 (파일 다운로드 등)
- indeterminate (비결정성): 시간 알 수 없을 때 (서버 응답 대기)
- pill(rounded) shape이 기본 권장 — 부드러운 시각
- `conrner` 토큰명 오타 보존 (Figma 원본)
- wrapper `label_value` type은 위/아래 라벨 모두 표시 — 짧은 표기
- wrapper `full` vs `full-h`: full은 정사각/세로 강조, full-h는 가로 강조
- module `adjustable`은 사용자가 값을 조정할 수 있는 slider 형태 — slider 컴포넌트와 유사하지만 progress 시각

### Circle
- variant 매칭 verbatim:
  - animated `state=state4` (Figma 원본 오타 — `step4` 아님)
  - animated size는 풀네임: `size=xs_48`, `size=md_96` 등
  - static size는 단축: `size=sm`, `size=md`, `size=lg`, `size=xl`
  - static style 풀네임: `style=Default` (대문자 D), `style=slim`, `style=slim-round`, `style=slim-round-22`
- 진행 색 기본은 **orange `#eb6100`** (`active-primary-brand`) — bar와 다름!
- bar는 blue, circle은 orange — 같은 namespace 다른 token
- animated는 무한 로딩(spinner) 또는 단계 전환 애니메이션 (state 시퀀스)
- static은 정확한 % 표시 (10단위 prefedined + custom % 보간)
- size 매핑: animated `xs_48` ↔ static `sm` (둘 다 48px), 이하 동일 패턴 (size 명만 다름)
- slim 계열 style은 xl(160px) 전용 — 다른 사이즈에는 미정의
- `state=state4`는 4번째 단계 (의도된 오타로 보존됨)
- invert=true는 어두운 배경 위 사용 (track 색이 `rest-invert`로 전환)
- `circle_module`의 `Property 1=test`는 테스트용 — 일반 사용 비권장
- text upper/lower: upper는 위쪽(라벨/타이틀), lower는 아래쪽(값/설명)
