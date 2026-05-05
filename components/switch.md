# Switch

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `981:166599` (production component)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:341738`, `1:341167`, `1:340767` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#switchControl`, `tokens/number/component.js#selectionControl`.
> 토큰 prefix: `control/*` (control common 공유) + `control/common/switch-border`, `control/bg/bg-inactive`, `control/bg/bg-selected`.

## Overview
- Selection Control 그룹 — checkbox/radio와 `control/*` 토큰 공유
- 모드: **light** (production variable_defs 기준)
- on/off 토글 (즉시 반영)
- 3축 prop

## Number tokens (Mode 1)

### track 크기 (px)
| size | track w × h | thumb diameter | text size |
|---|---|---|---|
| sm | 28 × 16 | 12 | 14 (`body/sm`) |
| md | 36 × 20 | 16 | 16 (`body/md`) |
| lg | 44 × 24 | 20 | 18 (`body/lg`) |

> track radius = 100 (pill), thumb radius = 100 (원형)

## Variants — production prop verbatim

### prop verbatim (checkbox/radio와 유사)
- **state**: `default` / `selected` / `disabled` (3 values — switch는 `active` 대신 `selected` 사용)
- **size**: `sm` / `md` / `lg`
- **label**: boolean
- **text**: string (default "Label")

> switch는 hover/active 분리 prop 없음 — `default(off)` / `selected(on)` / `disabled` 단순 3 state.

## Color tokens — production (light)

### track (control bg)
| token | light |
|---|---|
| `control/bg/bg-inactive` | `#d2d2d2` (default/off track) |
| `control/bg/bg-selected` | `#eb6100` (selected/on track — orange) |
| `control/bg/bg-disabled` | `#d2d2d2` |

### track stroke (switch 전용)
| token | light |
|---|---|
| `control/common/switch-border` | `#d2d2d2` |

### thumb (control fg)
| token | light |
|---|---|
| `control/fg/fg-default` | `#fefefe` (흰 thumb) |
| `control/fg/fg-disabled` | `#a5a5a5` |

### text
| token | light |
|---|---|
| `control/text/text-default` | `#565656` |
| `control/text/text-active` | `#1d1d1d` |
| `control/text/text-disabled` | `#a5a5a5` |

## State별 시각

| state | track bg | track stroke | thumb | text |
|---|---|---|---|---|
| default (off) | `#d2d2d2` | `#d2d2d2` | `#fefefe` | `#565656` |
| selected (on) | `#eb6100` | none | `#fefefe` | `#1d1d1d` (SB) |
| disabled | `#d2d2d2` | `#d2d2d2` | `#a5a5a5` | `#a5a5a5` |

## Anatomy

```
default (off):     [○        ] Label    ← thumb 좌측, track gray
selected (on):     [        ●] Label    ← thumb 우측, track orange
disabled:          [○        ] Label    ← gray + 흐림
```

### 크기
- sm: track 28×16, thumb 12, text 14
- md: track 36×20, thumb 16, text 16
- lg: track 44×24, thumb 20, text 18
- gap (track ↔ label): sm/md=4, lg=8

## Typography

| size | textStyle (default) | textStyle (selected) |
|---|---|---|
| sm | `body/sm` (14/20) | `body/sm (SB)` (600) |
| md | `body/md` (16/24) | `body/md (SB)` |
| lg | `body/lg` (18/26) | `body/lg (SB)` |

> selected 상태 라벨은 SemiBold(600)로 두께 증가.

## Usage Notes

- variant 매칭 verbatim:
  - `state=default` / `selected` / `disabled` (3 values — checkbox/radio의 `active` 대신 `selected`)
  - `size=sm` / `md` / `lg`
  - `label=true|false`, `text="Label"`
- selected 상태는 즉시 반영 (확인 절차 없는 즉시 적용)
- track radius = 100 (pill), thumb radius = 100 (완전 원형)
- selected(on) 시 track bg = brand orange (`#eb6100`)
- disabled 시 thumb 색이 `#a5a5a5`로 옅어짐 (off 상태 유지)
- 폰트 weight: default=400, selected=600 (SB)
- "사용/미사용", "공개/비공개", "다크 모드 on/off" 등 즉시 반영되는 boolean 설정에 사용
- 클릭 = 좌우 이동 애니메이션 (트랜지션 200~300ms 권장)
- 키보드 Space 또는 Enter로 토글
- 접근성: `role="switch"`, `aria-checked` 필수
- `bg-inactive`/`bg-selected`/`switch-border`는 switch 전용 토큰 — checkbox/radio와 다름
- checkbox/radio와 같은 `control/*` 그룹이지만 `state` 값이 `selected`로 다름 (각 컴포넌트 의미에 맞춤)
