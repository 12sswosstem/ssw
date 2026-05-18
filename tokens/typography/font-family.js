// Typography · Font Family + Weight
// Source: Figma Variable Collection — Number_semantic > Typography (Mode 1)
//   - font-family : base / alter
//   - font-weight : numeric → name string
//   - weight      : name → numeric

export const base = "Pretendard";
export const alter = "inter";  // Figma 원본 verbatim ('inter' 소문자)

// name → numeric (추천: 코드에서 weight 참조용)
export const weight = {
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
};

// numeric → name string (Figma `font-weight` 컬렉션 원본)
export const weightName = {
  400: "regular",
  500: "medium",
  600: "semibold",
  700: "bold",
};
