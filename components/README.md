# Components

Osstem Implant 디자인시스템 컴포넌트 학습 문서.
각 MD는 `figma-export.json`(2026-05-04 export)에서 추출한 색상·숫자 토큰과 typography 스타일 기준으로 작성됨.

> **범위**: `tokens/color/component.js`, `tokens/number/component.js`에 선언된 컴포넌트만 다룬다.
> 이 외 컴포넌트(avatar/badge/card/chip/divider/dropdown/gnb/segmented-control/textarea/...)는 향후 JS 토큰이 추가될 때 같이 작성한다.

## 목록

| 카테고리 | 컴포넌트 | 토큰 키 |
|---|---|---|
| Form | [Button](./button.md) | `button` |
| Form | [Input (TextInput)](./input.md) | `input` (textinput / input common) |
| Selection | [Checkbox](./checkbox.md) | `checkbox` (selection control) |
| Selection | [Radio](./radio.md) | `radio` (selection control) |
| Selection | [Switch](./switch.md) | `switchControl` (control common) |
| Navigation | [Tab](./tab.md) | `tab` (line_tab / contained_tab) |
| Display | [Tag](./tag.md) | `tag` |
| Layout | [Table](./table.md) | `table` |

## MD 작성 규칙

각 컴포넌트 MD는 다음 섹션을 포함:

1. **Overview** — 토큰 collection 출처, 모드(light/dark)
2. **Number tokens** — size·padding·radius·border (단위 px)
3. **Color tokens** — 모드별 hex (light/dark)
4. **Typography** — 사용되는 textStyle 이름·weight·size·line-height
5. **Variants / States** — 토큰 이름에서 추출 가능한 state·variant 목록
6. **Usage Notes** — 적용 시 주의사항

## 출처

- `figma-export.json` (2026-05-04 export, file: `공통 컴포넌트 (Copy)`)
- Figma Variable Collections:
  -  Color_component (`896:76023`) — light·dark
  -  Color_primitive (`642:26063`) — Static palette
  -  Color_semantic (`966:86157`) — alert·common·brand
  -  Number_component (`923:58268`) — Mode 1
  -  Number_sementic (`43:18571`) — Size·Typography
