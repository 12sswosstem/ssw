// Number · Primitive Tokens
// Source: Figma file lIIen1jmIhT0vuyXCMQDQA (공통 컴포넌트-test)
// Last sync: 2026-05-07 via Figma MCP get_variable_defs
//
// 출처 표기:
//   ✓ = Figma Variable 직접 확인 (get_variable_defs 결과)
//   △ = 컴포넌트 토큰 값에서 역추적 (집합 자체는 미확인)
//
// ⚠️ Figma의 Number 컬렉션은 단일 통합 스케일이 아니라 용도별로 분산:
//    Size/padding/*, Size/height/*, Size/border/*, Size/gap/*, Number/*
//   각 그룹별 추출.

// ---------------------------------------------------------------------------
// padding — Size/padding/<step>
// ---------------------------------------------------------------------------
export const padding = {
  "sm":  6,  // ✓ Size/padding/sm(6)
  "2xl": 16, // ✓ Size/padding/2xl(16)
  "3xl": 20, // ✓ Size/padding/3xl(20)
  "4xl": 24, // ✓ Size/padding/4xl(24)
};

// ---------------------------------------------------------------------------
// height — Size/height/<context>
// ---------------------------------------------------------------------------
export const height = {
  body: {
    "xxs": 14, // ✓ Size/height/body_xxs(14)
    "sm":  20, // ✓ Size/height/body_sm(20)
    "md":  24, // ✓ Size/height/body_md(24)
    "lg":  26, // ✓ Size/height/body_lg(26)
    "xl":  28, // ✓ Size/height/body_xl(28)
  },
  button: {
    "xxs": 16, // ✓ Size/height/button_xxs(16)
    "sm":  20, // ✓ Size/height/button_sm(20)
    "lg":  24, // ✓ Size/height/button_lg(24)
    "2xl": 30, // ✓ Size/height/button_2xl(30)
    "3xl": 36, // ✓ Size/height/button_3xl(36)
    "4xl": 40, // ✓ Size/height/button_4xl(40)
  },
  display: {
    "md": 64, // ✓ Size/height/display_md(64)
    "lg": 90, // ✓ Size/height/display_lg(90)
  },
  // 기타 단계
  "3xl": 80, // ✓ Size/height/3xl(80)
};

// ---------------------------------------------------------------------------
// border — Size/border/<step>
// ---------------------------------------------------------------------------
export const border = {
  "sm": 1, // ✓ Size/border/sm(1)
  "md": 2, // ✓ Size/border/md(2)
};

// ---------------------------------------------------------------------------
// gap — Size/gap/<step>
// ---------------------------------------------------------------------------
export const gap = {
  "sm": 4, // ✓ Size/gap/sm(4)
  "lg": 8, // ✓ Size/gap/lg(8)
};

// ---------------------------------------------------------------------------
// number — canonical Number 스케일 (1~39 단계, px)
// Source: Figma UI-Kit-Guide(공유용) `ky00DVb1Q3RmiMlYWwdSGG` / `1:30666`
// 자세한 rem 변환값/difference는 tokens/number.md 참조.
// ---------------------------------------------------------------------------
export const number = {
  "1":  1,
  "2":  2,
  "3":  4,
  "4":  6,
  "5":  8,
  "6":  10,
  "7":  12,
  "8":  14,
  "9":  16,
  "10": 18,
  "11": 20,
  "12": 22,
  "13": 24,
  "14": 26,
  "15": 28,
  "16": 30,
  "17": 32,
  "18": 36,
  "19": 40,
  "20": 44,
  "21": 48,
  "22": 52,
  "23": 56,
  "24": 64,
  "25": 72,
  "26": 80,
  "27": 88,
  "28": 90,
  "29": 96,
  "30": 104,
  "31": 112,
  "32": 116,
  "33": 128,
  "34": 144,
  "35": 160,
  "36": 180,
  "37": 240,
  "38": 320,
  "39": 480,
};

// ---------------------------------------------------------------------------
// 외부 SLDS 토큰 (참고용 — Salesforce SLDS 라이브러리)
// 직접 사용 권장하지 않음. 매핑 테이블로만 보존.
// ---------------------------------------------------------------------------
export const _sldsBridge = {
  spacing: {
    0:  0,   // --slds-g-spacing-0
    1:  4,   // --slds-g-spacing-1
    2:  8,   // --slds-g-spacing-2
    12: 80,  // --slds-g-spacing-12
  },
  radiusBorder: {
    4: 20, // --slds-g-radius-border-4
  },
};
