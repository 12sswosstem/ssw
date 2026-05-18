# 디자인시스템 토큰 네이밍 가이드 & 이슈 기록

> SSW 디자인시스템(`12sswosstem/ssw`)을 WCAG & APCA Contrast Checker 플러그인과 연동하면서 발견된 네이밍 이슈와 가이드라인.

## 1. 발견된 이슈 — 이모지가 토큰 참조에 누락 제거됨

### 문제

피그마 Variables에서는 디자이너 시각적 구분을 위해 이모지(💕, 🖌️, ❤️, 👌 등)를 그룹/카테고리 prefix로 사용 중. 이는 피그마 UI에서는 정상이지만, **코드로 동기화될 때 변환 도구가 이모지를 일관되게 제거하지 못함**.

### 발견 위치

`semantic.mjs:58` (수정 전):

```js
border: {
  "(active)": { light: "{brand.👌brand-A_default}", dark: "#FFFFFF" },
  ...
}
```

- 토큰 키(`brand-A_default`)에서는 이모지가 잘 제거됨 (line 35: `"brand-A_default": { light: "#EB6100", ... }`)
- 하지만 **토큰 참조 문자열 내부의 이모지는 제거 누락** → `{brand.👌brand-A_default}` 참조가 실제 키(`brand.brand-A_default`)와 매칭되지 않음
- 결과: resolver/build 도구가 이 reference를 풀려고 하면 매칭 실패

### 수정

```diff
- "(active)": { light: "{brand.👌brand-A_default}", dark: "#FFFFFF" },
+ "(active)": { light: "{brand.brand-A_default}", dark: "#FFFFFF" },
```

### 영향 범위

- 플러그인의 `build-tokens.mjs`는 hex 값만 통과시키는 정규식 필터가 있어, 이 참조 토큰은 어차피 `tokens.json`에 포함되지 않음 → **플러그인 동작에는 직접 영향 없음**
- 하지만 다른 동기화 도구(Tokens Studio, Style Dictionary 등)는 참조 해석을 시도하므로, 그쪽에서 깨질 위험 있음
- 코드 검색(`grep "brand.brand-A_default"`)에서 이 참조가 누락되는 일관성 문제

## 2. 네이밍 가이드라인

### 어디까지 이모지를 허용할지

| 위치 | 허용 여부 | 비고 |
|---|---|---|
| 피그마 **Collection 이름** (`Color_component 💕`) | ✅ OK | 디자이너 UI 전용, 코드로 export 안 됨 |
| 피그마 **Group 이름** (`💕list`, `🖌️bg`) | ⚠️ 주의 | 변환 도구가 path에서 제거하는지 검증 필요 |
| 피그마 **Variable 이름** (`💕list/fg/default`) | ⚠️ prefix만 OK | 그룹 prefix는 보통 제거되지만, leaf 이름에는 절대 금지 |
| 피그마 **참조/Alias 대상 식별자** | ❌ 금지 | 이번 버그가 발생한 케이스 |
| 코드 변수명 / Export 이름 | ❌ 금지 | JS 식별자 규칙 위반 |

### W3C Design Tokens 권장

```
허용: a-z, A-Z, 0-9, hyphen (-), underscore (_), dot (.)
금지: 공백, 이모지, 특수문자, 한글
```

### 시각적 카테고리 구분이 필요하다면

이모지는 **식별자가 아닌 곳**에 두기:

```js
// 🎨 Brand colors
export const brand = {
  primary: { light: "#274DEA", ... },
}
```

```md
## 💕 List Components
| ...
```

## 3. 동기화 후 검증 명령

토큰 파일에 이모지 누락 잔여물이 있는지 확인:

```bash
# Python 정규식 — Unicode emoji 블록 매칭
python3 -c "
import re
for f in ['primitive.mjs', 'semantic.mjs', 'component.mjs']:
  text = open(f).read()
  matches = re.findall(r'[\U0001F300-\U0001F9FF\U00002600-\U000027BF\U0001F600-\U0001F64F]', text)
  if matches:
    print(f, '이모지 발견:', matches)
"
```

## 4. 후속 작업 권장

1. **GitHub 원본 수정 push** — `12sswosstem/ssw` 레포의 `tokens/color/semantic.js`에 동일한 수정 반영
2. **피그마 동기화 스크립트 점검** — Variables → JS export 변환 단계에서 참조 문자열 내부의 이모지도 제거하도록 보강
3. **CI 체크 추가** — 위 검증 명령을 PR 체크로 자동화

---

*최종 수정: 2026-05-18 / WCAG & APCA Contrast Checker 플러그인 동기화 작업 중 발견*
