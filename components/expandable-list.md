# Expandable List

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#expandableList`.
> 토큰 prefix: `expandable list/*`.

## Overview
- 접기/펼치기 가능한 리스트 항목 (아코디언 형태)
- 각 항목 클릭 시 하위 콘텐츠 expand
- state: default / selected / disabled

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `expandable list/bg-default` | `#000000` | `#f9f9f9` |
| `expandable list/bg-selected` | `#1d1d1d` | `#e9e9e9` |
| `expandable list/bg-disabled` | `#393939` | `#393939` |
| `expandable list/border-default` | `#8f8f8f` | `#dddddd` |
| `expandable list/border-selected` | `#8f8f8f` | `#dddddd` |
| `expandable list/border-disabled` | `#727272` | `#727272` |
| `expandable list/text-primary` | — | `#393939` |
| `expandable list/text-secondary` | — | `#727272` |
| `expandable list/text-disabled` | `#a5a5a5` | `#a5a5a5` |

## Variants

- **state**: default / selected / disabled
- expand/collapse 토글 (chevron 아이콘)

## Usage Notes

- 헤더 행 클릭 시 chevron 회전 + 하위 영역 펼침
- selected는 현재 펼쳐진 상태가 아닌 사용자 선택 상태
- 중첩(nested) 사용 가능 — depth별 padding 16px씩 증가 권장
- 접근성: `aria-expanded`, `aria-controls` 필수
