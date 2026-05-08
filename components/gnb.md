# GNB (Global Navigation Bar)

> 출처:
> - **공통 컴포넌트(Copy)** file `lIIen1jmIhT0vuyXCMQDQA` / section `893:75216` `gnb_component_v0.1`
> - 다수 컴포넌트 셋 (4개 GNB 변형):
>   - **Cloud X** (메인 PMS): `gnb_menu_cloudx` `3594:47522` (138 variants), `gnb_module_cloudx` `3629:65813` (3 variants), `gnb_variation_cloudx` `3648:71681` (4 variants)
>   - **PMS Dental** (치과 view): `gnb_menu_v0.1` `880:73391` (64 variants), `gnb_icon_v0.1` `880:73108` (~68 variants)
>   - **One3** menu: `gnb-menu_one3` `883:87012` (16 variants), `Header navigation` `883:78447` (3 variants)
>   - **HMI** (키오스크): `gnb_menu` `4476:45420` (9 variants), `gnb_menu_hmi` `4476:45054` (4 variants), `gnb_menu_hmi` `4480:46088` (10 variants), `gnb icons` `4476:45193` (~60 variants)
>
> JS 토큰: `tokens/color/component.js#gnb`.
> 토큰 prefix: `gnb/*`.

## Overview
- 4가지 GNB 변형 (사용 컨텍스트별):
  1. **Cloud X**: 메인 SaaS PMS — 좌측 23개 모듈 메뉴
  2. **PMS Dental**: 치과 view — 16개 dental 모드 (bone/upper/tooth 등)
  3. **One3** (Header): One3 SW용 상단 네비게이션
  4. **HMI**: 터치스크린 키오스크용 큰 아이콘 메뉴
- 모드: **light** (production variable_defs 기준)

## Color tokens — production (light)

### icon
| token | light |
|---|---|
| `gnb/icon/icon-default` | `#8f8f8f` |
| `gnb/icon/icon-hover` | `#565656` |
| `gnb/icon/icon-selected` | `#e9e9e9` |
| `gnb/icon/icon-selected line` | `#f3a066` (NEW — selected 시 line indicator orange) |
| `gnb/icon/icon-stroke` | `#bcbcbc` |

### container
| token | light |
|---|---|
| `gnb/container/container-bg-default` | `#0e0e0e` (figma-export) |
| `gnb/container/container-bg-hover` | `#eeeeee` |
| `gnb/container/container-bg-selected` | `#000000` |
| `gnb/container/container-bg-selected-brand` | `#fef7f2` (NEW — light orange tint) |

### bg
| token | light |
|---|---|
| `gnb/bg/gnb-bg` | `#727272` |
| `gnb/bg/gnb-bg-pms` | `#f9f9f9` (PMS 화면용 — 옅은 흰색) |
| `gnb/bg/gnb-bg-onesw` | `#d2d2d2` (NEW — OneSW 컨텍스트) |
| `gnb/xx-bg/bg_layer_2` | `#f4f4f4` |

### text · etc
| token | light |
|---|---|
| `gnb/etc/text default` | `#565656` |
| `gnb/etc/text_active` | `#1d1d1d` |
| `gnb/etc/text_disabled` | `#bcbcbc` |
| `gnb/etc/border` | `#bcbcbc` |
| `gnb/etc/divider` | `#a5a5a5` |

## Cloud X — `gnb_menu_cloudx` (`3594:47522`, 138 variants, 3축)

### prop verbatim
- **menu**: `talk` / `today` / `desk` / `appointment` / `pay` / `crm` / `message` / `clinic` / `docu` / `bill` / `tooth` / `crown` / `hospital` / `statics` / `myhome` / `one2` / `one3` / `oneguide` / `oneortho` / `onepros` / `logo` / `more` / `setting` (23개)
- **state**: `default` / `hover` / `selected`
- **type**: `icon` / `text`

23 × 3 × 2 = **138 variants**

### 주요 Variant ID (state=default, type=icon)
| menu | variant ID |
|---|---|
| talk | `3594:47516` |
| today | `3594:47519` |
| desk | `3594:47513` |
| appointment | `3594:47514` |
| pay | `3594:47511` |
| crm | `3594:47505` |
| message | `3594:47499` |
| clinic | `3594:47500` |
| docu | `3594:47518` |
| bill | `3594:47496` |
| tooth | `3594:47512` |
| crown | `3594:47509` |
| hospital | `3594:47510` |
| statics | `3594:47487` |
| myhome | `3594:47494` |
| one2 | `3594:47485` |
| one3 | `3594:47520` |
| oneguide | `3594:47483` |
| oneortho | `3594:47481` |
| onepros | `3594:47491` |
| logo | `3612:76769` |
| more | `3629:68880` |
| setting | `3594:47503` |

> hover/selected/text variant은 menu별로 인접 ID (예: talk: default-icon `3594:47516` / hover-icon `3648:89954` / selected-icon `3594:47521` / default-text `3629:61758` / hover-text `3629:52645` / selected-text `3629:51229`).

## Cloud X — `gnb_module_cloudx` (`3629:65813`, 3 variants)

전체 컨테이너 (44 wide collapsed / 118 wide expanded).

| Property 1 | Property 2 | variant ID | 크기 |
|---|---|---|---|
| `collapsed` | `Default` | `3629:65812` | 44 × 908 |
| `collapsed-2` | `Default` | `3629:68283` | 44 × 847 |
| `expanded` | `Default` | `3629:65811` | 118 × 908 |

## Cloud X — `gnb_variation_cloudx` (`3648:71681`, 4 variants)

| Property 1 | variant ID | 크기 | 비고 |
|---|---|---|---|
| `Default` | `3648:71680` | 44 × 908 | icon-only |
| `1` | `3648:71679` | 44 × 908 | 혼합 |
| `Variant3` | `3648:72575` | 118 × 908 | icon+label |
| `Variant4` | `3648:72573` | 118 × 908 | icon+label 다른 변형 |

## PMS Dental — `gnb_menu_v0.1` (`880:73391`, 64 variants, 2축)

### prop verbatim
- **state**: `default` / `disabled` / `hover` / `selected`
- **name**: `bone` / `upper` / `tooth` / `lower` / `vp-bone` / `vp-upper` / `vp-lower` / `sinus` / `tmj` / `2d-pano` / `sensor` / `oral_photo` / `face_photo` / `oral_scan` / `face_scan` / `cephalo` (16개)

16 × 4 = **64 variants**

### name (16개 dental view)
- 골격: `bone`, `upper`, `lower`, `tooth`
- 가상 환자: `vp-bone`, `vp-upper`, `vp-lower`
- 영상: `2d-pano`, `sensor`, `cephalo`, `sinus`, `tmj`
- 사진/스캔: `oral_photo`, `face_photo`, `oral_scan`, `face_scan`

### 주요 Variant ID (state=default)
| name | variant ID |
|---|---|
| bone | `880:73392` |
| upper | `880:73407` |
| tooth | `880:73422` |
| lower | `880:73437` |
| vp-bone | `880:73452` |
| vp-upper | `880:73467` |
| vp-lower | `880:73482` |
| sinus | `880:73497` |
| tmj | `880:73512` |
| 2d-pano | `880:73527` |
| sensor | `880:73542` |
| oral_photo | `880:73557` |
| face_photo | `880:73572` |
| oral_scan | `880:73587` |
| face_scan | `880:73602` |
| cephalo | `883:81371` |

## PMS Dental — `gnb_icon_v0.1` (`880:73108`, ~68 variants, 2축)

### prop verbatim
- **type**: `preset`
- **name**: bone / upper / lower / vp-bone / vp-upper / vp-lower / tmj / tooth / 2d-pano / sinus / sensor / face_photo / oral_photo / face_scan / oral_scan / ceph (16~17개)
- **state**: `default` / `hover` / `selected` / `selected-brand`

16~17 × 4 = ~68 variants. 32×32 icon 컴포넌트.

## One3 — `gnb-menu_one3` (`883:87012`, 16 variants)

### prop verbatim
- **Property 1**: `none` / `1` / `2` / `3` / `4` / `5` / `6` / `7` / `8` / `9` / `10` / `11` / `12` / `13` / `14` / `15`

16 변형 — One3 SW의 메뉴 슬롯 1~15 + none.

## One3 — `Header navigation` (`883:78447`, 3 variants)

### prop verbatim
- **SW**: `One3`
- **Type**: `Worklist` / `Viewer` / `Viewer-2`

| Type | variant ID | 크기 |
|---|---|---|
| Worklist | `883:78449` | 1920 × 80 |
| Viewer | `883:78512` | 1920 × 80 |
| Viewer-2 | `2193:79604` | 1920 × 80 |

## HMI — `gnb_menu` (`4476:45420`, 9 variants)

### prop verbatim
- **state**: `default` / `active` / `active_2` / `pressed` / `disabled`
- **size**: `lg_10` / `sm_7`

| size \\ state | default | active | active_2 | pressed | disabled |
|---|---|---|---|---|---|
| lg_10 (80×80) | `4476:45421` | `4476:45425` | `4480:45478` | `4476:45429` | `4480:45464` |
| sm_7 (48×48) | `4476:45423` | `4476:45427` | `4480:45480` | `4476:45431` | `4480:45466` |

## HMI — `gnb_menu_hmi` (`4476:45054`, 4 variants — size × layout)

### prop verbatim
- **size**: `sm` / `lg`
- **layout**: `vertical` / `horizontal`

| size \\ layout | vertical | horizontal |
|---|---|---|
| sm | `4476:45063` (64×438) | `4480:45864` (800×48) |
| lg | `4480:45911` (112×725) | `4480:45935` (800×80) |

## HMI — `gnb_menu_hmi` (`4480:46088`, 10 variants — Property 1 × type)

### prop verbatim
- **Property 1**: `1` / `2` / `3` / `4` / `5`
- **type**: `Default` / `underline`

10 variants — 메뉴 항목 1~5 × 2 type.

## HMI — `gnb icons` (`4476:45193`, ~60 variants — menu × state)

다양한 HMI 아이콘 (disk, setting, home, list, usb, hamburger, wash1, tool, admin 등 ~20+종) × state (`on` / `off` / `selected_2`).

## 풀 높이 규칙 (필수)

GNB 프레임 세로 = 루트 프레임 높이 (예: 1080).
**DS 인스턴스는 그대로 유지** (44×908 또는 118×908 등), 컨테이너로 감싸 풀 높이 만듦.

```
Root 1920×1080 (HORIZONTAL)
├─ gnbColumn (44×1080, VERTICAL, bg=#F4F4F4)
│   └─ gnb_module_cloudx 인스턴스 (44×908, top 배치)
└─ rightColumn (1876×1080, VERTICAL)
    ├─ TNB (1876×44)
    └─ mainContent (1876×1036)
```

## Anatomy

### Cloud X (collapsed, 44 wide)
```
┌──┐
│ ⚪│  ← logo (top)
├──┤
│ 💬│  ← talk
│ 📅│  ← today
│ ...│
│ ⚙ │  ← setting (bottom)
└──┘
```

### Cloud X (expanded, 118 wide)
```
┌──────────┐
│ ⚪ Logo  │
├──────────┤
│ 💬 Talk  │
│ 📅 Today │
│ ⚙ Setting│
└──────────┘
```

### PMS Dental (overlay on viewer)
```
┌────┐
│ 🦴 │ bone (default)
│ 🔼 │ upper (selected)
│ 🦷 │ tooth
│ 🔽 │ lower
│ ...│
└────┘
```

## Usage Notes

- variant 매칭 verbatim:
  - Cloud X menu: `state=default` / `hover` / `selected` × `type=icon` / `text`
  - PMS Dental: `state=default` / `disabled` / `hover` / `selected` × `name=bone` 등
  - HMI menu: `size=lg_10` / `sm_7` × `state=default` / `active` / `active_2` / `pressed` / `disabled`
- selected 시 container bg + icon 색상 동시 변경
- `selected-brand` state (PMS Dental): brand orange line indicator (`#f3a066`)
- 변수 바인딩 0개 — 색상이 인스턴스에 하드코딩 → **인스턴스 사용 강제**
- GNB 인스턴스를 직접 그리지 말고 `importComponentSetByKeyAsync`로 가져오기
- 4가지 컨텍스트별 사용:
  - **Cloud X**: SaaS 웹 PMS (좌측 24px wide, 23개 메뉴)
  - **PMS Dental**: 치과 영상 viewer 내부 sidebar (16개 dental view)
  - **One3**: One3 SW 상단 header (Worklist / Viewer / Viewer-2)
  - **HMI**: 키오스크/터치스크린 (큰 아이콘 lg_10=80×80 / sm_7=48×48)
- HMI는 `state=active_2` 고유 (다른 GNB는 selected만 있음)
- 루트 frame이 HORIZONTAL이어야 GNB가 좌측 전체 세로 차지 (Cloud X)
- container bg `selected-brand` (`#fef7f2`) — light orange tint, brand 강조 시
- `icon-selected line` (`#f3a066`) — selected indicator line (좌측 막대 형태)
