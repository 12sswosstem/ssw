# Input (TextInput)

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `2448:19421` `✅text input_v1.0`
>   - `2420:29885` `✅Textinput/Text Field` (wrapper — 6 variants, 2축)
>   - `2420:63610` `Textinput/Resource/label` (label sub — 3 variants)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `1:357168`, `1:357020` (가이드 페이지)
> - `figma-export.json` (2026-05-04 export)
> - **사용자 작업 파일 `↪️ Text input`** (page id `1161:30083`) — TalkToFigma MCP로 variant 전수 추출 (2026-05-07)
>
> JS 토큰: `tokens/color/component.js#input`, `tokens/number/component.js#input`.
> 토큰 prefix: `text input/*`, `input common/*`, `textinput/*`, `input_(dropdown)/*`.

## Overview
- 텍스트 입력 필드
- 모드: **light** (production variable_defs 기준)
- 컴포넌트: `✅Textinput/Text Field` (wrapper) — text input + label + footer 통합
- 사이즈: xs_24 → sm_28 → md_32 → lg_40 → xl_48 → 2xl_64

## Number tokens (Mode 1)

### height (px) — `input_(dropdown)/height/{size}`
| size | height |
|---|---|
| xs_24 | 24 |
| sm_28 | 28 |
| md_32 | 32 |
| lg_40 | 40 |
| xl_48 | 48 |
| 2xl_64 | 64 |

### padding (좌우, px)
| size | padding |
|---|---|
| sm_28 / md_32 | 8 |
| lg_40 / xl_48 | 12 |
| 2xl_64 | 16 |

### corner radius (px)
| size | radius |
|---|---|
| xs_24 / sm_28 / md_32 | 4 |
| lg_40 / xl_48 | 6 |
| 2xl_64 | 8 |

### border 굵기 (`textinput/border/{size}`)
| size | border |
|---|---|
| xs_24 ~ md_32 | 1 |
| xl_48 | 1.5 |
| 2xl_64 | 2 |

## Color tokens — production (light)

### text input (외부 wrapper)
| token | light |
|---|---|
| `text input/bg/default` | `#ffffff` |
| `text input/text/default` | `#2b2b2b` |
| `text input/text/label` | `#565656` (라벨) |
| `text input/text/read only-pms` | `#2b2b2b` (PMS read-only) |
| `text input/border/default` | `#a5a5a5` |
| `text input/icon/default` | `#8f8f8f` |
| `text input/etc/required mark` | `#f03823` (필수 `*`) |
| `text input/etc/error` | `#f03823` (validation=error) |
| `text input/etc/success` | `#05834e` (validation=success) |

### input common (내부 input field 공유)
| token | light |
|---|---|
| `input common/bg/default` | `#ffffff` |
| `input common/bg/disabled` | `#bcbcbc` |
| `input common/text/default` | `#2b2b2b` |
| `input common/text/placeholder` | `#8f8f8f` |
| `input common/text/disabled` | `#8f8f8f` |
| `input common/text/read only-pms` | `#2b2b2b` |
| `input common/border/default` | `#bcbcbc` |
| `input common/border/hover` | `#eb6100` (orange — NEW) |
| `input common/border/focused` | `#000000` (NEW) |
| `input common/border/disabled` | `#a5a5a5` |

> **중요 정정**: 이전 문서 light 값이 dark 였음. production 기준으로 정정:
> - `text input/text/default`: `#eeeeee` → **`#2b2b2b`**
> - `text input/bg/default`: `#000000` → **`#ffffff`**
> - `input common/text/default`: `#eeeeee` → **`#2b2b2b`**
> - `input common/border/default`: `#8f8f8f` → **`#bcbcbc`**
> - 신규: `input common/border/hover` `#eb6100`, `border/focused` `#000000`
> - 신규: `text input/etc/error` `#f03823`, `etc/success` `#05834e`

## Wrapper Variants — `✅Textinput/Text Field` (2축, 6 variants)

### prop verbatim (TalkToFigma 추출)
- **`label position`**: `top` / `side` (lowercase, 공백 포함 — `label position`이 prop 키 그대로)
- **`validation`**: `default` / `success` / `error`

### Variant IDs (실제 prop value verbatim)

| variant ID | label position | validation | 비고 |
|---|---|---|---|
| `2420:29886` | `✅Textinput` | `Text Field` | **default variant fallback** — prop value가 `top/default`가 아니라 컴포넌트 base 명칭. instance에서 `top/default`로 매칭 시 이 variant가 반환됨 |
| `2420:29902` | `top` | `success` | |
| `2420:29918` | `top` | `error` | |
| `2420:29934` | `side` | `default` | |
| `2420:29948` | `side` | `success` | |
| `2420:29962` | `side` | `error` | |

> **이전 메모리 정정**: 이전 표에서 `top/default = 2420:29886`라 했지만, 실제 그 variant의 prop value는 `label position=✅Textinput, validation=Text Field`이며 default fallback 역할. `top/default` 별도 variant는 존재하지 않음 (default variant가 그 자리를 대신).

> 6 variants — `validation`은 시각적 피드백 (default 회색, success 녹색, error 빨강).

## Sub-component — `Textinput/Resource/label` (3 variants)

set ID: `2420:63610`. 라벨 컴포넌트.

### prop verbatim
- **size**: `s_12` / `m_14` / `l_16`

### Variant IDs
| size | variant ID | font | 크기 |
|---|---|---|---|
| s_12 | `2420:63611` | Pretendard 500 / 12 | 21×18 |
| m_14 | `2420:63615` | Pretendard 500 / 14 (default) | 25×20 |
| l_16 | `2420:63631` | Pretendard 500 / 16 | 28×24 |

> Label과 wrapper는 **별도 axis** — wrapper의 size 변경 시 label size도 인스턴스로 함께 조정.

## Inner Input — `✅input_v0.2`

text 영역 자체 (wrapper 내부에 포함):
- size: xs_24 / sm_28 / md_32 (default) / lg_40 / xl_48 / 2xl_64
- type: placeholder / inputed
- state: default / hover / focus / disabled

### State별 시각 (production light)

| state | bg | border |
|---|---|---|
| default | `#ffffff` | `#a5a5a5` 1px (또는 size별 굵기) |
| hover | `#ffffff` | **`#eb6100`** (orange — `input common/border/hover`) |
| focus | `#ffffff` | **`#000000`** 2px (`input common/border/focused`) |
| disabled | `#bcbcbc` | `#a5a5a5` 1px |
| read-only | `#ffffff` | `#a5a5a5` (text 색만 다름) |

### Validation별 시각

| validation | input border | help/count text | trailing icon |
|---|---|---|---|
| default | `#a5a5a5` | `#565656` | dropdown 화살표 |
| success | `#a5a5a5` (유지) | `#05834e` | check_circle (녹색) |
| error | `#f03823` | `#f03823` | alert_circle (빨강) |

> `text input/etc/success` `#05834e` (이전 v1.0 기준 `#0BA45D`에서 변경된 값과 일치).

## Anatomy

### label position=top
```
[Label  *]                              ← `text input/text/label` 14 Medium / required `#f03823`
[─────────────────────  ⚠ ]              ← input + trailing icon
[help text · Character Count]            ← footer 20h
```

### label position=side
```
[Label] [─────────────────  ⚠ ]
        [help text · count]
```

### 3-Section Vertical (validation=default 풀 anatomy)
```
[Heading 20h] (Label / Required / suffix / Trailing)
  gap 8
[Input container 32h+] (input_v0.2)
  gap 8
[Footer 20h] (Help Text · Character Count)
```

## Typography

| 영역 | textStyle | font · size · line-height |
|---|---|---|
| label (s_12) | Pretendard Medium 12 | 12 / 14 |
| label (m_14, default) | `body/sm (M)` | Pretendard 500 / 14 / 20 |
| label (l_16) | `body/md (M)` | Pretendard 500 / 16 / 24 |
| 본문 텍스트 (xs/sm/md) | `body/sm` | Pretendard 400 / 14 / 20 |
| 본문 텍스트 (lg/xl) | `body/md` | Pretendard 400 / 16 / 24 |
| 본문 텍스트 (2xl) | `body/xl` | Pretendard 400 / 20 / 28 |
| placeholder | 동일 size + 색상만 변경 | — |
| help text · count | `body/xxs (M)` | Pretendard 500 / 12 / 14 |

## Usage Notes

- variant 매칭 verbatim:
  - wrapper: `label position=top` / `side` / `validation=default` / `success` / `error` (소문자)
  - sub label: `size=s_12` / `m_14` / `l_16` (소문자 + 언더스코어)
  - inner: `size=xs_24` / `sm_28` / `md_32` / `lg_40` / `xl_48` / `2xl_64` (풀네임)
- hover 시 border가 brand orange (`#eb6100`)로 변경 — `input common/border/hover`
- focus 시 border 검정 (`#000000`) 2px — 키보드 탐색
- validation:
  - `default`: 회색 border, footer는 일반 회색 텍스트
  - `success`: footer 녹색 (`#05834e`) + check_circle 아이콘
  - `error`: border + footer 빨강 (`#f03823`) + alert_circle 아이콘
- Required mark `*`: text input/etc/required mark `#f03823` (Malgun Gothic Regular)
- read only-pms는 PMS 화면 한정 변형 — text 색이 default와 동일 (`#2b2b2b`) 진하게
- placeholder와 disabled text는 같은 `#8f8f8f` (구분은 disabled bg `#bcbcbc`로)
- size별 border 굵기 다름: xs~md=1, xl=1.5, 2xl=2
- Character Count: footer 우측, `body/xxs (M)` 12px
- 6 wrapper variants는 validation 상태 변형 — 인터랙션 state(hover/focus/disabled)는 inner `✅input_v0.2`에서 처리
