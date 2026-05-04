# Popup

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#popup`, `tokens/number/component.js#popup`.
> 토큰 prefix: `popup/*`.

## Overview
- modal보다 가볍지만 popover보다 큰 floating 다이얼로그
- 헤더 + 본문 + 푸터 구조
- 단독 floating (앵커 없음) — modal과 popover 사이 위치

## Number tokens (Mode 1)

| token | px |
|---|---|
| `popup/section_contents_gap` | 16 |

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `popup/bg` | `#1d1d1d` | `#f4f4f4` |
| `popup/bg-surface` | `#000000` | `#e9e9e9` |
| `popup/bg-container` | `#1d1d1d` | `#f4f4f4` |
| `popup/bg-header` | `#1d1d1d` | `#f4f4f4` |
| `popup/bg-footer` | `#1d1d1d` | `#f4f4f4` |

### text
| token | light | dark |
|---|---|---|
| `popup/text-header-title` | `#ffffff` | `#393939` |
| `popup/text-header-sub title` | `#dddddd` | `#727272` |
| `popup/text-contents-title` | `#ffffff` | `#393939` |
| `popup/text-contents-body` | `#ffffff` | `#393939` |

### border
| token | light | dark |
|---|---|---|
| `popup/border` | `#a5a5a5` | `#e9e9e9` |
| `popup/border-surface` | `#565656` | `#e9e9e9` |

## Variants

- **section**: header / body / footer (3-section vertical)
- 별도 size variant 없음 (콘텐츠 기반 너비)

## Usage Notes

- modal과 시각적으로 유사하지만 dim 배경 없음
- header는 title + sub title (옵션) 2줄 구조
- contents body 영역 padding 20, gap 16 (`section_contents_gap`)
- footer는 1~2 buttons 우측 정렬
- popover보다 큰 콘텐츠를 다룰 때 사용 (form, list 등)
