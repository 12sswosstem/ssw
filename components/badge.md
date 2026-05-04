# Badge

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#badge`, `tokens/number/component.js#badge`.
> 토큰 prefix: `badge/*`.

## Overview
- 아이콘/카운트 표시용 작은 라벨
- type: dot / number / number long / new / text / icon
- size: xs / sm / md / lg / xl
- color: green / red (basic)
- border boolean: 외곽 흰색 ring

## Number tokens (Mode 1)

| size | container | dot | icon | text | border |
|---|---|---|---|---|---|
| xs | 14 | 4 | 10 | 10 | 1 |
| sm | 18 | 6 | 10 | 12 | 1.35 |
| md | 24 | 8 | 14 | 16 | 1.8 |
| lg | 32 | 10 | 20 | 18 | 2.4 |
| xl | 40 | 12 | 24 | 24 | 3 |

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `badge/border` | `#000000` | `#565656` |
| `badge/neutral-bg` | `#f4f4f4` | `#000000` |
| `badge/icon-default` | `#dddddd` | `#bcbcbc` |
| `badge/icon-invert` | `#000000` | `#f4f4f4` |

> 전형적인 색상은 인스턴스에서 hardcoded (green=`#06C755`, red=`#FF334B` 등 — 변수 미바인딩).

## Variants

- **type**: dot / number / number long / new / text / icon
- **size**: xs / sm / md / lg / xl
- **color**: green / red
- **border**: true / false (외곽 흰색 ring)

## Usage Notes

- `type=number`로 검색 시 `"type=number,"` (쉼표 포함) 사용 — `number long`과 구분 필요
- border boolean true 시 외곽에 흰색 1.35~3px ring (size에 비례)
- 99 초과 카운트는 `number long` (99+) 사용
- avatar/icon button 우상단 overlay 용도가 가장 많음
