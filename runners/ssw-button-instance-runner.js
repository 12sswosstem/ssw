// =============================================================================
// SSW Button — Component Instance PoC (옵션 B)
// =============================================================================
// 목적:
//   ssw-button-runner.js (옵션 A)는 native primitive로 직접 그렸지만,
//   이 runner는 **Figma의 production button 컴포넌트 instance를 직접 호출**한다.
//   → variant·state·token이 디자인시스템과 100% 동일.
//
// 위험:
//   ssw-login-runner.js v3 주석 — "DS Runner에서 hang 이슈"로 v2가 instance 호출
//   포기했음. 따라서 본 PoC는 작은 규모로 시작 (9 instance, md/default 고정).
//
// PoC 범위:
//   9 style × 1 size (md) × 1 state (default) = 9 instance, 가로 한 줄
//
// 컴포넌트 source 탐색 순서:
//   1. 현재 selection이 COMPONENT_SET이면 그것 사용
//   2. 같은 파일에서 이름에 "button"이 들어간 COMPONENT_SET 검색
//   3. (옵션) Team Library import — key를 사용자가 알려줄 때
//
// 실행:
//   1) UI-Kit 파일 / 같은 파일에 button_beta_v0.22_test 컴포넌트가 있어야 함
//   2) (선택) variant set을 클릭해 selection으로 둔 후 실행 → 가장 빠른 매칭
//   3) DS Runner에 이 코드 전체 붙여넣고 실행
//   4) 콘솔에서 진단 출력 확인 — variant prop 이름·매칭 결과
// =============================================================================

console.log("[SSW Button Instance PoC] start");
figma.notify("Button Instance PoC 시작");

// 매칭하려는 9 style (button.md verbatim, distructive 오타 보존)
const TARGET_STYLES = [
  "brand-primary",
  "brand-secondary",
  "brand-tertiary",
  "neutral-primary",
  "neutral-secondary",
  "neutral-tertiary",
  "text",
  "distructive-primary",
  "distructive-secondary",
];
const TARGET_SIZE = "md";
const TARGET_STATE = "default";

// =============================================================================
// 1. 컴포넌트 source 탐색
// =============================================================================

async function findButtonComponentSet() {
  // 1-a. selection 우선
  const sel = figma.currentPage.selection;
  if (sel.length === 1 && sel[0].type === "COMPONENT_SET") {
    console.log(`[source] selection: ${sel[0].name}`);
    return sel[0];
  }
  if (sel.length === 1 && sel[0].type === "COMPONENT" && sel[0].parent && sel[0].parent.type === "COMPONENT_SET") {
    console.log(`[source] selection (variant child): ${sel[0].parent.name}`);
    return sel[0].parent;
  }

  // 1-b. 현재 파일 전체에서 이름 매칭
  const all = figma.root.findAll(n => n.type === "COMPONENT_SET" && /button/i.test(n.name));
  if (all.length) {
    console.log(`[source] 파일 내 검색 ${all.length}개 후보:`);
    for (const c of all) console.log(`  · ${c.name} (variants: ${c.children.length})`);
    // button_beta_v0.22_test 우선, 없으면 첫 번째
    const beta = all.find(c => /beta|v0\.22/i.test(c.name));
    return beta || all[0];
  }

  return null;
}

// =============================================================================
// 2. variant prop 이름 자동 탐지
// =============================================================================

function detectPropKeys(variants) {
  if (!variants.length || !variants[0].variantProperties) return null;
  const keys = Object.keys(variants[0].variantProperties);
  console.log(`[props] variant prop 키 (${keys.length}): ${keys.join(", ")}`);

  // 첫 variant의 모든 prop 값 출력 → 디버깅
  console.log(`[props] 첫 variant 예시:`, variants[0].variantProperties);

  // 가능한 모든 값 모아서 매칭에 도움
  const valuesByKey = {};
  for (const v of variants) {
    if (!v.variantProperties) continue;
    for (const [k, val] of Object.entries(v.variantProperties)) {
      if (!valuesByKey[k]) valuesByKey[k] = new Set();
      valuesByKey[k].add(val);
    }
  }

  // 각 prop 키의 값 종류 출력
  for (const [k, set] of Object.entries(valuesByKey)) {
    const vals = [...set].slice(0, 12);
    console.log(`  · ${k}: [${vals.join(", ")}${set.size > 12 ? ", ..." : ""}] (${set.size}종)`);
  }

  // 휴리스틱 매칭
  const findKey = (re) => keys.find(k => re.test(k));
  return {
    style: findKey(/style|type|variant(?!t)/i),
    size:  findKey(/size/i),
    state: findKey(/state|status/i),
    keys,
    valuesByKey,
  };
}

// =============================================================================
// 3. variant 매칭
// =============================================================================

function findMatchingVariant(variants, propKeys, target) {
  return variants.find(v => {
    const p = v.variantProperties;
    if (!p) return false;
    if (propKeys.style && p[propKeys.style] !== target.style) return false;
    if (propKeys.size  && p[propKeys.size]  !== target.size)  return false;
    if (propKeys.state && p[propKeys.state] !== target.state) return false;
    return true;
  });
}

// =============================================================================
// 4. 메인
// =============================================================================

async function build() {
  await figma.loadFontAsync({ family: "Pretendard", style: "SemiBold" });
  await figma.loadFontAsync({ family: "Pretendard", style: "Medium" });

  // 1. 컴포넌트 set 찾기
  const compSet = await findButtonComponentSet();
  if (!compSet) {
    figma.notify("❌ Button COMPONENT_SET을 찾을 수 없음");
    console.error(
      "[fail] 다음 중 하나가 필요합니다:\n" +
      "  · 작업 파일에 button_beta_v0.22_test 같은 variant set 존재\n" +
      "  · 또는 해당 variant set을 selection으로 두기"
    );
    return;
  }

  const variants = compSet.children.filter(c => c.type === "COMPONENT");
  console.log(`[matched] '${compSet.name}' (variants: ${variants.length})`);

  // 2. prop 키 탐지
  const propKeys = detectPropKeys(variants);
  if (!propKeys) {
    figma.notify("❌ variant property 없음");
    return;
  }
  console.log(`[detected] style=${propKeys.style} · size=${propKeys.size} · state=${propKeys.state}`);

  // 3. 9 style 매칭 시도
  const page = figma.createFrame();
  page.name = "Button Instance PoC";
  page.layoutMode = "VERTICAL";
  page.primaryAxisSizingMode = "AUTO";
  page.counterAxisSizingMode = "AUTO";
  page.itemSpacing = 16;
  page.paddingTop = page.paddingBottom = 32;
  page.paddingLeft = page.paddingRight = 32;
  page.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

  // header
  const head = figma.createText();
  head.fontName = { family: "Pretendard", style: "SemiBold" };
  head.fontSize = 18;
  head.characters = `Button Instance PoC — ${TARGET_SIZE} · ${TARGET_STATE}`;
  head.fills = [{ type: "SOLID", color: { r: 0.11, g: 0.11, b: 0.11 } }];
  page.appendChild(head);

  const row = figma.createFrame();
  row.name = "Button Row";
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "AUTO";
  row.counterAxisSizingMode = "AUTO";
  row.counterAxisAlignItems = "CENTER";
  row.itemSpacing = 16;
  row.fills = [];
  page.appendChild(row);

  let hits = 0;
  const misses = [];

  for (const styleKey of TARGET_STYLES) {
    const target = findMatchingVariant(variants, propKeys, {
      style: styleKey,
      size: TARGET_SIZE,
      state: TARGET_STATE,
    });

    // label + button cell
    const cell = figma.createFrame();
    cell.layoutMode = "VERTICAL";
    cell.primaryAxisSizingMode = "AUTO";
    cell.counterAxisSizingMode = "AUTO";
    cell.itemSpacing = 6;
    cell.counterAxisAlignItems = "CENTER";
    cell.fills = [];

    const label = figma.createText();
    label.fontName = { family: "Pretendard", style: "Medium" };
    label.fontSize = 10;
    label.characters = styleKey;
    label.fills = [{ type: "SOLID", color: { r: 0.56, g: 0.56, b: 0.56 } }];
    cell.appendChild(label);

    if (target) {
      try {
        const inst = target.createInstance();
        cell.appendChild(inst);
        hits++;
      } catch (e) {
        console.error(`[error] createInstance(${styleKey}):`, e.message);
        misses.push({ style: styleKey, reason: e.message });
        const errText = figma.createText();
        errText.fontName = { family: "Pretendard", style: "Medium" };
        errText.fontSize = 10;
        errText.characters = "instance 실패";
        errText.fills = [{ type: "SOLID", color: { r: 0.94, g: 0.32, b: 0.14 } }];
        cell.appendChild(errText);
      }
    } else {
      misses.push({ style: styleKey, reason: "variant 매칭 없음" });
      const missText = figma.createText();
      missText.fontName = { family: "Pretendard", style: "Medium" };
      missText.fontSize = 10;
      missText.characters = "(no match)";
      missText.fills = [{ type: "SOLID", color: { r: 0.94, g: 0.32, b: 0.14 } }];
      cell.appendChild(missText);
    }

    row.appendChild(cell);
  }

  console.log(`╔═══ Instance PoC 결과 ═══╗`);
  console.log(`║ 매칭 성공: ${hits}/${TARGET_STYLES.length}`);
  if (misses.length) {
    console.log(`║ 미매칭:`);
    for (const m of misses) console.log(`║   · ${m.style}: ${m.reason}`);
  }
  console.log(`╚═════════════════════════╝`);

  page.x = figma.viewport.center.x - 400;
  page.y = figma.viewport.center.y - 100;
  figma.currentPage.appendChild(page);
  figma.currentPage.selection = [page];
  figma.viewport.scrollAndZoomIntoView([page]);

  if (hits === TARGET_STYLES.length) {
    figma.notify(`✅ Instance PoC 성공 ${hits}/${TARGET_STYLES.length}`);
  } else {
    figma.notify(`⚠️ Instance PoC ${hits}/${TARGET_STYLES.length} — 콘솔 확인`);
  }
  console.log("[SSW Button Instance PoC] done");
}

try { await build(); }
catch (e) {
  console.error("[SSW Button Instance PoC] 실패:", e);
  figma.notify(`❌ 실패: ${e.message}`);
}
