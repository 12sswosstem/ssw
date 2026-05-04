# Chip

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#chip`, `tokens/number/component.js#chip`.
> 토큰 prefix: `chip/*`.

## Overview
- 필터/선택형 작은 라벨 버튼
- shape: rounded(pill, radius=480) / sqaure(=square, radius=4) — Figma 원본 오타
- size: xsm(28) / sm(32) / md(40)
- state: default / hover / selected_outline / selected_filled_orange / selected_filled_gray / focused / disabled

## Number tokens (Mode 1)

| size | height |
|---|---|
| xs | 28 |
| sm | 32 |
| md | 40 |

> figma-export.json은 `xs`로 노출되지만 컴포넌트 prop은 `xsm` 표기.

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `chip/bg/default` | `#000000` | `#f4f4f4` |
| `chip/bg/hover` | `#1d1d1d` | `#dddddd` |
| `chip/bg/disabled` | `#1d1d1d` | `#dddddd` |
| `chip/bg/selected-gray` | `#505050` | `#d2d2d2` |
| `chip/outline/default` | `#8f8f8f` | `#e9e9e9` |
| `chip/outline/disabled` | `#2b2b2b` | `#dddddd` |
| `chip/outline/focused` | `#ffffff` | `#000000` |
| `chip/font/default` | `#e9e9e9` | `#000000` |
| `chip/font/disabled` | `#a5a5a5` | `#bcbcbc` |
| `chip/font/invert` | `#000000` | `#000000` |
| `chip/icon/default` | `#dddddd` | `#bcbcbc` |
| `chip/icon/disabled` | `#a5a5a5` | `#bcbcbc` |
| `chip/icon/invert` | `#000000` | `#000000` |

## Variants

- **state**: default / hover / selected_outline / selected_filled_orange / selected_filled_gray / focused / disabled
- **shape**: rounded / sqaure (Figma 원본 오타 — `square` 아님)
- **size**: xsm / sm / md

## Usage Notes

- shape `sqaure`는 Figma 원본 오타 그대로 사용 (variant 매칭)
- selected_filled_orange는 brand 색 가득 차는 강조 변형
- 태그 클릭으로 필터를 토글하는 패턴에 자주 사용
- focused state는 외곽 2px black ring
