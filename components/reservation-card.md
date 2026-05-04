# Reservation Card

> 출처: 메모리 (Figma `4031:27295` 컴포넌트 셋, 6 variants).
> JS 토큰: `tokens/color/component.js#reservationCard`.
> 토큰 prefix: 별도 prefix 없음 (인스턴스 fill로 처리).

## Overview
- 치과 예약 타임테이블용 슬롯 카드
- 30분 단위(1case, 46h) 또는 1시간 단위(2case, 92h) 표시
- stae: defalut / defalut-2 / disabled (Figma 원본 오타 — `state`/`default` 아님)

## Variants

| stae | type | 크기 | ID | 배경 | 텍스트 |
|---|---|---|---|---|---|
| defalut | 1case | 190×46 | `4035:27647` | #EEEEEE + #FFFFFF 0.9op | #000000 |
| defalut | ㅋ | 190×46 | `4066:27601` | #8F8F8F + #FFFFFF 0.9op | #000000 |
| defalut | 2case | 190×92 | `4035:27286` | #EEEEEE + #FFFFFF 0.9op | #000000 |
| defalut-2 | 2case | 186×92 | `4066:27595` | #8F8F8F + #FFFFFF 0.9op | #000000 |
| disabled | 1case | 190×32 | `4031:27294` | #393939 + #FFFFFF 0.9op | #727272 |
| disabled | 2case | 186×92 | `4035:27406` | #393939 + #FFFFFF 0.9op | #000000 |

## 색상 패턴
- 배경 = 컬러 fill + #FFFFFF 0.9 opacity 오버레이 (파스텔 효과)
- 폰트: Pretendard SemiBold 12 / line-height 14

## Variants (Figma 원본)

- **stae**: defalut / defalut-2 / disabled (오타 보존 필수)
- **type**: 1case (30분) / 2case (1시간) / ㅋ (한글 'ㅋ' — 미정의 변형)

## Usage Notes

- variant prop 매칭 시 `stae`, `defalut` 오타 그대로 사용
- ㅋ type은 어느 시점의 임시 표기 — 일반 작업에서 비권장
- 1case는 너비 190(default) 또는 186(disabled-2 일부)
- 2case는 1시간 슬롯 — 두 줄 레이아웃 가능
- 캘린더 일정 표시 시 환자명/시술명/시간을 표시
- 색상은 진료 종류별 다양 (`calendar/mark/*` 토큰과 연동 가능)
