# Table

> 출처 (Figma):
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`
>   - section `2689:91695` `table_v0.4`
>   - `2413:88136` `table atomic-v0.4` (key `662b51245b7fea452e1c95517d196fe1787059df`, **432 variants**)
>   - `7108:55832` table atomic 매트릭스 (셀 단위 인스턴스 모음)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`
>   - `302:43084` 표(Table) — 가이드 페이지 (H1 / Anatomy / Properties / Guidelines)
>   - `302:43098` H1 (제목 + 본문 설명)
>   - `302:43106` Anatomy *(이전 노드 — 현재 invalid 응답)*
>   - `306:8789` Anatomy figure — PMS 진료내역 sample 10 데이터 행 + 9 numbered callouts (TalkToFigma 채널 `qhr11434` get_selection 기준 verbatim)
>   - `306:8864` Properties › Size 시각 (6 size 행, 셀 우측정렬, 그룹 가운데정렬)
>   - `306:8933` 세부 규격 — Padding / Height / Text size / Icon size 라벨링 도면 (`306:8937` Cell A Tag+text+bookmark / `306:8960` Cell B trash+edit+more-vert)
>   - `306:8891` Properties › Style 시각 (4 변형 가운데정렬) — *추정 위치, 별도 검증 필요*
>   - `302:43179` Properties › Size + Style
>   - `302:43304` Properties › State
>   - `302:43376` Properties › Variant
>   - Guidelines (`302:43487` 헤딩 / `302:43499` Do/Don't 비교)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#table` · `tokens/number/component.js#table` (prefix `table/*`)
> 시각 참조: [docs/spec.html#table](../docs/spec.html#table)

## Overview

> 출처: `302:43098` (UI-Kit-Guide · verbatim)

표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와줍니다.

기본적으로 대화형 요소가 아니기 때문에 열 제목에 데이터를 정렬하기 위한 컨트롤 요소가 포함된 상황 외에 행 전체나 데이터 셀이 대화형으로 작동하지 않습니다.

## 구조 (Anatomy)

> 출처: `302:43106` (UI-Kit-Guide · 9 elements verbatim) / `302:43113` (시각 figure verbatim — PMS 진료내역 sample + 9 numbered callouts)

| # | 한글 (English) | 설명 |
|---|---|---|
| 1 | 헤더 (Header) | 각 데이터 셀의 제목 |
| 2 | 서브헤더 (Subheader) | 데이터 셀의 부제목 |
| 3 | 합계 (Sum) | 각 셀의 합계가 표시되는 영역 |
| 4 | 데이터 셀 (Cell) | 행을 구성하는 데이터 요소 |
| 5 | 셀 지브라 (Cell Zebra) | 행과 행 사이를 시각적으로 구분하는 보조 수단 |
| 6 | 보더 (Border) | 행과 행 사이를 시각적으로 구분하는 수단 (옵션) |
| 7 | 디바이더 (Divider) | 열과 열 사이를 시각적으로 구분하는 수단 (옵션) |
| 8 | 행 (Row) | 서로 다른 항목의 데이터를 보여줌 |
| 9 | 열 (Column) | 서로 다른 유형의 데이터를 보여줌 |

### Anatomy 시각 보충 (`302:43113` verbatim)

도면의 시각 figure는 실제 PMS 화면 컨텍스트(진료내역 테이블)를 그대로 사용. 9개 항목의 위치를 검정 원형 + 숫자(1~9) + 점선 콜아웃으로 표시.

#### 상단 탭 + 아이콘

- 좌측 탭: **오늘 진료 내역** (selected · 오렌지 `#eb6100` underline 2px) / 수납 내역 (gray)
- 우측 아이콘 2개 — repo SVG 그대로 사용:
  - `arrow/fill/expand.svg` (viewBox `14×14`)
  - `arrow/fill/swap-horiz.svg` (viewBox `13.5×13.5`)
  - `var(--fill-0,…)` → `currentColor` 치환

#### 테이블 컬럼 구성 (verbatim)

| 컬럼 | 정렬 | 너비 | 비고 |
|---|---|---|---|
| 명칭 | left | 270 | badge (보험/비보험) + 진료항목명 |
| 금액 | right | 110 | 숫자 |
| 횟수 / 번호 | center | 60 | 메인 헤더=`횟수`, 서브 헤더=`번호` |
| 진료일 | center | 92 | 날짜 |
| 개인부담금 | right | 110 | 그룹 헤더 `총 부담금`의 sub-header |
| 공단부담금 | right | 118 | 그룹 헤더 `총 부담금`의 sub-header |

#### 행 구성 (Figma `306:8789` verbatim)

- 헤더 행 (메인): 명칭 / 금액 / 횟수 / 진료일 / 총 부담금
- 서브헤더 행: (공란×4) / 개인부담금 / 공단부담금
- 합계(Sum) 행: 합계 / 12,500,999원 / **번호** / 2026.04.08 / 12,500,999원 / 12,500,999원

> **주의**: `번호`는 서브헤더가 아닌 **합계 행의 횟수 컬럼 위치**에 놓임 (12,500,999원과 2026.04.08 사이). Figma `306:8789` / `306:8809` verbatim.
- **10개 데이터 행** (보험/비보험 badge + 진료항목명 + 금액 + 번호 + 날짜 + 개인부담금 + 공단부담금):

| # | 보험 type | 명칭 | 금액 | 번호 | 진료일 | 개인부담금 | 공단부담금 |
|---|---|---|---|---|---|---|---|
| 1 | 보험 | 초진 진찰료 | 15,060 | 1 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 2 | 보험 | 파노라마 촬영판독 | 15,060 | 2 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 3 | 보험 | 치석제거 [1/3악당) | 15,060 | 3 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 4 | 보험 | 구치발치 | 12,500,999 | 4 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 5 | 보험 | 전달마취(나)-하치조신경블록 | 15,060 | 5 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 6 | 보험 | 오스텔리도카인 에피네프린주(1:100,000)(1.8ml) | 15,060 | 6 | 2026.04.08 | 12,500,999원 | 12,500,999원 |
| 7 | 비보험 | 의약품관리료 1일분 (의원) | 15,060 | 7 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 8 | 보험 | 레진충전(치경부) | 15,060 | 8 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 9 | 보험 | 치석제거 | 12,500,999 | 9 | 2026.04.08 | 500,999원 | 12,500,999원 |
| 10 | 비보험 | 구치발치, 치석제거 | text | 10 | 2026.04.08 | text | text |

> **주의 — Figma 원본 verbatim**: row 3의 대괄호 닫힘이 `]`가 아닌 `)`로 표기됨 (`[1/3악당)`). row 6의 약품명 첫 글자가 `오스템`이 아닌 `오스텔` (오스템→오스텔). row 10의 일부 셀은 `text` placeholder.
> **zebra 미적용** — Figma `306:8789` 도면은 모든 데이터 행이 동일한 흰 배경. zebra(`cell_zebra`)는 컴포넌트 state로는 존재하지만 이 anatomy 도면에는 적용되어 있지 않음. callout 5(셀 지브라)는 개념 표시용으로 특정 행을 가리킬 뿐 실제 zebra 배경을 그리지 않음.

#### 콜아웃 스타일

메뉴 anatomy 패턴을 차용. 각 콜아웃은 3개 요소로 구성:
- **검정 점** (`7×7px`, `#1d1d1d`) — 가리킬 대상 위에 정확히 위치
- **점선 라인** (`60px`/`36px` · `1px dashed #1d1d1d`) — 점에서 숫자 칩까지 연결, 점과 라인은 갭 0으로 한 줄처럼 이어짐
- **숫자 칩** (검정 원형 `22×22px` + 흰색 숫자 11px Bold) — 라인 끝에 위치, 라인과 6px gap

#### 모든 행 배경은 화이트

`tbody td { background: #ffffff }`. 셀 지브라(#5)는 callout 타깃용으로 zebra 클래스만 유지하지만 시각적으로는 모든 행이 동일한 흰색.

#### 콜아웃 위치 (Figma 좌표 기반)

| # | 항목 | chip 위치 | 점이 가리키는 대상 |
|---|---|---|---|
| 1 | 헤더 (Header) | 좌측 | 메인 헤더 행의 `명칭` 텍스트 시작점 |
| 2 | 서브헤더 (Subheader) | 우측 | 서브 헤더 행의 `공단부담금` |
| 3 | 합계 (Sum) | 좌측 | `합계` 행 |
| 4 | 데이터 셀 (Cell) | 좌측 | 5번 데이터 행 (`전달마취(나)-하치조신경블록`) |
| 5 | 셀 지브라 (Cell Zebra) | 좌측 | 8번 데이터 행 (`레진충전(치경부)`) — 개념 표시용 (실제 zebra 배경 미적용) |
| 6 | 보더 (Border) | 우측 | 행 사이 가로 보더 (4번 행 `구치발치`와 5번 행 사이) |
| 7 | 디바이더 (Divider) | 표 하단 → 위 | 진료일 ↔ 개인부담금 사이 세로 디바이더 (표 하단에서 위로 향하는 콜아웃) |
| 8 | 행 (Row) | 우측 | 3번 데이터 행 (`치석제거 [1/3악당)`) 중앙 |
| 9 | 열 (Column) | 표 상단 → 아래 | `금액` 컬럼 상단 (표 위에서 아래로 향하는 콜아웃) |

## Properties

> 출처: `302:43175` (UI-Kit-Guide · 헤딩 verbatim "Properties")

### Size

> 출처: `302:43180` / `302:43187` (UI-Kit-Guide · verbatim)

테이블의 사이즈는 6가지입니다. 각 플랫폼에 맞는 테이블을 사용하세요. 테이블의 스타일은 보더와 디바이더의 유무를 각각 조절할 수 있습니다. 테이블의 패딩, 텍스트, 아이콘의 규격은 사이즈별 Variable number 로 토큰화 되어 있습니다. 세부 규격을 확인하세요.

| Size | height (px) | padding | gap | text-size |
|---|---|---|---|---|
| xs_24 | 24 | 8 | 4 | 14 |
| sm_28 | 28 | 8 | 4 | 14 |
| md_32 | 32 | 8 | 8 | 14 |
| lg_40 | 40 | 8 | 8 | 16 |
| xl_48 | 48 | 12 | 12 | 16 |
| 2xl_56 | 56 | 12 | 16 | 18 |

### Style

> 출처: `302:43216` / `306:8933` (UI-Kit-Guide · 스타일 4종 verbatim)

테이블의 스타일은 **보더(Border)와 디바이더(Divider)의 유무**를 각각 조절하여 4가지 조합으로 사용합니다.

| Style | 보더 (행 구분) | 디바이더 (열 구분) |
|---|---|---|
| lineless | — | — |
| Border only | ✓ | — |
| Divider only | — | ✓ |
| Border & Divider | ✓ | ✓ |

> Figma `306:8933` 시각: 4 변형이 가운데정렬된 그룹으로 배치. 각 변형은 2×2 mini-table — 헤더 행(`공단부담금` / `본인부담금`, gray bg) + 데이터 행(`100,160` / `65,160`, white bg). 셀 내용은 모두 우측정렬.

### Variant

> 출처: `302:43376` (UI-Kit-Guide · 4 variant 카드 verbatim)

| Variant | 한글 (English) | 설명 |
|---|---|---|
| header | 헤더 (Header) | 데이터의 의미와 분류 기준을 제시하는 테이블의 가이드 역할입니다. Default 타입과 Compact 타입이 있습니다. |
| subheader | 서브 헤더 (Subheader) | 가이드 역할을 하는 두번째 하위 단계 헤더입니다. Default 타입과 Compact 타입이 있습니다. |
| cell | 데이터 셀 (Cell) | 실제 데이터가 표시되는 테이블의 핵심 영역입니다. |
| sum | 합계 (Sum) | 데이터 셀의 총합을 나타낼때 사용합니다. |

### 세부 규격

> 출처: `306:8933` (UI-Kit-Guide · verbatim — 노드 이름 `2box-01`, 1800×375)

테이블의 패딩, 텍스트, 아이콘의 규격은 사이즈별 Variable number 로 토큰화 되어 있습니다.

Figma `306:8933` 도면 — 셀 내부 구조 라벨링 (red `#d90101` solid Padding 박스 + red bracket Height + 라벨 `#aa0101` Pretendard SemiBold 18px):

- **Padding** (좌·우): 셀 좌/우 안쪽 여백 — 8px solid red rectangle (`#ff1111` 10% opacity + `#d90101` stroke), Figma `Rectangle 3468230`
- **Height**: 셀 전체 높이 — 우측 빨강 bracket (좌우 2px line + 양 끝 가로 cap)
- **Text size**: 라벨 텍스트 크기
- **Icon size**: 아이콘 크기

도면은 2개 table atomic-v0.4 인스턴스 (각 172×40):

| Cell | 인스턴스 ID | 구성 (Figma JSON verbatim) |
|---|---|---|
| Cell A | `306:8937` | **Tag**(`2689:117762`, 42×18 blue `#e5f0fe`, cornerRadius 2, 빈 children) + **Text** "text" (Pretendard Regular 16) + **icon** `system/general/line/bookmark` (`2885:190555`, 20×20) |
| Cell B | `306:8960` | **icon** `system/general/fill/delete` (`2885:189939`, 20×20, trash) + **icon** `system/general/fill/edit` (`1:99323`, 20×20, **visible: false** 빈 슬롯) + **icon** `system/general/fill/more-vert` (`2885:195043`, 20×20, 3 dots) |

> Cell A의 Tag와 Text는 동일 x=587 위치(같은 시작점)에 있어 시각적으로 Tag가 Text 뒤에 배경처럼 깔린 상태. Cell B의 edit 아이콘은 fills `visible: false` 처리되어 시각적으로 빈 슬롯 (trash와 more-vert 사이 갭).

| size | height | padding | gap | text-size |
|---|---|---|---|---|
| xs_24 | 24 | 8 | 4 | 14 |
| sm_28 | 28 | 8 | 4 | 14 |
| md_32 | 32 | 8 | 8 | 14 |
| lg_40 | 40 | 8 | 8 | 16 |
| xl_48 | 48 | 12 | 12 | 16 |
| 2xl_56 | 56 | 12 | 16 | 18 |

### State

> 출처: `302:43304` / `302:43312` (UI-Kit-Guide · verbatim)

테이블의 상태는 아래와 같습니다.

| State | 적용 type | 의미 |
|---|---|---|
| header_default | header | 헤더의 기본 상태 |
| cell_default | cell | 셀의 기본 상태 |
| cell_zebra | cell | 짝수 행에 적용되는 zebra 배경 (행 구분 보조) |
| cell_hover | cell | 마우스 오버 상태 |
| cell_active | cell | 클릭/선택된 상태 |

## Guidelines

> 출처: `302:43487` (UI-Kit-Guide · `do/don't box-02` 비교 카드)

Do/Don't 비교를 통해 표 구성 시 권장 사항과 비권장 사항을 보여줍니다. SSW 표준 `.guide-card` 패턴 사용 (다른 컴포넌트의 Do/Don't와 동일). Do=흰색 카드 + 녹색 ✓ + 녹색 하단 보더, Don't=라이트 핑크 카드 + 빨강 ✕ + 빨강 하단 보더.

## Color tokens

> 출처: 레포지토리 `tokens/color/component.js#table` (prefix `table/*`).

### bg
| token | light |
|---|---|
| `table/bg/bg-header` | `#f4f4f4` |
| `table/bg/bg-subheader` | `#e9e9e9` |
| `table/bg/bg-cell-default` | `#fefefe` |
| `table/bg/bg-cell-zebra` | `#f4f4f4` |
| `table/bg/bg-cell-hover` | (state) |
| `table/bg/bg-cell-selected` | (state) |
| `table/bg/bg-sum` | `#dddddd` |

### text
| token | light |
|---|---|
| `table/text/text-header` | `#1d1d1d` |
| `table/text/text-cell` | `#1d1d1d` |

### border
| token | light |
|---|---|
| `table/border/border-default` | `#d2d2d2` |
| `table/border/divider` | `#d2d2d2` |
| `table/border/border-selected` | `#eb6100` |

### icon
| token | light |
|---|---|
| `table/icon/default` | `#727272` |

## Number tokens

| size | height | padding | gap | text-size |
|---|---|---|---|---|
| xs_24 | 24 | 8 | 4 | 14 |
| sm_28 | 28 | 8 | 4 | 14 |
| md_32 | 32 | 8 | 8 | 14 |
| lg_40 | 40 | 8 | 8 | 16 |
| xl_48 | 48 | 12 | 12 | 16 |
| 2xl_56 | 56 | 12 | 16 | 18 |

## Typography

| 영역 | textStyle | size · weight |
|---|---|---|
| header (xs_24~lg_40) | `body/sm (SB)` | 14·600 |
| header (xl_48~2xl_56) | `body/md (SB)` / `body/lg (SB)` | 16/18·600 |
| cell (xs_24~md_32) | `body/sm` | 14·400 |
| cell (lg_40~xl_48) | `body/md` | 16·400 |
| cell (2xl_56) | `body/lg` | 18·400 |
| sum | 동일 size + (SB) | SemiBold |
