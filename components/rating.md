# Rating

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#rating`.
> 토큰 prefix: `rating/*`.

## Overview
- 즐겨찾기/북마크 아이콘 표시 (별, 하트, 북마크 등)
- 활성/비활성 fill 상태 토글

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `rating/favorite-fill` | `#3d2700` | `#3d2700` |
| `rating/bookmark-fill` | `#5681ff` | `#5681ff` |
| `rating/default` | `#bcbcbc` | `#bcbcbc` |
| `rating/bg-rest` | `#727272` | `#727272` |

## Variants
- **type**: favorite (별/하트) / bookmark (북마크 아이콘)
- **state**: filled (활성) / default (비활성)

## Usage Notes

- favorite-fill은 노란/갈색 톤 (`#3d2700`) — 별/하트 채움
- bookmark-fill은 파란 톤 (`#5681ff`) — 북마크 채움
- light/dark 동일 색상 (rating은 모드 무관 동일 강조)
- 클릭 토글로 즉시 반영 (별도 확인 절차 없음)
- 카운트가 필요하면 텍스트 옆 표시 (별 4.5개 등)
