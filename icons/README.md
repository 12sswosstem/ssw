# Icons

Osstem Implant 아이콘 라이브러리 ID 매핑.

## Source

- Figma 파일: `icon 라이브러리 Shape`
- Page: `2806:36607`
- 총 **2,966 COMPONENT** (state variants 포함)
- 318 의미있는 그룹

## 프레임 구조

| 프레임 | ID | 개수 |
|---|---|---|
| toolbar | `2806:36610` | 70 SETs |
| pattern | `2853:39200` | 21 |
| nav | `2853:36854` | 36 |
| system | `2853:830` | 191 SETs |

## State Variants 공통

모든 COMPONENT_SET은 다음 state를 지원:
- `default`
- `destructive`
- `disabled`
- `invert`
- `selected`
- `black`

## 데이터

전체 아이콘 ID는 [`icons.json`](./icons.json) 참고.

## 사용 (DS Runner)

```js
async function getIcon(iconId, state = "default") {
  const node = await figma.getNodeByIdAsync(iconId);
  if (!node) return null;
  if (node.type === "COMPONENT_SET") {
    const v = node.children.find(c => c.name.includes(`state=${state}`))
      || node.defaultVariant || node.children[0];
    return v ? v.createInstance() : null;
  }
  if (node.type === "COMPONENT") return node.createInstance();
  return null;
}
```
