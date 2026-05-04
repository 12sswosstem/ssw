# Divider

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#divider`.
> 토큰 prefix: `divider/*`.

## Overview
- 콘텐츠 구분용 선 (수평/수직)
- size: xs(0.5) / sm(1, default) / md(2) / lg(4)
- style: full / inset-sm(16) / inset-md(24) / inset_lg(32)
- type: horizontal / vertical
- Title boolean: 제목 라벨 옵션
- Dashed boolean: sm_default만 적용

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `divider/line` | `#393939` | `#dddddd` |
| `divider/line_contents` | `#8f8f8f` | `#dddddd` |
| `divider/text` | `#a5a5a5` | `#a5a5a5` |

## Number tokens
- 선 두께: xs=0.5 / sm=1 / md=2 / lg=4 (px)
- Inset 좌우 여백 (style별): inset-sm=16, inset-md=24, inset_lg=32 (`lg`만 언더스코어 표기)

## Variants

- **size**: xs / sm(default) / md / lg
- **style**: full / inset-sm / inset-md / inset_lg
- **type**: horizontal / vertical
- **Title**: true / false (가운데 텍스트 라벨)
- **Dashed**: true / false (sm_default만)

## Usage Notes

- 일반 구분선은 `divider/line`, 콘텐츠 그룹 내부 구분은 `divider/line_contents` (한 단계 진함)
- Title이 있을 때 좌우 line + 중앙 text 구조 (text는 `divider/text`)
- vertical은 height를 부모에 맞춰 STRETCH
- inset_lg style의 언더스코어 표기는 Figma 원본 그대로 (오타 아님)
