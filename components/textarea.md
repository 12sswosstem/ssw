# Textarea

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#textarea`, `tokens/number/component.js#textarea`.
> 색상 토큰은 input과 공유 (`text input/*`, `input common/*`).

## Overview
- 다중행 텍스트 입력 필드
- size: sm / md / lg
- type: placeholder / inputed
- state: default / hover / focus / disabled (disabled는 inputed only)
- 총 21 variants

## Size 스펙 (288px width 기준)

| size | W×H | text area | 라벨 | placeholder | line-height |
|---|---|---|---|---|---|
| sm | 288×116 | ~68 | Medium 14 | Regular 14 | 20 |
| md | 288×124 | 68 | Medium 14 | Regular 16 | 24 |
| lg | 288×134 | ~78 | Medium 16 (lh24) | Regular 18 | 26 |

## Color tokens (input과 공유)

### State 색상 (text area 컨테이너)
| state | bg (light) | border (light) |
|---|---|---|
| default | `#ffffff` | `#a5a5a5` 1px |
| hover | `#ffffff` | `#eb6100` 1px |
| focus | `#ffffff` | `#000000` 2px |
| disabled | `#eeeeee` | `#bcbcbc` 1px |

### 텍스트 색상
- Label: `#565656` (light) / `#0e0e0e` (dark)
- Required: `#df3422` (light) / `#727272` (dark)
- Placeholder: `#bcbcbc` (light) / `#a5a5a5` (dark)
- inputed: `#1d1d1d` (light) / `#393939` (dark)
- disabled text: `#a5a5a5` (light) / `#8f8f8f` (dark)
- SubText/help: `#8f8f8f` (light) / `#a5a5a5` (dark)

## 구조 (3-Section Vertical)

```
[Heading 20h] (optional: Label/Required/suffix/Trailing)
  gap 8
[Text Area 68h] (input_v0.2 + textarea_resize 20×20 우하단 #565656)
  gap 8
[Footer 20h] (optional: help text + Character Count)
```

## Variants

- **size**: sm / md / lg
- **type**: placeholder / inputed
- **state**: default / hover / focus / disabled (disabled는 inputed only)

## Usage Notes

- 우하단에 `textarea_resize` 아이콘(20×20, `#565656`) — 사용자가 크기 조정 가능 표시
- focus 시 border 2px (다른 state는 1px)
- Character Count는 footer 우측 정렬
- input/text input 토큰을 그대로 공유 — 별도 textarea 토큰 없음
