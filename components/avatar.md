# Avatar

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `1871:77161` `Avatar_v0.3` (54 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG` / page `1:69280` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export) Number_component
>
> JS 토큰: `tokens/color/component.js#avatar`, `tokens/number/component.js#avatar`.
> 토큰 prefix: `avatar/*` + 공통 `common/avatar-bg-default`.

## Overview

가이드 verbatim:
> "아바타는 컨테이너 안에 아이콘, 이미지 또는 이니셜을 사용하여 사람, 회사 또는 단체를 나타냅니다. 사용자 프로필, 연락처 목록, 메시징 인터페이스 등 이미지나 아이콘이 필요한 곳에서 흔히 사용됩니다. 아바타는 사용자가 개인이나 그룹을 쉽게 식별할수 있도록 시각적 단서를 제공합니다."

- atom 컴포넌트 셋: `1866:71484` `avatar_atom` (54 variants = 3 type × 3 style × 6 size)
- group 컴포넌트 셋: `1871:77789` `avatar_group` (4 variants — Property 1: 1 single / 2 group / 3 group / 4 group)
- array 컴포넌트 셋: `4270:111923` `avatar array` (12 variants — type spread/stack × size 6단계)

## Number tokens (Mode 1)

### corner radius (px)
| shape | token | radius |
|---|---|---|
| circle | `avatar/corner radius/circle` | 999 |
| rounded | `avatar/corner radius/rounded` | 12 |
| rounded-ring | `avatar/corner radius/rounded-ring` | 14 |
| square | `avatar/corner radius/square` | 0 |

### stroke (border 굵기, px)
| size | token | stroke |
|---|---|---|
| xs_24 | `avatar/stroke/xs` | 1 |
| sm_32 | `avatar/stroke/sm` | 1.6 |
| md_40 | `avatar/stroke/md` | 2.2 |
| lg_48 | `avatar/stroke/lg` | 2.6 |
| xl_64 | `avatar/stroke/xl` | 3 |
| 2xl_80 | `avatar/stroke/2xl` | 4.2 |

## Color tokens

### 공통 (background)
| token | light |
|---|---|
| `common/avatar-bg-default` | `#c6c6c6` |

> default type(이미지/이니셜 없는 회색 사람 아이콘 아바타)의 배경색. light 모드 기준 단일값.

### 토큰 미바인딩 영역
- 이니셜 텍스트 색상, image 콘텐츠 색상, ring 색상은 **DS color 토큰 미바인딩**
- 인스턴스 fill 또는 image content로 처리 → `importComponentSetByKeyAsync` 사용 강제
- profile placeholder string: `Avatar profile/Man_Adult` (콘텐츠 슬롯)

## Atom — 3축 Variants × 54 IDs

### Variant 매트릭스

prop 형식: `type={default|image|initial}, style={circle|rounded|square}, size={xs_24|sm_32|md_40|lg_48|xl_64|2xl_80}`

#### style=circle
| type \\ size | xs_24 | sm_32 | md_40 | lg_48 | xl_64 | 2xl_80 |
|---|---|---|---|---|---|---|
| default | `1871:76027` | `1871:75667` | `1871:75307` | `1871:72652` | `1871:72440` | `1866:71483` |
| image | `1871:76038` | `1871:75678` | `1871:75318` | `1871:72663` | `1871:72451` | `1866:71482` |
| initial | `1871:76049` | `1871:75689` | `1871:75329` | `1871:72674` | `1871:72462` | `1866:71481` |

#### style=rounded
| type \\ size | xs_24 | sm_32 | md_40 | lg_48 | xl_64 | 2xl_80 |
|---|---|---|---|---|---|---|
| default | `1871:76060` | `1871:75700` | `1871:75340` | `1871:72685` | `1871:72473` | `1866:71479` |
| image | `1871:76071` | `1871:75711` | `1871:75351` | `1871:72696` | `1871:72484` | `1866:71478` |
| initial | `1871:76082` | `1871:75722` | `1871:75362` | `1871:72707` | `1871:72495` | `1866:71477` |

#### style=square
| type \\ size | xs_24 | sm_32 | md_40 | lg_48 | xl_64 | 2xl_80 |
|---|---|---|---|---|---|---|
| default | `1871:76093` | `1871:75733` | `1871:75373` | `1871:72718` | `1871:72506` | `1866:71476` |
| image | `1871:76104` | `1871:75744` | `1871:75384` | `1871:72729` | `1871:72517` | `1866:71475` |
| initial | `1871:76115` | `1871:75755` | `1871:75395` | `1871:72641` | `1871:72528` | `1866:71480` |

## Type 가이드 (verbatim)

> "아바타 유형은 사용 사례 및 어플리케이션에 따라 다양합니다. 일반적으로 아바타는 사람을 나타내는 유형과 개체를 나타내는 유형 두 가지 범주 중 하나에 속합니다. 이러한 범주 내에서 아이콘이나 이니셜과 같은 대체 변형을 사용할 수 있습니다."

| type | 설명 |
|---|---|
| `default` | 기본 사람 아이콘 (placeholder · 정보 없을 때) |
| `image` | 사용자 사진 (가장 흔한 패턴) |
| `initial` | 이름 이니셜 텍스트 (이미지 없을 때 fallback) |

## Style

| style | 설명 | radius |
|---|---|---|
| `circle` | 원형 (사람용 기본) | 999 |
| `rounded` | 둥근 사각 (브랜드/단체용) | 12 |
| `square` | 사각 (objects/엔티티용) | 0 |

## Size

| size | 영역 | 사용 컨텍스트 |
|---|---|---|
| xs_24 | 24×24 | inline list, dense table |
| sm_32 | 32×32 | comment row, compact card |
| md_40 | 40×40 | header user menu, default |
| lg_48 | 48×48 | profile section, modal title |
| xl_64 | 64×64 | profile preview, dialog |
| 2xl_80 | 80×80 | profile page hero, settings |

## 인스턴스 prop ↔ Style 9 variants 매핑

> **출처 명시**: 아래 boolean prop들은 가이드 페이지 별도 섹션이 아니라 `1:69377` "스타일(Style)" 행 9 variants에 통합 노출됨. 즉 Figma 가이드는 enum형 Style prop 1개로 보여주고, 실제 컴포넌트 인스턴스에서는 boolean toggle 조합으로 구현.

| Style variant (Figma 가이드) | 대응 instance prop | 설명 |
|---|---|---|
| Default | (없음) | 기본 컨테이너만 |
| Border | `border = true` | 외곽 ring (가시 회색 outline) |
| Circle / Round / Square | `style = circle/rounded/square` | 모서리 형태 (3 단계 enum, 보조 axis) |
| None | (없음) | 부가 요소 없음 (xs/sm은 이 옵션만 사용 가능) |
| Number | `badge = true` | 우상단 카운트 뱃지 (`badges_v0.21_atom`) |
| Icon Button | `iconButton = true` | 우하단 원형 quick action (전화/메시지 등) |
| Dot | `indicator = true` | 우하단 status dot (~25% size, 흰색 2px ring) |

추가 boolean prop:
- **activeRing**: 외곽 brand orange ring (활성 사용자 강조). Style 9에는 없으나 인스턴스 prop으로 존재.

> indicator/badge/iconButton는 avatar 외곽 코너에 배치되며 컨테이너 overflow를 벗어남 → 시각화 시 부모 wrapper에 `overflow: visible` 필수 (`.avatar` 자체는 image 클리핑 위해 `overflow: hidden` 유지).

## 기본 아이콘 유형 (Default type)

> `1:69582` 사용 예시 페이지에서 확인된 verbatim 패턴.

`type=default` (이미지 없음, 이니셜 없음) 아바타는 **회색 배경(`common/avatar-bg-default` = `#c6c6c6`) + 흰색 사람 실루엣 아이콘** 으로 일관 표시. 모든 default 인스턴스(group/array/use case)에서 동일 아이콘 사용 — 별도 모드/사이즈 분기 없음.

```
[bg #c6c6c6]
  └─ <svg fill=#fff>
       <circle cx=12 cy=9 r=4>      ← 머리
       <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8"> ← 몸통
     </svg>
```

이니셜 폴백(initials)이나 photo 가 우선이고, 둘 다 없을 때만 default 아이콘 노출.

## Group — `avatar_group`

set ID: `1871:77789`. Property 1 단일 prop:

| value | variant ID | 설명 |
|---|---|---|
| `1 single` | `1871:77788` | 단일 아바타 |
| `2 group` | `1871:77787` | 2명 (1명 표시 + +1 카운트 또는 2명 stack) |
| `3 group` | `1871:77785` | 3명 |
| `4 group` | `1871:77786` | 4명 (4명 이상은 마지막에 +N) |

> 그룹 슬롯 50×50 고정. 컨테이너에서 70px 간격으로 배치 (50 + 20 gap).

## Array Layout — `avatar array`

set ID: `4270:111923`. type × size = 12 variants:

| type \\ size | xs_24 | sm_32 | md_40 | lg_48 | xl_64 | 2xl_80 |
|---|---|---|---|---|---|---|
| spread | `4270:112153` | `4270:112150` | `4270:112141` | `4270:112135` | `4270:112132` | `4270:111895` |
| stack | `4270:112156` | `4270:112147` | `4270:112144` | `4270:112138` | `4270:112129` | `4270:111924` |

### Spread (분리 배치) 간격

| size | 항목 width | 항목 spacing | gap |
|---|---|---|---|
| xs_24 | 24 | 26 | +2 |
| sm_32 | 32 | 36 | +4 |
| md_40 | 40 | 46 | +6 |
| lg_48 | 48 | 56 | +8 |
| xl_64 | 64 | 74 | +10 |
| 2xl_80 | 80 | 92 | +12 |

### Stack (겹침 배치) 간격

| size | 항목 width | 항목 spacing | overlap |
|---|---|---|---|
| xs_24 | 24 | 22 | −2 |
| sm_32 | 32 | 28 | −4 |
| md_40 | 40 | 34 | −6 |
| lg_48 | 48 | 40 | −8 |
| xl_64 | 64 | 54 | −10 |
| 2xl_80 | 80 | 68 | −12 |

> **공식**: spread gap = stack overlap (절댓값 동일, 부호만 다름). size별 단계는 +2 / +4 / +6 / +8 / +10 / +12.

## 가이드 페이지 섹션 구조 (`1:69280`)

1. **아바타 (Avatar)** — H1 타이틀 + 설명 (1800×254)
2. **구조 Anatomy** — H2 (Number 라벨링 1~6 도식)
3. **유형 Type** — H2 + 4개 유형 설명 카드 (888×338 grid)
4. **규격 Size & Style** (`1:69377`) — H1 sub-page
   - **사이즈 (Size)** 행: XS_24 / sm_32 / md_40 / lg_48 / xl_64 / 2xl_80 (6 단계)
   - **스타일 (Style)** 행: Default / Border / Circle / Round / Square / None / Number / Icon Button / Dot (9 시각 표현)
     - Default / Border: container 외곽선 유무 (`border` boolean)
     - Circle / Round / Square: 모서리 형태 (`style` prop, 3 단계)
     - None / Number / Icon Button / Dot: 부가 요소 (boolean modifier 또는 badge slot)
   - **주의**: xs/sm 사이즈는 `None` 뱃지 옵션만 선택 가능 (소형 아바타에 뱃지 부착 시 가독성 저하)
5. **사용 예시 Use case** (`1:69454`) — H1 sub-page
   - **그룹 아바타**: Single / 2 group / 3 groups / 4 groups — 4 단계 (stack 레이아웃, 흰색 외곽선으로 시각 분리)
   - **아바타 적층 방식**: Spread vs Stack 비교 (5 아바타 나열)
6. **접근성** — H2 + 3개 H4 sub-section
7. **사용가이드** — Do / Don't 박스 2세트 (각 880×656)

## Usage Notes

- DS color 토큰 미바인딩 (background `common/avatar-bg-default`만 단일 색) → **인스턴스 사용 필수**
- variant prop 매칭은 **풀네임** 사용: `xs_24`, `sm_32`, `md_40`, `lg_48`, `xl_64`, `2xl_80` (`xs` 단독 매칭 실패)
- group/array 사용 시 size별 **고정 spacing 패턴** 준수 (overlap = +/− (2/4/6/8/10/12))
- `avatar_atom`을 직접 그리지 말고 `importComponentSetByKeyAsync(key)` + `createInstance()` 후 `setProperties({type, style, size})`로 호출
- activeRing/border/indicator/badge는 boolean prop — `setProperties({"activeRing": true})` 등으로 토글
- 8명 이상 그룹은 `4 group` + 별도 "+N" 라벨 (avatar_group은 4까지만 정의됨)
- 접근성: 사용자 사진은 `alt`로 사용자 이름, 이니셜은 `aria-label="홍길동"` 필수
- Do: 인물 사진은 얼굴이 중앙에 — Don't: 그룹 4명 초과 노출, 임의 가공 이미지
