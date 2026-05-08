# DS Runners

Figma **DS Runner** plugin에서 실행하는 자체완결 JS 파일들. 각 runner는 GitHub
저장소의 토큰/스펙을 인라인 형태로 포함해서 sandbox 환경(import/fetch 불가)에서
바로 실행됩니다.

## 사용법

1. Figma DS Runner 플러그인 열기
2. 원하는 runner의 raw URL 복사 또는 파일 내용 복사
3. DS Runner 코드 입력란에 붙여넣고 실행

## Runners

| 파일 | 설명 | 출처 |
|---|---|---|
| `ssw-login-mobile-runner.js` | 모바일 로그인 화면 (360×720) | components/{button,input}.md + tokens/color · typography |

## 패턴

각 runner는 동일한 구조:

1. **Token 데이터 인라인** — `components/*.md` verbatim 값
2. **VAR_CANDIDATES 매핑** — Figma 로컬 변수 이름과 매칭 시도, 실패 시 hex fallback
3. **TextStyle 매핑** — `v0.4/<category>/<size>` 형식 textStyle 매칭
4. **빌더 헬퍼** — `af()` (autolayout frame), `tx()` (text node)
5. **메인 빌더** — 컴포넌트 합성

변수가 매칭되면 컴포넌트의 색상/사이즈가 자동으로 변수에 바인딩되어, Figma에서
변수 값 변경 시 매트릭스가 즉시 반영됩니다.

## 미매칭 시 디버깅

콘솔에 `❌ 미매칭 Color (n)` 로 표시되는 토큰들은 hex fallback으로만 적용됩니다.
`💡 로컬 Color 변수 hint` 출력에서 후보 이름을 확인 후, `COLOR` 객체의 `names`
배열에 추가하면 매칭됩니다.
