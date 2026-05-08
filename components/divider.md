# Divider

> 출처 (Figma):
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA`
>   - section `671:35357` `divider _v0.1`
>   - `1028:50778` `divider_v0.1` (key `6e10a4d0daf86f8b551838189ecac0c94f2d9e23`, 47 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`
>   - `1:88828` 디바이더(Divider) — 가이드 페이지 (H1 / Anatomy / Properties / 디바이더의 사용 / Guidelines)
>   - `1:88831` H1 (제목 + 본문 설명)
>   - `1:88869` Anatomy (구조)
>   - `1:88898` / `1:88907` Properties › Size  *(사용자 제공 `293:34004` / `294:34005` 모두 Figma에서 무효 노드 응답 — 페이지 내 실제 Size 섹션 위치로 보정함)*
>   - `1:88936` Properties › Layout
>   - `1:88979` Properties › Variant *(Figma 원본 헤딩 오타: "Varient")*
>   - `1:89022` 디바이더의 사용
>   - `1:89326` Guidelines › 색상 적용
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#divider` (prefix `divider/*` + 추가 `etc/divider`)
> 시각 참조: [docs/spec.html#divider](../docs/spec.html#divider)

## Overview

> 출처: `1:88831` (UI-Kit-Guide · verbatim)

디바이더(Divider)는 디자인 요소와 정보를 구분하는 데 사용합니다. 이를 통해 각 요소의 디자인 가독성이 향상됩니다.

## 구조 (Anatomy)

> 출처: `1:88869` (UI-Kit-Guide · verbatim)

디바이더는 영역을 구분하는 선과 부가적으로 내용을 구분해주는 라벨 텍스트로 구성되어 있습니다. 라벨은 옵션 항목입니다.

| 한글 (English) | 설명 |
|---|---|
| 디바이더 라인 (Divider line) | 셀이나 모듈을 구분하는 선 |
| 라벨 (Label) | 디바이더의 내용 |

## Size

> 출처: `1:88898` / `1:88907` (UI-Kit-Guide · Properties › Size verbatim)

디바이더는 xsmall, small, medium, large의 총 4가지 사이즈로 제공합니다.
xsmall은 툴바 아이콘 버튼 등의 구분에 사용되며, small은 셀 단위의 구분, medium, large는 모듈 단위의 구분에 사용됩니다.

| Size | 용도 |
|---|---|
| xsmall | 툴바 아이콘 버튼 등의 구분 |
| small | 셀 단위의 구분 |
| medium | 모듈 단위의 구분 |
| large | 모듈 단위의 구분 |

## Layout

> 출처: `1:88936` (UI-Kit-Guide · Properties › Layout verbatim)

디바이더는 여백 사이즈에 따라 총 4가지의 유형을 가지고 있습니다.

| Layout |
|---|
| full-width |
| inset-sm |
| inset-md |
| inset-lg |

## Variant

> 출처: `1:88979` (UI-Kit-Guide · Properties › Variant verbatim. Figma 원본 헤딩 오타: "Varient")

디바이더는 dash, line (default) 의 두 가지 타입이 있으며, 타이틀이 옵션으로 들어갈수 있습니다. 타이틀의 위치는 left, center, right 의 3가지로 구분됩니다.

| Variant |
|---|
| dash |
| line |
| title-left |
| title-center |
| title-right |

## 디바이더의 사용

> 출처: `1:89022` (UI-Kit-Guide · verbatim)

디바이더는 콘텐츠 사이에만 나타나야 하므로 페이지의 마지막 셀이나 섹션에는 사용하지 마세요.

> 시각 예시 (Figma `1:89022` 도면 — 4개 mock 컴포넌트 verbatim 재현):
> - **Mock 1 — 프로필 보기** (`1:89032`): 220px wide. 헤더(`프로필 보기` + `×`) + 7행 필드 (이름/계정/진료과/소속부서/직급/생일/휴대번호). divider는 **5행(직급)과 6행(생일) 사이 단 1곳** — 인사정보 그룹과 연락처 그룹을 분리. 마지막 행 아래에는 divider 없음.
> - **Mock 2 — 환자 로그기록** (`1:89066`): 240px wide. 채팅형 로그 — 메시지 버블(연두 `#dff5dc`) + 타임스탬프 좌측. divider는 첫 메시지와 나머지 사이의 **날짜 헤더** (`2024년 2월 23일 (월)` · 좌우 가로 라인 + 중앙 텍스트) 1곳.
> - **Mock 3 — One Messenger 연락처** (`1:89119`): 240px wide. 헤더 + 탭(대화 상대 / 대화 목록) + 검색 + featured 카드(윤의사) + 전체 카운트. divider는 (a) featured 카드 하단 가로 divider, (b) 섹션 라벨 (`즐겨찾기 1` / `Doctor 3` / `Administrator 2` / `FrontDesk 2` / `Chairs 3`)이 라이트 블루 배경 띠로 그룹 구분 역할.
> - **Mock 4 — 채팅 대화** (`1:89242`): 240px wide. 모바일 노치 + 헤더(나직원) + 메시지 영역(상대=흰색 보더 / 본인=라벤더 `#c6c8ee`) + 지도 미리보기 + 입력바(첨부 / 보내기). divider는 메시지 묶음과 다음 묶음 사이 **날짜 헤더** (`2024년 2월 23일`) 1곳.
>
> 4개 mock 모두 **마지막 셀 아래에 divider를 두지 않음** — "디바이더는 콘텐츠 사이에만 나타나야 하므로 페이지의 마지막 셀이나 섹션에는 사용하지 마세요" 규칙의 시각적 검증.

## Guidelines

> 출처: `1:89326` (UI-Kit-Guide · verbatim)

### 색상 적용

디바이더에는 별도의 색조 변형을 적용하지 않습니다. 디바이더는 시각적 강조보다는 정보 간 구획을 명확히 하는 역할을 하므로, 주변 요소와의 대비를 고려한 최소한의 컬러 위계만을 적용하여 구분 기능에 집중합니다.

> 시각 예시 (Do/Don't 비교 카드):
> - **카드 스타일**: SSW 표준 `.guide-card` 패턴 사용 (다른 컴포넌트의 Do/Don't와 동일) — Do=흰색 카드 + 녹색 `#00b85e` 체크 아이콘 + 녹색 텍스트 `#00803e` + 2px 녹색 하단 보더. Don't=라이트 핑크 `#fef0ee` 카드 + 핑크 보더 `#fbd1cb` + 빨강 `#f03823` X 아이콘 + 빨강 텍스트 + 2px 빨강 하단 보더.
> - **라인 배치** (Figma `1:89328` 시각): 가로 라인이 패널 좌측~중앙에서 끝나고 세로 라인이 그 우측에서 시작 — **두 라인은 서로 닿지 않음** (작은 갭 존재). 가로 라인은 샘플 영역 너비의 약 36%, 세로 라인은 영역 높이의 50%.
> - **Do** 라인: 가로 + 세로 모두 중립 회색 `#d2d2d2` — 정보 구획만 담당, 시각 강조 없음.
> - **Don't** 라인: 가로 파랑 `#3b63fb` + 세로 주황 `#eb6100` — 색조 변형 적용은 디바이더의 본래 역할(정보 구획)을 흐림.

## Color tokens

> 출처: 레포지토리 `tokens/color/component.js#divider` (prefix `divider/*` + `etc/divider`).

| token | light |
|---|---|
| `divider/line` | `#e9e9e9` |
| `divider/line_contents` | `#bcbcbc` |
| `divider/text` | `#a5a5a5` |
| `etc/divider` | `#d2d2d2` |

> `divider/line_contents` 값이 figma-export.json 기준 `#8f8f8f` ⇒ production 해석값 `#bcbcbc`로 변경됨. `etc/divider`(`#d2d2d2`)는 별도 namespace — 카드/테이블 셀 구분 등 약한 구분선용.

## Number tokens

- 선 두께: **xs**=0.5 / **sm_Default**=1 / **md**=2 / **lg**=4 (px)
- Inset 좌우 여백: `inset-sm`=16 / `inset-md`=24 / `inset_lg`=32 (lg만 언더스코어, full은 0)
- Default frame width: 300px / Title=true 시 height 24

> UI-Kit-Guide의 Size·Layout 명칭(xsmall/small/medium/large, full-width/inset-sm/inset-md/inset-lg)과 컴포넌트 prop 명칭(xs/sm_Default/md/lg, full/inset-sm/inset-md/inset_lg)이 1:1 대응하나 표기가 다름 — 가이드는 사람용 표기, prop은 variant 매칭용.
