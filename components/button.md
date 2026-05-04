# Button

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#button`, `tokens/number/component.js#button`.

## Overview
- `❤️button/*` 토큰을 사용하는 버튼 컴포넌트
- 모드: **light · dark**
- 스타일 계열: `neutral-primary`, `neutral-secondary`, `neutral-tertiary`, `brand-primary`, `brand-secondary`, `destructive-primary`, `destructive-secondary`, `subtle`
- 사이즈: xxs(20) → xs(24) → sm(28) → md(32) → lg(40) → xl(48) → 2xl(64) → 3xl(80) → 4xl(96)

## Number tokens (Mode 1)

### size (height, px)
| size | px |
|---|---|
| xxs | 20 |
| xs | 24 |
| sm | 28 |
| md | 32 |
| lg | 40 |
| xl | 48 |
| 2xl | 64 |
| 3xl | 80 |
| 4xl | 96 |

### corner radius (px)
| size | radius |
|---|---|
| xxs / xs / sm | 4 |
| md / lg | 6 |
| xl / 2xl | 8 |
| 3xl | 12 |
| 4xl | 14 |
| (alt) `2xl 2` | 10 |

### border (stroke, px)
| size | border |
|---|---|
| xxs / xs / sm / md / lg | 1 |
| xl | 1.5 |
| 2xl | 2 |
| 3xl | 2.5 |
| 4xl | 3 |

### text-padding (좌우, px)
| size | text-padding |
|---|---|
| xxs / xs / sm / md / lg | 4 |
| xl / 2xl / 3xl / 4xl | 8 |

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `bg/neutral-primary` | `#eeeeee` | `#bcbcbc` |
| `bg/neutral-secondary` | `#000000` | `#f4f4f4` |
| `bg/neutral-tertiary` | `#393939` | `#eeeeee` |
| `bg/brand-secondary` | `#000000` | `#0e0e0e` |
| `bg/destructive-secondary` | `rgba(255,255,255,0)` | `rgba(255,255,255,0)` |
| `bg/subtle` | `rgba(255,255,255,0)` | `rgba(255,255,255,0)` |
| `bg/disabled-inactive` | `#8f8f8f` | `#bcbcbc` |
| `bg/disabled-gray` | `#8f8f8f` | `#f4f4f4` |

### fg (label · icon)
| token | light | dark |
|---|---|---|
| `fg/brand-primary` | `#0e0e0e` | `#0e0e0e` |
| `fg/neutral-primary` | `#0e0e0e` | `#000000` |
| `fg/neutral-secondary` | `#dddddd` | `#8f8f8f` |
| `fg/neutral-tertiary` | `#dddddd` | `#0e0e0e` |
| `fg/destructive-primary` | `#0e0e0e` | `#0e0e0e` |
| `fg/subtle` | `#dddddd` | `#8f8f8f` |
| `fg/disabled-inactive` | `#a5a5a5` | `#bcbcbc` |
| `fg/disabled-gray` | `#a5a5a5` | `#e9e9e9` |

### border
| token | light | dark |
|---|---|---|
| `border/neutral-primary` | `#eeeeee` | `#bcbcbc` |
| `border/neutral-secondary` | `#a5a5a5` | `#dddddd` |
| `border/neutral-tertiary` | `#a5a5a5` | `#dddddd` |
| `border/brand-secondary` | `#d2d2d2` | `#dddddd` |
| `border/brand-tertiary` | `#a5a5a5` | `#a5a5a5` |
| `border/subtle` | `rgba(55,61,76,0)` | `rgba(55,61,76,0)` |
| `border/disabled-inactive` | `#8f8f8f` | `#8f8f8f` |
| `border/disabled-gray` | `#a5a5a5` | `#f4f4f4` |

### icon
| token | light | dark |
|---|---|---|
| `icon/neutral` | `#bcbcbc` | `#8f8f8f` |
| `icon/dark` | `#0e0e0e` | `#f4f4f4` |
| `icon/invert` | `#0e0e0e` | `#e9e9e9` |
| `icon/disabled-inactive` | `#a5a5a5` | `#bcbcbc` |
| `icon/disabled-gray` | `#393939` | `#bcbcbc` |

### common (state overlay)
| token | light | dark |
|---|---|---|
| `common/default` | `rgba(0,0,0,0)` | `rgba(0,0,0,0)` |
| `common/hover` | `rgba(0,0,0,0.05)` | `rgba(0,0,0,0.05)` |
| `common/pressed` | `rgba(0,0,0,0.1)` | `rgba(0,0,0,0.15)` |
| `common/hover-neutral` | `rgba(255,255,255,0.05)` | `rgba(59,99,251,0.1)` |
| `common/pressed-neutral` | `rgba(255,255,255,0.1)` | `rgba(59,99,251,0.2)` |
| `common/selected` | `rgba(59,99,251,0.2)` | `rgba(59,99,251,0.2)` |
| `common/focus-ring 2` | `#020202` | `#f9f9f9` |

## Typography

| size | textStyle | font | line-height |
|---|---|---|---|
| xxs | `button/xxs (SB)` | Pretendard 600 / 12 | 16 |
| xs | `button/xs (SB)` | Pretendard 600 / 14 | 20 |
| sm | `button/sm (SB)` | Pretendard 600 / 14 | 20 |
| md | `button/md (SB)` | Pretendard 600 / 16 | 24 |
| lg | `button/lg (SB)` | Pretendard 600 / 16 | 24 |
| xl | `button/xl (SB)` | Pretendard 600 / 18 | 24 |
| 2xl | `button/2xl (SB)` | Pretendard 600 / 24 | 30 |
| 3xl | `button/3xl (SB)` | Pretendard 600 / 28 | 36 |
| 4xl | `button/4xl (SB)` | Pretendard 600 / 32 | 40 |

## Variants / States

- **style**: brand-primary / brand-secondary / brand-tertiary / neutral-primary / neutral-secondary / neutral-tertiary / destructive-primary / destructive-secondary / subtle / ghost
- **state**: default / hover / pressed / focused / selected / disabled-inactive / disabled-gray
- **layout**: icon labeled / icon only / text only

## Usage Notes

- 본 프로젝트에서는 **neutral 톤만 사용** (brand 톤은 사용자 명시 지시 시에만)
- 한 화면에 `*-primary` 1개만 (위계: primary → secondary → tertiary → subtle/ghost)
- `common/*` 오버레이는 state별 합성 (default 위에 hover/pressed 알파 깔기)
- `focus-ring 2`는 외부 ring (light=`#020202` / dark=`#f9f9f9`)
- disabled 두 종류: `disabled-inactive`(읽기 전용 느낌) / `disabled-gray`(완전 비활성)
