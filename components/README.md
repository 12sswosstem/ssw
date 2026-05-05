# Components

Osstem Implant 디자인시스템 컴포넌트 학습 문서.
각 MD는 `figma-export.json`(2026-05-04 export)에서 추출한 색상·숫자 토큰과 typography 스타일 기준으로 작성됨.

> **범위**: `tokens/color/component.js`와 `tokens/number/component.js`에 선언된 모든 컴포넌트 namespace를 1:1 매핑.

## 목록 (35개)

### Form / Input
| 컴포넌트 | 토큰 키 |
|---|---|
| [Button](./button.md) | `button` |
| [Input (TextInput)](./input.md) | `input` (text input + input common) |
| [Textarea](./textarea.md) | `textarea` (input 토큰 공유) |
| [Dropdown](./dropdown.md) | `dropdown` (input_(dropdown)) |
| [Value Stepper](./value-stepper.md) | `valueStepper` |

### Selection
| 컴포넌트 | 토큰 키 |
|---|---|
| [Checkbox](./checkbox.md) | `checkbox` (control 공유) |
| [Radio](./radio.md) | `radio` (control 공유) |
| [Switch](./switch.md) | `switchControl` (control 공유) |

### Navigation
| 컴포넌트 | 토큰 키 |
|---|---|
| [Tab](./tab.md) | `tab` (line_tab + contained_tab) |
| [Segmented Control](./segmented-control.md) | `segmentedControl` |
| [Context Menu](./context-menu.md) | `contextMenu` (menu/*) |
| [Breadcrumb](./breadcrumb.md) | `breadcrumb` |
| [GNB](./gnb.md) | `gnb` |
| [Toolbar](./toolbar.md) | `toolbar` |

### Display
| 컴포넌트 | 토큰 키 |
|---|---|
| [Tag](./tag.md) | `tag` |
| [Chip](./chip.md) | `chip` |
| [Badge](./badge.md) | `badge` |
| [Avatar](./avatar.md) | `avatar` |
| [Divider](./divider.md) | `divider` |
| [Rating](./rating.md) | `rating` |

### Layout
| 컴포넌트 | 토큰 키 |
|---|---|
| [Card](./card.md) | `card` |
| [Reservation Card](./reservation-card.md) | `reservationCard` |
| [Table](./table.md) | `table` |
| [List](./list.md) | `list` |
| [Expandable List](./expandable-list.md) | `expandableList` |
| [HMI](./hmi.md) | `hmi` |

### Feedback
| 컴포넌트 | 토큰 키 |
|---|---|
| [Tooltip](./tooltip.md) | `tooltip` |
| [Popover](./popover.md) | `popover` |
| [Popup](./popup.md) | `popup` |
| [Modal](./modal.md) | `modal` |
| [Notification](./notification.md) | `notification` |
| [Coachmark](./coachmark.md) | `coachmark` |
| [Progress](./progress.md) | `progress` (circle & bar) |
| [Progress Stepper](./progress-stepper.md) | `progress` (단계별) |
| [Spinner](./spinner.md) | `spinner` (무한 로딩) |
| [Slider](./slider.md) | `slider` |

### Calendar / Date
| 컴포넌트 | 토큰 키 |
|---|---|
| [Calendar](./calendar.md) | `calendar` |

## MD 작성 규칙

각 컴포넌트 MD는 다음 섹션을 포함:

1. **Overview** — 토큰 collection 출처, 모드(light/dark)
2. **Number tokens** — size·padding·radius·border (단위 px)
3. **Color tokens** — 모드별 hex (light/dark)
4. **Typography** — 사용되는 textStyle 이름·weight·size·line-height (해당 시)
5. **Variants / States** — 토큰 이름에서 추출 가능한 state·variant 목록
6. **Usage Notes** — 적용 시 주의사항

## 출처

- `figma-export.json` (2026-05-04 export, file: `공통 컴포넌트 (Copy)`)
- Figma Variable Collections:
  - Color_component (`896:76023`) — light·dark
  - Color_primitive (`642:26063`) — Static palette
  - Color_semantic (`966:86157`) — alert·common·brand
  - Number_component (`923:58268`) — Mode 1
  - Number_sementic (`43:18571`) — Size·Typography
- 일부 컴포넌트는 production Figma 노드 `get_variable_defs` 직접 참조 (button.md 참고)
