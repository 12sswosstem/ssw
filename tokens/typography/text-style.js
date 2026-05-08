// Typography · Text Style 정의
// Figma textStyle name과 정의 매핑 (font: family / weight / size / lineHeight)
//
// 출처: Figma variable_defs (lIIen1jmIhT0vuyXCMQDQA / 7046:148536) — 2026-05-08
//   - 사용자 file에서 textStyle 이모지(❤️) prefix 제거 + library publish 완료
//   - 새 textStyle name은 이모지 없이 사용 (예: `v0.4/button/md (SB)`)
//
// Figma textStyle 이름 형식: `v0.4/<category>/<size> [(M|SB)]`
//   - 접미사 없음 = Regular (400)
//   - (M) = Medium (500)
//   - (SB) = SemiBold (600)

// 신규 v0.4 production typography ─────────────────────────────────────────────

export const display = {
  // 32 / 52 — display_sm
  sm: { family: "Pretendard", weight: 400, size: 32, lineHeight: 52, letterSpacing: 0 },
  // TODO: xs · md · lg · xl · 2xl · 3xl — Figma 다른 페이지에서 추출 필요
  //   font-size 변수: display_xs=24, display_md=40, display_xl=64
  //   line-height 변수: display_xs(40), display_md(64), display_2xl(116)
};

export const body = {
  // 16 / 24 (3 weight 변형)
  md:        { family: "Pretendard", weight: 400, size: 16, lineHeight: 24, letterSpacing: 0 },
  "md (M)":  { family: "Pretendard", weight: 500, size: 16, lineHeight: 24, letterSpacing: 0 },
  "md (SB)": { family: "Pretendard", weight: 600, size: 16, lineHeight: 24, letterSpacing: 0 },
  // 12 / 18
  "xs (M)":  { family: "Pretendard", weight: 500, size: 12, lineHeight: 18, letterSpacing: 0 },
  // 12 / 14
  "xxs (M)": { family: "Pretendard", weight: 500, size: 12, lineHeight: 14, letterSpacing: 0 },
  // TODO: sm · lg · xl — 추가 추출 필요
};

// button textStyle (9 size, 모두 SemiBold 600)
export const button = {
  "xxs (SB)": { family: "Pretendard", weight: 600, size: 12, lineHeight: 16, letterSpacing: 0 },
  "xs (SB)":  { family: "Pretendard", weight: 600, size: 14, lineHeight: 20, letterSpacing: 0 },
  "sm (SB)":  { family: "Pretendard", weight: 600, size: 14, lineHeight: 20, letterSpacing: 0 },
  "md (SB)":  { family: "Pretendard", weight: 600, size: 16, lineHeight: 24, letterSpacing: 0 },
  "lg (SB)":  { family: "Pretendard", weight: 600, size: 16, lineHeight: 24, letterSpacing: 0 },
  "xl (SB)":  { family: "Pretendard", weight: 600, size: 18, lineHeight: 24, letterSpacing: 0 },
  "2xl (SB)": { family: "Pretendard", weight: 600, size: 24, lineHeight: 30, letterSpacing: 0 },
  "3xl (SB)": { family: "Pretendard", weight: 600, size: 28, lineHeight: 36, letterSpacing: 0 },
  "4xl (SB)": { family: "Pretendard", weight: 600, size: 32, lineHeight: 40, letterSpacing: 0 },
};

export const title = {
  // TODO: title/sm — Figma 추출 필요 (관측은 됐으나 정의 미추출)
};

export const caption = {
  // TODO: caption/md · caption/sm — Figma 추출 필요
};

// Legacy textStyle (이전 시스템) ─────────────────────────────────────────────

export const heading = {
  H2: { family: "Pretendard", weight: 700, size: 60, lineHeight: 1.5, letterSpacing: 0 },
  H3: { family: "Pretendard", weight: 700, size: 40, lineHeight: 1.5, letterSpacing: 0 },
  H4: { family: "Pretendard", weight: 700, size: 32, lineHeight: 1.5, letterSpacing: 0 },
  // TODO: H1, H5 — 다른 페이지에서 추출
};

export const paragraph = {
  "P3-1": { family: "Pretendard", weight: 700, size: 40, lineHeight: 1.5, letterSpacing: 0 },
  "P4-2": { family: "Pretendard", weight: 400, size: 32, lineHeight: 1.5, letterSpacing: 0 },
  "P5-1": { family: "Pretendard", weight: 700, size: 24, lineHeight: 1.5, letterSpacing: 0 },
  "P5-2": { family: "Pretendard", weight: 400, size: 24, lineHeight: 1.5, letterSpacing: 0 },
  // TODO: P1, P2, P3-2, P4-1 — 다른 페이지에서 추출
};
