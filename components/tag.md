# Tag

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#tag`.
> 토큰 prefix: `tag/bg/*`, `tag/accent/*`.

## Overview
- 모드: **light · dark**
- 사이즈: xs(18) / sm(20) / md(24) — 모두 텍스트 단일 슬롯
- color: red / orange / yellow / green / blue / turquoise / magenta / indigo / gray / black / white
- type: subtle / outline / mono / filled (실제 UI 적용 시 분기)

## Number tokens (Mode 1)

### height (px)
| size | px |
|---|---|
| xs | 18 |
| sm | 20 |
| md | 24 |

> 폰트는 모두 12 / Medium / lh 18 (SB가 아닌 일반 Medium)

## Color tokens (light / dark)

### bg (subtle/outline 톤 기본 배경)
| token | light | dark |
|---|---|---|
| `tag/bg/red` | `#440d05` | `#ffdedb` |
| `tag/bg/orange` | `#2f1300` | `#fce7d9` |
| `tag/bg/yellow` | `#251700` | `#f9ce00` |
| `tag/bg/green` | `#00261d` | `#bdf1d0` |
| `tag/bg/blue` | `#0f1c52` | `#d5e7fe` |
| `tag/bg/turquoise` | `#002529` | `#baf1de` |
| `tag/bg/magenta` | `#4a001b` | `#ffa3c2` |
| `tag/bg/indigo` | `#23006e` | `#dfe4ff` |
| `tag/bg/gray` | `#565656` | `#dddddd` |

### accent (텍스트/border용 진한 색)
| token | light | dark |
|---|---|---|
| `tag/accent/red` | `#fc432e` | `#cd2e1d` |
| `tag/accent/yellow` | `#533400` | `#6b4300` |
| `tag/accent/yellow_dark` | `#825200` | `#6b4300` |
| `tag/accent/green` | `#099d59` | `#047c4b` |
| `tag/accent/blue` | `#5681ff` | `#345bf8` |
| `tag/accent/turquoise` | `#0b97a4` | `#077883` |
| `tag/accent/magenta` | `#ff3377` | `#b5134c` |
| `tag/accent/indigo` | `#8077fe` | `#6d4bf8` |
| `tag/accent/gray` | `#dddddd` | `#8f8f8f` |
| `tag/accent/black` | `#ffffff` | `#000000` |
| `tag/accent/white` | `#000000` | `#ffffff` |
| `tag/accent/black_for cautuion` | `#ffffff` | `#ffffff` |

> 주의(cautuion 오타 원본 그대로): `accent/black_for cautuion`은 두 모드 모두 `#ffffff` 고정 (yellow filled bg 위 강조용)

## Typography

| 모든 사이즈 | textStyle | font · size · line-height |
|---|---|---|
| xs / sm / md | `body/xs (M)` 또는 `body/xxs (M)` | Pretendard 500 / 12 / 18 (또는 14) |

> 디자인 토큰상 12px Medium 고정, lh는 18 정도. TEXT 단일 노드.

## Variants

- **type**: subtle (bg = `tag/bg/*`, text = `accent/*`) / outline (bg=transparent, border=`accent/*`, text=`accent/*`) / mono (bg=`tag/bg/gray`, text=black) / filled (bg=`accent/*`, text=white·yellow filled만 black)
- **color**: red / orange / yellow / green / blue / turquoise / magenta / indigo / gray
- **size**: xs / sm / md

## Usage Notes

- 한 화면에 너무 다양한 color tag를 섞어 쓰지 않기 (의미 단위로 색 정리)
- yellow filled의 글자는 `accent/black_for cautuion`(`#ffffff` 두 모드 동일이지만 yellow 배경 위 가독성을 위해 사실상 검정 사용 — 실제 적용 시 black 텍스트 권장)
- light 모드에서 bg는 매우 진한 색, dark 모드에서는 연한 파스텔 (반전 구조)
- 아이콘 슬롯 없음 — TEXT 단일 노드
- `accent/black`/`accent/white`는 유틸용 (light/dark 자동 반전)
