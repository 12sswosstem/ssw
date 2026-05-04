# Breadcrumb

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#breadcrumb`.
> 토큰 prefix: `breadcrumb/*`.

## Overview
- 페이지 계층 경로 표시 (Home > Page > Sub)
- 현재 페이지 + 상위 경로 클릭 가능
- state: default / hover / focused / selected (selected 변형 별도)

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `breadcrumb/text-default` | `#dddddd` | `#8f8f8f` |
| `breadcrumb/text-current` | `#ffffff` | `#1d1d1d` |
| `breadcrumb/text-hover` | `#ffffff` | `#1d1d1d` |
| `breadcrumb/text-focused` | `#ffffff` | `#1d1d1d` |
| `breadcrumb/text-selected_hover` | `#f7c099` | `#f7c099` |
| `breadcrumb/text-selected_focused` | `#f7c099` | `#f7c099` |
| `breadcrumb/border` | `#ffffff` | `#1d1d1d` |
| `breadcrumb/border_selected_hover` | `#f7c099` | `#f7c099` |

## Variants

- **state**: default / hover / focused / selected_hover / selected_focused
- 현재 페이지(text-current)는 비활성/강조 — 클릭 불가
- separator: `>` 또는 `/` 문자 (한글 환경에서는 `>` 권장)

## Usage Notes

- 마지막 항목(현재 페이지)는 `text-current`로 강조 — 링크 비활성화
- selected 상태는 light/dark 동일 (`#f7c099` brand orange light)
- focused는 키보드 탐색용 ring + text 색 변경
- 모바일에서는 마지막 1~2 단계만 노출하는 것이 관행
