# Button

> 출처:
> - Figma **UI-Kit-Guide(공유용)** file `ky00DVb1Q3RmiMlYWwdSGG` / 페이지 `1:264027` (`↪️ Button ✅`)
>   - 프레임 `1:272462` (`Button`) — 스펙 정의 · 가이드라인 · 접근성
>   - 프레임 `183:26698` (`Button use it`) — 9 styles × 6 states 매트릭스
>   - 프레임 `183:27402` (`Icon button use it`) — 아이콘 버튼 별도 매트릭스
> - 공통 컴포넌트(Copy) file `lIIen1jmIhT0vuyXCMQDQA` / node `1058:185800` — production component (variable_defs)
> - Last sync: 2026-05-11 via TalkToFigma MCP `get_node_info`
>
> JS 토큰: `tokens/color/component.js#button`, `tokens/number/component.js#button`, `tokens/typography/text-style.js#v04.button`

## Overview

버튼(Button)은 사용자 인터랙션을 유도하는 핵심 UI 컴포넌트로, 페이지 내에서 가장 명확한 행동 지시 요소로 기능합니다.

- 사용자의 작업 성공률을 높이기 위해 **시각적 계층 구조(visual hierarchy)** 와 **행동 기반 계층 구조(action hierarchy)** 가 존재합니다.
- 두 구조에 따라 버튼의 스타일, 우선순위, 상태 표현을 일관된 가이드라인에 따라 설계합니다.
- 라벨 앞·뒤 또는 아이콘만으로 구성할 수 있어 상황에 맞게 유연하게 활용할 수 있습니다.
- 모든 버튼 구성 요소는 Figma 변수 시스템 기반으로 컴포넌트화되어 관리됩니다.

## Anatomy

```
[ Prefix Icon ] [ Label ] [ Suffix Icon ]
└──────── Container ────────────┘
```

| 요소 | 역할 |
|------|------|
| **Container** | 버튼의 기능이 부과되는 영역 (버튼 박스) |
| **Label** | 버튼 텍스트. 상태값에 따라 black/white 등 컬러 적용 |
| **Prefix Icon** | 라벨 앞에 배치 — 사용자의 인지·입력 보조 |
| **Suffix Icon** | 라벨 뒤에 배치 — 동작 보조 (예: 페이지 이동·팝업 호출, Chevron) |

## Properties

| Property | Values | 비고 |
|----------|--------|------|
| **Variant** | 9종 (아래 Styles 참조) | 시멘틱 컬러 시스템 |
| **State** | 6종 (default, hover, pressed, focused, inactive, disabled) + loading | 인터랙션 상태 |
| **Size** | 9종 (xxsmall ~ 4xlarge) | 디바이스·강조 맥락에 따라 선택 |
| **Layout** | Icon First / Icon Last / Icon Only / Text Only | 아이콘 위치 |
| **Width** | content / full / min·max 지정 | (Optional) |

## Styles (9 variants)

> ⚠ **이름 표기 주의**: UI-Kit-Guide는 `text`/`distructive-*` (원본 오타) 사용, production 라이브러리는 `subtle`/`destructive-*` (정정). 같은 컴포넌트의 두 명명이 공존하므로 [Naming Drift](#naming-drift-ui-kit-guide--production) 표 참조.

| # | UI-Kit-Guide | Production | Emphasis | 설명 |
|---|--------------|------------|----------|------|
| 1 | `brand-primary` | (동일) | High | 사용자 간 연결이 일어나는 **주요 기능**에 사용. 위계가 높고 브랜드 임팩트가 강한 액션. **한 화면에 1개만**. 예: 주문/결제 최종 단계 CTA. |
| 2 | `brand-secondary` | (동일) | Medium | 브랜드 성격을 유지하면서 primary보다 낮은 강조. 동일 맥락 보조 액션이나 연계 기능. |
| 3 | `brand-tertiary` | (동일) | Low | 브랜드 컬러를 활용해 가볍게 강조. 링크성 액션·보조 탐색. |
| 4 | `neutral-primary` | (동일) | High | **대부분 화면의 CTA**. 고대비·접근성·가독성 우수. 한 화면에 1개만 권장. |
| 5 | `neutral-secondary` | (동일) | Medium | 보조 기능·서브 액션. primary와 함께 사용 시 보조 선택지. **대부분의 버튼에 권장**. |
| 6 | `neutral-tertiary` | (동일) | Low | 배경 영향 없이 가볍게 사용할 수 있는 저강도 액션. 리스트·툴바·필터 반복 영역에 적합. |
| 7 | **`text`** | **`subtle`** | No | **가장 낮은 위계의 액션**. 배경·테두리 없이 텍스트 중심. 부가 기능·링크성 동작·보조 탐색. 과도한 사용 시 클릭 중요도 ↓ |
| 8 | **`distructive-primary`** ⚠ | **`destructive-primary`** | High | 삭제·초기화 등 **되돌릴 수 없는 중요한 작업**. 사용자에게 위험을 명확히 알림. 주로 Alert Dialog. |
| 9 | **`distructive-secondary`** ⚠ | **`destructive-secondary`** | Medium | 삭제·해제·취소 등 주의가 필요하지만 primary만큼 강한 경고는 불필요한 경우. |

## States (6 + loading)

| State | 트리거 | 시각 |
|-------|--------|------|
| **default** | 평상시 | base 색 |
| **hover** | 마우스 위에 있음 | base 위 alpha overlay (어두운 base → white 15%, 밝은 base → black 5%) |
| **pressed** | 클릭/탭 중 | base 위 alpha overlay (어두운 base → white 25%, 밝은 base → black 10%) |
| **focused** | 키보드 포커스 | `common/focus-ring` 외부 단일 링 (black) + 버튼 외곽선과 ring 사이 투명 갭 |
| **inactive** | 1차 비활성 (브랜드 톤 유지) | 원본 스타일 색 + `opacity: 0.4` 전체 적용 |
| **disabled** | 2차 완전 비활성 (회색 톤 교체) | bg `disabled` · border `disabled` · text `disabled` 토큰 풀 교체 |
| **loading** | 비동기 동작 진행 | spinner 표시 + 클릭 비활성 |

## Sizes (9 levels)

| 사이즈 | 키 | 권장 컨텍스트 |
|--------|-----|----------------|
| 4xlarge | `4xl_96` | HMI 터치 환경·온라인 마케팅의 강한 강조 |
| 3xlarge | `3xl_80` | HMI 터치 환경·큰 강조 |
| 2xlarge | `2xl_64` | 모바일 강조 |
| xlarge | `xl_48` | 모바일 강조 |
| large | `lg_40` | 일반 데스크탑 |
| medium | `md_32` | 일반 데스크탑 (가장 흔함) |
| small | `sm_28` | 컴팩트 영역 |
| xsmall | `xs_24` | 인라인·테이블 셀 |
| xxsmall | `xxs_20` | 매우 컴팩트 (정밀 도구) |

> 클릭 가능한 버튼 목표(target)는 **최소 24×24 CSS 픽셀** 확보. 그보다 작을 경우 요소 간 **최소 24px 이상 간격** (WCAG 2.5.8).

## Layouts

| Layout | 구성 | 비고 |
|--------|------|------|
| **Icon First** (Prefix) | 아이콘 + 라벨 | 액션 의미 보조 (예: `[✈ 전송]`) |
| **Icon Last** (Suffix) | 라벨 + 아이콘 | 동작 보조 (예: `[더 보기 ›]`, `[필터 ▾]`) |
| **Icon Only** | 아이콘만 | ⚠ 접근성 ↓ — **꼭 필요한 경우에만**, `aria-label`/tooltip 필수 |
| **Text Only** | 라벨만 | 가장 단순 |

> 아이콘은 **4 또는 8의 배수 사이즈**로 제작하여 시각적 통일성 유지. 28px이 PMS S/W의 대부분의 화면에서 사용되는 아이콘 기본 사이즈.

## Hierarchy / Emphasis

버튼의 시각적 주목도는 배경색 대비에 따라 달라집니다. 화면에서 강조하려는 정도에 따라 적절한 Variant 선택:

| Emphasis | Variants | 배경 대비 | 개수 |
|----------|----------|-----------|------|
| **High** | `neutral-primary` / `brand-primary` / `distructive-primary` | 대비가 강한 배경색 | **1개만** (가장 중요한 CTA) |
| **Medium** | `neutral-secondary` / `brand-secondary` | 흰색 배경색 | **여러 개** (대부분의 액션, High emphasis와 조합) |
| **Low** | `neutral-tertiary` / `brand-tertiary` | 대비가 약한 배경색 | **여러 개** (중요도가 낮은 보조 액션) |
| **No** | `text` (= `subtle`) | 배경색 없음 | **여러 개** (취소 등) |

> 가장 강하게 강조된 버튼 = primary, 그 다음 secondary, 마지막 tertiary.  
> **대부분 버튼은 `neutral-secondary`**, 중요한 CTA에만 `neutral-primary` 사용.  
> *Brand-primary는 온라인 서비스의 경우 **주문·결제 등 최종 단계 CTA에 한정**해서 사용.

## Usage Guidelines

### Primary Button의 활용

- 사용자가 특정 작업을 수행하거나 흐름을 진행하거나, 확인 후 닫기/완료할 수 있도록 **상황별로 프라이머리 버튼을 하나씩만** 사용.
- **화면에 여러 개 프라이머리 버튼 금지**.
- 프라이머리는 주요 동작, 세컨더리는 그 대안.
- 버튼이 콘텐츠와 함께 스크롤되는 경우엔 **primary를 맨 위**에. 아래에 고정되어 있다면 **아래쪽**에.
- **예외**: 웹에서 여러 패널이 표시되는 상황은 1개 이상 가능 (패널 당 하나씩 권장).

### Destructive 버튼

| ✓ Do | ✗ Don't |
|------|---------|
| "삭제하시겠습니까?" + `neutral-primary [예]` / 아니오(text) | `[저장하기]` (destructive-primary) — 일반 저장에 destructive 금지 |
| "삭제하시겠습니까?" + `destructive-primary [삭제하기]` / 취소(text) | |
| `destructive-primary [Delete account]` / Cancel(text) | |

- **되돌리기 어렵거나 불가능한 작업에만** Destructive 사용.
- 중요도가 낮은 경우 `destructive-secondary` 사용.

### Label 작성

버튼 라벨의 문구는 사용자가 수행할 행동을 **명확하고 예측 가능하게** 표현. 항상 사용자 시점에서 작성하고, 동일한 액션에는 일관된 단어와 톤 유지.

| ✓ Do | ✗ Don't |
|------|---------|
| `전송하기` (간결한 동사) | `DON'T USE UPPERCASE` (전체 대문자) |
| `Use sentence case` | `Don't Use Title Case` |
| `시작하기` | `다음` (모호한 라벨) |
| "삭제하시겠습니까?" + 삭제하기(destructive) / 취소 | "삭제하시겠습니까?" + 예 / 아니오 (모호한 yes/no) |
| `Cancel` / `Discard` (액션 매칭) | `Cancel` / `Delete` (라벨/액션 불일치) |

- 영문 표기 시 **모두 대문자 또는 대소문자를 섞어서 사용 금지**.

### Icon의 사용

아이콘은 라벨의 앞이나 뒤에 배치할 수 있으며, **Prefix는 액션의 의미 보조**, **Suffix는 Chevron처럼 동작 보조**.

| ✓ Do | ✗ Don't |
|------|---------|
| `[✈ 전송]` (Prefix: 의미 보조) | `[🔍 환자 검색 ›]` (Prefix + Suffix 양쪽 동시) |
| `[🔍 검색]` | |
| `[더 보기 ›]` (Suffix: chevron) | |
| `[필터 ▾]` | |

### 긴 라벨을 사용하는 경우

긴 라벨이 필요한 경우 **버튼 그룹 레이아웃을 Horizontal에서 Vertical로 전환**.

| ✓ Do | ✗ Don't |
|------|---------|
| Horizontal: 짧은 라벨 `[라벨]` `[라벨]` (primary 우측) | Horizontal: 긴 라벨 `[엄청 길고 긴 라벨…]` (overflow/잘림) |
| Vertical: primary `[긴 라벨을 사용하는 경우]` 상단 + secondary 하단 | Vertical: secondary 상단 + primary 하단 (위계 역전) |

- **Primary는 오른쪽 또는 상단**.

## Accessibility (WCAG 2.2)

| 기준 | 요구사항 |
|------|---------|
| **키보드 접근성 (SC 2.1.1)** | 모든 버튼은 Tab·Shift+Tab으로 포커스 이동 가능, Enter 또는 Space 키로 작동 |
| **포커스 가시성 (SC 2.4.7)** | 키보드 포커스 시 **2px 이상의 고대비 포커스 인디케이터** 표시 |
| **클릭 대상 크기 (SC 2.5.8)** | 마우스·트랙패드 환경에서 **최소 24×24 CSS 픽셀** 확보. 작을 경우 요소 간 **최소 24px 간격** |
| **비활성화 상태** | 시각적으로 명확히 구분, 클릭 불가, **키보드 포커스에서 제외** |
| **대비** | 시멘틱 컬러는 APCA 대비 기준 **Lc 45 이상** 충족 |

> WCAG는 주로 블랙·그레이 계열의 단색 배경과 텍스트 조합에서 적용되는 명도 기반 접근성 지침입니다.

## Interaction Guidelines

### 탐색

| 입력 | 설명 |
|------|------|
| `Tab` / `Shift + Tab` | 모든 버튼은 Tab·Shift+Tab으로 접근 가능해야 함 |

### 실행

| 입력 | 설명 |
|------|------|
| `Click` | 버튼의 동작 실행 |
| `Enter` / `Space` | 초점을 가진 상태에서 버튼의 동작 실행 |

## Icon Button (별도 가이드)

> 출처: `183:27402` (`Icon button use it`)

아이콘만으로 의미를 전달하는 정사각 버튼. 별도 매트릭스로 문서화.

### 매트릭스

- **9 styles** × **6 states** × **9 sizes** 매트릭스 (Button과 동일 골격)
- **layout=`icon only`** 또는 별도 `iconButton_*` variant
- 모든 변형: **width = height** (정사각)

### 사이즈

| size | 정사각 | corner radius | border | icon size 권장 |
|------|--------|---------------|--------|------------------|
| xxs | 20×20 | 4 | 1 | 12 |
| xs  | 24×24 | 4 | 1 | 14 |
| sm  | 28×28 | 4 | 1 | 16 |
| md  | 32×32 | 6 | 1 | 16 |
| lg  | 40×40 | 6 | 1 | 20 |
| xl  | 48×48 | 8 | 1.5 | 24 |
| 2xl | 64×64 | 8 | 2 | 28 |
| 3xl | 80×80 | 12 | 2.5 | 32 |
| 4xl | 96×96 | 14 | 3 | 40 |

### 사용 가이드

- **`aria-label` 또는 tooltip 필수** (라벨 없이 의미 전달)
- variant 매칭 시 Button set의 `layout=icon only`로 호출 가능 (single source of truth)
- 모바일은 **lg(40×40) 이상 권장** (터치 타겟 가이드라인 44×44 이상)
- 의미가 명확한 경우(✕, ←, ⚙, 🔍 등)에만 사용. 모호한 아이콘은 라벨 있는 Button 사용.

## Naming Drift (UI-Kit-Guide ↔ Production)

UI-Kit-Guide(가이드 페이지)와 production 라이브러리 간 이름 차이 정리:

| 항목 | UI-Kit-Guide | Production (`lIIen1jmIhT0vuyXCMQDQA`) | 비고 |
|------|--------------|---------------------------------------|------|
| Style #7 | `text` | `subtle` | rename |
| Style #8 | `distructive-primary` ⚠ | `destructive-primary` | 오타 수정 |
| Style #9 | `distructive-secondary` ⚠ | `destructive-secondary` | 오타 수정 |
| Layout | `Text Only` 포함 4종 | `text only` variant 미존재 (`icon labeled` / `icon only` 2종만) | production 미반영 |
| State | `Disabled` | `disabled-gray` | 토큰 키 다름 |

> **Instance 호출 시 매칭 방법**: production 라이브러리의 publishedKey 또는 variant prop value는 위 우측 칼럼 기준. 즉 `setProperties({ style: "subtle", state: "default" })` 로 호출해야 매칭됨.

## Production Library Reference

> 아래 정보는 **production 라이브러리 노드 `1058:185800`** (`button_beta_v0.22_test`) variable_defs 기준.

### Number tokens (Mode 1)

| size | height | h-padding | text-padding | corner radius | border |
|------|--------|-----------|--------------|---------------|--------|
| xxs | 20 | 4 | 4 | 4 | 1 |
| xs | 24 | 6 | 4 | 4 | 1 |
| sm | 28 | 8 *(추정)* | 4 *(추정)* | 4 | 1 |
| md | 32 | 8 | 4 | 6 | 1 |
| lg | 40 | 12 | 4 | 6 | 1 |
| xl | 48 | 12 | 8 | 8 | 1.5 |
| 2xl | 64 | 16 | 8 | 8 | 2 |
| 3xl | 80 | 24 | 8 | 12 | 2.5 |
| 4xl | 96 | 24 | 8 | 14 | 3 |

- `corner radius/2xl 2` = **10** (2xl의 별도 변형 — 둥글기 약화 옵션)
- `h-padding` = 컨테이너 좌우 패딩 (외부)
- `text-padding` = 텍스트 컨테이너 내부 패딩 (라벨/아이콘 사이 갭)

### Color tokens (light · production)

#### bg
| token | light |
|-------|-------|
| `bg/brand-primary` | `#eb6100` |
| `bg/brand-secondary` | `#ffffff` |
| `bg/brand-tertiary` | `#fbdfcc` *(또는 `#f7c099`)* |
| `bg/neutral-primary` | `#2b2b2b` |
| `bg/neutral-secondary` | `#ffffff` |
| `bg/neutral-tertiary` | `#e9e9e9` |
| `bg/destructive-primary` | `#f03823` |
| `bg/destructive-secondary` | `#ffffff00` (transparent) |
| `bg/subtle` | `#ffffff00` (transparent) |
| `bg/disabled` | `#dadada` |
| `bg/disabled-gray` | `#bcbcbc` |
| `bg/disabled-inactive` | `#8f8f8f` |

#### fg (label · icon)
| token | light |
|-------|-------|
| `fg/brand-primary` | `#f9f9f9` |
| `fg/brand-secondary` | `#eb6100` |
| `fg/brand-tertiary` | `#eb6100` |
| `fg/neutral-primary` | `#f9f9f9` |
| `fg/neutral-secondary` | `#565656` |
| `fg/neutral-tertiary` | `#565656` |
| `fg/destructive-primary` | `#f9f9f9` |
| `fg/destructive-secondary` | `#f03823` |
| `fg/subtle` | `#606881` |
| `fg/disabled` | `#a5a5a5` |

#### border
| token | light |
|-------|-------|
| `border/brand-primary` | `#eb6100` |
| `border/brand-secondary` | `#727272` |
| `border/neutral-primary` | `#2b2b2b` |
| `border/neutral-secondary` | `#a5a5a5` |
| `border/destructive-primary` | `#f03823` |
| `border/disabled` | `#dadada` |

#### common (overlay · focus)
| token | value | 의미 |
|-------|-------|------|
| `common/default` | `#00000000` | 투명 |
| `common/hover` | `#0000000d` (~5% black) | 밝은 base 위 hover |
| `common/pressed` | `#0000001a` (~10% black) | 밝은 base 위 pressed |
| `common/hover-neutral` | `#ffffff26` (~15% white) | 어두운 base 위 hover |
| `common/pressed-neutral` | `#ffffff40` (~25% white) | 어두운 base 위 pressed |
| `common/focus-ring` | `#000000` | 키보드 포커스 링 |

### Focus Ring 구조

> 실제 구조 = 버튼 border + 그 외부에 단일 black ring 1개 (inset 음수 절대 위치).
> 두 링 사이의 **투명 갭**이 light 배경에서 흰색 띠처럼 보이는 것 — "이중 링"이 아님.

| size | button border | ring inset | ring weight | ring radius |
|------|---------------|------------|-------------|-------------|
| xxs | 1 | -3 | 1 | 6 |
| xs  | 1 | -3 | 1 | 6 |
| sm  | 1 | -3 | 1 | 6 |
| md  | 1 | -3 | 1 | 8 |
| lg  | 1 | -3 | 1 | 8 |
| xl  | 1.5 | -3.5 | 1.5 | 10 |
| 2xl | 2 | -4 | 2 | 10 |
| 3xl | 2.5 | -4.5 | 2.5 | 13 |
| 4xl | 3 | -5 | 3 | 14 |

- focus ring 두께 = 해당 사이즈의 button border 두께와 동일
- focus ring 반지름 = button corner radius + ~2px
- **갭 폭 = `|inset|` − ring weight = 모든 사이즈 일정 2px**

CSS 구현 예 (md):
```css
.btn--md.btn--focused {
  outline: 1px solid #000;     /* common/focus-ring */
  outline-offset: 2px;          /* 갭 폭 (일정) */
}
```

### Typography

| size | textStyle | font · size · line-height |
|------|-----------|----------------------------|
| xxs | `button/xxs (SB)` | Pretendard 600 / 12 / 16 |
| xs  | `button/xs (SB)` | Pretendard 600 / 14 / 20 |
| sm  | `button/sm (SB)` | Pretendard 600 / 14 / 20 |
| md  | `button/md (SB)` | Pretendard 600 / 16 / 24 |
| lg  | `button/lg (SB)` | Pretendard 600 / 16 / 24 |
| xl  | `button/xl (SB)` | Pretendard 600 / 18 / 24 |
| 2xl | `button/2xl (SB)` | Pretendard 600 / 24 / 30 |
| 3xl | `button/3xl (SB)` | Pretendard 600 / 28 / 36 |
| 4xl | `button/4xl (SB)` | Pretendard 600 / 32 / 40 |

## Usage Notes

- 본 프로젝트에서는 **neutral 톤만 사용** (brand 톤은 사용자 명시 지시 시에만).
- 한 화면에 `*-primary` 1개만 (위계: primary → secondary → tertiary → text/subtle).
- focused는 `common/focus-ring`(black) 단일 외부 링 — 버튼과 링 사이 투명 갭이 배경에 따라 흰색/회색으로 비침.
- disabled 토큰 3종 공존: `disabled` / `disabled-gray` / `disabled-inactive` — 신규 화면은 `disabled-gray` 권장.
- variant/instance API 호출 시 production의 정정 이름 사용 (`destructive`, `subtle`).
- 라벨은 Sentence case (한국어/영문 모두 첫글자만 대문자).
