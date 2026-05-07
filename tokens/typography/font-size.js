// Typography · Font Size
// Source: Figma Typography.font-size — components/*.md 관측값 기반
// 각 항목: { size, lineHeight }  (px)

// button (모두 SemiBold 600)
export const button = {
  xxs: { size: 12, lineHeight: 16 },
  xs:  { size: 14, lineHeight: 20 },
  sm:  { size: 14, lineHeight: 20 },
  md:  { size: 16, lineHeight: 24 },
  lg:  { size: 16, lineHeight: 24 },
  xl:  { size: 18, lineHeight: 24 },
  "2xl": { size: 24, lineHeight: 30 },
  "3xl": { size: 28, lineHeight: 36 },
  "4xl": { size: 32, lineHeight: 40 },
};

// body — Regular(R) 400 / Medium(M) 500 / SemiBold(SB) 600 / Bold(B) 700 weight 변형 공유
export const body = {
  xxs: { size: 12, lineHeight: 14 }, // 일부 컨텍스트에서 12/16
  xs:  { size: 14, lineHeight: 20 },
  sm:  { size: 14, lineHeight: 20 },
  md:  { size: 16, lineHeight: 24 },
  lg:  { size: 18, lineHeight: 26 },
};

// title
export const title = {
  sm: { size: 16, lineHeight: 20 },
};

// caption
export const caption = {
  sm: { size: 12, lineHeight: 16 },
};

// display — 가이드 코멘트 참조 (`3xl(112) ~ xs(24)`). 정확한 lineHeight는 figma 직접 추출 필요.
// TODO: Figma Typography에서 display/3xl ~ xs 추출
export const display = {};

// headline — md(24), sm(20) 코멘트. lineHeight 미확인
// TODO
export const headline = {};

// label — sm(18) 코멘트.
// TODO
export const label = {};

// description — md(16), sm(12) 코멘트.
// TODO
export const description = {};
