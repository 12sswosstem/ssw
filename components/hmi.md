# HMI (Human-Machine Interface)

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#hmi`.
> 토큰 prefix: `HMI/*`.

## Overview
- HMI(키오스크/터치스크린) 화면 패턴 토큰 — 단일 컴포넌트가 아닌 **화면 단위 토큰 집합**
- 큰 터치 영역, 단순한 컬러, 명확한 contrast
- list와 유사하지만 터치 환경 최적화

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `HMI/bg/default` | `#000000` | `#fefefe` |
| `HMI/bg/active` | `#000000` | `#fefefe` |
| `HMI/bg/hover` | `rgba(255,255,255,0.05)` | `#fefefe` |
| `HMI/bg/selected` | `rgba(235,97,0,0.1)` | `#fefefe` |
| `HMI/bg/disabled` | `#8f8f8f` | `#eeeeee` |
| `HMI/bg/dim` | `rgba(255,255,255,0.4)` | `rgba(0,0,0,0.4)` |

### text
| token | light | dark |
|---|---|---|
| `HMI/text/primary-default` | `#dddddd` | `#727272` |
| `HMI/text/primary-active` | `#fefefe` | `#020202` |
| `HMI/text/secondary-label` | `#d2d2d2` | `#d2d2d2` |
| `HMI/text/disabled` | `#bcbcbc` | `#8f8f8f` |
| `HMI/text/placeholder` | `#bcbcbc` | `#a5a5a5` |
| `HMI/text/read` | `#d2d2d2` | `#a5a5a5` |
| `HMI/text/fg/default` | `#bcbcbc` | `#727272` |
| `HMI/text/fg/active` | `#eeeeee` | `#393939` |
| `HMI/text/fg/disabled` | `#bcbcbc` | `#8f8f8f` |

### border
| token | light | dark |
|---|---|---|
| `HMI/border/default` | `#8f8f8f` | `#bcbcbc` |
| `HMI/border/illust` | `#dddddd` | `#393939` |
| `HMI/border/logo` | — | `#000000` |

### icon · etc
| token | light | dark |
|---|---|---|
| `HMI/icon/default` | `#bcbcbc` | `#d2d2d2` |
| `HMI/etc/required mark` | `#df3422` | `#727272` |

## Variants
- 단일 컴포넌트가 아니라 **화면 패턴 토큰** — list/button/input 등을 HMI 컨텍스트로 조합

## Usage Notes

- list 토큰과 유사하지만 일부 값 다름 (HMI는 큰 터치 영역에 최적화)
- 터치 대상 최소 48×48 (Apple HIG/Material 권장)
- dim은 모달/드로어 dim background 색상 (light=흰색 알파, dark=검정 알파)
- illust border는 일러스트/이미지 outline용
- HMI 컨텍스트에서는 hover보다 selected/active state가 더 중요 (터치는 hover 없음)
- selected는 brand orange 알파 10% — 선택 강조
