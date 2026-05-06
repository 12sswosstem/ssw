# Divider

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `671:35357` `divider _v0.1`
> - 컴포넌트 셋: `1028:50778` `✅divider_v0.1` (key `6e10a4d0daf86f8b551838189ecac0c94f2d9e23`, 47 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:88828` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
>
> JS 토큰: `tokens/color/component.js#divider`.
> 토큰 prefix: `divider/*` + 추가 `etc/divider`.
> 시각 참조: [docs/spec.html#divider](../docs/spec.html#divider)

## Overview
- 콘텐츠 구분용 선 (수평/수직)
- 기본 너비 300px (Title=true 시 height 24)
- 모드: **light** (production 노드 기준)

## Number tokens
- 선 두께: **xs**=0.5 / **sm_Default**=1 / **md**=2 / **lg**=4 (px)
- Inset 좌우 여백: `inset-sm`=16 / `inset-md`=24 / `inset_lg`=32 (lg만 언더스코어, full은 0)
- Default frame width: 300px / Title=true 시 height 24

## Color tokens (production variable_defs 기준)

| token | light |
|---|---|
| `divider/line` | `#e9e9e9` |
| `divider/line_contents` | `#bcbcbc` |
| `divider/text` | `#a5a5a5` |
| `etc/divider` | `#d2d2d2` |

> `divider/line_contents` 값이 figma-export.json 기준 `#8f8f8f` ⇒ production 해석값 `#bcbcbc`로 변경됨. `etc/divider`(`#d2d2d2`)는 별도 namespace — 카드/테이블 셀 구분 등 약한 구분선용.

## Variants — 5축 (verbatim prop)

verbatim prop 이름 (**⬑Orientation의 특수문자 `⬑`** 포함):

- **size**: `xs` / `sm_Default` / `md` / `lg`
- **style**: `full` / `inset-sm` / `inset-md` / `inset_lg` / `contents_divider` (xs/vertical 전용)
- **Dashed**: `false` / `true` (`sm_Default`에만 의미 있음)
- **Title**: `false` / `true`
- **⬑Orientation**: `.N/A` / `left` / `center` / `right` (Title=true일 때만; horizontal 전용)
- **Type**: `horizontal` / `vertical`

### 사용 가능 조합 (size × Title)

| size | Title=false | Title=true |
|---|---|---|
| xs | ✓ (4 style + contents_divider/vertical) | — |
| sm_Default | ✓ (Dashed false/true × full + 3 inset, horizontal/vertical) | ✓ (Dashed × style × Orientation 매트릭스) |
| md | ✓ (4 style만) | — |
| lg | ✓ (4 style만) | — |

## Variant IDs

### size별 기본 (Title=false, Dashed=false, horizontal)

| size \\ style | full | inset-sm | inset-md | inset_lg |
|---|---|---|---|---|
| xs | `1490:178526` | `1490:178530` | `1490:178528` | `1490:178532` |
| sm_Default | `1028:50887` | `1028:50891` | `1028:50889` | `1028:50893` |
| md | `1028:50897` | `1028:50905` | `1028:50901` | `1028:50909` |
| lg | `1028:50895` | `1028:50903` | `1028:50899` | `1028:50907` |

### sm_Default × Dashed=true × Title=false × horizontal

| style | ID |
|---|---|
| full | `1028:50879` |
| inset-sm | `1028:50883` |
| inset-md | `1028:50881` |
| inset_lg | `1028:50885` |

### sm_Default × Title=true × horizontal

#### Dashed=false
| Orientation \\ style | full | inset-sm | inset-md | inset_lg |
|---|---|---|---|---|
| left | `1028:50863` | `1028:50871` | `1028:50867` | `1028:50875` |
| center | `1028:50831` | `1028:50839` | `1028:50835` | `1028:50843` |
| right | `1028:50799` | `1028:50807` | `1028:50803` | `1028:50811` |

#### Dashed=true
| Orientation \\ style | full | inset-sm | inset-md | inset_lg |
|---|---|---|---|---|
| left | `1028:50847` | `1028:50855` | `1028:50851` | `1028:50859` |
| center | `1028:50815` | `1028:50823` | `1028:50819` | `1028:50827` |
| right | `1028:50783` | `1028:50791` | `1028:50787` | `1028:50795` |

### vertical Type

| variant | ID |
|---|---|
| sm_Default / full / Dashed=false / Title=false | `1028:50779` |
| sm_Default / full / Dashed=true / Title=false | `1028:50781` |
| xs / contents_divider / Title=false | `4607:7017` |

## Usage Notes

- 일반 구분선: `divider/line` (`#e9e9e9`)
- 콘텐츠 그룹 내부 구분: `divider/line_contents` (`#bcbcbc`) — 한 단계 진함
- 셀/테이블 약한 구분: `etc/divider` (`#d2d2d2`) — 다른 namespace
- Title=true 시: 좌우 line + 중앙 text (text는 `divider/text` `#a5a5a5`)
- vertical은 height를 부모에 맞춰 STRETCH (default 16~12)
- `inset_lg` 언더스코어, `sm_Default` 첫글자 대문자 표기 — Figma 원본 그대로
- `⬑Orientation` prop의 ⬑ 화살표 문자는 정렬용 메타 마커 — variant 매칭 시 그대로 포함
- Dashed/Title/Orientation은 `sm_Default`에만 정의 — md/lg/xs는 단순 선만
- `contents_divider` style은 xs + vertical 전용 (1px 짧은 점 형태로 콘텐츠 사이 구분)
- 빈 frame을 `setProperties({size:"xs", style:"full"})`로 호출 가능
