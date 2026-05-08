# Button

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / node `1058:185800` (production component, variable_defs)
> - **UI-Kit-Guide** file `ky00DVb1Q3RmiMlYWwdSGG`
>   - node `1:272462` — Button preview page (variable_defs)
>   - node `1:273388` — `Button use it` 가이드 페이지 (sparse metadata)
>   - node `1:274092` — `Icon button use it` 가이드 페이지 (sparse metadata)
> - `figma-export.json` (2026-05-04 export) — light/dark 양쪽 모드 참조용
> - **사용자 작업 파일 `↪️ Button (TEST⚠️)`** — variant set `button` (id `7046:148536`, 972 variants, 2026-05-07 TalkToFigma MCP 추출)
>
> JS 토큰: `tokens/color/component.js#button`, `tokens/number/component.js#button`.

## Overview
- 토큰 prefix: `button/*`
- 모드: **light · dark** (light 값은 production 노드 변수 해석값 기준)
- 컴포넌트 set 이름: **`button`** (이전 가이드의 `button_beta_v0.22_test`는 베타 단계 명칭, 현재 production은 `button`)
- 사이즈: 9단계 — xxs(20) / xs(24) / sm(28) / md(32) / lg(40) / xl(48) / 2xl(64) / 3xl(80) / 4xl(96)
  - **Figma variant prop 값은 height 접미사 포함**: `xxs_20`, `xs_24`, `sm_28`, `md_32`, `lg_40`, `xl_48`, `2xl_64`, `3xl_80`, `4xl_96`

## Variant Properties (Figma `button` verbatim)

> TalkToFigma MCP로 972 variants 전체 추출 (2026-05-07).
> 모든 prop 키는 **lowercase**.

| prop | 종 | 값 |
|---|---|---|
| `style` | 9 | `brand-primary` · `brand-secondary` · `brand-tertiary` · `neutral-primary` · `neutral-secondary` · `neutral-tertiary` · `subtle` · `destructive-primary` · `destructive-secondary` |
| `state` | 6 | `default` · `hover` · `pressed` · `focused` · `inactive` · `disabled-gray` |
| `size` | 9 | `xxs_20` · `xs_24` · `sm_28` · `md_32` · `lg_40` · `xl_48` · `2xl_64` · `3xl_80` · `4xl_96` |
| `layout` | 2 | `icon labeled` · `icon only` |
| `type` | 1 | `hug` |

**총 variants = 9 × 6 × 9 × 2 × 1 = 972** (이전 메모리의 9×6×9=486은 layout 차원 누락)

> 이전 메모 정정:
> - 7번째 style: `text` → **`subtle`** (이전 가이드 페이지에서는 `text`로 표기되었으나, production variant set은 `subtle`)
> - `distructive-*` 오타 → **`destructive-*`** (variant prop에서 정정됨. 변수 토큰 이름은 별도 검증 필요)
> - state `disabled` → **`disabled-gray`** (variant 값 verbatim)
> - layout은 가이드 표기 3종(`icon labeled` / `icon only` / `text only`)이 아니라 **2종**. `text only`는 `icon labeled` + 빈 아이콘 슬롯으로 구현 추정.

## Figma Variable Name Lookup (이모지 제거 후)

> 사용자 file에서 variable / textStyle / component name의 ❤️/✅/💟 이모지 prefix 일괄 제거 (2026-05-08).
> Figma library publish 완료. variable ID는 그대로 유지되어 binding/instance 영향 없음.
> DS Runner / TalkToFigma 호출 시 아래 새 이름 사용.

### Color
9 style 슬롯 (`brand-{primary,secondary,tertiary}` · `neutral-{primary,secondary,tertiary}` · `subtle` · `destructive-{primary,secondary}`) + `disabled-gray`
- `button/bg/{slot}` (10개)
- `button/fg/{slot}` (10개)
- `button/border/{slot}` (10개)

### Number
- `button/size/{xxs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl}` → 20 / 24 / 28 / 32 / 40 / 48 / 64 / 80 / 96
- `button/h-padding/{xxs..4xl}` → 4 / 6 / (sm 미정의) / 8 / 12 / 12 / 16 / 24 / 24
- `button/text-padding/{xxs, xs, md, lg, 2xl, 3xl, 4xl}` → 4 / 4 / 4 / 4 / 8 / 8 / 8 (sm 미정의)
- `button/conrner radius/{xxs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl}` → 4 / 4 / 4 / 6 / 6 / 8 / 8 / 12 / 14
  - ⚠️ Figma 변수명에 **오타: `conrner`** (corner 아님). variant 매칭 시 verbatim 사용 필수.
  - 별도 변형: `button/conrner radius/2xl 2` = 10 (2xl의 둥글기 약화)
- `button/border/{xxs..4xl}` → 1 / 1 / 1 / 1 / 1 / 1.5 / 2 / 2.5 / 3

### Typography (textStyle)
- `v0.4/button/{xxs..4xl} (SB)` — SemiBold 600, 9 size
- `v0.4/button/{xxs..4xl}` — SB 접미사 없는 변형 (variable 참조 기반, 폰트 정의 동일)
- `tokens/typography/text-style.js#button` 에 verbatim 등록됨 (font family / weight / size / lineHeight)

### Common (overlay · focus)
- `button/common/default` = `#00000000` (transparent)
- `button/common/hover` = `#0000000d` (black 5%, light base용)
- `button/common/pressed` = `#0000001a` (black 10%, light base용)
- `button/common/hover-neutral` = `#ffffff0d` (white ~5%, dark base용)
- `button/common/pressed-neutral` = `#ffffff1a` (white ~10%, dark base용)
- `button/common/focus-ring` = `#000000`
- `button/common/focus-ring 2` = `#fefefe` (legacy, 미사용)

## Variant ID 매트릭스 — `layout=icon labeled, type=hug` (총 486 cells, 6 state × 9 size × 9 style)

> **TalkToFigma createInstance 호출용 lookup table**.
> 추출 시점: 2026-05-07 (TalkToFigma `scan_nodes_by_types`).
> `layout=icon only` 매트릭스(또 다른 486)는 별도 추가 예정.

### state=`default`, layout=`icon labeled` (81 cells)

| style \\ size | xxs_20 | xs_24 | sm_28 | md_32 | lg_40 | xl_48 | 2xl_64 | 3xl_80 | 4xl_96 |
|---|---|---|---|---|---|---|---|---|---|
| brand-primary | `7046:149061` | `7046:149053` | `7046:156001` | `7046:149045` | `7046:149037` | `7046:149029` | `7046:149021` | `7046:149013` | `7046:149005` |
| brand-secondary | `7046:151059` | `7046:151049` | `7046:156262` | `7046:151039` | `7046:151029` | `7046:151019` | `7046:151009` | `7046:151001` | `7046:150993` |
| brand-tertiary | `7046:152346` | `7046:152336` | `7046:156430` | `7046:152326` | `7046:152316` | `7046:152306` | `7046:152296` | `7046:152288` | `7046:152280` |
| neutral-primary | `7046:148605` | `7046:148595` | `7046:155940` | `7046:148585` | `7046:148575` | `7046:148565` | `7046:148555` | `7046:148545` | `7046:148537` |
| neutral-secondary | `7046:152804` | `7046:152794` | `7046:156490` | `7046:152784` | `7046:152774` | `7046:152764` | `7046:152754` | `7046:152744` | `7046:152736` |
| neutral-tertiary | `7046:150233` | `7046:150223` | `7046:156153` | `7046:150213` | `7046:150203` | `7046:150193` | `7046:150183` | `7046:150173` | `7046:150165` |
| subtle | `7046:151880` | `7046:151870` | `7046:156370` | `7046:151860` | `7046:151850` | `7046:151840` | `7046:151830` | `7046:151820` | `7046:151812` |
| destructive-primary | `7046:154352` | `7046:154342` | `7046:156694` | `7046:154332` | `7046:154322` | `7046:154312` | `7046:154302` | `7046:154292` | `7046:154284` |
| destructive-secondary | `7046:154820` | `7046:154810` | `7046:156754` | `7046:154800` | `7046:154790` | `7046:154780` | `7046:154770` | `7046:154760` | `7046:154752` |

### state=`hover`, layout=`icon labeled` (81 cells)

| style \\ size | xxs_20 | xs_24 | sm_28 | md_32 | lg_40 | xl_48 | 2xl_64 | 3xl_80 | 4xl_96 |
|---|---|---|---|---|---|---|---|---|---|
| brand-primary | `7046:149290` | `7046:149280` | `7046:156029` | `7046:149270` | `7046:149260` | `7046:149250` | `7046:149240` | `7046:149232` | `7046:149222` |
| brand-secondary | `7046:151287` | `7046:151277` | `7046:156292` | `7046:151267` | `7046:151257` | `7046:151247` | `7046:151237` | `7046:151229` | `7046:151221` |
| brand-tertiary | `7046:152574` | `7046:152564` | `7046:156460` | `7046:152554` | `7046:152544` | `7046:152534` | `7046:152524` | `7046:152516` | `7046:152508` |
| neutral-primary | `7046:148839` | `7046:148829` | `7046:155971` | `7046:148819` | `7046:148809` | `7046:148799` | `7046:148789` | `7046:148779` | `7046:148771` |
| neutral-secondary | `7046:153038` | `7046:153028` | `7046:156521` | `7046:153018` | `7046:153008` | `7046:152998` | `7046:152988` | `7046:152978` | `7046:152970` |
| neutral-tertiary | `7046:150467` | `7046:150457` | `7046:156184` | `7046:150447` | `7046:150437` | `7046:150427` | `7046:150417` | `7046:150407` | `7046:150399` |
| subtle | `7046:152114` | `7046:152104` | `7046:156400` | `7046:152094` | `7046:152084` | `7046:152074` | `7046:152064` | `7046:152054` | `7046:152046` |
| destructive-primary | `7046:154586` | `7046:154576` | `7046:156724` | `7046:154566` | `7046:154556` | `7046:154546` | `7046:154536` | `7046:154526` | `7046:154518` |
| destructive-secondary | `7046:155054` | `7046:155044` | `7046:156784` | `7046:155034` | `7046:155024` | `7046:155014` | `7046:155004` | `7046:154994` | `7046:154986` |

### state=`pressed`, layout=`icon labeled` (81 cells)

| style \\ size | xxs_20 | xs_24 | sm_28 | md_32 | lg_40 | xl_48 | 2xl_64 | 3xl_80 | 4xl_96 |
|---|---|---|---|---|---|---|---|---|---|
| brand-primary | `7046:149368` | `7046:149358` | `7046:156039` | `7046:149348` | `7046:149338` | `7046:149328` | `7046:149318` | `7046:149310` | `7046:149300` |
| brand-secondary | `7046:151363` | `7046:151353` | `7046:156302` | `7046:151343` | `7046:151333` | `7046:151323` | `7046:151313` | `7046:151305` | `7046:151297` |
| brand-tertiary | `7046:152650` | `7046:152640` | `7046:156470` | `7046:152630` | `7046:152620` | `7046:152610` | `7046:152600` | `7046:152592` | `7046:152584` |
| neutral-primary | `7046:148917` | `7046:148907` | `7046:155981` | `7046:148897` | `7046:148887` | `7046:148877` | `7046:148867` | `7046:148857` | `7046:148849` |
| neutral-secondary | `7046:153116` | `7046:153106` | `7046:156531` | `7046:153096` | `7046:153086` | `7046:153076` | `7046:153066` | `7046:153056` | `7046:153048` |
| neutral-tertiary | `7046:150545` | `7046:150535` | `7046:156194` | `7046:150525` | `7046:150515` | `7046:150505` | `7046:150495` | `7046:150485` | `7046:150477` |
| subtle | `7046:152192` | `7046:152182` | `7046:156410` | `7046:152172` | `7046:152162` | `7046:152152` | `7046:152142` | `7046:152132` | `7046:152124` |
| destructive-primary | `7046:154664` | `7046:154654` | `7046:156734` | `7046:154644` | `7046:154634` | `7046:154624` | `7046:154614` | `7046:154604` | `7046:154596` |
| destructive-secondary | `7046:155132` | `7046:155122` | `7046:156794` | `7046:155112` | `7046:155102` | `7046:155092` | `7046:155082` | `7046:155072` | `7046:155064` |

### state=`focused`, layout=`icon labeled` (81 cells)

| style \\ size | xxs_20 | xs_24 | sm_28 | md_32 | lg_40 | xl_48 | 2xl_64 | 3xl_80 | 4xl_96 |
|---|---|---|---|---|---|---|---|---|---|
| brand-primary | `7046:149446` | `7046:149436` | `7046:156049` | `7046:149424` | `7046:149414` | `7046:149404` | `7046:149394` | `7046:149386` | `7046:149378` |
| brand-secondary | `7046:151439` | `7046:151429` | `7046:156312` | `7046:151419` | `7046:151409` | `7046:151399` | `7046:151389` | `7046:151381` | `7046:151373` |
| brand-tertiary | `7046:152726` | `7046:152716` | `7046:156480` | `7046:152706` | `7046:152696` | `7046:152686` | `7046:152676` | `7046:152668` | `7046:152660` |
| neutral-primary | `7046:148995` | `7046:148985` | `7046:155991` | `7046:148975` | `7046:148965` | `7046:148955` | `7046:148945` | `7046:148935` | `7046:148927` |
| neutral-secondary | `7046:153194` | `7046:153184` | `7046:156541` | `7046:153174` | `7046:153164` | `7046:153154` | `7046:153144` | `7046:153134` | `7046:153126` |
| neutral-tertiary | `7046:150623` | `7046:150613` | `7046:156204` | `7046:150603` | `7046:150593` | `7046:150583` | `7046:150573` | `7046:150563` | `7046:150555` |
| subtle | `7046:152270` | `7046:152260` | `7046:156420` | `7046:152250` | `7046:152240` | `7046:152230` | `7046:152220` | `7046:152210` | `7046:152202` |
| destructive-primary | `7046:154742` | `7046:154732` | `7046:156744` | `7046:154722` | `7046:154712` | `7046:154702` | `7046:154692` | `7046:154682` | `7046:154674` |
| destructive-secondary | `7046:155210` | `7046:155200` | `7046:156804` | `7046:155190` | `7046:155180` | `7046:155170` | `7046:155160` | `7046:155150` | `7046:155142` |

### state=`inactive`, layout=`icon labeled` (81 cells)

| style \\ size | xxs_20 | xs_24 | sm_28 | md_32 | lg_40 | xl_48 | 2xl_64 | 3xl_80 | 4xl_96 |
|---|---|---|---|---|---|---|---|---|---|
| brand-primary | `7046:149212` | `7046:149202` | `7046:156019` | `7046:149192` | `7046:149182` | `7046:149172` | `7046:149162` | `7046:149154` | `7046:149146` |
| brand-secondary | `7046:151211` | `7046:151201` | `7046:156282` | `7046:151191` | `7046:151181` | `7046:151171` | `7046:151161` | `7046:151153` | `7046:151145` |
| brand-tertiary | `7046:152498` | `7046:152488` | `7046:156450` | `7046:152478` | `7046:152468` | `7046:152458` | `7046:152448` | `7046:152440` | `7046:152432` |
| neutral-primary | `7046:148761` | `7046:148751` | `7046:155961` | `7046:148741` | `7046:148731` | `7046:148721` | `7046:148711` | `7046:148701` | `7046:148693` |
| neutral-secondary | `7046:152960` | `7046:152950` | `7046:156511` | `7046:152940` | `7046:152930` | `7046:152920` | `7046:152910` | `7046:152900` | `7046:152892` |
| neutral-tertiary | `7046:150389` | `7046:150379` | `7046:156174` | `7046:150369` | `7046:150359` | `7046:150349` | `7046:150339` | `7046:150329` | `7046:150321` |
| subtle | `7046:152036` | `7046:152026` | `7046:156390` | `7046:152016` | `7046:152006` | `7046:151996` | `7046:151986` | `7046:151976` | `7046:151968` |
| destructive-primary | `7046:154508` | `7046:154498` | `7046:156714` | `7046:154488` | `7046:154478` | `7046:154468` | `7046:154458` | `7046:154448` | `7046:154440` |
| destructive-secondary | `7046:154976` | `7046:154966` | `7046:156774` | `7046:154956` | `7046:154946` | `7046:154936` | `7046:154926` | `7046:154916` | `7046:154908` |

### state=`disabled-gray`, layout=`icon labeled` (81 cells)

| style \\ size | xxs_20 | xs_24 | sm_28 | md_32 | lg_40 | xl_48 | 2xl_64 | 3xl_80 | 4xl_96 |
|---|---|---|---|---|---|---|---|---|---|
| brand-primary | `7046:149136` | `7046:149126` | `7046:156009` | `7046:149116` | `7046:149106` | `7046:149096` | `7046:149086` | `7046:149078` | `7046:149069` |
| brand-secondary | `7046:151135` | `7046:151125` | `7046:156272` | `7046:151115` | `7046:151105` | `7046:151095` | `7046:151085` | `7046:151077` | `7046:151069` |
| brand-tertiary | `7046:152422` | `7046:152412` | `7046:156440` | `7046:152402` | `7046:152392` | `7046:152382` | `7046:152372` | `7046:152364` | `7046:152356` |
| neutral-primary | `7046:148683` | `7046:148673` | `7046:155950` | `7046:148663` | `7046:148653` | `7046:148643` | `7046:148633` | `7046:148623` | `7046:148615` |
| neutral-secondary | `7046:152882` | `7046:152872` | `7046:156500` | `7046:152862` | `7046:152852` | `7046:152842` | `7046:152832` | `7046:152822` | `7046:152814` |
| neutral-tertiary | `7046:150311` | `7046:150301` | `7046:156163` | `7046:150291` | `7046:150281` | `7046:150271` | `7046:150261` | `7046:150251` | `7046:150243` |
| subtle | `7046:151958` | `7046:151948` | `7046:156380` | `7046:151938` | `7046:151928` | `7046:151918` | `7046:151908` | `7046:151898` | `7046:151890` |
| destructive-primary | `7046:154430` | `7046:154420` | `7046:156704` | `7046:154410` | `7046:154400` | `7046:154390` | `7046:154380` | `7046:154370` | `7046:154362` |
| destructive-secondary | `7046:154898` | `7046:154888` | `7046:156764` | `7046:154878` | `7046:154868` | `7046:154858` | `7046:154848` | `7046:154838` | `7046:154830` |

## Number tokens (Mode 1)

> production variable_defs 기준. sm은 일부 슬라이스에서 누락이라 **(추정)** 표기.

| size | height | h-padding | text-padding | corner radius | border |
|---|---|---|---|---|---|
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
- **h-padding** = 컨테이너 좌우 패딩 (외부)
- **text-padding** = 텍스트 컨테이너 내부 패딩 (라벨/아이콘 사이 갭)

## Color tokens

> Light는 production 노드(`1058:185800` · `1:272462`) variable_defs로 해석된 실제 값.
> Dark는 `figma-export.json` Color_component 기준 (별도 production 검증 미수행).

### bg
| token | light | dark |
|---|---|---|
| `bg/brand-primary` | `#eb6100` | (figma-export 미정의) |
| `bg/brand-secondary` | `#ffffff` | `#0e0e0e` |
| `bg/brand-tertiary` | `#fbdfcc` *(또는 `#f7c099`)* | (미정의) |
| `bg/neutral-primary` | `#2b2b2b` | `#bcbcbc` |
| `bg/neutral-secondary` | `#ffffff` | `#f4f4f4` |
| `bg/neutral-tertiary` | `#e9e9e9` *(또는 `#ffffff`)* | `#eeeeee` |
| `bg/destructive-primary` | `#f03823` | (미정의) |
| `bg/destructive-secondary` | `#ffffff00` (transparent) | `rgba(255,255,255,0)` |
| `bg/text` | `#ffffff00` (transparent) | (미정의) |
| `bg/subtle` | `#ffffff00` (transparent) | `rgba(255,255,255,0)` |
| `bg/disabled` | `#dadada` | (미정의) |
| `bg/disabled-gray` | `#bcbcbc` | `#f4f4f4` |
| `bg/disabled-inactive` | `#8f8f8f` | `#bcbcbc` |

> bg/brand-tertiary, bg/neutral-tertiary는 두 production 노드 간 값 차이 존재 — 모드/컨테이너 바인딩 차이로 추정. UI 적용 시 실제 노드 컨텍스트 확인.

### fg (label · icon)
| token | light | dark |
|---|---|---|
| `fg/brand-primary` | `#f9f9f9` *(또는 `#ffffff`)* | `#0e0e0e` |
| `fg/brand-secondary` | `#eb6100` | (미정의) |
| `fg/brand-tertiary` | `#eb6100` | (미정의) |
| `fg/neutral-primary` | `#f9f9f9` *(또는 `#ffffff`)* | `#000000` |
| `fg/neutral-secondary` | `#565656` | `#8f8f8f` |
| `fg/neutral-tertiary` | `#565656` *(또는 `#505050`)* | `#0e0e0e` |
| `fg/destructive-primary` | `#f9f9f9` *(또는 `#ffffff`)* | `#0e0e0e` |
| `fg/destructive-secondary` | `#f03823` | (미정의) |
| `fg/text` | `#606881` | (미정의) |
| `fg/subtle` | `#565656` | `#8f8f8f` |
| `fg/disabled` | `#a5a5a5` | (미정의) |
| `fg/disabled-gray` | `#a5a5a5` | `#e9e9e9` |
| `fg/disabled-inactive` | `#a5a5a5` | `#bcbcbc` |

### border
| token | light | dark |
|---|---|---|
| `border/brand-primary` | `#eb6100` | (미정의) |
| `border/brand-secondary` | `#727272` | `#dddddd` |
| `border/brand-tertiary` | `#ffffff00` (transparent) | `#a5a5a5` |
| `border/neutral-primary` | `#2b2b2b` | `#bcbcbc` |
| `border/neutral-secondary` | `#a5a5a5` | `#dddddd` |
| `border/neutral-tertiary` | `#a5a5a5` *(또는 `#c6c6c6`)* | `#dddddd` |
| `border/destructive-primary` | `#f03823` | (미정의) |
| `border/destructive-secondary` | `#f03823` | (미정의) |
| `border/text` | `#373d4c00` (transparent) | (미정의) |
| `border/subtle` | `#373d4c00` (transparent) | `rgba(55,61,76,0)` |
| `border/disabled` | `#dadada` | (미정의) |
| `border/disabled-gray` | `#a5a5a5` | `#f4f4f4` |
| `border/disabled-inactive` | `#8f8f8f` | `#8f8f8f` |

### icon (figma-export.json 기준)
| token | light | dark |
|---|---|---|
| `icon/neutral` | `#bcbcbc` | `#8f8f8f` |
| `icon/dark` | `#0e0e0e` | `#f4f4f4` |
| `icon/invert` | `#0e0e0e` | `#e9e9e9` |
| `icon/disabled-inactive` | `#a5a5a5` | `#bcbcbc` |
| `icon/disabled-gray` | `#393939` | `#bcbcbc` |

### common (state overlay · focus ring)
| token | light | dark |
|---|---|---|
| `common/default` | `#00000000` (transparent) | `rgba(0,0,0,0)` |
| `common/hover` | `#0000000d` (~5% black) | `rgba(0,0,0,0.05)` |
| `common/pressed` | `#0000001a` (~10% black) | `rgba(0,0,0,0.15)` |
| `common/hover-neutral` | `#ffffff0d` (~5% white) | `rgba(59,99,251,0.1)` |
| `common/pressed-neutral` | `#ffffff1a` (~10% white) | `rgba(59,99,251,0.2)` |
| `common/selected` | `rgba(59,99,251,0.2)` | `rgba(59,99,251,0.2)` |
| `common/focus-ring` | `#000000` | (미정의) |
| `common/focus-ring 2` | `#fefefe` (또는 `#020202`) | `#f9f9f9` |

### State overlay 분기 (어두운 base vs 밝은 base)

base 명도에 따라 overlay 색·강도가 다르다 (Figma `134:20061` 검증):

| base 톤 | hover overlay | pressed overlay | 예 |
|---|---|---|---|
| 어두운/유채색 (brand-primary, neutral-primary, distructive-primary) | **white 15%** | **white 25%** | brand-primary `#eb6100` 위에 0.15/0.25 white |
| 밝은 base (brand-secondary, neutral-secondary, neutral-tertiary, brand-tertiary) | black 5% (`common/hover`) | black 10% (`common/pressed`) | white bg 위에 0.05/0.10 black |

이전 메모리의 "neutral은 white, light는 black"은 정확하지만, white의 농도를 5%/10% (`*-neutral` 토큰)로 봤던 것이 잘못 — 실제 production v0.22 brand 매트릭스는 **15%/25%** 사용.

### Focus ring 구조 (`134:20102` brand-primary focused 행 verbatim)

> **이전 메모리 정정**: focus는 "외부 black + 내부 white 이중 링"이 아니다.
> 실제 구조 = 버튼 자체 border + 그 외부에 단일 black ring 1개 (inset 음수 절대 위치).
> 두 링 사이의 **투명 갭**이 light 배경에서 흰색 띠처럼 보이는 것이 "white line"의 정체.

| size | button border weight | focus ring inset | focus ring weight | focus ring radius |
|---|---|---|---|---|
| xxs (20) | 1 | -3 | 1 | 6 |
| xs (24)  | 1 | -3 | 1 | 6 |
| sm (28)  | 1 | -3 | 1 | 6 |
| md (32)  | 1 | -3 | 1 | 8 |
| lg (40)  | 1 | -3 | 1 | 8 |
| xl (48)  | 1.5 | -3.5 | 1.5 | 10 |
| 2xl (64) | 2 | -4 | 2 | 10 |
| 3xl (80) | 2.5 | -4.5 | 2.5 | 13 |
| 4xl (96) | 3 | -5 | 3 | 14 |

- focus ring 두께 = 해당 사이즈의 button border 두께와 동일 (`button/border/{size}` 토큰 공유)
- focus ring 반지름 = button corner radius + ~2px (4xl만 동일, 나머지는 +2)
- focus ring 색상 = `common/focus-ring` (= `#000000`, light 모드 단일값)
- **갭 폭 = `|inset|` − ring weight = 모든 사이즈 일정 2px** (Figma는 box-sizing: border-box처럼 ring 외각이 inset 값이므로 안쪽 시작점은 `|inset| − weight`)
  - 예: md → inset 3 − weight 1 = 2px 갭
  - 예: 4xl → inset 5 − weight 3 = 2px 갭
- `common/focus-ring 2` (white) 토큰은 정의돼 있으나 현재 v0.22 브랜드 버튼 매트릭스에서는 **사용되지 않음** (legacy 또는 다크모드/inverse 케이스 예약 추정)

CSS 구현 가이드:
```css
.btn--md.btn--focused {
  outline: 1px solid #000;     /* common/focus-ring, weight = button/border/md */
  outline-offset: 2px;          /* 갭 폭 (border edge → outline 시작점), 모든 사이즈 동일 */
}
```
`outline-offset`은 border edge로부터 outline 시작점까지의 거리(=투명 갭 폭). outline-width는 그 시작점부터 바깥 방향으로 그려지므로, ring 외곽까지의 총 거리는 `offset + width`.

## Typography

| size | textStyle | font · size · line-height |
|---|---|---|
| xxs | `button/xxs (SB)` | Pretendard 600 / 12 / 16 |
| xs | `button/xs (SB)` | Pretendard 600 / 14 / 20 |
| sm | `button/sm (SB)` | Pretendard 600 / 14 / 20 |
| md | `button/md (SB)` | Pretendard 600 / 16 / 24 |
| lg | `button/lg (SB)` | Pretendard 600 / 16 / 24 |
| xl | `button/xl (SB)` | Pretendard 600 / 18 / 24 |
| 2xl | `button/2xl (SB)` | Pretendard 600 / 24 / 30 |
| 3xl | `button/3xl (SB)` | Pretendard 600 / 28 / 36 |
| 4xl | `button/4xl (SB)` | Pretendard 600 / 32 / 40 |

> 가이드 페이지에서 추가 발견: `v0.3 (test)/button/4xl`(line-height=1, 비표준), `v0.4/button/*` 시리즈(현행).

## Style 9가지 (Figma `button` verbatim)

| # | style | 비고 |
|---|---|---|
| 1 | `brand-primary` | 브랜드 강조 (orange #eb6100) |
| 2 | `brand-secondary` | 브랜드 보조 (white bg + orange text) |
| 3 | `brand-tertiary` | 브랜드 약함 (light orange bg) |
| 4 | `neutral-primary` | 기본 강조 (dark bg + white text) |
| 5 | `neutral-secondary` | 기본 보조 (white bg + gray border) |
| 6 | `neutral-tertiary` | 기본 약함 (light gray bg) |
| 7 | **`subtle`** | 텍스트 전용 (transparent bg/border, gray text · `#606881`) — 이전 가이드의 `text` 명칭이 production에서 `subtle`로 변경됨 |
| 8 | `destructive-primary` | 빨강 강조 — 이전 가이드의 `distructive-primary` 오타가 production에서 정정됨 |
| 9 | `destructive-secondary` | 빨강 보조 (transparent bg) — 마찬가지로 정정 |

> **명칭 변경 history**: 이전 베타(`button_beta_v0.22_test`)에서는 `text` / `distructive-*`였으나, production `button` set에서 `subtle` / `destructive-*`로 표준화됨. variant prop 매칭/instance override는 production 명칭 사용.

## State 6단계 (Figma `button` verbatim)

| # | state | 트리거 | 시각 |
|---|---|---|---|
| 1 | `default` | 평상시 | base 색 |
| 2 | `hover` | 마우스 위에 | base 색 위에 white 15% (밝은 base는 black 5% — `common/hover` token) 알파 합성 |
| 3 | `pressed` | 클릭 중 | base 색 위에 white 25% (밝은 base는 black 10% — `common/pressed` token) 알파 합성 |
| 4 | `focused` | 키보드 focus | `common/focus-ring` (black) 외부 단일 링 + 버튼 외곽선과 ring 사이 투명 갭 (위 Focus ring 구조 표 참조) |
| 5 | `inactive` | 1차 비활성 (브랜드 톤 유지, 약하게 보임) | **원본 스타일 색 그대로 + `opacity: 0.4`** 전체 적용 (별도 색 토큰 교체 없음) |
| 6 | `disabled-gray` | 2차 완전 비활성 (회색 톤 교체) | bg `bg/disabled` (#dadada) · border `border/disabled` (#dadada) · text `fg/disabled` (#a5a5a5) — 토큰 풀 교체 |

> **명칭 history**: 이전 가이드의 `Disabled` 단일 표기 → production은 `disabled-gray` (variant prop에 다른 disabled 분기가 없는데 `-gray` 접미사가 붙어있음. 이전의 `disabled-inactive` / `disabled-1` 같은 분기는 production에서 제거된 것으로 추정).
> Loading state는 별도 `state=Loading` variant로 처리 (가이드 6열에는 미포함, production 6 state에도 없음).

> Loading state는 별도 `state=Loading` variant로 처리 (가이드 6열에는 미포함).

## Variants / Layout

- **`layout`** (production verbatim, 2종):
  - `icon labeled` — 아이콘 + 라벨 (icon-start 슬롯 + 라벨 + icon-end 슬롯). `text only`는 별도 variant 없이 이 layout에서 아이콘 슬롯을 visible: false로 처리하는 것으로 추정.
  - `icon only` — 정사각 (라벨 없음)
- **`type`** (1종): `hug` (기본 — 콘텐츠 크기에 맞춰 hug)
- **selected**: `common/selected` 알파(브랜드 블루 20%)로 활성 표시 가능 (별도 prop 없음, instance override로 표현)

## Icon Button (별도 가이드)

> `1:274092` `Icon button use it` 페이지 — Button과 별개 매트릭스로 문서화 (variable_defs 기준).
> 인스턴스 prop: `layout=icon only` (Button set 공유) 또는 별도 `iconButton_*` variant.

- 9 style × 6 state × 9 size 매트릭스 (Button과 동일 골격)
- **icon-only 정사각**: width = height (라벨 없음)

### 사이즈 매트릭스 (1:1 정사각)

| size | px | corner radius | border | icon size (권장) |
|---|---|---|---|---|
| xxs | 20 × 20 | 4 | 1 | 12 |
| xs  | 24 × 24 | 4 | 1 | 14 |
| sm  | 28 × 28 | 4 | 1 | 16 |
| md  | 32 × 32 | 6 | 1 | 16 |
| lg  | 40 × 40 | 6 | 1 | 20 |
| xl  | 48 × 48 | 8 | 1.5 | 24 |
| 2xl | 64 × 64 | 8 | 2 | 28 |
| 3xl | 80 × 80 | 12 | 2.5 | 32 |
| 4xl | 96 × 96 | 14 | 3 | 40 |

> width/height 토큰 = `button/size/{size}` (Button height와 동일 시리즈) · radius 토큰 = `button/corner-radius/{size}` 공유 · 아이콘 사이즈는 별도 정의되어 있지 않고 디자이너 가이드 권장값.

### 스타일/상태/오버레이

- 9 style 토큰 (bg/border/fg) 모두 Button과 **동일** (brand-primary, brand-secondary, brand-tertiary, neutral-primary, neutral-secondary, neutral-tertiary, text, distructive-primary, distructive-secondary)
- 6 state도 Button과 동일 (default/hover/pressed/focused/disabled-1/disabled-2)
- overlay·focus ring·disabled 동작도 Button과 동일 (위 표 그대로 적용)

### `button/common/*` 변수 verbatim (`1:274092` variable_defs)

> 이 페이지에서 추출한 production 변수값 — 이전 `#0000000d` (5% black) 메모리는 별도 `*-neutral` 변형이거나 구버전. 현 v0.22 production은 white 알파 일원화.

| 토큰 | hex | 알파 |
|---|---|---|
| `button/common/default` | `#00000000` | 0% |
| `button/common/hover` | `#ffffff26` | white 15% (38/255) |
| `button/common/pressed` | `#ffffff40` | white 25% (64/255) |
| `button/common/focus-ring` | `#000000` | 100% black |
| `button/common/focus-ring 2` | `#fefefe` | 미사용 (legacy) |

### Anatomy

- **container**: 정사각 box (size = corner radius 적용)
- **icon**: 컨테이너 중앙 정렬, currentColor 사용 (fg 토큰 자동 상속)
- **focus ring**: Button과 동일 매트릭스 (위 Focus ring 구조 표 참조)

### 사용 가이드

- 라벨 없이 아이콘 1개만 — 접근성을 위해 **`aria-label` 또는 tooltip 필수**
- variant 매칭 시 Button set에서 `layout=icon only`로 호출 가능 (단일 source of truth)
- icon-only 사용 시 사이즈가 작아 터치 타겟 가이드라인(44×44 이상) 충족 어려움 → xxs/xs/sm은 데스크탑 전용, 모바일은 lg 이상 권장
- 의미가 명확한 경우(✕, ←, ⚙, 🔍 등)에만 사용 — 모호한 아이콘은 라벨 있는 Button 사용

## Guidelines (`1:272816` verbatim)

### Hierarchy
버튼의 시각적 주목도는 배경색 대비에 따라 달라집니다. 화면에서 강조하려는 정도에 따라 적절한 Variant를 선택해서 사용해주세요.

| Emphasis | Variants | 개수 | 용도 |
|---|---|---|---|
| High emphasis (대비가 강한 배경색) | `neutural-primary` / `brand-primary` / `distructive-primary` | 1개 | 가장 중요한 역할의 CTA에 사용 |
| Medium emphasis (흰색 배경색) | `neutural-secondary` / `brand-secondary` | 여러 개 | 대부분의 액션에 사용 / High emphasis 버튼과 조합하여 사용 |
| Low emphasis (대비가 약한 배경색) | `neutural-tertiary` / `brand-tertiary` | 여러 개 | 중요도가 낮은 보조 액션을 표현할 때 사용 |
| No emphasis (배경색 없음) | `Subtle` (text) | 여러 개 | 취소 등의 버튼에 사용 |

### Properties — 상황에 따라 적절한 Variant 사용하기
화면 내 중요도에 따라 적절한 Variant를 선택해서 사용합니다.

- **neutural-primary** — 대부분의 화면에서 CTA로 사용합니다. 고대비로 접근성과 가독성이 높아 사용자가 화면 정보에 집중할 수 있도록 돕습니다. 한 화면에 하나만 사용하는 것을 권장합니다.
- **brand-primary** — 사용자 간 연결이 일어나는 서비스의 주요 기능에 사용합니다. 위계가 높고 브랜드 임팩트가 강한 액션이므로 한 화면에 하나만 사용하는 것을 권장합니다.
- **distructive-primary** — 삭제나 초기화처럼 되돌릴 수 없는 중요한 작업에 사용합니다. 사용자에게 위험을 분명하게 알려주는 역할을 하며, 주로 Alert Dialog에서 사용됩니다.
- **neutural-secondary** — 보조 기능이나 서브 액션에 사용합니다. primary보다 시각적 강조는 낮지만 버튼 형태는 유지되어, 화면 내 여러 기능을 안정적으로 구분해 전달할 수 있습니다. primary와 함께 사용할 때 보조 선택지로 활용하는 것을 권장합니다.
- **brand-secondary** — 브랜드 성격을 유지하면서도 primary보다 한 단계 낮은 강조가 필요한 기능에 사용합니다. 주요 흐름을 방해하지 않으면서 서비스의 브랜드 톤을 드러낼 수 있으며, 동일 맥락의 보조 액션이나 연계 기능에 적합합니다.
- **distructive-secondary** — 삭제, 해제, 취소 등 주의가 필요한 작업 중에서도 primary만큼 강한 경고가 필요하지 않은 경우에 사용합니다. 위험성은 전달하되 과도한 시각적 부담은 줄일 수 있어, 보조 위험 액션이나 선택적 파기 기능에 적합합니다.
- **neutural-tertiary** — 배경의 영향 없이 가볍게 사용할 수 있는 저강도 액션에 사용합니다. 버튼의 존재감은 최소화하면서도 클릭 가능한 요소임을 전달할 수 있어, 리스트·툴바·필터 등 반복적으로 등장하는 기능에 적합합니다.
- **brand-tertiary** — 브랜드 컬러를 활용해 가볍게 강조하고자 할 때 사용합니다. tertiary 특유의 낮은 위계를 유지하면서도 서비스의 정체성을 표현할 수 있어, 링크성 액션이나 보조 탐색 기능에 적합합니다.
- **text** — 가장 낮은 위계의 액션에 사용합니다. 배경이나 테두리 없이 텍스트 중심으로 표현되어 화면 밀도를 높이지 않으며, 부가 기능, 링크성 동작, 보조 탐색 등 가벼운 상호작용에 적합합니다. 과도한 사용은 클릭 중요도를 낮출 수 있으므로 제한적으로 사용하는 것을 권장합니다.

### Label 작성하기 (`1:273021` verbatim)

버튼 라벨의 문구는 사용자가 수행할 행동을 **명확하고 예측 가능하게** 표현해야 합니다.

항상 사용자 시점에서 작성하고, 동일한 액션에는 일관된 단어와 톤을 유지합니다.

불필요한 단어나 모호한 표현은 피하고, 간결한 문장을 사용합니다. 사용자가 조치를 취하기 전에 대화 상자를 읽게 만드는 **모호하고 일반적인 라벨을 사용하지 마세요**.

영문 표기시 버튼 레이블을 **모두 대문자 또는 대소문자를 섞어서 사용하지 마세요**.

| ✓ Do | ✗ Don't |
|---|---|
| 전송하기 (간결한 동사) | DON'T USE UPPERCASE (전체 대문자) |
| Use sentence case | Don't Use Title Case |
| 시작하기 | 다음 (모호한 라벨) |
| Dialog "삭제하시겠습니까?" + 삭제하기(destructive) / 취소 | Dialog "삭제하시겠습니까?" + 예 / 아니오 (모호한 yes/no) |
| Dialog "Discard this comment?" + Cancel / Discard (액션 매칭) | Dialog "Discard this comment?" + Cancel / Delete (라벨/액션 불일치) |

### Icon의 사용 (`1:273081` verbatim)

아이콘은 버튼의 동작을 시각적으로 표현하고 강조하는 데 도움을 줍니다.

아이콘은 라벨의 앞이나 뒤에 배치할 수 있으며, **Prefix는 주로 액션의 의미를 보조**하고, **Suffix는 Chevron처럼 동작을 보조하는 역할**을 합니다.

| ✓ Do | ✗ Don't |
|---|---|
| `[✈ 전송]` (Prefix: 의미 보조) | `[🔍 환자 검색 ›]` (Prefix + Suffix 양쪽 동시) |
| `[🔍 검색]` (Prefix) |  |
| `[더 보기 ›]` (Suffix: chevron) |  |
| `[필터 ▾]` (Suffix: chevron-down) |  |

### Primary Button의 활용 (`1:273113` verbatim)

사용자가 특정 작업을 수행하거나 흐름을 진행하거나, 확인 후 닫기 또는 작업을 완료할 수 있도록 **상황별로 프라이머리 버튼을 하나씩만** 사용하세요.

화면에 여러개 프라이머리 버튼을 사용하지 마세요.

프라이머리 버튼은 주요 동작을 수행해야 하며, 세컨더리 버튼은 해당 동작에 대한 대안을 제공할 수 있습니다.

버튼이 콘텐츠와 함께 스크롤 되는 경우에는 primary 버튼을 맨 위에 배치합니다. 버튼들이 아래쪽에 고정되어 있다면 기본 버튼을 아래쪽에 배치합니다.

> *예외: 웹의 경우 여러 패널이 표시되는 상황이라면 1개 이상의 값을 설정해도 됩니다. 이 경우에는 패널 당 하나씩 설정하는 것을 권장합니다.

가이드 페이지(`1:273113`) 시각 구성 — 3개 sub-block:

**Sub-block 1 (top, 2 Do + 1 Don't 3-column)**:

| ✓ Do (위계 stacked) | ✓ Do (sheet) | ✗ Don't (2 primary) |
|---|---|---|
| primary / secondary / tertiary / subtle (1개씩) | Choose from library / Take new photo / Cancel | Primary / Primary / subtle |

**Sub-block 2 (middle, Do horizontal hierarchy)**:
- 행 1: Cancel(text) → tertiary `[Take new photo]` → secondary `[Take new photo]` → primary `[Choose from library]`
- 행 2: subtle → tertiary → secondary → primary
- 좌→우 위계 (primary가 가장 오른쪽)

**Sub-block 3 (bottom, Don't horizontal)**:
- 행 1: subtle → primary → tertiary → secondary (위계 뒤섞임)
- 행 2: subtle → Primary → Primary (primary 2개)

> **시각화 메모**: spec.html에서 가이드라인 카드 안의 버튼은 **자연 너비**(콘텐츠 크기) 사용. `width: 100%` / `flex: 1`로 영역 채우기 금지 — Figma 가이드 레이아웃 원본 따름.

### 파괴적인 버튼 (`1:273181` verbatim)

Destructive 버튼은 데이터를 영구적으로 삭제하는 것과 같이 **되돌리기 어렵거나 불가능한 작업에만** 사용하세요.

파괴적인 행동에 대한 중요도가 낮을 경우, **Destructive-secondary** 버튼을 사용하세요.

| ✓ Do | ✗ Don't |
|---|---|
| "삭제하시겠습니까?" + neutral-primary `[예]` / 아니오(text) | `[저장하기]` (destructive-primary) / 취소(text) — 일반 저장에 destructive 금지 |
| "삭제하시겠습니까?" + destructive-primary `[삭제하기]` / 취소(text) |  |
| destructive-primary `[Delete account]` / Cancel(text) |  |

### 버튼 위계 (`1:273222` verbatim)

버튼은 색상과 대비를 사용하여 세 가지 수준의 강조 및 계층 구조를 만듭니다.

가장 강하게 강조된 버튼이 프라이머리 버튼(primary)이고, 그 다음이 세컨더리(secondary), 마지막이 터셔리 버튼(tertiary)입니다.

대부분의 버튼에는 **뉴트럴 세컨더리(Neutral-Secondary)** 버튼을 사용하고 중요한 CTA 버튼에 **Neutral-primary** 버튼을 사용합니다.

> *브랜드 프라이머리(Brand-primary) 버튼은 온라인 서비스의 경우, 주문, 결제 등 최종 단계의 CTA 버튼에 한정적으로 사용하세요.

가이드 페이지(`1:273222`) 시각: 5행 가운데 정렬 — 좌측 위계 라벨(160px) + 우측 버튼(약 360px width).

| 위계 | 예시 |
|---|---|
| Brand primary * | `[주문하기]` (orange) |
| Neutral primary | `[저장하기]` (dark) |
| Neutral secondary | `[수정하기]` (white + gray border) |
| Neutral tertiary | `[수정하기]` (light gray) |
| Subtle | `[취소]` (transparent text) |

> **시각화 너비 가이드** (전체 가이드라인 공통):
> - 짧은 라벨 (전송하기, 시작하기, 다음, 라벨): `min-width: 100px`
> - 중간 라벨 (전체 dialog 버튼, Discard 등): `min-width: 80~240px`
> - 긴 라벨 (긴 라벨을 사용하는 경우): `min-width: 280px`
> - 위계 데모: `width: 360px` (라벨이 짧아도 시각 위계 강조)
> - `width: 100%`로 컨테이너 전체 채우기 금지 — 버튼은 콘텐츠 + 적절한 여백 너비

### 긴 라벨을 사용하는 경우 (`1:273260` verbatim)

긴 라벨이 필요한 경우 버튼 그룹 레이아웃을 **Horizontal 에서 vertical 타입으로 전환**하여 적용하세요.

버튼 위계에 맞게 위치를 사용하세요. **Primary 버튼은 오른쪽, 상단으로 적용**해야 합니다.

| ✓ Do | ✗ Don't |
|---|---|
| Horizontal: 짧은 라벨 `[라벨]` `[라벨]` (primary 우측) | Horizontal: 긴 라벨 `[엄청 길고 긴 라벨을 사용하…]` `[엄청 길고 긴 라벨을 사용하…]` (overflow/잘림) |
| Vertical: 긴 라벨 — primary `[긴 라벨을 사용하는 경우]` 상단 + secondary 하단 | Vertical: secondary 상단 + primary 하단 (위계 역전) |

## 접근성 (`1:273285` verbatim)

모든 사용자가 버튼의 기능을 인식하고 조작할 수 있도록, 아래 WCAG 및 ARIA 가이드라인을 준수합니다. 키보드, 스크린리더, 터치 등 다양한 입력 방식에서 일관된 접근성을 보장하여 사용 오류를 최소화합니다.

### WCAG 2.2

#### 키보드 접근성 (SC 2.1.1)
모든 버튼은 Tab·Shift+Tab으로 포커스 이동이 가능하고, **Enter 또는 Space 키로 작동**해야 합니다.

#### 포커스 가시성 (SC 2.4.7)
버튼에 키보드 포커스가 있을 때 **2px 이상의 고대비 포커스 인디케이터**를 표시해야 합니다.

#### 클릭 대상 크기 (PC 기준, SC 2.5.8)
마우스·트랙패드 환경에서 클릭 가능한 버튼 목표(target)는 **최소 24×24 CSS 픽셀**을 확보해야 하며, 목표가 이보다 작을 경우 요소 간 **최소 24px 이상의 간격**을 유지해야 합니다.

#### 비활성화 상태
비활성화된 버튼은 시각적으로 명확히 구분되고, 클릭이 불가능해야 하며 **키보드 포커스에서 제외**됩니다.

## 상호작용 가이드라인 (`1:273332` verbatim)

### 탐색

| 구분 | 설명 |
|---|---|
| Tab, Shift + Tab | 모든 버튼은 Tab, Shift + Tab 키를 눌렀을 때 접근할 수 있어야 한다. |

### 실행

| 구분 | 설명 |
|---|---|
| Click | 버튼의 동작을 실행시킨다. |
| Enter, Space | 버튼이 초점을 가진 상태에서 버튼의 동작을 실행시킨다. |

## Usage Notes

- 본 프로젝트에서는 **neutral 톤만 사용** (brand 톤은 사용자 명시 지시 시에만)
- 한 화면에 `*-primary` 1개만 (위계: primary → secondary → tertiary → text)
- `common/*` 오버레이는 state별로 base 위에 알파 합성 (default 위에 hover/pressed 알파 깔기)
- focused는 `common/focus-ring`(black) 단일 외부 링 — 버튼과 링 사이 투명 갭이 배경에 따라 흰색/회색으로 비침 (이전 "이중 링" 메모리 정정)
- disabled 토큰 3종 공존:
  - `disabled` (단순)
  - `disabled-gray` (완전 비활성)
  - `disabled-inactive` (읽기 전용 느낌)
  → 호환성을 위해 모두 정의되어 있고, 신규 화면은 `disabled-gray` 권장
- variant/instance API 호출 시 production `button`의 명칭 사용:
  - style: `subtle` (이전 `text` 아님), `destructive-*` (이전 `distructive-*` 오타 정정)
  - state: `disabled-gray` (이전 `Disabled` 아님)
  - size: `_숫자` 접미사 포함 (`md_32` 등)
  - prop 키는 모두 lowercase (`style`, `state`, `size`, `layout`, `type`)
- 라벨은 Sentence case (한국어/영문 모두 첫글자만 대문자)
