// Typography · Text Style IDs
// Source: Figma file lIIen1jmIhT0vuyXCMQDQA (공통 컴포넌트-test)
// Last sync: 2026-05-07 via Figma MCP get_variable_defs
//
// 출처 표기: ✓ = Figma Variable 직접 확인

// ---------------------------------------------------------------------------
// v0.4 시스템 — ❤️v0.4/<category>/<size> (variable 참조 기반)
// 모든 항목 family = "Pretendard", letterSpacing = 0
// ---------------------------------------------------------------------------
const FAMILY = "Pretendard";
const W = { regular: 400, medium: 500, semibold: 600 };

export const v04 = {
  // ---- button (모두 SemiBold 600) ----
  button: {
    "xxs": { family: FAMILY, weight: W.semibold, size: 12, lineHeight: 16, letterSpacing: 0 }, // ✓
    "xs":  { family: FAMILY, weight: W.semibold, size: 14, lineHeight: 20, letterSpacing: 0 }, // ✓
    "sm":  { family: FAMILY, weight: W.semibold, size: 14, lineHeight: 20, letterSpacing: 0 }, // ✓
    "md":  { family: FAMILY, weight: W.semibold, size: 16, lineHeight: 24, letterSpacing: 0 }, // ✓
    "lg":  { family: FAMILY, weight: W.semibold, size: 16, lineHeight: 24, letterSpacing: 0 }, // ✓
    "xl":  { family: FAMILY, weight: W.semibold, size: 18, lineHeight: 24, letterSpacing: 0 }, // ✓
    "2xl": { family: FAMILY, weight: W.semibold, size: 24, lineHeight: 30, letterSpacing: 0 }, // ✓
    "3xl": { family: FAMILY, weight: W.semibold, size: 28, lineHeight: 36, letterSpacing: 0 }, // ✓
    "4xl": { family: FAMILY, weight: W.semibold, size: 32, lineHeight: 40, letterSpacing: 0 }, // ✓
  },
  // ---- body (R/M/SB 모두 동일 사이즈, weight만 다름) ----
  body: {
    "xxs": {
      M: { family: FAMILY, weight: W.medium, size: 12, lineHeight: 14, letterSpacing: 0 }, // ✓ (font_size body_xs=12, lh body_xxs=14)
    },
    "sm": {
      R:  { family: FAMILY, weight: W.regular,  size: 14, lineHeight: 20, letterSpacing: 0 }, // ✓
      M:  { family: FAMILY, weight: W.medium,   size: 14, lineHeight: 20, letterSpacing: 0 }, // ✓
      SB: { family: FAMILY, weight: W.semibold, size: 14, lineHeight: 20, letterSpacing: 0 }, // ✓
    },
    "md": {
      R:  { family: FAMILY, weight: W.regular,  size: 16, lineHeight: 24, letterSpacing: 0 }, // ✓
      M:  { family: FAMILY, weight: W.medium,   size: 16, lineHeight: 24, letterSpacing: 0 }, // ✓
      SB: { family: FAMILY, weight: W.semibold, size: 16, lineHeight: 24, letterSpacing: 0 }, // ✓
    },
    "lg": {
      R:  { family: FAMILY, weight: W.regular,  size: 18, lineHeight: 26, letterSpacing: 0 }, // ✓
      SB: { family: FAMILY, weight: W.semibold, size: 18, lineHeight: 26, letterSpacing: 0 }, // ✓
    },
    "xl": {
      R:  { family: FAMILY, weight: W.regular,  size: 20, lineHeight: 28, letterSpacing: 0 }, // ✓
      SB: { family: FAMILY, weight: W.semibold, size: 20, lineHeight: 28, letterSpacing: 0 }, // ✓
    },
  },
  // ---- display (sm만 추출됨) ----
  display: {
    "sm": { family: FAMILY, weight: W.regular, size: 32, lineHeight: 52, letterSpacing: 0 },
    // TODO: 3xl/2xl/xl/lg/md/xs 단계 — Display 사용 컴포넌트 추가 추출 필요
  },
};

// ---------------------------------------------------------------------------
// v0.1 (legacy) — Body/sm(M) 만 변수에서 확인됨
// ---------------------------------------------------------------------------
export const v01 = {
  body: {
    "sm-M": { family: FAMILY, weight: W.medium, size: 14, lineHeight: 1.4, letterSpacing: 0 }, // ✓ v0.1/Body/sm(M)
  },
};

// ---------------------------------------------------------------------------
// Legacy textStyle — H1~H4 / P3~P5 (기존 추정값, 검증 미완료)
// ---------------------------------------------------------------------------
export const heading = {
  H2: { family: FAMILY, weight: 700, size: 60, lineHeight: 1.5, letterSpacing: 0 },
  H3: { family: FAMILY, weight: 700, size: 40, lineHeight: 1.5, letterSpacing: 0 },
  H4: { family: FAMILY, weight: 700, size: 32, lineHeight: 1.5, letterSpacing: 0 },
  // TODO: H1, H5
};

export const paragraph = {
  "P3-1": { family: FAMILY, weight: 700, size: 40, lineHeight: 1.5, letterSpacing: 0 },
  "P4-2": { family: FAMILY, weight: 400, size: 32, lineHeight: 1.5, letterSpacing: 0 },
  "P5-1": { family: FAMILY, weight: 700, size: 24, lineHeight: 1.5, letterSpacing: 0 },
  "P5-2": { family: FAMILY, weight: 400, size: 24, lineHeight: 1.5, letterSpacing: 0 },
  // TODO: P1, P2, P3-2, P4-1
};

// ---------------------------------------------------------------------------
// 카테고리별 빈 placeholder (v04에서 분기) — 기존 호환
// ---------------------------------------------------------------------------
export const display = v04.display;
export const body    = v04.body;
export const button  = v04.button;
export const title   = {};   // TODO: ❤️v0.4/title/{sm}
export const caption = {};   // TODO: ❤️v0.4/caption/{md, sm}
