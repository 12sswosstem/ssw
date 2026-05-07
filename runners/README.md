# SSW DS Runner

Figma DS Runner에 붙여넣어 디자인시스템 매트릭스를 캔버스에 그리는 자체완결 JS 모음.

## 사용법

1. Figma DS Runner를 연다
2. 아래 raw URL의 코드를 복사
3. DS Runner 코드 입력란에 붙여넣고 실행

| Runner | 결과물 | raw URL |
|---|---|---|
| `ssw-button-runner.js` | 9 style × 6 state × 9 size = 486 button 매트릭스 | https://raw.githubusercontent.com/12sswosstem/ssw/main/runners/ssw-button-runner.js |

## 동작 방식

각 runner는 단일 자체완결 JS 파일이며 **외부 fetch 없이 실행**된다 (DS Runner sandbox 제약).

토큰은 `tokens/*.js` + `components/*.md` source 의 light-mode hex 값을 인라인. 하지만 **로컬 Figma 변수 컬렉션에 같은 이름의 변수가 있으면 자동 바인딩**되어, 변수 값을 바꾸면 매트릭스가 그대로 반영된다 (= 라이브 연동).

```
GitHub                          Figma
  tokens/*.js  ───── 빌드 인라인 ──→  runner 안 STYLE 객체 (hex fallback)
  components/*.md                          │
                                           ▼
                                    Variable lookup (이름 매칭)
                                           │
                  Figma local variables  ──┘   ← 매칭되면 바인딩, 안 되면 hex
```

## 출처 / source of truth

| 항목 | 출처 |
|---|---|
| size 토큰 (height·padding·radius·border·font) | `components/button.md` `Number tokens (Mode 1)` 표 |
| 9 style 색상 (bg/fg/border) | `components/button.md` `Color tokens` light 컬럼 + `tokens/color/component.js#button` |
| state overlay (hover/pressed) | `components/button.md` `State overlay 분기` |
| focus ring | `components/button.md` `Focus ring 구조` 표 |
| disabled | `components/button.md` disabled row |
| 매트릭스 레이아웃 | `docs/spec.html#button` 1:1 대응 |

## 로드맵

- [x] **Phase 1 (현재)**: Button PoC — 9×6×9 = 486 매트릭스
- [ ] Phase 2: GitHub Actions 빌드 자동화 (push 시 `tokens/*.js` 변경 → runner 자동 재생성)
- [ ] Phase 2: 다른 컴포넌트 일괄 (input, card, badge, chip, ...)
- [ ] Phase 3: spec.html 전체 페이지 단위 runner

## 제약

- DS Runner는 Figma plugin sandbox: `import`/`export` 직접 사용 불가, `fetch()` 차단됨 → **빌드 타임 인라인 필수**
- Variable 매칭은 이름 기준 (`button/bg/brand-primary` 등). 로컬 변수 이름이 다르면 hex로 fallback (`distructive` 오타는 button.md verbatim)
