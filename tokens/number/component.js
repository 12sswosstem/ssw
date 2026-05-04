// Number · Component Tokens
// Source: Figma Variable Collection Number_component (923:58268)
// 각 namespace는 figma-export.json의 토큰 prefix와 1:1 대응.
// TODO: 각 컴포넌트별 토큰 값을 채우기 (현재는 namespace 선언만)

// Form / Input
export const button = {};            // border, h-padding, text-padding, corner-radius, size per size
export const input = {};             // textinput / input_(dropdown): height, padding, corner-radius, border per size
export const textarea = {};          // 별도 textarea 토큰 (없으면 input 공유)
export const dropdown = {};          // input_(dropdown) 동일

// Selection
export const selectionControl = {};  // checkbox/radio/switch 공유: icon, text per sm/md/lg

// Navigation
export const tab = {};               // lined / contained, height per size
export const segmentedControl = {};  // height-sm/md/lg-outline · -solid, width per size

// Display
export const tag = {};               // height per xs/sm/md
export const chip = {};              // height per xs/sm/md
export const badge = {};             // container/dot/icon/text size, border per xs/sm/md/lg/xl
export const avatar = {};            // corner-radius circle/rounded/square, stroke per xs~2xl

// Layout
export const card = {};              // corner radius sm/md
export const table = {};             // height, padding, gap, text-size per xs_24~2xl_56

// Feedback
export const tooltip = {};           // padding-md/lg
export const popover = {};           // padding/radius/gap
export const popup = {};             // section_contents_gap
export const modal = {};             // padding, gap, gap-text, gap-icon
export const notification = {};      // padding, radius, gap, text-padding per md/lg
export const coachmark = {};         // radius, padding, gap, gap-text
export const progress = {};          // bar height per xs~lg, corner-radius pill/square
