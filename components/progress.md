# Progress

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#progress`, `tokens/number/component.js#progress`.
> 토큰 prefix: `progress circle & bar/*`, `progress bar/*`.

## Overview
- 작업 진행률 표시 (Bar 또는 Circle)
- type: bar (수평 막대) / circle (원형)
- bar size: xs / sm / md / lg
- shape: pill (둥근 끝) / square (각진 끝)

## Number tokens (Mode 1)

### bar height (px)
| size | height |
|---|---|
| xs | 2 |
| sm | 4 |
| md | 8 |
| lg | 12 |

### bar corner radius
| shape | radius |
|---|---|
| pill | 99 |
| square | 0 |

## Color tokens (light / dark)

### track (rest)
| token | light | dark |
|---|---|---|
| `progress circle & bar/rest-primary` | `rgba(225,225,225,0.6)` | `#dddddd` |
| `progress circle & bar/rest-secondary` | `#393939` | `#dddddd` |
| `progress circle & bar/rest-invert` | `#bcbcbc` | `#727272` |
| `progress circle & bar/bg` | `#000000` | `#f4f4f4` |

### active (filled)
| token | light | dark |
|---|---|---|
| `progress circle & bar/active` | `#f4f4f4` | `#000000` |
| `progress circle & bar/active-invert` | `#000000` | `#f4f4f4` |
| `progress circle & bar/active-primary-brand` | (variable_defs only) | `#eb6100` |
| `progress circle & bar/inactive` | `#8f8f8f` | `#e9e9e9` |

### text
| token | light | dark |
|---|---|---|
| `progress circle & bar/text-main` | `#f4f4f4` | `#000000` |
| `progress circle & bar/text-sub` | `#dddddd` | `#727272` |
| `progress circle & bar/text-inactive` | `#8f8f8f` | `#dddddd` |

## Variants

- **type**: bar / circle
- **bar size**: xs(2) / sm(4) / md(8) / lg(12)
- **shape**: pill / square (bar만)
- **state**: active / inactive

## Usage Notes

- 빠른 작업(0~100% 결정성): bar 또는 circle 사용
- 무한 로딩(unknown): spinner 또는 indeterminate bar (별도 처리)
- pill shape 끝부분 둥글게 — 더 부드러운 느낌
- text-main은 % 또는 단계 표시, text-sub는 부가 설명
- brand 강조가 필요하면 `active-primary-brand` (`#eb6100`)
- 비활성 항목은 `inactive` 토큰 (gray 톤)
