# Switch

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#switchControl`, `tokens/number/component.js#selectionControl`.
> 토큰 prefix: `❤️control/*` (control common 공유) + `❤️control/common/switch-border`.

## Overview
- Selection Control 공통 토큰(`control/*`) 사용 — checkbox·radio와 색상 토큰 공유
- 모드: **light · dark**
- 사이즈: sm / md / lg
- state: default(off) / selected(on) / disabled

## Number tokens (Mode 1)

### selection control / icon (track 높이 기준, px)
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

> Switch는 별도 width 토큰이 없고 height = icon 토큰. width는 height × ~1.7 (e.g. sm 28×16 / md 36×20 / lg 44×24).

## Color tokens (light / dark)

### track (control bg)
| token | light | dark |
|---|---|---|
| `control/bg/bg-default` (off) | `#020202` | `#f4f4f4` |
| `control/bg/bg-inactive` | `#727272` | `#e9e9e9` |
| `control/bg/bg-disabled` | `#727272` | `#e9e9e9` |

### track stroke (스위치 전용)
| token | light | dark |
|---|---|---|
| `control/common/switch-border` | `#727272` | `#dddddd` |

### thumb (control fg)
| token | light | dark |
|---|---|---|
| `control/fg/fg-default` | `#020202` | `#020202` |
| `control/fg/fg-disabled` | `#a5a5a5` | `#d2d2d2` |

### text (라벨)
| token | light | dark |
|---|---|---|
| `control/text/text-default` | `#dddddd` | `#393939` |
| `control/text/text-active` | `#f4f4f4` | `#000000` |
| `control/text/text-disabled` | `#a5a5a5` | `#dddddd` |

### state 오버레이 (hover/pressed)
| token | light | dark |
|---|---|---|
| `control/common/hover` | `rgba(0,0,0,0.2)` | `rgba(0,0,0,0.2)` |
| `control/common/hover-brand` | `rgba(59,99,251,0.2)` | `rgba(59,99,251,0.2)` |
| `control/common/pressed` | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.2)` |
| `control/common/pressed-brand` | `rgba(59,99,251,0.4)` | `rgba(59,99,251,0.4)` |

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| sm | `body/sm` | Pretendard 400 / 14 / 20 |
| md | `body/md` | Pretendard 400 / 16 / 24 |
| lg | `body/xl` | Pretendard 400 / 20 / 28 |

> selected/on 상태 라벨은 weight 600 (SemiBold)

## Variants / States

- **state**: default(off) / selected(on) / disabled
- **size**: sm / md / lg
- 라벨 위치: 좌(라벨) ↔ 우(switch) 가 보통

## Usage Notes

- track radius = 100 (pill), thumb radius = 100 (원형)
- selected(on) 시 track bg = brand orange(`#eb6100` 계열) — checkbox/radio와 동일 룰
- disabled 시 track stroke + thumb 모두 한 단계 옅게
- 라벨 weight: off=400, on=600 (시각적 active 강화)
- 즉시 반영되는 토글이므로 별도 "확인" 버튼 없이 사용
- 폼 안에서 "사용/미사용", "공개/비공개"처럼 즉시 적용되는 boolean 설정에 사용
