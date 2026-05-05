# Popover

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / node `2445:26783` (production component, design_context + variable_defs)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:181391`, `1:181825` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#popover`, `tokens/number/component.js#popover`.
> 토큰 prefix: `popover/*` + `tooltip/radius-md` (radius 공유).

## Overview
- 작은 floating 컨테이너 (tooltip보다 풍부, popup보다 가벼움)
- 트리거 옆에 부착되는 floating layer + arrow
- 모드: **light** (production variable_defs 기준)
- 4 type × 2 button = **8 base variants** + arrow boolean + actionButton02 boolean
- shadow: `v0.1/elevation-40` 두 단

## Number tokens (Mode 1) — production 검증

| token | px | 비고 |
|---|---|---|
| `popover/padding-md` | 12 | 컨테이너 패딩 |
| `popover/gap` | 12 | slot ↔ button 간격 (action-button 모드) |
| `popover/gap-content` | 8 | (참조용) 내부 텍스트 간격 |
| `tooltip/radius-md` | 4 | popover의 radius (tooltip 토큰 공유) |

> figma-export.json에는 `popover/padding-lg`=8 / `popover/radius-lg`=4가 있지만 production 컴포넌트는 사용하지 않음 — `padding-md` 단일.

## Color tokens — production (light)

### bg
| token | light |
|---|---|
| `popover/bg-default` | `#2b2b2b` (dark gray — 기본 강조) |
| `popover/bg-inverted` | `#f9f9f9` (light gray — 반전) |
| `popover/bg-info` | `#e5f0fe` (light blue) |
| `popover/bg-warning` | `#fff197` (light yellow) |

### line (info/warning 외곽 border 색)
| token | light |
|---|---|
| `popover/line-info` | `#accffd` |
| `popover/line-warning` | `#f5c700` |

### etc
| token | light |
|---|---|
| `popover/shadow` | `#d2d2d2` |

> **중요**: 이전 문서 색상값은 dark 모드 기준이었음. production light는 위 값으로 정정.

## Variants — 4 type × 2 button × arrow × actionButton02

### type (4가지)
| type | bg | border | 용도 |
|---|---|---|---|
| `default` | `#2b2b2b` (dark) | 없음 | 기본 — 어두운 배경에 흰 텍스트 |
| `inverted` | `#f9f9f9` (light) | 없음 | 반전 — 밝은 배경 |
| `info` | `#e5f0fe` (light blue) | `#accffd` 1px | 정보 안내 |
| `warning` | `#fff197` (light yellow) | `#f5c700` 1px | 주의·경고 |

### button layout (2가지)
| button | 슬롯 크기 | 액션 |
|---|---|---|
| `close-button` | 100×100 (정사각) | 우상단 X 닫기 버튼 24×24 |
| `action-button` | 100h × full width | 하단 액션 버튼 1~2개 (`actionButton02` boolean) |

### boolean
- **arrow**: true / false — 외부에 부착 화살표 표시 (기본 24×10, info/warning은 15.4×9 with mask)
- **actionButton02**: true / false — `action-button` 모드에서 좌측 보조 버튼 표시 여부

## Variant IDs

| type \\ button | close-button | action-button |
|---|---|---|
| default | `2445:26784` | `2552:45433` |
| inverted | `2445:26787` | `2552:45437` |
| info | `2445:26790` | `2552:45441` |
| warning | `2445:26793` | `2552:45445` |

### Arrow position 노드 (type별)
| type | arrow position node |
|---|---|
| default | `2445:26786` |
| inverted | `2445:26789` |
| info | `2445:26792` |
| warning | `2445:26795` |

## Anatomy

```
popover (radius=4, padding-md=12, gap=12, shadow=elevation-40)
├─ [arrow] (24×10, top -8px, 부모 트리거 가리킴)
├─ slot
│  ├─ close-button: 100×100 (정사각 콘텐츠 영역) + 우측 X 버튼 24×24
│  └─ action-button: 100h × full-width 슬롯 + 하단 popover_element (버튼 row)
└─ (action-button only) popover_element
   ├─ Button1 (subtle, action button02 boolean) — 좌
   └─ Button2 (primary, neutral-primary `#2b2b2b` bg + white fg) — 우
```

### Arrow 크기 (type별 차이)
| type | arrow shape |
|---|---|
| default / inverted | `24w × 10h` (Vector 12×7) — 단순 삼각 |
| info / warning | `24w × 10h` (Vector 15.4×9 + Mask 13.7×8) — border와 함께 더 큰 마스크 그룹 |

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| 콘텐츠 본문 | `body/sm (R)` | Pretendard 400 / 14 / 20 |
| 콘텐츠 SB | `body/md (SB)` | Pretendard 600 / 16 / 24 |
| 액션 버튼 | `button/sm (SB)` | Pretendard 600 / 14 / 20 |

## Action buttons (`action-button` 모드)

- 사이즈: button/sm (height 28, min-w 44)
- 패딩: `h-padding/md`=8 / `text-padding/md`=4 / py=16
- 라디우스: `corner-radius/sm`=4
- 테두리: `border/md`=1px

| 위치 | 스타일 | bg | fg | border |
|---|---|---|---|---|
| 좌 (Button1, optional) | subtle | `bg/text` `#ffffff00` (transparent) | `fg/subtle` `#565656` | `border/subtle` (transparent) |
| 우 (Button2, primary) | neutral-primary | `bg/neutral-primary` `#2b2b2b` | `fg/neutral-primary` `#f9f9f9` | `border/neutral-primary` `#2b2b2b` |
| 우 (inverted 시) | (same — neutral-primary 유지) | `#2b2b2b` | `#f9f9f9` | `border/neutral-secondary`(`#a5a5a5`)로 살짝 다름 |

## Close button (`close-button` 모드)

- 24×24 size, `general/disagree`(X) 아이콘 20×20
- subtle 스타일 (transparent bg, transparent border)
- focus ring 외곽 inset -3px / radius 10

## Usage Notes

- variant 매칭 verbatim:
  - `type=default` / `inverted` / `info` / `warning`
  - `button=close-button` / `action-button` (하이픈 포함)
  - `arrow=true|false`, `actionButton02=true|false`
- popover와 popup의 차이: **popover = 트리거 부착형 (앵커 있음, 화살표 가리킴)** / popup = 단독 floating
- popover와 tooltip의 차이: tooltip은 hover 짧은 텍스트 / popover는 클릭 후 풍부한 콘텐츠(form, button 포함 가능)
- info/warning은 외곽선이 있는 floating 박스 — 색상 톤으로 의미 전달
- inverted는 default와 배경 반전 (밝은 콘텐츠 영역 위 강조용)
- 트리거 클릭 또는 hover로 열림 — 외부 클릭/ESC로 닫음
- arrow는 트리거 위치 가리킴 — info/warning은 border와 일치하도록 확장된 마스크 사용
- close-button 모드는 콘텐츠 자체가 핵심 (예: 이미지, 미니 프로필)
- action-button 모드는 사용자 결정 요청 (예: 추가 확인, 삭제 확인)
- actionButton02=false로 두면 단일 primary 버튼만 표시 (취소 없이 즉시 액션)
- `popover/radius`는 `tooltip/radius-md`(4)를 공유 — 두 컴포넌트 일관성
