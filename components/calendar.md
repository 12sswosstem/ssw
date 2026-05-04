# Calendar

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#calendar`.
> 토큰 prefix: `calendar/*`.

## Overview
- 치과 PMS 진료 일정/예약 캘린더
- 날짜 셀 + 의사별/진료 종류별 마크 표시
- 진료 종류 마커: 일반/응급/처방/입원/X-ray/예약/내원/야간 등

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `calendar/bg/bg_default` | `#000000` | `#eeeeee` |
| `calendar/bg/bg_dual` | `#0e0e0e` | `#e9e9e9` |
| `calendar/bg/bg_day` | `#2b2b2b` | `#e9e9e9` |
| `calendar/bg/bg_date` | `#000000` | `#e9e9e9` |
| `calendar/bg/bg_active` | `#180a00` | `#fbdfcc` |
| `calendar/bg/bg_select` | `#180a00` | `#fbdfcc` |
| `calendar/bg/bg_hover` | `#1d1d1d` | `#dddddd` |

### text
| token | light | dark |
|---|---|---|
| `calendar/text/default` | `#ffffff` | `#1d1d1d` |
| `calendar/text/select` | `#000000` | `#000000` |
| `calendar/text/sunday` | `#df3422` | `#b12617` |
| `calendar/text/saturday` | `#4069fd` | `#2549e5` |
| `calendar/text/legend` | `#e9e9e9` | `#565656` |

### border
| token | light | dark |
|---|---|---|
| `calendar/border/default` | `#393939` | `#e9e9e9` |
| `calendar/border/disabled` | `#a5a5a5` | `#dddddd` |
| `calendar/border/thisweek` | `#0d7dba` | `#0d7dba` |

### mark (진료 종류 표시)
| token | light | dark |
|---|---|---|
| `calendar/mark/mark_doctor-1` | `#cf1f5c` | `#cf1f5c` |
| `calendar/mark/mark_doctor-2` | `#d549eb` | `#d549eb` |
| `calendar/mark/mark_doctor-3` | `#046959` | `#046959` |
| `calendar/mark/mark_doctor-4` | `#b0623b` | `#b0623b` |
| `calendar/mark/mark_first` | `#533400` | `#533400` |
| `calendar/mark/mark_return` | `#3c7a0f` | `#3c7a0f` |
| `calendar/mark/mark_medication` | `#0d7dba` | `#0d7dba` |
| `calendar/mark/mark_imaging` | `#9d4ee4` | `#9d4ee4` |
| `calendar/mark/mark_lab-test` | `#98073c` | `#98073c` |
| `calendar/mark/mark_icon` | `#dddddd` | `#a5a5a5` |
| `calendar/mark/bg_general` | `#df3422` | `#df3422` |
| `calendar/mark/bg_inpatient` | `#03545c` | `#03545c` |
| `calendar/mark/bg_reservation` | `#73180b` | `#73180b` |

### legend (범례)
| token | light | dark |
|---|---|---|
| `calendar/legend/bg_first` | `#533400` | `#da9f00` |
| `calendar/legend/bg_return` | `#3c7a0f` | `#64be23` |
| `calendar/legend/bg_medication` | `#0d7dba` | `#0d7dba` |
| `calendar/legend/bg_imaging` | `#9d4ee4` | `#9d4ee4` |
| `calendar/legend/bg_lab-test` | `#98073c` | `#98073c` |
| `calendar/legend/bg_general` | `#df3422` | `#ff8678` |
| `calendar/legend/bg_inpatient` | `#03545c` | `#0cad8e` |
| `calendar/legend/bg_reservation` | `#7b002d` | `#ffa3c2` |
| `calendar/legend/bg_night` | `#53009f` | `#eee0fa` |
| `calendar/legend/bg_icon` | `#dddddd` | `#a5a5a5` |

## Variants
- 진료 종류·의사별 마크 색상이 정의됨
- 일·토요일 별도 색상 (sunday/saturday)
- thisweek 강조 border (`#0d7dba`)
- bg_dual: 2주 보기 등 듀얼 모드
- bg_active vs bg_select: active는 hover/focus, select는 선택된 날짜

## Usage Notes

- 진료 종류·의사별 색상은 dark 모드에서도 동일 (가독성/일관성)
- 일요일은 빨강, 토요일은 파랑 (한국 관행)
- thisweek 행은 border로 강조
- legend(범례)는 캘린더 하단 색상-라벨 매핑
- mark_* 토큰은 점/막대 형태 마크에 사용
- bg_* (legend/mark)는 배지/태그 형태 표시에 사용
