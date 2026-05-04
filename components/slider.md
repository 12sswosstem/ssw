# Slider

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#slider`.
> 토큰 prefix: `slider/*`.

## Overview
- 연속값 입력 슬라이더 (volume, range 등)
- track + handle(thumb) 구조
- handle state: default / hover / select

## Color tokens (light / dark)

### handle
| token | light | dark |
|---|---|---|
| `slider/handle_bg` | `#000000` | `#eeeeee` |
| `slider/handle_bg_hover` | `#000000` | `#eeeeee` |
| `slider/handle_bg_select` | `#030100` | `#f9cfb2` |
| `slider/handle_border` | `#d2d2d2` | `#bcbcbc` |
| `slider/handle_border_hover` | `#d2d2d2` | `#ef8133` |
| `slider/handle_border_select` | `#ef8133` | `#ef8133` |

### track (progress)
| token | light | dark |
|---|---|---|
| `slider/progress_on` | `#8d3a00` | `#ef8133` |
| `slider/progress_off` | `#393939` | `#dddddd` |

### text
| token | light | dark |
|---|---|---|
| `slider/slider_text` | `#dddddd` | `#a5a5a5` |

## Variants

- **handle state**: default / hover / select
- track은 둘로 나뉨 — 핸들 좌측(progress_on) + 우측(progress_off)

## Usage Notes

- handle 클릭/드래그로 값 변경
- progress_on은 brand orange 계열 (`#8d3a00` light · `#ef8133` dark)
- select 상태(드래그 중)는 핸들 외곽 ring + bg 변경
- 키보드 ←→ 화살표로도 값 조정 (단계는 props로 정의)
- range slider는 핸들 2개 + 양쪽 progress
- 단위 표시는 `slider_text`로 좌·우 끝에 라벨 표시
