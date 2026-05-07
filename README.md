# SSW — Osstem Implant Design System

피그마 디자인시스템의 토큰과 컴포넌트 스펙을 코드로 관리합니다.

## 구조

```
ssw/
├── tokens/          # Figma → JS 디자인 토큰
│   ├── color/       # primitive · semantic · component (3계층)
│   ├── number/      # 간격·사이즈 스케일
│   └── typography/  # font-family · font-size · text-style ID
├── components/      # 컴포넌트별 스펙 MD
└── icons/           # 아이콘 라이브러리 ID 매핑
```

## 사용 예

```js
import { colorPrimitive, colorSemantic, numberPrimitive, textStyle } from "./tokens/index.js";

// 원시 색상 — 17단계 Neutral Gray
colorPrimitive.neutral[100];           // "#e9e9e9"
colorPrimitive.neutral[800];           // "#393939"

// 의미 색상 — alert/system/brand
colorSemantic.alert.success.primary;   // "#0ba45d"
colorSemantic.common["brand-A_default"]; // "#eb6100"

// 사이즈
numberPrimitive.padding["4xl"];        // 24
numberPrimitive.height.button["3xl"];  // 36

// 글자 스타일 (v0.4)
textStyle.v04.button["xl"];            // { family, weight, size, lineHeight, letterSpacing }
```

## 토큰 출처 표기

각 토큰 파일 주석에 표기되는 기호:

| 기호 | 의미 | 신뢰도 |
|---|---|---|
| ✓ | Figma Variable 직접 확인 (`get_variable_defs`) | 높음 |
| ⚠ | Figma Color 가이드 페이지의 시각 라벨에서 hex 추출 | 중 (디자이너 의도와 일치하나 변수 정의 미확인) |
| △ | 컴포넌트 토큰의 hex 값에서 의미 역추적 | 중 (집합 정의 미확인) |

## Figma 소스

| 파일 | Key | 비고 |
|---|---|---|
| 공통 컴포넌트-test | `lIIen1jmIhT0vuyXCMQDQA` | 토큰 진실의 원천 (현재) |
| 공통 컴포넌트 | `5MV87M6oIKlLf7Pg35VSJI` | legacy |
| UI-Kit-Guide | `LxBPQF1oFOfiNdX5qzLcik` | legacy |

## 컴포넌트 목록

[components/](./components) 폴더 참고.

---

## Migration Guide

### v? → next (2026-05-07 Figma 재동기화)

Figma 변수 직접 추출로 토큰 정확도를 올리는 과정에서 **breaking changes**가 발생했습니다. 기존 토큰을 import해서 쓰던 코드는 아래 매핑으로 바꿔주세요.

#### 1. `colorPrimitive.neutral` 단계 번호 정정

기존 코드의 단계 번호가 Figma 진짜 변수와 어긋나 있었습니다.

| 기존 키 (잘못됨) | hex | → | 신규 키 (Figma 진실값) |
|---|---|---|---|
| `neutral[50]` | `#f9f9f9` | → | `neutral[25]` |
| `neutral[100]` | `#f4f4f4` | → | `neutral[50]` |
| `neutral[200]` | `#e9e9e9` | → | `neutral[100]` |
| `neutral[300]` | `#dddddd` | → | `neutral[150]` |
| `neutral[400]` | `#c6c6c6` | ❌ | (Figma에 없음 — 가까운 값 `neutral[200] = #d2d2d2` 또는 `neutral[300] = #bcbcbc` 사용) |
| `neutral[500]` | `#a5a5a5` | → | `neutral[400]` |
| `neutral[600]` | `#8f8f8f` | → | `neutral[500]` |
| `neutral[700]` | `#565656` | → | `neutral[700]` (그대로 — 우연히 일치) |
| `neutral[800~950]` | | → | (그대로 — 일치) |

신규 추가: `neutral[1] = #fefefe`, `neutral[75] = #eeeeee`, `neutral[999] = #020202`.

#### 2. 컬러별 키 구조 변경 (단계 번호 → 의미 키)

`blue/red/green/yellow/purple/magenta` 등이 의미 기반 키로 바뀌었습니다.

| 기존 | → | 신규 |
|---|---|---|
| `blue[500]` | → | `blue.primary` |
| `blue[100]` | → | `blue.bg_light` |
| `red[500]` | → | `red.primary` |
| `red[50]` | → | `red.bg_light` |
| `green[400]` | → | `green.primary` |
| `green[50]` | → | `green.bg_light` |
| `yellow[600]` | → | `yellow.primary` |
| `purple[500]` | → | `purple.primary` |
| `magenta[500]` | → | `magenta.primary` |

또는 새 `colorSemantic.alert` 사용 권장:
- `colorSemantic.alert.success.primary` (#0ba45d)
- `colorSemantic.alert.warning.primary` (#e6af00)
- `colorSemantic.alert.critical.primary` (#f03823)
- `colorSemantic.alert.info.primary` (#3b63fb)
- `colorSemantic.alert.question.primary` (#9a47e2)

#### 3. `newOrange` export 제거 → `orange`로 통합

```js
// 기존
colorPrimitive.newOrange[500];  // "#eb6100"

// 신규 (변수 직접 확인된 단계만)
colorPrimitive.orange[600];     // "#fc7d00"

// 또는 의미 사용
colorSemantic.common["brand-A_default"];  // "#eb6100"
```

#### 4. `numberPrimitive.scale` → 그룹별 분리

```js
// 기존
numberPrimitive.scale["lg"];   // 18
numberPrimitive.scale["2xl"];  // 24

// 신규 — 용도별로 정확히 지정
numberPrimitive.padding["4xl"];        // 24  (Size/padding/4xl)
numberPrimitive.height.button["xl"];   // (없음 — body/button/display 컨텍스트 명시 필요)
numberPrimitive.gap["lg"];             // 8
numberPrimitive.border["md"];          // 2
```

#### 5. `textStyle` v0.4 신규

```js
// 신규 — Figma ❤️v0.4 시리즈 직접 매핑
textStyle.v04.button["4xl"]; // { family:"Pretendard", weight:600, size:32, lineHeight:40, letterSpacing:0 }
textStyle.v04.body["lg"].SB; // { family:"Pretendard", weight:600, size:18, lineHeight:26, letterSpacing:0 }
```

기존 `textStyle.heading.H2` 등 legacy는 그대로 유지됩니다.
