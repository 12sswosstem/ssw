# Tab

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `1647:39181` `Tabs Item v2.0` (**350 variants**)
> - 4 컴포넌트 셋:
>   - `1647:39182` `line_horizontal tab_items` (125 variants, 4축)
>   - `1647:48299` `line_vertical tab_items` (125 variants, 4축)
>   - `1647:40443` `Icon Tabs items` (50 variants, 3축)
>   - `1647:43445` `contained_tab_items` (50 variants, 3축)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`:
>   - `96:15788`, `100:49975` (가이드 페이지)
>
> JS 토큰: `tokens/color/component.js#tab`.
> 토큰 prefix: `tab/line_tab/*`, `tab/contained_tab/*`, `tab/lined/*`, `tab/contained/*`, `tab/container/*`.

## Overview
- 모드: **light** (production variable_defs 기준)
- 4 가지 스타일:
  - **line_horizontal**: 가로 라인 탭 (indicator_position bottom/top)
  - **line_vertical**: 세로 라인 탭 (indicatior_position left/right — **Figma 원본 오타 보존**)
  - **Icon Tabs**: 좌우 화살표 스크롤러 (direction previous/next)
  - **contained_tab**: 캡슐형 탭

## Number tokens (Mode 1)

### tab/lined/* (line tab)
| size | height | h-padding | border | radius |
|---|---|---|---|---|
| xxs | 24 | 12 | 2 | 4 |
| xs | 28 | 12 | 2 | 4 |
| sm | 32 | 12 | 2 | 4 |
| md | 40 | 16 | 2 | 4 |
| lg | 48 | 20 | 2 | 6 |

- `tab/lined/gap`: 2 (item 사이)

### tab/contained/* (contained tab)
| size | height | h-padding | border |
|---|---|---|---|
| xxs | 24 | 12 | 1 |
| xs | 28 | 12 | 1 |
| sm | 32 | 12 | 1 |
| md | 40 | 16 | 1 |
| lg | 48 | 20 | 2 |

- `tab/contained/gap`: 2

## Color tokens — production (light)

### line_tab
| token | light |
|---|---|
| `line_tab/bg-default` | `#ffffff00` (transparent) |
| `line_tab/bg-hover` | `#f4f4f4` |
| `line_tab/bg-pressed` | `#eeeeee` |
| `line_tab/bg-selected` | `#ffffff00` (transparent — indicator로 표시) |
| `line_tab/bg-disabled` | `#ffffff00` |
| `line_tab/text-default` | `#565656` |
| `line_tab/text-default-num` | `#eb6100` (숫자 카운트용 — NEW) |
| `line_tab/text-selected` | `#eb6100` |
| `line_tab/text-disabled` | `#a5a5a5` |

### contained_tab
| token | light |
|---|---|
| `contained_tab/bg-default` | `#ffffff00` (transparent) |
| `contained_tab/bg-hover` | `#f8f8f8` |
| `contained_tab/bg-pressed` | `#eeeeee` |
| `contained_tab/bg-selected` | `#fefefe` |
| `contained_tab/bg-disabled` | `#ffffff00` |
| `contained_tab/border-default` | `#ffffff00` |
| `contained_tab/border-selected` | `#eb6100` (orange — NEW) |
| `contained_tab/text-default` | `#000000` |
| `contained_tab/text-default-num` | `#eb6100` (NEW) |
| `contained_tab/text-selected` | `#eb6100` |
| `contained_tab/text-disabled` | `#a5a5a5` |
| `contained_tab/container/bg` | `#ffffff` |
| `contained_tab/container/border` | `#a5a5a5` |

> **중요 정정**: 이전 문서는 dark 값으로 표기됨. light 기준으로 정정.

## Variants — line_horizontal (`1647:39182`, 4축, 125 variants)

### prop verbatim
- **indicator_position**: `bottom` / `top` / `none`
- **indicator_size**: `content` / `full` / `none`
- **size**: `xxs(24)` / `xs(28)` / `sm(32)` / `md(40)` / `lg(48)` (괄호 포함 verbatim)
- **state**: `default` / `hover` / `pressed` / `selected` / `disabled`

### Variant IDs — `indicator_position=bottom, indicator_size=content` (가장 많이 사용)

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:39183` | `1647:39195` | `1647:39207` | `1647:39219` | `1647:39231` |
| xs(28) | `1647:46938` | `1647:46950` | `1647:46962` | `1647:46974` | `1647:46986` |
| sm(32) | `1647:46998` | `1647:47010` | `3237:29734` | `1647:47034` | `1647:47046` |
| md(40) | `1647:47058` | `1647:47070` | `1647:47082` | `1647:47094` | `1647:47106` |
| lg(48) | `1647:47118` | `1647:47130` | `1647:47142` | `1647:47154` | `1647:47166` |

### Variant IDs — `indicator_position=top, indicator_size=content`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:39303` | `1647:39315` | `1647:39327` | `1647:39339` | `1647:39351` |
| xs(28) | `1647:39543` | `1647:39555` | `1647:39567` | `1647:39579` | `1647:39591` |
| sm(32) | `1647:39735` | `1647:39759` | `1647:39783` | `1647:39819` | `1647:39831` |
| md(40) | `1647:39999` | `1647:40035` | `1647:40047` | `1647:40059` | `1647:40071` |
| lg(48) | `1647:40263` | `1647:40275` | `1647:40287` | `1647:40299` | `1647:40311` |

### Variant IDs — `indicator_position=bottom, indicator_size=full`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:39243` | `1647:39255` | `1647:39267` | `1647:39279` | `1647:39291` |
| xs(28) | `1647:39483` | `1647:39495` | `1647:39507` | `1647:39519` | `1647:39531` |
| sm(32) | `1647:39723` | `1647:39747` | `1647:39771` | `1647:39795` | `1647:39807` |
| md(40) | `1647:39963` | `1647:39975` | `1647:39987` | `1647:40011` | `1647:40023` |
| lg(48) | `1647:40203` | `1647:40215` | `1647:40227` | `1647:40239` | `1647:40251` |

> **`indicator_size`** 차이:
> - `content`: indicator stroke가 텍스트 너비만큼 (content 영역만)
> - `full`: indicator가 셀 전체 너비
> - `none`: indicator 미표시

## Variants — line_vertical (`1647:48299`, 4축, 125 variants)

### prop verbatim — ⚠️ **`indicatior_position` 오타 보존** (i 하나 더 들어감)

- **indicatior_position**: `left` / `right` / `none` (Figma 원본 오타 — `indicator_position` 아님)
- **type**: `inner` / `outer` / `none` (horizontal의 `indicator_size` 자리)
- **size**: `xxs(24)` / `xs(28)` / `sm(32)` / `md(40)` / `lg(48)`
- **state**: `default` / `hover` / `pressed` / `selected` / `disabled`

### Variant IDs — `indicatior_position=left, type=inner`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:48300` | `1647:48312` | `1647:48324` | `1647:48336` | `1647:48348` |
| xs(28) | `1647:48672` | `1647:48720` | `1647:48744` | `1647:48852` | `1647:48864` |
| sm(32) | `1647:49116` | `1647:49140` | `1647:49176` | `1647:49512` | `1647:49524` |
| md(40) | `1647:49560` | `1647:49572` | `1647:49584` | `1647:49608` | `1647:49620` |
| lg(48) | `1647:49680` | `1647:49692` | `1647:49704` | `1647:49716` | `1647:49728` |

### Variant IDs — `indicatior_position=right, type=inner`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:48420` | `1647:48432` | `1647:48444` | `1647:48456` | `1647:48468` |
| xs(28) | `1647:48600` | `1647:48612` | `1647:48624` | `1647:48636` | `1647:48648` |
| sm(32) | `1647:48696` | `1647:48732` | `1647:48816` | `1647:48876` | `1647:48888` |
| md(40) | `1647:48960` | `1647:48996` | `1647:49008` | `1647:49056` | `1647:49068` |
| lg(48) | `1647:49236` | `1647:49248` | `1647:49260` | `1647:49296` | `1647:49308` |

### Variant IDs — `indicatior_position=left, type=outer`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:48360` | `1647:48372` | `1647:48384` | `1647:48396` | `1647:48408` |
| xs(28) | `1647:48660` | `1647:48684` | `1647:48708` | `1647:48792` | `1647:48804` |
| sm(32) | `1647:49020` | `1647:49044` | `1647:49080` | `1647:49272` | `1647:49284` |
| md(40) | `1647:49320` | `1647:49332` | `1647:49344` | `1647:49368` | `1647:49380` |
| lg(48) | `1647:49440` | `1647:49452` | `1647:49464` | `1647:49476` | `1647:49488` |

## Variants — Icon Tabs items (`1647:40443`, 3축, 50 variants)

### prop verbatim
- **direction**: `previous` / `next` (좌측/우측 화살표 스크롤러)
- **size**: `xxs(24)` / `xs(28)` / `sm(32)` / `md(40)` / `lg(48)`
- **state**: `default` / `hover` / `pressed` / `selected` / `disabled`

### Variant IDs — `direction=previous`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:40767` | `1647:40760` | `1647:40774` | `1647:40781` | `1647:40788` |
| xs(28) | `1647:40872` | `1647:40865` | `1647:40879` | `1647:40886` | `1647:40893` |
| sm(32) | `1647:40830` | `1647:40837` | `1647:40844` | `1647:40851` | `1647:40858` |
| md(40) | `1647:40935` | `1647:40942` | `1647:40949` | `1647:40956` | `1647:40963` |
| lg(48) | `1647:40970` | `1647:40977` | `1647:40984` | `1647:40991` | `1647:40998` |

### Variant IDs — `direction=next`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:40907` | `1647:40900` | `1647:40914` | `1647:40921` | `1647:40928` |
| xs(28) | `1647:41047` | `1647:41040` | `1647:41054` | `1647:41061` | `1647:41068` |
| sm(32) | `1647:41005` | `1647:41012` | `1647:41019` | `1647:41026` | `1647:41033` |
| md(40) | `1647:41075` | `1647:41082` | `1647:41089` | `1647:41096` | `1647:41103` |
| lg(48) | `1647:41110` | `1647:41117` | `1647:41124` | `1647:41131` | `1647:41138` |

## Variants — contained_tab_items (`1647:43445`, 3축, 50 variants)

### prop verbatim
- **shape**: `rounded` / `none` (`none`은 사각 — 메모리 `sqaure` 오타와 별개)
- **size**: `xxs(24)` / `xs(28)` / `sm(32)` / `md(40)` / `lg(48)`
- **state**: `default` / `hover` / `pressed` / `selected` / `disabled`

### Variant IDs — `shape=rounded`

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:43686` | `1647:43698` | `1647:43710` | `1647:43722` | `1647:43734` |
| xs(28) | `1647:43926` | `1647:43938` | `1647:43950` | `1647:43962` | `1647:43974` |
| sm(32) | `1647:44118` | `1647:44130` | `1647:44142` | `1647:44154` | `1647:44166` |
| md(40) | `1647:44358` | `1647:44370` | `1647:44382` | `1647:44394` | `1647:44406` |
| lg(48) | `1647:44586` | `1647:44598` | `1647:44610` | `1647:44622` | `1647:44634` |

### Variant IDs — `shape=none` (사각)

| size \\ state | default | hover | pressed | selected | disabled |
|---|---|---|---|---|---|
| xxs(24) | `1647:43626` | `1647:43638` | `1647:43650` | `1647:43662` | `1647:43674` |
| xs(28) | `1647:43866` | `1647:43878` | `1647:43890` | `1647:43902` | `1647:43914` |
| sm(32) | `1647:44106` | `1647:44178` | `1647:44190` | `1647:44202` | `1647:44214` |
| md(40) | `1647:44346` | `1647:44418` | `1647:44430` | `1647:44442` | `1647:44454` |
| lg(48) | `1647:44646` | `1647:44658` | `1647:44670` | `1647:44682` | `1647:44694` |

## Typography

| size | textStyle (default) | textStyle (selected) |
|---|---|---|
| xxs / xs / sm / md | `body/sm (M)` (Pretendard 500 / 14 / 20) | `body/sm (SB)` (600 / 14 / 20) |
| lg | `body/md (M)` (500 / 16 / 24) | `body/md (SB)` (600 / 16 / 24) |

> selected 시 weight 600 (SemiBold)으로 두께 증가.

## State별 시각

### line_tab (light)
| state | bg | text | indicator |
|---|---|---|---|
| default | transparent | `#565656` | 없음 |
| hover | `#f4f4f4` | `#565656` | 없음 |
| pressed | `#eeeeee` | `#565656` | 없음 |
| selected | transparent | `#eb6100` (SB) | `#eb6100` 2px (size별 위치) |
| disabled | transparent | `#a5a5a5` | 없음 |

### contained_tab (light)
| state | bg | text | border |
|---|---|---|---|
| default | transparent | `#000000` | transparent |
| hover | `#f8f8f8` | `#000000` | transparent |
| pressed | `#eeeeee` | `#000000` | transparent |
| selected | `#fefefe` | `#eb6100` (SB) | `#eb6100` 1~2px |
| disabled | transparent | `#a5a5a5` | transparent |

## Anatomy

### line_horizontal
```
┌── Tab1 ── Tab2 ── Tab3(selected) ── Tab4 ──┐
                          ━━━━━━━            ← indicator (orange, bottom)
```
- `indicator_position=bottom` (default) — 하단 라인
- `indicator_position=top` — 상단 라인
- `indicator_size=content` — 텍스트 너비만
- `indicator_size=full` — 셀 전체 너비

### line_vertical
```
│ Tab1
│ Tab2
┃ Tab3 (selected)  ← indicator (orange) on left or right
│ Tab4
```
- `indicatior_position=left` — 좌측 indicator (오타 prop명)
- `indicatior_position=right` — 우측 indicator
- `type=inner` — 셀 안쪽 indicator
- `type=outer` — 셀 바깥쪽 indicator

### contained_tab
```
┌─────────────────────────────────────┐
│ [Tab1] [Tab2 selected] [Tab3]       │  ← 캡슐형, selected는 #fefefe bg + orange border
└─────────────────────────────────────┘
   ↑ container (bg=#ffffff, border=#a5a5a5)
```

## Usage Notes

- variant 매칭 verbatim — 4 셋 모두 prop 이름 정확하게:
  - line_horizontal: `indicator_position=bottom` / `indicator_size=content`
  - line_vertical: **`indicatior_position=left`** (i 하나 더 — 오타 보존)
  - line_vertical: **`type=inner`** (horizontal의 indicator_size 자리)
  - Icon Tabs: `direction=previous` / `next`
  - contained_tab: `shape=rounded` / `none` (none=사각)
  - size: 풀네임 `xxs(24)` / `xs(28)` / `sm(32)` / `md(40)` / `lg(48)` (괄호 포함)
- line_tab은 indicator(stroke 2px)로 활성 표시 — bg는 항상 transparent (selected 포함)
- contained_tab은 bg + border로 활성 표시 (`#fefefe` bg + orange border)
- selected text는 SemiBold(600)으로 두께 증가
- `text-default-num` 토큰: 탭에 카운트 숫자 표시 시 orange 강조 (예: "Inbox (5)")
- Icon Tabs는 좌우 화살표로 탭 영역 스크롤 (overflow 시)
- contained_tab의 container는 외곽 박스 (`#ffffff` bg, `#a5a5a5` border)
- 5단계 사이즈 → 다양한 컨텍스트:
  - xxs/xs (24/28): 컴팩트 인터페이스, 사이드 패널
  - sm/md (32/40): 일반 페이지 탭
  - lg (48): 모바일 또는 강조 탭
- 메모리 CLAUDE.md 기록: 셋 ID는 `1853:58694` (line_horizontal tab 컨테이너) 등 — 개별 item 셋 ID는 본 문서 기준
