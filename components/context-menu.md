# Context Menu

> **Usage pattern** — 별도 컴포넌트가 아닌, [Menu](./menu.md) 컴포넌트의 사용 패턴.
>
> Figma 원본 컴포넌트는 `menu` / `menu_item` / `menu_item_sub` (→ [menu.md](./menu.md) 참조).
> "Context Menu"는 **우클릭/overflow 트리거로 띄우는 floating 메뉴 패턴**을 가리키는 이름이며,
> 시각·구조·variant·토큰은 모두 menu와 동일.
>
> 시각 참조: [docs/spec.html#context-menu](../docs/spec.html#context-menu)

## Overview

Context Menu는 다음 트리거로 띄우는 floating 옵션 메뉴 패턴입니다:

| 패턴 | trigger | 위치 기준 | 예 |
|---|---|---|---|
| **Context menu** | 우클릭 (`oncontextmenu`) | 커서 좌표 | 파일 우클릭 → 복사/잘라내기/삭제 |
| **Overflow menu** | ⋯ 더보기 버튼 클릭 | 버튼 anchor | 리스트 row 끝 ⋯ → 편집/공유/삭제 |
| **Action menu** | 액션 버튼 클릭 | 버튼 anchor | "Actions ▾" → 다중 액션 |

> 입력형 선택은 [dropdown.md](./dropdown.md) 참조 — 같은 menu 컴포넌트 위 다른 패턴.

## 사용 시 결정 요소

이 doc은 **트리거 방식 + 위치 결정 + 닫힘 동작**만 다룹니다. 메뉴 자체의 variant/토큰/anatomy는 [menu.md](./menu.md)에서 확인하세요.

### 트리거 · 위치
- **우클릭 컨텍스트**: `oncontextmenu` 이벤트로 좌표 받아 메뉴 띄움 (`{ left: e.clientX, top: e.clientY }`)
- **Overflow 버튼**: ⋯ 버튼 anchor 기준 popper 배치 (보통 우측·하단 정렬)
- **모바일/터치**: long press(0.5s 이상)로 우클릭 대체

### 닫힘 트리거
- ESC
- 외부 클릭 (mousedown outside)
- 메뉴 항목 클릭 (액션 실행 후 즉시 닫힘)
- 스크롤·리사이즈 (선택적)

### 위치 충돌 처리
- 화면 모서리 근처면 자동 flip (오른쪽 → 왼쪽 정렬, 아래 → 위 정렬)
- popper.js / floating-ui 류 라이브러리 활용 권장

## 시각

[menu.md](./menu.md)의 wrapper · item variant 그대로 사용. 추가 스타일 없음.

```
[ 우클릭 ] →  [ menu wrapper (298 width, elevation-20) ]
              ├─ menu_item  복사            ⌘C
              ├─ menu_item  잘라내기        ⌘X
              ├─ menu_item  붙여넣기        ⌘V
              ├─ menu_item_sub divider
              ├─ menu_item  이름 변경       F2
              └─ menu_item (danger) 삭제    ⌘⌫
```

## Usage Notes

- 컨텍스트 메뉴는 **상태 보존 안 함** — 매번 새로 mount
- 위험 액션은 `menu_item state=danger`로 분리, 그룹 사이는 `menu_item_sub divider`로 구분
- 권한 없는 항목은 `state=disabled` (사라지게 하는 것보다 표시하는 게 학습성에 좋음 — 단, 항상 disabled면 제거 고려)
- 단축키 표기는 `sub_text` 슬롯 활용 (우측 정렬, 12px gray)
- 서브메뉴는 `split_btn chevron` 슬롯 + nested menu wrapper
- 접근성:
  - 컨텍스트 메뉴 열림 시 첫 menuitem에 focus 이동
  - ↑↓로 항목 탐색, Enter로 실행
  - 우클릭 트리거 외에 키보드 단축키(예: Shift+F10) 지원 권장
- 모바일: 가능하면 sheet/dialog로 대체 (작은 화면에서 floating 메뉴는 부정확)

## 관련 문서

- [menu.md](./menu.md) — 기반 컴포넌트 (variant · 토큰 · anatomy 전체)
- [dropdown.md](./dropdown.md) — 입력형 선택 패턴
