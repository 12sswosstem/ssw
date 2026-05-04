# GNB (Global Navigation Bar)

> 출처: `figma-export.json` → Color_component(`896:76023`).
> JS 토큰: `tokens/color/component.js#gnb`.
> 토큰 prefix: `gnb/*`.

## Overview
- Cloud X PMS 메인 네비게이션 (좌측 세로 바)
- 22~23개 메뉴 아이템 (talk/today/desk/appointment/pay/crm/...)
- 두 가지 변형: collapsed(44 wide) / expanded(118 wide)
- state: default / hover / selected

## Color tokens (light / dark)

### icon
| token | light | dark |
|---|---|---|
| `gnb/icon/icon-default` | `#bcbcbc` | `#dddddd` |
| `gnb/icon/icon-hover` | `#dddddd` | `#727272` |
| `gnb/icon/icon-selected` | `#e9e9e9` | `#000000` |
| `gnb/icon/icon-stroke` | `#bcbcbc` | `#8f8f8f` |

### container
| token | light | dark |
|---|---|---|
| `gnb/container/container-bg-default` | `#0e0e0e` | `#d2d2d2` |
| `gnb/container/container-bg-hover` | `#2b2b2b` | `#e9e9e9` |
| `gnb/container/container-bg-selected` | `#000000` | `#f4f4f4` |

### bg (외곽 영역)
| token | light | dark |
|---|---|---|
| `gnb/bg/gnb-bg` | `#d2d2d2` | `#bcbcbc` |
| `gnb/bg/gnb-bg-pms` | `#0e0e0e` | `#bcbcbc` |
| `gnb/bg/gnb-bg-onesw` | `#727272` | `#bcbcbc` |
| `gnb/xx-bg/bg_base` | `#1d1d1d` | `#e9e9e9` |
| `gnb/xx-bg/bg_layer _1` | `#e9e9e9` | `#e9e9e9` |
| `gnb/xx-bg/bg_layer_2` | `#1d1d1d` | `#eeeeee` |
| `gnb/xx-bg/bg_ct` | `#0e0e0e` | `#0e0e0e` |

### text · etc
| token | light | dark |
|---|---|---|
| `gnb/etc/text default` | `#dddddd` | `#393939` |
| `gnb/etc/text_active` | `#f4f4f4` | `#000000` |
| `gnb/etc/text_disabled` | `#bcbcbc` | `#bcbcbc` |
| `gnb/etc/border` | `#8f8f8f` | `#e9e9e9` |
| `gnb/etc/divider` | `#a5a5a5` | `#d2d2d2` |

## Variants

- **state**: default / hover / selected
- **type**: icon (36×36) / text (icon + label)
- **collapsed/expanded**: collapsed 44 wide / expanded 118 wide
- **PMS / OneSW**: gnb-bg-pms (PMS 컨텍스트) / gnb-bg-onesw (OneSW)
- 메뉴: talk / today / desk / appointment / pay / crm / message / clinic / docu / bill / tooth / crown / hospital / statics / myhome / one2 / one3 / oneguide / oneortho / onepros / logo / more / setting

## 풀 높이 규칙 (필수)

- GNB 프레임 세로 = 루트 프레임 높이 (예: 1080px)
- DS 인스턴스는 44×908(또는 118×908) 그대로 두고 컨테이너로 감싸 풀 높이 만듦
- 컨테이너 bg = `gnb/bg/gnb-bg` (또는 `#F4F4F4`)
- DS 인스턴스 resize 금지 (내부 깨짐)

```
Root 1920×1080 (HORIZONTAL)
├─ gnbColumn (44×1080, VERTICAL, bg=#F4F4F4)
│   └─ gnb_module_cloudx 인스턴스 (44×908, top 배치)
└─ rightColumn (1876×1080, VERTICAL)
    ├─ TNB (1876×44)
    └─ mainContent (1876×1036)
```

## Usage Notes

- selected 시 container bg + icon 색상 동시 변경
- 변수 바인딩 0개 (모든 색상이 하드코딩 → 인스턴스 사용 강제)
- GNB 인스턴스를 직접 그리지 말고 `importComponentSetByKeyAsync`로 가져오기
- 루트 frame이 HORIZONTAL이어야 GNB가 좌측 전체 세로 차지
