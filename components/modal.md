# Modal

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#modal`, `tokens/number/component.js#modal`.
> 토큰 prefix: `modal/*`.

## Overview
- 작업 흐름을 막고 사용자 확인을 요구하는 dialog
- 단일 액션 / 이중 액션 / 정보 전달용 / 확인용
- 보통 dim 배경 위에 floating

## Number tokens (Mode 1)

| token | px |
|---|---|
| `modal/padding` | 20 |
| `modal/gap` | 16 |
| `modal/gap-text` | 8 |
| `modal/gap-icon` | 12 |

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `modal/bg` | `#000000` | `#e9e9e9` |
| `modal/text-title-primary` | `#ffffff` | `#000000` |
| `modal/text-body-secondary` | `#e9e9e9` | `#393939` |
| `modal/outline-general` | `#d2d2d2` | `#8f8f8f` |

## Variants

- 알림 종류: check / alert / info / question / warning (아이콘 변형)
- 액션 개수: 1 button / 2 buttons
- size: 일반적으로 360~480 width 고정

## 구조

```
modal (rounded, padding=20, gap=16)
├─ header (icon + title) — gap-icon=12
├─ body (text-body) — gap-text=8 from title
└─ footer (1~2 buttons) — gap=16 from body
```

## Usage Notes

- dim background는 `rgba(0,0,0,0.4)` 권장 (system overlay)
- 이중 버튼일 때 우측이 primary action, 좌측이 cancel/secondary
- ESC 키로 닫기 + 외부 dim 클릭으로 닫기 (옵션)
- 정보 전달용 modal은 단일 "확인" 버튼
- 확인용 modal은 destructive action일 때 destructive-primary 버튼 사용
- 버튼은 button 컴포넌트 lg(40) 또는 md(32) size 권장
