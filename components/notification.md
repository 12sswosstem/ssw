# Notification

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#notification`, `tokens/number/component.js#notification`.
> 토큰 prefix: `notification/*`.

## Overview
- 시스템 알림 / Toast / Banner 메시지
- type: info / success / warning / critical / question / general / default / invert
- 화면 상단/하단 고정 표시 또는 inline embed

## Number tokens (Mode 1)

| token | md | lg |
|---|---|---|
| padding | 16 | 16 |
| radius | 8 | 8 |
| gap | 8 | 12 |
| text-padding | 2 | 4 |
| radius-bar | 0 | 0 |

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `notification/bg-default` | `#000000` | `#000000` |
| `notification/bg-general` | `#1d1d1d` | `#1d1d1d` |
| `notification/bg-general-default` | `#eeeeee` | `#1d1d1d` |
| `notification/bg-general-2` | `#eeeeee` | `#1d1d1d` |
| `notification/bg-general-3` | `#eeeeee` | `#1d1d1d` |
| `notification/bg-warning` | `#eeeeee` | `#1d1d1d` |
| `notification/bg-info-primary` | `#0c2175` | `#1d1d1d` |
| `notification/bg-invert-00` | `#393939` | `#e9e9e9` |

### text
| token | light | dark |
|---|---|---|
| `notification/text-default-title` | `#000000` | `#ffffff` |
| `notification/text-default-title 2` | `#000000` | `#ffffff` |
| `notification/text-default-button text` | `#8f8f8f` | `#dddddd` |
| `notification/text-invert-title-00` | `#ffffff` | `#000000` |

### state primary (강조 색)
| token | light | dark |
|---|---|---|
| `notification/info-primary` | `#5681ff` | `#000000` |
| `notification/critical-primary` | `#df3422` | `#000000` |
| `notification/critical-primary 2` | `#440d05` | `#000000` |
| `notification/warning-primary` | `#6b4300` | `#000000` |
| `notification/warning-primary 2` | `#251700` | `#000000` |
| `notification/success-primary` | `#047c4b` | `#000000` |
| `notification/success-primary 2` | `#00261d` | `#000000` |
| `notification/question-primary` | `#ad69e9` | `#000000` |
| `notification/question-primary 2` | `#320060` | `#000000` |
| `notification/info-primary 2` | `#0f1c52` | `#000000` |

### border · icon · etc
| token | light | dark |
|---|---|---|
| `notification/border-default` | `#a5a5a5` | `#000000` |
| `notification/border-info 2` | `#a5a5a5` | `#000000` |
| `notification/icon` | `#000000` | `#ffffff` |
| `notification/shadow-00` | `#727272` | `#dddddd` |
| `notification/invert2` | `#f4f4f4` | `#ffffff` |

## Variants

- **type**: default / general / info / success / warning / critical(error) / question / invert
- **size**: md / lg
- **layout**: toast (자동 사라짐) / banner (수동 닫기) / inline

## Usage Notes

- toast는 우측 상단/하단 고정, 3~5초 후 자동 사라짐
- banner는 페이지 상단 inline 영역 (사용자가 X 닫기)
- critical(error)는 적색 강조 (`critical-primary` `#df3422`)
- success는 녹색 (`success-primary` `#047c4b`), warning은 황색
- icon은 alert 종류별로 매칭 (check/alert/info/question/warning)
- 알림 본문 최대 2줄 권장 (그 이상은 modal 사용)
