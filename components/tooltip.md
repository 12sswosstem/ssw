# Tooltip

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#tooltip`, `tokens/number/component.js#tooltip`.
> 토큰 prefix: `tooltip/*`.

## Overview
- 마우스 hover 시 표시되는 짧은 안내 텍스트
- type: default / invert / info / warning
- size: md / lg

## Number tokens (Mode 1)

| token | md | lg |
|---|---|---|
| `tooltip/padding-md`, `padding-lg` | 8 | 8 |

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `tooltip/bg-default` | `#eeeeee` | `#0e0e0e` |
| `tooltip/bg-invert` | `#0e0e0e` | `#eeeeee` |
| `tooltip/bg-info` | `#0f1c52` | `#d5e7fe` |
| `tooltip/bg-warning` | `#2f1d00` | `#da9f00` |

### text
| token | light | dark |
|---|---|---|
| `tooltip/text-default` | `#000000` | `#ffffff` |
| `tooltip/text-inverted` | `#ffffff` | `#000000` |
| `tooltip/text-info` | `#ffffff` | `#000000` |
| `tooltip/text-warning` | `#ffffff` | `#000000` |

### line (외곽 강조)
| token | light | dark |
|---|---|---|
| `tooltip/line-info` | `#122d9a` | `#6995fe` |
| `tooltip/line-warning` | `#533400` | `#825200` |
| `tooltip/line-invert` | `#565656` | `#dddddd` |

## Variants

- **type**: default / invert / info / warning
- **size**: md / lg
- **arrow position**: top / right / bottom / left (트리거에 따라)

## Usage Notes

- 매우 짧은 텍스트 (1줄, 최대 60자) — 길어지면 popover 사용
- hover 0.5~1초 후 표시 (delay 권장)
- info는 정보, warning은 주의 환기
- invert는 강조 효과 (배경 반전)
- 화살표는 트리거 방향 가리킴 (최소 8px 떨어짐)
- 접근성: `aria-describedby`로 트리거와 연결
