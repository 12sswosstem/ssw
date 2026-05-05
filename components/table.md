# Table

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `2689:91695` `✅table_v0.4`
> - 컴포넌트 셋: `2413:88136` `table atomic-v0.4` (key `662b51245b7fea452e1c95517d196fe1787059df`, **432 variants**)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:143562` (Table use it 가이드 페이지)
>   - `1:144063` (Table 추가 가이드)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#table`, `tokens/number/component.js#table`.
> 토큰 prefix: `table/*`.

## Overview
- production 컴포넌트 셋: `table atomic-v0.4` (995 width × 2351 height frame)
- 모드: **light** (production variable_defs 기준; figma-export.json에 dark도 일부 정의)
- 6축 prop / 432 variants

## Number tokens (Mode 1) — production 검증

| size | height | padding | gap | text-size |
|---|---|---|---|---|
| xs_24 | 24 | 8 | 4 | 14 |
| sm_28 | 28 | 8 | 4 | 14 |
| md_32 | 32 | 8 | 8 | 14 |
| lg_40 | 40 | 8 | 8 | 16 |
| xl_48 | 48 | 12 | 12 | 16 |
| 2xl_56 | 56 | 12 | 16 | 18 |

## Color tokens — production 해석값 (light)

### bg
| token | light (production) | dark (figma-export) |
|---|---|---|
| `table/bg/bg-header` | `#f4f4f4` | `#dddddd` |
| `table/bg/bg-subheader` | `#e9e9e9` | `#eeeeee` |
| `table/bg/bg-cell-default` | `#fefefe` | `#f4f4f4` |
| `table/bg/bg-cell-zebra` | `#f4f4f4` | `#eeeeee` |
| `table/bg/bg-cell-hover` | (state) | `#dddddd` |
| `table/bg/bg-cell-selected` | (state) | `#fbdfcc` |
| `table/bg/bg-sum` | `#dddddd` | `#e9e9e9` |

### text
| token | light (production) |
|---|---|
| `table/text/text-header` | `#1d1d1d` |
| `table/text/text-cell` | (figma-export 기준 light=`#e9e9e9`, dark=`#393939`) |

### border
| token | light (production) | dark |
|---|---|---|
| `table/border/border-default` | `#d2d2d2` | `#dddddd` |
| `table/border/divider` | `#d2d2d2` | `#dddddd` |
| `table/border/border-selected` | `#eb6100` | `#ef8133` |

### icon
| token | light (production) | dark |
|---|---|---|
| `table/icon/default` | `#727272` | `#8f8f8f` |

> **중요**: 이전 표는 dark 모드 값을 light로 표기한 오류 있었음. production 노드(`2689:91695`) variable_defs로 수정.

### 기타 namespace (다른 PMS theme)
- `Component colors/Components/Table/cell_divider`: `#bdc9da`
- `Table/Cell/Border/Table_Cell_Border_Default`: `#d2dae6`
- `Table/Cell/Border/Table_Cell_Border_Hover`: `#3796fe`
- `Table/Cell/Border/Table_Cell_Border_Selected`: `#ff8000`

## Typography

| 영역 | textStyle | size · weight |
|---|---|---|
| header (xs_24~lg_40) | `body/sm (SB)` | 14·600 |
| header (xl_48~2xl_56) | `body/md (SB)`/`body/lg (SB)` | 16/18·600 |
| cell (xs_24~md_32) | `body/sm` | 14·400 |
| cell (lg_40~xl_48) | `body/md` | 16·400 |
| cell (2xl_56) | `body/lg` | 18·400 |
| sum | 동일 size + (SB) | SemiBold |

## Variants — 6축 (verbatim)

verbatim prop 패턴: `size=<size>, type=<type>, style=<style>, align=<align>, zebra=<bool>, compact=<bool>`

- **size**: `xs_24` / `sm_28` / `md_32` / `lg_40` / `xl_48` / `2xl_56`
- **type**: `cell` / `header` / `subheader` / `sum`
- **style**: `body` / `icon` / `button` / `checkbox` / `no` / `slot-h` / **`slot-v`**
- **align**: `left` / `center` / `right`
- **zebra**: `false` / `true`
- **compact**: `false` / `true`

### 호환성 규칙
| prop | 제약 |
|---|---|
| `style=icon, button` | align=**right only** |
| `style=checkbox, no, slot-h, slot-v` | align=**center only** |
| `style=body` | align=left/center/right 모두 가능 |
| `zebra=true` | type=**cell only** (header/subheader/sum 무의미) |
| `compact=true` | type=**header/subheader/sum only** (cell 무의미) |

## Variant IDs

### type=cell, style=body, align=left, zebra=false, compact=false (size별 base)

| size | variant ID | 크기 |
|---|---|---|
| xs_24 | `2458:143521` | 100×24 |
| sm_28 | `2413:88140` | 100×28 |
| md_32 | `2458:145257` | 100×32 |
| lg_40 | `2458:147029` | 100×40 |
| xl_48 | `2458:148765` | 100×48 |
| 2xl_56 | `2458:150573` | 100×56 |

### type=cell × style별 (각 style의 default align)

| size | checkbox (center) | no (center) | icon (right) | button (right) | slot-h (center) | slot-v (center) |
|---|---|---|---|---|---|---|
| xs_24 | `2458:143742` | `2458:143746` | `2458:143551` | `2458:143557` | `2458:143782` | `3196:135202` |
| sm_28 | `2413:89995` | `2413:90007` | `2413:88575` | `2413:88595` | `2423:133281` | `3196:135182` |
| md_32 | `2458:145478` | `2458:145482` | `2458:145287` | `2458:145293` | `2458:145518` | `3196:135186` |
| lg_40 | `2458:147250` | `2458:147254` | `2458:147059` | `2458:147065` | `2458:147290` | `3196:135190` |
| xl_48 | `2458:148986` | `2458:148990` | `2458:148795` | `2458:148801` | `2458:149026` | `3196:135194` |
| 2xl_56 | `2458:150794` | `2458:150798` | `2458:150603` | `2458:150609` | `2458:150834` | `3196:135198` |

### type=header / subheader / sum (style=body, align=left, zebra=false)

| size | header | header compact | subheader | subheader compact | sum | sum compact |
|---|---|---|---|---|---|---|
| xs_24 | `2458:143571` | `2458:143576` | `2458:143581` | `2458:143586` | `2458:143591` | `2500:192227` |
| sm_28 | `2413:88975` | `2458:134727` | `2413:88978` | `2458:141753` | `2458:135738` | `2500:192489` |
| md_32 | `2458:145307` | `2458:145312` | `2458:145317` | `2458:145322` | `2458:145327` | `2500:192737` |
| lg_40 | `2458:147079` | `2458:147084` | `2458:147089` | `2458:147094` | `2458:147099` | `2500:192985` |
| xl_48 | `2458:148815` | `2458:148820` | `2458:148825` | `2458:148830` | `2458:148835` | `2500:193233` |
| 2xl_56 | `2458:150623` | `2458:150628` | `2458:150633` | `2458:150638` | `2458:150643` | `2885:229900` |

> ID 시퀀스 단서 (변경 이력):
> - `2413:` = 초기 sm_28 베이스
> - `2458:` = 다른 size 일괄 추가
> - `2500:` = sum compact 추가
> - `3196:` = slot-v 추가
> - `2885:` = 2xl_56 sum compact 후속 패치

## Row Anatomy (좌→우 순서)

production 섹션 캡션 좌표 기반 verbatim 순서:

```
[checkbox] → [no.] → [body × N (left/center/right)] → [icon] → [button] → [slot-h] → [slot-v]
```

- 좌측 고정 컬럼: checkbox (선택), no (행 번호)
- 중앙: body cells (다중 컬럼)
- 우측: icon · button (액션) → slot-h · slot-v (커스텀 콘텐츠)
- `slot-h`/`slot-v`: horizontal/vertical 임의 콘텐츠 컨테이너

## Usage Notes

- production 컴포넌트는 **`table atomic-v0.4`** — 셀 단위로 인스턴스 조립
- `slot-v` style은 새로 추가된 vertical slot — 메모리/이전 md에 누락 (이번에 보강)
- variant 매칭 시 verbatim 그대로:
  - `"size=2xl_56"` (`2xl` 단독 매칭 실패)
  - `"style=slot-h"` / `"style=slot-v"` 하이픈 포함
  - `"align=right"` (icon/button) / `"align=center"` (checkbox/no/slot-h/slot-v)
- zebra row는 짝수 행에 `bg-cell-zebra` 적용 (production light = `#f4f4f4`)
- selected 시 `border-selected` (`#eb6100` orange) + (state) `bg-cell-selected`
- compact는 header/subheader/sum 한정 — 행 높이를 한 단계 줄임
- DS Runner workflow: 섹션을 `get_design_context`로 호출하면 sparse metadata만 반환됨 → padding/font/color 토큰까지 얻으려면 개별 cell symbol id (예: `2413:88140`)로 재호출하거나 `get_variable_defs` 사용
- 컴포넌트 셋 frame width=995, height=2351 — 인스턴스 layout 기준값
