# Avatar

> 출처: `figma-export.json` → Number_component(`923:58268`).
> JS 토큰: `tokens/color/component.js#avatar`, `tokens/number/component.js#avatar`.
> 토큰 prefix: `avatar/*`.

## Overview
- 사용자/엔티티 식별용 원형/사각 이미지 또는 이니셜 아바타
- type: image / initial / default
- shape: circle / rounded / square
- size: xs(24) / sm(32) / md(40) / lg(48) / xl(64) / 2xl(80)
- boolean: activeRing / border / indicator / badge

## Number tokens (Mode 1)

### corner radius (px)
| shape | radius |
|---|---|
| circle | 999 (`avatar/corner radius/circle`) |
| rounded | 12 (`avatar/corner radius/rounded`) |
| rounded-ring | 14 (`avatar/corner radius/rounded-ring`) |
| square | 0 (`avatar/corner radius/square`) |

### stroke (px)
| size | stroke |
|---|---|
| xs | 1 |
| sm | 1.6 |
| md | 2.2 |
| lg | 2.6 |
| xl | 3 |
| 2xl | 4.2 |

## Color tokens
- figma-export.json에 별도 `avatar/*` color 토큰 없음
- 색상은 인스턴스 fill 또는 image content로 처리 (DS 미바인딩)
- 인스턴스 사용을 권장 — DS Runner의 `importComponentSetByKeyAsync` 활용

## Variants

- **type**: image / initial(이니셜) / default(아이콘)
- **shape**: circle / rounded / square
- **size**: xs / sm / md / lg / xl / 2xl
- **booleans**: activeRing / border / indicator / badge

## Usage Notes

- 색상 변수가 없으므로 직접 색상 하드코딩 대신 **인스턴스 사용 필수**
- activeRing은 활성 사용자 표시 (특히 채팅/통화 컨텍스트)
- indicator는 우하단 점 표시 (online status 등)
- badge는 우상단 숫자/아이콘 (알림 카운트)
- 그룹 표시 시 -8px overlap 권장 (size에 비례 조정)
