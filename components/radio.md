# Radio

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#radio`, `tokens/number/component.js#selectionControl`.
> 토큰 prefix: `❤️control/*`, `❤️selection control/*`.

## Overview
- Selection Control 공통 토큰(`control/*`) 사용 — checkbox·switch와 색상 토큰 공유
- 모드: **light · dark**
- 사이즈: sm / md / lg
- active: unchecked / checked / checked-2 (외원만 색 / 외원·내부 모두 색)

## Number tokens (Mode 1)

### selection control / icon (외원 영역, px)
| size | px |
|---|---|
| sm | 16 |
| md | 20 |
| lg | 24 |

### selection control / text (px)
| size | px |
|---|---|
| sm | 16 |
| md | 20 |
| lg | 24 |

## Color tokens (light / dark)

> Radio는 Checkbox와 동일한 `❤️control/*` 토큰을 사용. 아래는 Radio 관점에서 매핑.

### control common (state 알파 오버레이)
| token | light | dark |
|---|---|---|
| `control/common/default` | `rgba(0,0,0,0)` | `rgba(0,0,0,0)` |
| `control/common/hover` | `rgba(0,0,0,0.2)` | `rgba(0,0,0,0.2)` |
| `control/common/hover-brand` | `rgba(59,99,251,0.2)` | `rgba(59,99,251,0.2)` |
| `control/common/pressed` | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.2)` |
| `control/common/pressed-brand` | `rgba(59,99,251,0.4)` | `rgba(59,99,251,0.4)` |

### control bg (외원 내부 배경)
| token | light | dark |
|---|---|---|
| `control/bg/bg-default` | `#020202` | `#f4f4f4` |
| `control/bg/bg-disabled` | `#727272` | `#e9e9e9` |
| `control/bg/bg-inactive` | `#727272` | `#e9e9e9` |

### control fg (내부 dot)
| token | light | dark |
|---|---|---|
| `control/fg/fg-default` | `#020202` | `#020202` |
| `control/fg/fg-disabled` | `#a5a5a5` | `#d2d2d2` |

### control border (외원 stroke)
| token | light | dark |
|---|---|---|
| `control/border/border-default` | `#d2d2d2` | `#d2d2d2` |
| `control/border/border-disabled` | `#a5a5a5` | `#dddddd` |

### control text (라벨)
| token | light | dark |
|---|---|---|
| `control/text/text-default` | `#dddddd` | `#393939` |
| `control/text/text-active` | `#f4f4f4` | `#000000` |
| `control/text/text-disabled` | `#a5a5a5` | `#dddddd` |

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| sm | `body/sm` | Pretendard 400 / 14 / 20 |
| md | `body/md` | Pretendard 400 / 16 / 24 |
| lg | `body/xl` | Pretendard 400 / 20 / 28 |

> 선택 시 weight 600 (SemiBold)

## Variants / States

- **state**: default / hover / pressed / disabled
- **active**:
  - `unchecked` — 외원만 (border)
  - `checked` — 외원 stroke = brand color, 내부에 dot (brand)
  - `checked-2` — 외원 채움 + 내부 dot 흰색 (체크박스의 filled 느낌)
- **size**: sm / md / lg

## Usage Notes

- Radio 그룹 안에서 항상 1개만 선택 가능 (단일 선택)
- checked-2는 강조 변형 — 일반 폼에서는 `checked`(stroke형) 사용 권장
- 라벨 weight: unchecked=400, checked=600
- disabled 시 외원 bg는 회색(`#727272` light · `#e9e9e9` dark), border는 한 단계 옅게
- hover/pressed 영역은 외원 둘레의 알파 ring으로 표현
