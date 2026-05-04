# List

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#list`.
> 토큰 prefix: `list/*`.

## Overview
- 항목 나열 컴포넌트 (메뉴 리스트, 검색 결과, 알림 리스트 등)
- 각 항목: primary text + secondary label + icon (옵션) + state
- state: default / hover / active / selected / disabled / read

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `list/bg/default` | `#000000` | `#fefefe` |
| `list/bg/active` | `#000000` | `#fefefe` |
| `list/bg/hover` | `rgba(255,255,255,0.05)` | `#fefefe` |
| `list/bg/selected` | `rgba(235,97,0,0.1)` | `rgba(235,97,0,0.15)` |
| `list/bg/disabled` | `#8f8f8f` | `#eeeeee` |

### text
| token | light | dark |
|---|---|---|
| `list/text/primary-default` | `#dddddd` | `#727272` |
| `list/text/primary-active` | `#fefefe` | `#020202` |
| `list/text/secondary-label` | `#d2d2d2` | `#d2d2d2` |
| `list/text/placeholder` | `#bcbcbc` | `#a5a5a5` |
| `list/text/read` | `#d2d2d2` | `#a5a5a5` |
| `list/text/disabled` | `#bcbcbc` | `#8f8f8f` |
| `list/text/fg/default` | `#bcbcbc` | `#727272` |
| `list/text/fg/active` | `#eeeeee` | `#393939` |
| `list/text/fg/disabled` | `#bcbcbc` | `#8f8f8f` |

### border · icon
| token | light | dark |
|---|---|---|
| `list/border/default` | `#8f8f8f` | `#e9e9e9` |
| `list/icon/default` | `#bcbcbc` | `#d2d2d2` |
| `list/etc/required mark` | `#df3422` | `#727272` |

## Variants

- **state**: default / hover / active / selected / disabled / read (읽음)
- 각 행: primary text + (secondary label) + (icon) + (right-side action)

## Usage Notes

- selected는 brand orange 알파 배경 (10~15% opacity)
- read 상태는 새 알림 아닌 항목 — primary text보다 옅은 색
- divider는 행 사이에 1px (separate 컴포넌트로 처리)
- 접근성: 키보드 ↑↓ 탐색 + Enter 선택
- HMI 화면용 리스트는 별도 `hmi.md` 참조
