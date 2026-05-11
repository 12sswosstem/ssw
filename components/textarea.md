# Textarea

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `1161:127630` `Text area`
>   - `1161:127652` `Textinput/Text Area` (wrapper — **24 variants**, 3축)
>   - `1161:127635` `Textinput/Resource/Textarea/Content` (content sub — 4 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:385666`, `1:385613` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#textarea`, `tokens/number/component.js#textarea`.
> 색상 토큰은 input과 공유 (`text input/*`, `input common/*`).

## Overview
- 다중행 텍스트 입력 필드
- 모드: **light** (production variable_defs 기준)
- 컴포넌트: `Textinput/Text Area` (wrapper) + Content sub (4 type)
- 3축 prop: Size × type × state (24 variants)

## Wrapper Variants — `Textinput/Text Area` (3축, 24 variants)

### prop verbatim
- **Size**: `sm` / `md` / `lg` (대문자 S)
- **type**: `placeholder` / `inputed`
- **state**: `default` / `hover` / `focus` / `disabled`

총 3 × 2 × 4 = **24 variants** (이전 21에서 정정 — placeholder/disabled도 정의됨)

### Variant IDs

#### Size=sm (288 × 116)
| state \\ type | placeholder | inputed |
|---|---|---|
| default | `1161:127653` | `2537:25144` |
| hover | `2537:24995` | `2537:25195` |
| focus | `2537:25024` | `2537:25224` |
| disabled | `4226:12157` | `2537:25253` |

#### Size=md (288 × 124)
| state \\ type | placeholder | inputed |
|---|---|---|
| default | `1161:127676` | `1161:127742` |
| hover | `1161:127809` | `1161:127875` |
| focus | `1161:127942` | `1161:128008` |
| disabled | `4226:12173` | `1161:128074` |

#### Size=lg (288 × 134)
| state \\ type | placeholder | inputed |
|---|---|---|
| default | `1161:127698` | `1161:127764` |
| hover | `1161:127831` | `1161:127897` |
| focus | `1161:127964` | `1161:128030` |
| disabled | `4226:12189` | `1161:128096` |

## Size 스펙

| size | W × H | text area | 라벨 폰트 | placeholder 폰트 |
|---|---|---|---|---|
| sm | 288 × 116 | ~68 | Medium 14 / lh 20 | Regular 14 / lh 20 |
| md | 288 × 124 | 68 | Medium 14 / lh 20 | Regular 16 / lh 24 |
| lg | 288 × 134 | ~78 | Medium 16 / lh 24 | Regular 18 / lh 26 |

## Sub-component — `Textinput/Resource/Textarea/Content` (4 variants)

set ID: `1161:127635`. textarea의 추가 콘텐츠 요소들.

### prop verbatim
- **Type**: `counter` / `text` / `Icon button` / `resize` (대소문자 그대로)

### Variant IDs
| Type | variant ID | 크기 | 용도 |
|---|---|---|---|
| `counter` | `1161:127638` | 47×20 | character count 표시 (예: "12/100") |
| `text` | `1161:127642` | 72×24 | 보조 텍스트 (help/error message) |
| `Icon button` | `1161:127645` | 24×24 | 우측 액션 버튼 (clear 등) |
| `resize` | `1161:127647` | 20×20 | 우하단 크기 조정 핸들 |

> 4가지 sub는 **textarea의 footer/corner에 배치되는 콘텐츠 요소** (필요 시 인스턴스로 추가).

## Color tokens — production (light)

### bg (input common 공유)
| token | light |
|---|---|
| `input common/bg/default` | `#ffffff` |
| `input common/bg/disabled` | `#bcbcbc` |

### border (input common 공유)
| token | light |
|---|---|
| `input common/border/default` | `#bcbcbc` |
| `input common/border/hover` | `#eb6100` (orange — NEW) |
| `input common/border/focused` | `#000000` (NEW) |
| `input common/border/disabled` | `#a5a5a5` |

### text
| token | light |
|---|---|
| `input common/text/default` | `#2b2b2b` (inputed) |
| `input common/text/placeholder` | `#8f8f8f` |
| `input common/text/disabled` | `#8f8f8f` |
| `text input/text/label` | `#565656` (라벨) |
| `text input/text/placeholder` | `#8f8f8f` |

### icon · etc
| token | light |
|---|---|
| `text input/icon/default` | `#8f8f8f` (resize 핸들 등) |
| `text input/etc/error` | `#f03823` |
| `text input/etc/success` | `#05834e` |
| `text input/etc/required mark` | `#f03823` |

## State별 시각 (production light)

| state | bg | border | text |
|---|---|---|---|
| default | `#ffffff` | `#bcbcbc` 1px | `#2b2b2b` (inputed) / `#8f8f8f` (placeholder) |
| hover | `#ffffff` | **`#eb6100`** | `#2b2b2b` |
| focus | `#ffffff` | **`#000000`** 2px | `#2b2b2b` |
| disabled | `#bcbcbc` | `#a5a5a5` 1px | `#8f8f8f` |

## Anatomy (3-Section Vertical)

```
[Heading 20h] (optional: Label / Required / suffix / Trailing)
  gap 8
[Text Area 68~78h] (input_v0.2 multi-line + textarea_resize 20×20 우하단 #8f8f8f)
  gap 8
[Footer 20h] (optional: help text + Character Count)
```

### Sub-component 배치
```
┌─────────────────────────────┐
│ Label *                     │  ← Heading
├─────────────────────────────┤
│                             │
│ Placeholder text            │  ← Text Area (multi-line)
│                             │
│                          ╲╲ │  ← resize 20×20 (우하단)
├─────────────────────────────┤
│ help text          12/100   │  ← Footer (text + counter)
└─────────────────────────────┘
```

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| 라벨 (Label) | `body/sm (M)` | Pretendard 500 / 14 / 20 |
| 본문 텍스트 (sm) | `body/sm` | Pretendard 400 / 14 / 20 |
| 본문 텍스트 (md) | `body/md` | Pretendard 400 / 16 / 24 |
| 본문 텍스트 (lg) | `body/lg` | Pretendard 400 / 18 / 26 |
| placeholder | (동일 size + `text/placeholder` 색) | — |
| help text · counter | `body/xxs (M)` | Pretendard 500 / 12 / 14 |

## Usage Notes

- variant 매칭 verbatim:
  - `Size=sm` (대문자 S) / `md` / `lg`
  - `type=placeholder` / `inputed`
  - `state=default` / `hover` / `focus` / `disabled`
  - 24 variants 풀 매트릭스 (placeholder/disabled도 정의됨 — 이전 "inputed only" 노트는 부정확)
- Sub Content type:
  - `counter`: 우하단 character count (예: "12 / 100")
  - `text`: 좌하단 help text (또는 error/success message)
  - `Icon button`: 우상단 액션 (clear, copy 등)
  - `resize`: 우하단 ╲ 핸들 (사용자 크기 조정 가능 표시)
- input과 동일하게 hover 시 border `#eb6100` (orange), focus 시 `#000000` 2px
- input과 같은 namespace (`text input/*`, `input common/*`) — 시각적 일관성
- placeholder 색은 `#8f8f8f` (input과 동일)
- 다중행 입력이라 textarea만의 특이점:
  - resize 핸들: 우하단에 ╲ 아이콘 (선택적)
  - Character Count: footer 우측에 입력 글자수/최대치 (선택적)
  - 최소 높이는 size별 다름 (sm 116 / md 124 / lg 134)
- 접근성: `<textarea>` HTML 사용, `aria-describedby`로 help text 연결
