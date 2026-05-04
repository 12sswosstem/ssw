# Context Menu

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#contextMenu`.
> 토큰 prefix: `menu/*`.

## Overview
- 우클릭 또는 더보기 버튼으로 띄우는 메뉴
- 메뉴 컨테이너 + menu_item 행 + 헤더/구분선
- state: default / hover / selected / focused / disabled / danger / alert

## Color tokens (light / dark)

### bg
| token | light | dark |
|---|---|---|
| `menu/bg-default` | `#000000` | `#f4f4f4` |
| `menu/bg-hover` | `#393939` | `#eeeeee` |
| `menu/bg-selected` | — | `rgba(235,97,0,0.3)` |
| `menu/bg-disabled` | `#393939` | `#eeeeee` |
| `menu/bg-layout` | `#000000` | `#f4f4f4` |

### fg (전경)
| token | light | dark |
|---|---|---|
| `menu/fg-default` | `#f4f4f4` | `#e9e9e9` |
| `menu/fg-hover` | `#f4f4f4` | `#eeeeee` |
| `menu/fg-selected` | — | `#f4f4f4` |
| `menu/fg-disabled` | `#a5a5a5` | `#eeeeee` |

### text
| token | light | dark |
|---|---|---|
| `menu/text-primary` | `#f4f4f4` | `#020202` |
| `menu/text-secondary` | `#e9e9e9` | `#393939` |
| `menu/text-selected` | — | `#000000` |
| `menu/text-disabled` | `#a5a5a5` | `#dddddd` |
| `menu/text-danger` | `#fc432e` | `#b12617` |

### icon
| token | light | dark |
|---|---|---|
| `menu/icon` | `#dddddd` | `#393939` |
| `menu/icon-default` | `#e9e9e9` | `#000000` |
| `menu/icon-hover` | `#e9e9e9` | `#eeeeee` |
| `menu/icon-selected` | — | `#000000` |
| `menu/icon-disabled` | `#a5a5a5` | `#dddddd` |
| `menu/icon-danger` | `#d73220` | `#b12617` |

### border / divider
| token | light | dark |
|---|---|---|
| `menu/border-default` | `#8f8f8f` | `#393939` |
| `menu/border-active` | `#f4f4f4` | `#000000` |
| `menu/divider` | `#8f8f8f` | `#bcbcbc` |
| `menu/divider-selected` | `#bc4e00` | `#ef8133` |
| `menu/divider-disabled` | `#8f8f8f` | `#dddddd` |
| `menu/divider-danger` | `#fc432e` | `#b12617` |
| `menu/section-divider` | `#8f8f8f` | `#dddddd` |

## Number tokens

| token | px |
|---|---|
| `menu/height/sm` | 32 |

## Variants

- **menu_item state**: default / hover / selected / focused / disabled / danger / alert
- **menu_item checked**: true / false
- 메뉴 컨테이너는 282px 고정 너비 (관행)

## 구조

```
menu (282×N, gap=4, drop-shadow)
├─ menu_item_sub (header / divider)
└─ menu_item (각 행 32h, padding 8/10)
   ├─ front (label + sub_text)
   └─ split_btn (서브메뉴 화살표 32×32)
```

## Usage Notes

- 282px 고정 너비 (가변 시 직접 조정)
- danger state는 삭제/위험 액션용 (`text-danger` red)
- selected state는 dark 모드에서만 명시적 색상 (light는 hover로 대체)
- focused는 키보드 포커스 (border 2px black + bg 약한 orange)
- 헤더 행(`menu_item_sub` header)은 `body/sm (SB)` Pretendard 600 / 14
