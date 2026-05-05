# Progress

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `671:38020` `✅progress bar_v0.1`
> - 컴포넌트 셋:
>   - `671:38133` `✅bar_atom` (atom — 80 variants, 4축)
>   - `671:38059` `progress bar` (wrapper — 20 variants, 2축)
>   - `2241:20359` `progress bar module` (module — 3 type)
>   - `671:38052` `text` (label·value text 6 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:184225`
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#progress`, `tokens/number/component.js#progress`.
> 토큰 prefix: `progress circle & bar/*`, `progress bar/*`, `progress/*`.

## Overview
- 작업 진행률 표시 — Bar 중심 (Circle은 별도 컴포넌트)
- 모드: **light** (production variable_defs 기준)
- 컴포넌트 계층:
  - **atom**: 단일 progress bar (`bar_atom`)
  - **wrapper**: bar + label/value 조합 (`progress bar`)
  - **module**: 다양한 응용 (vertical / adjustable / inline)

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

## Atom Variants — `✅bar_atom` (4축)

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

## Wrapper Variants — `progress bar` (2축)

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

## Module Variants — `progress bar module`

| type | variant ID | 용도 |
|---|---|---|
| `vertical` | `2241:20358` | 세로 형태 progress (높이 기반) |
| `adjustable` | `2253:39286` | 사용자가 핸들로 조정 가능 (range slider 형태) |
| `inline` | `2241:23964` | 텍스트 옆 inline 표시 (작은 크기) |

별도 `adjustable bar` 컴포넌트: `2253:39295` (384×13)

## Text labels — `text` (label/value)

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

## Variants 요약

- **bar size**: xs(2) / sm(4) / md(8) / lg(12)
- **bar style**: rounded(pill) / square
- **bar type**: determinate / indeterminate
- **bar step**: 0 / 25 / 50 / 75 / 100 / success
- **wrapper type**: label_value / indeterminate / full / full-h / horizontal
- **wrapper size**: default / wide / narrow / compact
- **module type**: vertical / adjustable / inline

## Usage Notes

- variant 매칭 verbatim:
  - `bar size=xs` 등 (sm/md/lg는 단위 없는 값)
  - `step=0` ~ `step=100`, `step=success`
  - `style=rounded` (pill 형태) / `style=square`
  - `type=determinate` / `indeterminate`
- 진행 색 기본은 **blue `#3b63fb`** (info color) — 메모리상 brand orange는 별도 토큰
- 완료 표시는 **step=success** (green `#05834e`) — 단순 100%과 구분
- determinate (결정성): 정확한 % 알 때 (파일 다운로드 등)
- indeterminate (비결정성): 시간 알 수 없을 때 (서버 응답 대기)
- pill(rounded) shape이 기본 권장 — 부드러운 시각
- `conrner` 토큰명 오타 보존 (Figma 원본)
- wrapper `label_value` type은 위/아래 라벨 모두 표시 — 짧은 표기
- wrapper `full` vs `full-h`: full은 정사각/세로 강조, full-h는 가로 강조
- module `adjustable`은 사용자가 값을 조정할 수 있는 slider 형태 — slider 컴포넌트와 유사하지만 progress 시각
- text upper/lower: upper는 위쪽(라벨/타이틀), lower는 아래쪽(값/설명)
