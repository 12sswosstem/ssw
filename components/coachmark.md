# Coachmark

> 출처: `figma-export.json` → Color_component(`896:76023`), Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#coachmark`, `tokens/number/component.js#coachmark`.
> 토큰 prefix: `coachmark/*`.

## Overview
- 신규 사용자/기능 안내용 강조 풍선 (튜토리얼 hint)
- 타겟 요소를 가리키는 화살표 + 본문 박스
- step indicator (1 of 3 등)

## Number tokens (Mode 1)

| token | px |
|---|---|
| `coachmark/radius` | 2 |
| `coachmark/padding` | 20 |
| `coachmark/gap` | 16 |
| `coachmark/gap-text` | 8 |

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `coachmark/bg` | `#000000` | `#e9e9e9` |
| `coachmark/text-title` | `#ffffff` | `#000000` |
| `coachmark/text-body` | `#e9e9e9` | `#000000` |
| `coachmark/text-step` | `#bcbcbc` | `#a5a5a5` |

## Variants
- 별도 variant prop 없음 (코치마크 자체는 콘텐츠 변형이 핵심)
- 콘텐츠: title + body + step indicator
- 화살표 위치: top / right / bottom / left

## Usage Notes

- 다크 톤 박스 + 화살표 패턴 (light 모드 기본)
- title은 Pretendard Bold 16~18, body는 Regular 14
- step indicator는 작은 회색 텍스트 (1/3 등)
- 다음/이전 버튼은 button 컴포넌트 (subtle 또는 ghost)
- 첫 진입 시 한 번만 표시, "다시 보지 않기" 옵션 권장
