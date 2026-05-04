# Popover

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#popover`, `tokens/number/component.js#popover`.
> 토큰 prefix: `popover/*`.

## Overview
- 작은 floating 컨테이너 (tooltip보다 풍부, popup보다 가벼움)
- 부착된 트리거 옆에 표시
- type: default / inverted / info / warning

## Number tokens (Mode 1)

| token | md | lg |
|---|---|---|
| padding | 12 | 8 |
| radius | 4 | 4 |
| gap | 12 | 12 |
| gap-content | 8 | 8 |

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `popover/bg-default` | `#eeeeee` | `#0e0e0e` |
| `popover/bg-inverted` | `#0e0e0e` | `#eeeeee` |
| `popover/bg-info` | `#0f1c52` | `#d5e7fe` |
| `popover/bg-warning` | `#2f1d00` | `#da9f00` |
| `popover/line-info` | `#122d9a` | `#6995fe` |
| `popover/line-warning` | `#533400` | `#a46a00` |

## Variants

- **type**: default / inverted / info / warning
- **size**: md / lg

## Usage Notes

- info type은 청색 톤, warning은 황색 톤
- inverted는 light/dark 배경 반전 (강조 효과)
- line-* 토큰은 외곽 또는 좌측 강조선 색
- popup과 차이: popover는 부착형(앵커 있음), popup은 floating 단독
- 트리거 클릭으로 열리고, 외부 클릭으로 닫힘
