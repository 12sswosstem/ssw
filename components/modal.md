# Modal

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / node `2632:14800` (production component, design_context + variable_defs)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:162323`, `1:162675` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#modal`, `tokens/number/component.js#modal`.
> 토큰 prefix: `modal/*`.

## Overview
- 작업 흐름을 막고 사용자 확인을 요구하는 dialog
- 모드: **light** (production variable_defs 기준)
- **6 style × 2 type = 12 variants** (atomic 컴포넌트 `_modal_atomic`)
- v0.4 토큰 + v0.1 elevation 사용

## Number tokens (Mode 1) — production 검증

| token | px |
|---|---|
| `modal/padding` | 20 |
| `modal/gap` | 16 (icon row → button row) |
| `modal/gap-text` | 8 (title → body) |
| `modal/gap-icon` | 12 (icon → text) |
| `modal/radius` | **2** (매우 미세한 둥글기) |

### Width
| type | width |
|---|---|
| horizontal | 400 |
| vertical | 320 |

### Border
- `border-width: 2px solid` — 색상은 `outline-{style}` 토큰
- shadow: `v0.1/elevation-50` (0, 4, 4) + (0, 8, 12, spread 6)

## Color tokens — production (light)

### bg / text
| token | light |
|---|---|
| `modal/bg` | `#ffffff` |
| `modal/text-title-primary` | `#000000` |
| `modal/text-body-secondary` | `#393939` |

> 가이드 페이지(`1:162323`, `1:162675`)는 같은 토큰을 `modal/text-title`로 호출 — production 노드는 `modal/text-title-primary`. 신규 컴포넌트는 `-primary` suffix 사용.

### outline (style별 border 색)
| token | light |
|---|---|
| `modal/outline-critical` | `#f03823` (red) |
| `modal/outline-warning` | `#e6af00` (yellow) |
| `modal/outline-info` | `#3b63fb` (blue) |
| `modal/outline-success` | `#05834e` (green; 가이드는 `#0ba45d`도 사용) |
| `modal/outline-question` | `#9a47e2` (purple) |
| `modal/outline-general` | `#727272` (gray) |

## Variants

### style (6가지)

| style | outline | 아이콘 | 용도 |
|---|---|---|---|
| `critical` | red `#f03823` | warning(alert) | 위험·경고·삭제 확인 |
| `warning` | yellow `#e6af00` | alert | 주의 환기 |
| `info` | blue `#3b63fb` | info | 정보 안내 |
| `success` | green `#05834e` | check | 성공 알림 |
| `question` | purple `#9a47e2` | question | 사용자 결정 요청 |
| `general` | gray `#727272` | **없음** | 일반 알림 (아이콘 미사용) |

### type (2가지)

| type | 버튼 배치 | width |
|---|---|---|
| `horizontal` | 가로 (취소 ← 좌, 확인 → 우) | 400 |
| `vertical` | 세로 (확인 ↑ 위, 취소 ↓ 아래) | 320 |

## Variant IDs

### Wrapper (`modal_atomic` outer container)

| style \\ type | horizontal | vertical |
|---|---|---|
| critical | `2632:14732` | `2659:51991` |
| warning | `2632:14799` | `2659:51993` |
| info | `2632:15074` | `2659:51995` |
| success | `2632:15247` | `2659:51997` |
| question | `2632:15392` | `2659:51999` |
| general | `2632:17612` | `2659:52001` |

### Inner `_modal_atomic` (실제 modal 박스)

| style \\ type | horizontal | vertical |
|---|---|---|
| critical | `2632:14699` | `2659:51992` |
| warning | `2632:14767` | `2659:51994` |
| info | `2632:15075` | `2659:51996` |
| success | `2632:15248` | `2659:51998` |
| question | `2632:15393` | `2659:52000` |
| general | `2632:17613` | `2659:52002` |

## Anatomy

```
_modal_atomic (radius=2, padding=20, gap=16, border 2px outline-{style}, shadow elevation-50)
├─ icon row (gap-icon=12)
│  ├─ icon 40×40 (style=general 제외)
│  └─ content (gap-text=8)
│     ├─ title  ("This is modal title")  ← title/sm (SB) 16/20
│     └─ body   ("This is body text in modal popup")  ← body/sm Regular 14/20
└─ popover_element (action buttons, gap=8)
   ├─ button "취소" (secondary, button/lg)
   └─ button "확인" (primary, button/lg)
```

### Icon mapping (style별 system icon)
- critical → `system/modal/fill/warning` (alert 아이콘)
- warning → `system/modal/fill/alert`
- info → `system/modal/fill/info`
- success → `system/modal/fill/check`
- question → `system/modal/fill/question`
- general → (아이콘 없음)

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| title | `title/sm (SB)` | Pretendard 600 / 16 / 20 |
| body | `body/sm` | Pretendard 400 / 14 / 20 |
| button | `button/lg (SB)` | Pretendard 600 / 16 / 24 |

## Action buttons

- 사이즈: button/lg (height 40, min-w 56)
- 패딩: `h-padding/lg`=12 / `text-padding/lg`=4 / py=16
- 라디우스: `corner-radius/md`=6
- 테두리: `border/lg`=1px
- 색상:
  - **primary (확인)**: bg=`button/bg/neutral-primary` `#2b2b2b` / fg=`#f9f9f9` / border=`#2b2b2b`
  - **secondary (취소)**: bg=`button/bg/neutral-secondary` `#ffffff` / fg=`button/fg/neutral-secondary` `#565656` / border=`#a5a5a5`

### 버튼 위치 규칙
| type | 첫 번째 | 두 번째 |
|---|---|---|
| horizontal (가로) | 취소 (secondary) ← 좌 | 확인 (primary) → 우 |
| vertical (세로) | 확인 (primary) ↑ 위 | 취소 (secondary) ↓ 아래 |

## Usage Notes

- variant 매칭 시 verbatim:
  - `style=critical` / `warning` / `info` / `success` / `question` / `general`
  - `type=horizontal` / `vertical`
- `general`은 **아이콘 없음** — 단순 안내/일반 알림
- `critical`은 destructive action (삭제·되돌릴 수 없는 작업) 확인용
- 버튼 위치는 type별로 자동 결정 — vertical에서는 primary가 위, secondary가 아래 (모바일 친화)
- horizontal width 400, vertical width 320 (고정)
- dim background는 시스템 overlay (`rgba(0,0,0,0.4)` 권장)
- ESC 키 / dim 외부 클릭으로 닫기 (옵션, 단 critical은 명시적 버튼만)
- shadow는 `v0.1/elevation-50` 두 단 (`(0,4) blur 4` + `(0,8) blur 12 spread 6`)
- title은 16/20 SemiBold, body는 14/20 Regular — 짧고 명확한 문구 권장
- success outline은 production `#05834e` (light); 가이드 노드는 `#0ba45d` 사용 — 신규 사용 시 `#05834e` 권장
