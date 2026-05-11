# Spinner

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `4206:45745` `spinner_v0.2`
> - 컴포넌트 셋: `4206:44689` `spinner_atom_v0.2` (12 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:204842`
>
> JS 토큰: `tokens/color/component.js#spinner`.
> 토큰 prefix: `progress circle & bar/*` (color 공유) + `brand/*` (brand-A 변형).

## Overview
- 무한 로딩(indeterminate) 표시용 회전 스피너
- 모드: **light** (production variable_defs 기준)
- 컴포넌트 셋: `spinner_atom_v0.2` — 단일 atom (3 style × 4 step animation frame = 12 variants)
- 기본 크기: **48 × 48 px** (atom)
- progress circle (`Animated progress circle-v0.12`)와 별개 — spinner는 단순 회전, circle은 % 진행 단계

## Variants — 2축

verbatim prop:

- **style**: `dot` / `circle` / `gradient` (3가지 시각 스타일)
- **step**: `1` / `2` / `3` / `4` (회전 애니메이션의 4 프레임)

총 3 × 4 = **12 variants**

### Variant IDs

| step \\ style | dot | circle | gradient |
|---|---|---|---|
| 1 | `4206:44690` | `4206:45020` | `4206:45439` |
| 2 | `4206:44701` | `4206:45019` | `4206:45443` |
| 3 | `4206:44712` | `4206:45018` | `4206:45447` |
| 4 | `4206:44723` | `4206:45017` | `4206:45451` |

## Style 별 시각

| style | 시각 | 애니메이션 |
|---|---|---|
| `dot` | 4개의 점이 원형 배치 | step 1→2→3→4 순환, 각 step별 점 강도 변화 |
| `circle` | 원형 stroke | step 1→2→3→4 순환, stroke 길이/위치 변화 |
| `gradient` | 그라디언트 fill | step 1→2→3→4 순환, gradient 회전 |

## Color tokens — production (light)

### brand 색상 (spinner 주 색상)
| token | light |
|---|---|
| `brand/brand-A_default` | `#eb6100` (orange — 메인) |
| `brand/brand-A_light` | `#f3a066` |
| `brand/brand-A_darker` | `#8d3a00` |
| `brand/brand-A_morelighter` | `#fbdfcc` |

> `common/brand-A_*` namespace로도 동일 매핑 (UI-Kit-Guide 기준).

### progress 공유 색상
| token | light |
|---|---|
| `progress circle & bar/rest-primary` | `#e1e1e199` (60% alpha gray track) |
| `progress circle & bar/active-primary-brand` | `#eb6100` (active orange) |

## Number tokens
- 별도 spinner 전용 토큰 없음 (size는 인스턴스 resize로 처리)
- atom 기본: 48×48
- 일반 사용 사이즈 (가이드 sample 기준): 120×120 (큰 스피너)
- 작은 인라인은 16~24px 범위 권장

## Anatomy

### dot style
```
   ●
 ●   ●     step 1: 우상단 점 가장 강함
   ●

   ●
 ●   ●     step 2: 우하단 점 가장 강함
   ●

   ●
 ●   ●     step 3: 좌하단 점 가장 강함
   ●

   ●
 ●   ●     step 4: 좌상단 점 가장 강함
   ●
```

### circle style
- 원형 ring 일부만 그림
- step별로 ring 시작점과 길이가 회전

### gradient style
- 원형 영역 안에 conic gradient (orange → transparent)
- step별로 gradient 회전 각도 변화

## Usage Notes

- variant 매칭 verbatim:
  - `style=dot` / `style=circle` / `style=gradient`
  - `step=1` / `step=2` / `step=3` / `step=4`
- 4 step을 순환하여 회전 애니메이션 구현 (각 step ≈ 90° 회전)
- 코드에서는 보통 CSS animation 또는 SVG로 단일 인스턴스 + `animation-play-state` 회전
- Figma 인스턴스를 직접 회전시키지 말고 step variant를 시퀀스로 재생하는 방식 권장
- 기본 색상은 brand orange (`#eb6100`) — neutral 톤 필요 시 fill만 따로 변경
- progress circle의 indeterminate state 대신 spinner 사용 권장 (더 가벼운 시각)
- 사이즈:
  - 16~24px: 인라인 텍스트 옆 (loading 라벨 등)
  - 32~48px: 카드/모달 내부 로딩
  - 64~120px: 전체 화면 로딩 (full-page overlay)
- progress circle과 차이:
  - **spinner**: 무한 로딩 (% 알 수 없음)
  - **progress circle**: % 표시 (determinate)
- 접근성: `role="status"` + `aria-label="로딩 중"` 필수 (시각적 표시 + 스크린 리더)
