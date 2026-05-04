# Card

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#card`, `tokens/number/component.js#card`.
> 토큰 prefix: `card/*`.

## Overview
- 콘텐츠 그룹화 컨테이너
- type: basic / vertical / horizontal / filled / harf
- state: default / hover / pressed / focus / selected
- 기본 360×360 frame (canonical)

## Number tokens (Mode 1)

| token | px |
|---|---|
| `card/corner radius md` | 8 |
| `card/corner radius sm` | 12 |

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `card/bg` | `#020202` | `#f9f9f9` |
| `card/text-title` | `#f4f4f4` | `#020202` |
| `card/text-body` | `#e9e9e9` | `#393939` |
| `card/icon` | `#dddddd` | `#727272` |

## Slot 크기 (실측 기준)

| type | image slot | body text slot |
|---|---|---|
| basic | — | 328×328 (pad 16) |
| vertical | 328×80 (top) | 328×238 |
| horizontal | 80×328 (left) | 238×328 |
| harf | 360×360 (full) | 360×143 (bottom 흰BG) |
| filled | 360×360 (full) | 360×143 (bottom 투명) |

## State 색상 (figma 인스턴스 검수치)

| state | bg | border |
|---|---|---|
| default | `#FFFFFF` | `#DADADA` 1px |
| hover | `#FFFFFF` | `#292929` |
| pressed | `#F4F4F4` | `#292929` |
| selected | `#FFFFFF` | `#FC7D00` |
| focus | transparent | inner `#393939` + outer 2px `#020202` |

## Variants

- **type**: basic / vertical / horizontal / filled / harf
- **state**: default / hover / pressed / focus / selected

## Usage Notes

- card title은 Pretendard Bold 16, body는 Medium 14 권장
- harf와 filled의 차이: harf는 하단 영역에 흰 배경, filled는 투명 (이미지 위로 텍스트)
- selected는 outline 색상이 brand orange (`#FC7D00`)
- focus는 이중 ring (inner + outer) — 단일 ring 금지
