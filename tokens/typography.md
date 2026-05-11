# Typography

> 출처:
> - Figma **UI-Kit-Guide(공유용)** file `ky00DVb1Q3RmiMlYWwdSGG`
> - 페이지 `1:31168` (`↪️ Typography ✅`) / 프레임 `1:31230` (`Typography`)
> - Last sync: 2026-05-11 via TalkToFigma MCP `get_node_info`
>
> JS 토큰: `tokens/typography/font-family.js`, `tokens/typography/font-size.js`, `tokens/typography/text-style.js` (`v04` 시리즈가 현행).

## Overview

OX 디자인 시스템에서 타이포그래피는 정보를 명확하고 효과적으로 전달하기 위한 핵심 요소이며, 소프트웨어와 웹서비스의 정체성과 사용성 전반에 영향을 미칩니다. 타이포그래피의 일관된 사용은 UI의 신뢰도와 시각적 통일성을 확보하며, 전체 브랜드 이미지 형성에도 중요한 역할을 합니다.

- Typography는 **명확한 커뮤니케이션을 위한 체계화된 스타일**로 구성됩니다.
- 각 텍스트는 사용 용도 및 기능에 따라 정의된 스타일을 사용하며, **5단계 위계체계 하에 총 30단계의 세부 스타일**로 구성되어 있습니다.
- 사용자 경험의 일관성을 위해 명시된 범위 내의 스타일만을 사용하며, 새로운 스타일 정의는 반복 사용성과 시스템 편입 가능성을 검토한 후 담당자 승인 하에 추가될 수 있습니다.

## 서체 (Typeface)

오스템임플란트는 **Pretendard**를 기본 서체로 사용합니다.

- 화면 환경에 최적화된 높은 가독성과 균형 잡힌 시각적 인상 제공
- 다양한 UI 요소에서 일관된 텍스트 표현
- PMS 소프트웨어 전반의 사용성·브랜드 일관성 강화

> 가나다 ABC abc 123 @#!?\*

## 서체 두께 (4단계)

표준형 스타일은 명확한 시각적 대비와 가독성 확보를 위해 **Regular(400) · Medium(500) · Semibold(600) · Bold(700)** 4가지 글자 두께를 기본으로 사용합니다.

| Weight | Value | 용도 |
|--------|-------|------|
| Regular  | 400 | 본문 및 설명 텍스트 — 기본 가독성 제공 |
| Medium   | 500 | 중간 강조, UI 라벨 |
| Semibold | 600 | UI 라벨, 버튼, 강조 |
| Bold     | 700 | 제목·섹션 헤더·중요 정보 강조 |

> 서체 두께마다 실제로 사용되는 4가지의 높이를 각각 설계하여 최소한의 리소스로 시스템을 구성합니다.

## 서체 높이 (Line-height · 3종)

가독성과 접근성을 고려하여 기본적으로 **120% / 140% / 160%**로 분류하여 사용합니다. 이 기준은 시각적 피로를 줄이는 동시에, 시각장애인 및 난독증 사용자를 포함한 다양한 사용자에게 보다 원활한 읽기 환경을 제공합니다.

| 비율 | 용도 |
|------|------|
| 120% | 큰 타이틀·헤딩 (밀집 레이아웃) |
| 140% | 일반 본문 |
| 160% | 긴 본문, 접근성 우선 |

> 서체 크기마다 실제로 사용되는 3가지의 높이를 각각 설계하여 최소한의 리소스로 시스템을 구성합니다.

## 서체 케이스 (위계 6종 · 26 세부 스타일)

각 케이스는 **Display · Heading · Title · Body · Caption · Button**으로 구분되며, 크기·굵기·줄간격 기준을 적절하게 적용하여 명료한 위계체계를 제공합니다.

표 컬럼:
- **size** = 사이즈 키 (`3xl`/`2xl`/`xl`/`lg`/`md`/`sm`/`xs`/`xxs`/`4xl`)
- **px** = 폰트 사이즈 (px)
- **weights** = 사용 가능 두께. `B`=Bold(700), `SB`=Semibold(600), `M`=Medium(500), `R`=Regular(400)
- **120% / 140% / 160%** = line-height ratio 적용 시 px 값 (계산용)
- **default LH** = 시스템에서 채택한 기본 line-height (px)

### Display (7 styles)

화면에서 **가장 중요한 메시지**를 전달할 때 사용하는 최상위 위계. 비주얼 영역 문구, 키보드, 서류 갯수, 데이트피커 교체 등.

| size | px  | weights | 120% | 140% | 160% | default LH |
|------|-----|---------|------|------|------|------------|
| 3xl  | 112 | SB · R  | 134  | 157  | 179  | 180        |
| 2xl  | 72  | R       | 86   | 101  | 115  | 116        |
| xl   | 64  | R       | 77   | 90   | 102  | 104        |
| lg   | 56  | R       | 67   | 78   | 90   | 90         |
| md   | 40  | R       | 48   | 56   | 64   | 64         |
| sm   | 32  | SB · M  | 38   | 45   | 51   | 52         |
| xs   | 24  | SB      | 29   | 34   | 38   | 40         |

### Heading (2 styles)

화면에서 **대그룹으로 구분**할 때 사용. Global Navigation Bar, Left Navigation Bar 등 그룹핑 영역.

| size | px | weights | 120% | 140% | 160% | default LH |
|------|----|---------|------|------|------|------------|
| md   | 24 | SB · M  | 29   | 34   | 38   | 30         |
| sm   | 20 | SB · M  | 24   | 28   | 32   | 24         |

### Title (1 style)

소그룹·카드 단위의 **제목**.

| size | px | weights      | 120% | 140% | 160% | default LH |
|------|----|--------------|------|------|------|------------|
| sm   | 16 | SB · M · R   | 19   | 22   | 26   | 20         |

### Body (5 styles)

일반 **본문 텍스트**. 가장 자주 쓰이는 위계.

| size | px | weights         | 120% | 140% | 160% | default LH |
|------|----|-----------------|------|------|------|------------|
| xl   | 20 | SB              | 24   | 28   | 32   | 28         |
| lg   | 18 | SB · R          | 22   | 25   | 29   | 26         |
| md   | 16 | B · SB · M · R  | 19   | 22   | 26   | 24         |
| sm   | 14 | B · SB · M · R  | 17   | 20   | 22   | 20         |
| xs   | 12 | B · SB · M · R  | 14   | 17   | 19   | 18         |

### Caption (2 styles)

작은 보조 텍스트. 메타 정보, 라벨, 도움말 등.

| size | px | weights | 120% | 140% | 160% | default LH |
|------|----|---------|------|------|------|------------|
| md   | 16 | SB · R  | 19   | 22   | 26   | 20         |
| sm   | 12 | R       | 14   | 17   | 19   | 18         |

### Button (9 styles)

**인터랙티브 컨트롤** 라벨 전용. 모든 weight = Semibold.

| size | px | weight | 120% | 140% | 160% | default LH |
|------|----|--------|------|------|------|------------|
| 4xl  | 32 | SB     | 38   | 45   | 51   | 40         |
| 3xl  | 28 | SB     | 34   | 39   | 45   | 36         |
| 2xl  | 24 | SB     | 29   | 34   | 38   | 30         |
| xl   | 18 | SB     | 22   | 25   | 29   | 24         |
| lg   | 16 | SB     | 19   | 22   | 26   | 24         |
| md   | 16 | SB     | 19   | 22   | 26   | 24         |
| sm   | 14 | SB     | 17   | 20   | 22   | 20         |
| xs   | 14 | SB     | 17   | 20   | 22   | 20         |
| xxs  | 12 | SB     | 14   | 17   | 19   | 16         |

## JS 매핑

JS 토큰 `tokens/typography/text-style.js` v0.4 시리즈가 위 표를 직접 반영:

```js
import { textStyle } from "@12sswosstem/ssw";

// 예시
textStyle.v04.button.xl;   // { family: "Pretendard", weight: 600, size: 18, lineHeight: 24, letterSpacing: 0 }
textStyle.v04.body.md.SB;  // { family: "Pretendard", weight: 600, size: 16, lineHeight: 24, letterSpacing: 0 }
textStyle.v04.heading.md.SB; // { family: "Pretendard", weight: 600, size: 24, lineHeight: 30, letterSpacing: 0 }
```

상세 매핑은 `docs/components.html` Foundation > Typography 페이지에 자동 렌더됩니다.

## 사용 원칙

- **임의 사이즈 금지** — 정의된 26 스타일 중 하나만 사용
- 화면 위계 = Display(최상위) → Heading → Title → Body → Caption (보조). Button은 인터랙티브 컨트롤 전용
- 같은 위계 내에서는 weight로 강약 조정 (Bold → Semibold → Medium → Regular)
- 새 스타일이 필요하면 반복 사용성 검토 후 시스템에 편입
