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
import { colorSemantic } from "./tokens/index.js";

const brandColor = colorSemantic.brand.A_default; // #EB6100
```

## Figma 소스

| 파일 | Key |
|---|---|
| 공통 컴포넌트 | `5MV87M6oIKlLf7Pg35VSJI` |
| UI-Kit-Guide | `LxBPQF1oFOfiNdX5qzLcik` |

## 컴포넌트 목록

[components/](./components) 폴더 참고.
