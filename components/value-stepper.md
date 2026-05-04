# Value Stepper

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#valueStepper`.
> 토큰 prefix: `value stepper/*`.

## Overview
- 숫자 증감 입력 필드 (− [숫자] +)
- 좌/우 버튼 + 중앙 숫자 입력
- input과 유사 사이즈 사용

## Color tokens (light / dark)

| token | light | dark |
|---|---|---|
| `value stepper/border` | `#a5a5a5` | `#dddddd` |
| `value stepper/bg` | `#000000` | `#ffffff` |
| `value stepper/fg` | `#d2d2d2` | `#a5a5a5` |

## Number tokens
- 별도 number 토큰 없음 (input/textinput 토큰 공유 권장)

## Variants
- 별도 variant prop 없음 (size는 input과 동일 스케일 사용)
- state: default / hover / focus / disabled (input 패턴 따름)

## Usage Notes

- 숫자 증감만 처리 — 텍스트 입력은 별도 input 사용
- ± 버튼은 button 스타일이 아닌 자체 fg 색상 사용
- min/max 도달 시 해당 측 버튼 disabled 상태로 전환
- input 토큰과 사이즈/state 패턴이 동일하므로 input.md 참고
