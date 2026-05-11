// Typography · Font Size
// Source: Figma Variable Collection — Number_sementic > Typography > "font size" + Size > "height"
//   - 각 항목: { size, lineHeight } (px)
//   - lineHeight는 같은 컬렉션의 Size > height에서 카테고리 매칭으로 페어링
//   - "headline" 폰트 사이즈는 Figma `heading_*` height와 페어링됨 (이름 불일치 정정)

export const display = {
  "3xl": { size: 112, lineHeight: 180 },
  "2xl": { size: 72, lineHeight: 116 },
  xl: { size: 64, lineHeight: 104 },
  lg: { size: 56, lineHeight: 90 },
  md: { size: 40, lineHeight: 64 },
  sm: { size: 32, lineHeight: 52 },
  xs: { size: 24, lineHeight: 40 },
};

export const headline = {
  md: { size: 24, lineHeight: 30 },
  sm: { size: 20, lineHeight: 24 },
};

export const title = {
  sm: { size: 16, lineHeight: 20 },
};

export const body = {
  xl: { size: 20, lineHeight: 28 },
  lg: { size: 18, lineHeight: 26 },
  md: { size: 16, lineHeight: 24 },
  sm: { size: 14, lineHeight: 20 },
  xs: { size: 12, lineHeight: 18 },
};

export const label = {
  sm: { size: 18, lineHeight: 22 },
};

export const description = {
  md: { size: 16 },  // ⚠️ lineHeight: Figma height 컬렉션 미존재
  sm: { size: 12 },  // ⚠️ lineHeight: Figma height 컬렉션 미존재
};

export const button = {
  "4xl": { size: 32, lineHeight: 40 },
  "3xl": { size: 28, lineHeight: 36 },
  "2xl": { size: 24, lineHeight: 30 },
  xl: { size: 18, lineHeight: 26 },
  lg: { size: 16, lineHeight: 24 },
  md: { size: 16, lineHeight: 24 },
  sm: { size: 14, lineHeight: 20 },
  xs: { size: 14, lineHeight: 20 },
  xxs: { size: 12, lineHeight: 16 },
};
