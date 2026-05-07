// Typography · Text Style IDs
// Figma textStyleId 매핑 — DS Runner / use_figma 코드에서 직접 사용
//
// 출처: Figma get_variable_defs (LxBPQF1oFOfiNdX5qzLcik / 14:4156)
// ⚠️ 부분 추출 — Figma 세션 만료 후 재연결 필요.

// 신규 v0.4 시스템 (variable 참조 기반)
// `❤️v0.4/<category>/<size>` 형식
export const v04 = {
  display: {
    sm: {
      family:        "Pretendard",
      weight:        400,         // Typography/weight/Regular(400)
      size:          32,          // Typography/font size/display_sm
      lineHeight:    52,          // Size/height/display_sm(52)
      letterSpacing: 0,
    },
    // TODO: 나머지 display 사이즈 (3xl/2xl/xl/lg/md/xs) — 다른 페이지에서 추출 필요
  },
};

// Legacy textStyle — H1~H4 / P3~P5
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

// 디자인시스템 신규 textStyle (figma의 ❤️ prefix가 현행)
// 아래 namespace는 components/*.md 관측을 통해 일관된 명명 패턴 추정.
// 실제 textStyleId는 Figma 추출 필요.
export const display = {};   // ❤️v0.4/display/{3xl, 2xl, xl, lg, md, sm, xs}
export const title = {};     // ❤️v0.4/title/{sm}
export const body = {};      // ❤️v0.4/body/{xl, lg, md, sm, xs}
export const caption = {};   // ❤️v0.4/caption/{md, sm}
export const button = {};    // ❤️v0.4/button/{4xl, 3xl, 2xl, xl, lg, md, sm, xs, xxs}
