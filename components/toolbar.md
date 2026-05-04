# Toolbar

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#toolbar`.
> 토큰 prefix: `toolbar/*`.

## Overview
- 이미지/영상 편집·작업 도구 모음 (예: 줌, 펜, 회전, 측정 등)
- 70개의 툴 컴포넌트 셋
- state: default / hover / selected
- 보통 좌측/하단에 세로 또는 가로 스택

## Color tokens (light / dark)

### icon
| token | light | dark |
|---|---|---|
| `toolbar/icon/icon-default` | `#a5a5a5` | `#d2d2d2` |
| `toolbar/icon/icon-hover` | `#d2d2d2` | `#a5a5a5` |
| `toolbar/icon/icon-selected` | `#eeeeee` | `#000000` |
| `toolbar/icon/icon-stroke` | `#bcbcbc` | `#8f8f8f` |

### container
| token | light | dark |
|---|---|---|
| `toolbar/container/container-bg-default` | `#0e0e0e` | `#d2d2d2` |
| `toolbar/container/container-bg-hover` | `rgba(255,255,255,0.2)` | `#dddddd` |
| `toolbar/container/container-bg-selected` | — | `#ffffff` |
| `toolbar/container/tool-bg-base` | `#393939` | `#ffffff` |
| `toolbar/container/tool-bg-layer1` | `#1d1d1d` | `#e9e9e9` |

### bg
| token | light | dark |
|---|---|---|
| `toolbar/bg/bg_base` | `#1d1d1d` | `#e9e9e9` |
| `toolbar/bg/bg_ct` | `#0e0e0e` | `#ffffff` |
| `toolbar/bg/bg_layer _1` | `#e9e9e9` | `#e9e9e9` |
| `toolbar/bg/bg_layer_2` | `#1d1d1d` | `#eeeeee` |

### text · etc
| token | light | dark |
|---|---|---|
| `toolbar/etc/text-default` | `#d2d2d2` | `#393939` |
| `toolbar/etc/text-selected` | `#f4f4f4` | `#000000` |
| `toolbar/etc/text-selected-brand` | — | `#000000` |
| `toolbar/etc/border` | `#a5a5a5` | `#e9e9e9` |
| `toolbar/etc/divider` | `#8f8f8f` | `#d2d2d2` |
| `toolbar/etc/gnb-bg` | `#d2d2d2` | `#bcbcbc` |

## Variants

- **state**: default / hover / selected
- **icon** 70여종 (image/video 편집용)
- shape는 정사각 또는 직사각 컨테이너

## Usage Notes

- 다크 톤 배경(`bg_ct` `#0e0e0e`)에 옅은 아이콘이 기본 — 이미지 편집 UI에 어울림
- selected 시 container bg는 흰색(밝은 컬러)으로 변경 (반전 효과)
- text-selected-brand는 선택된 항목의 brand 색 변형 (특수 케이스)
- 이미지 캔버스 위에 floating으로 띄우는 패턴이 일반적
