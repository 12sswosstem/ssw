# Radio

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`:
>   - `981:166618` (production component)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:341738`, `1:341167`, `1:340767` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#radio`, `tokens/number/component.js#selectionControl`.
> 토큰 prefix: `control/*`, `selection control/*`.

## Overview
- Selection Control 그룹 — checkbox/switch와 `control/*` 토큰 공유
- 모드: **light** (production variable_defs 기준)
- 단일 선택 (라디오 그룹 내 1개만 active)
- 4축 prop (checkbox와 유사)

## Number tokens (Mode 1)

### selection control / icon (외원 영역, px)
| size | container | inner circle |
|---|---|---|
| sm | 20 | 16 |
| md | 24 | 19.2 |
| lg | 32 | 24 |

### selection control / text (라벨 사이즈)
| size | text size |
|---|---|
| sm | 14 |
| md | 16 |
| lg | 18 |

### border 굵기
| size | border |
|---|---|
| sm | 1 |
| md | 1.2 |
| lg | 1.5 |

## Variants — production prop verbatim

### prop verbatim (checkbox와 유사)
- **active**: `unchecked` / `checked` / `checked-2`
- **state**: `default` / **`active`** / `disabled` (3 values — checkbox와 동일하게 hover/pressed는 `active`로 통합)
- **size**: `sm` / `md` / `lg`
- **focusRing**: boolean
- **label**: boolean
- **requiredMark**: boolean
- **text**: string (default "Label")

### active 3가지 차이
- `unchecked`: 외원만 (border=default)
- `checked`: 외원 stroke=brand + 내부 dot (brand)
- `checked-2`: 외원 채움(brand) + 내부 dot (흰색) — checkbox의 checked와 시각 유사

## Color tokens — production (light)

### bg
| token | light |
|---|---|
| `control/bg/bg-default` | `#fefefe` (외원 내부 배경) |
| `control/bg/bg-brand-1` | `#eb6100` (checked-2 시 외원 채움) |
| `control/bg/bg-disabled` | `#d2d2d2` |

### border (외원 stroke)
| token | light |
|---|---|
| `control/border/border-default` | `#727272` |
| `control/border/border-brand` | `#eb6100` (checked 시 외원) |
| `control/border/border-disabled` | `#a5a5a5` |

### fg (내부 dot)
| token | light |
|---|---|
| `control/fg/fg-default` | `#fefefe` (checked-2 시 흰 dot) |
| `control/fg/fg-disabled` | `#a5a5a5` |

> radio의 checked 상태에서 dot은 brand orange (`#eb6100`) 직접 사용, fg-default는 checked-2의 흰 dot용.

### text
| token | light |
|---|---|
| `control/text/text-default` | `#565656` |
| `control/text/text-active` | `#1d1d1d` |
| `control/text/text-disabled` | `#a5a5a5` |

## State별 시각

| state \\ active | unchecked | checked | checked-2 |
|---|---|---|---|
| default | bg=`#fefefe` + border=`#727272` | border=`#eb6100` + dot=`#eb6100` | bg=`#eb6100` + dot=`#fefefe` |
| active | bg=`#fefefe` + border=`#eb6100` | (동일) | (동일) |
| disabled | bg=`#d2d2d2` + border=`#a5a5a5` | border=`#a5a5a5` + dot=`#a5a5a5` | bg=`#d2d2d2` + dot=`#a5a5a5` |

## Anatomy

```
( ● ) Label *
 ↑    ↑    ↑
 외원   text required
  └ 내부 dot (checked 시)

sm: 16×16 외원, dot 8 (centered), gap 4, text 14
md: 19.2×19.2 외원, dot 10, gap 4, text 16
lg: 24×24 외원, dot 12, gap 8, text 18
```

## Typography

| size | textStyle (default) | textStyle (active) |
|---|---|---|
| sm | `body/sm` (14/20) | `body/sm (SB)` (600) |
| md | `body/md` (16/24) | `body/md (SB)` |
| lg | `body/lg` (18/26) | `body/lg (SB)` |

## Usage Notes

- variant 매칭 verbatim:
  - `active=unchecked` / `checked` / `checked-2`
  - `state=default` / `active` / `disabled` (3 values — hover/pressed 통합)
  - `size=sm` / `md` / `lg`
  - boolean prop: `focusRing`, `label`, `requiredMark`
- Radio 그룹 내 항상 1개만 선택 (단일 선택)
- `checked` (stroke 형) vs `checked-2` (filled 형):
  - `checked`: 가벼운 표시 (외원 stroke + 내부 dot, 일반 폼)
  - `checked-2`: 강한 표시 (외원 채움 + 흰 dot, 강조 필요 시)
- 일반 사용은 `checked` 권장 — 시각적 가벼움
- 라벨 weight: state=active 또는 active!=unchecked일 때 SemiBold(600)
- disabled 시 외원 bg 회색(`#d2d2d2`), border 옅은 회색(`#a5a5a5`)
- focus ring은 외원 둘레 + 라벨 영역 (키보드 Tab navigation)
- Required(`*`) 표시는 라벨 우측, `Color(New)/Red/500` `#ef0101`
- checkbox와 같은 `control/*` 토큰 사용 — 시각적 일관성
