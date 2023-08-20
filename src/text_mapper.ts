import messenger from "./api/send";
import { textNodeToData } from "./api/textNode";

type Scene = SceneNode & ChildrenMixin;

type SceneData = {
  name: string;
  textNodes: Pick<any, any>[];
};

const getIsTextNode = (c: SceneNode): boolean => c.type === "TEXT";
const getIsNotTextNode = (c: SceneNode): boolean => c.type !== "TEXT";

// type TextData = {
//   characters: string;
//   fontName: FontName | typeof figma.mixed;
//   fontSize: number | typeof figma.mixed;
//   fontWeight: number | typeof figma.mixed;
//   fills: readonly Paint[] | typeof figma.mixed;
// };

// const textNodeToData = (textNode: TextNode) => {
//   const { id, name, characters, fontName, fontSize, fontWeight, fills } =
//     textNode;
//   let data: TextData[] = [];
//   if (
//     typeof fontName === "string" &&
//     typeof fontSize === "number" &&
//     typeof fontWeight === "number" &&
//     typeof fills !== "symbol"
//   ) {
//     const newText = {
//       characters,
//       fontName,
//       fontSize,
//       fontWeight,
//       fills,
//     };
//     data = [newText];
//   } else {
//     data = textNode.getStyledTextSegments([
//       "fontName",
//       "fontSize",
//       "fontWeight",
//       "fills",
//     ]);
//   }

//   return `${name} : ${characters}`;
// };

function useTextMapper() {
  let sceneDatas: SceneData[] = [];
  /**
   * **On Export**
   *
   * on export the text contents
   */
  const onExport = () => {
    const childrens = figma.currentPage.children as Scene[];

    sceneDatas = childrens.map((child) => ({
      name: child.name,
      textNodes: [],
    }));

    childrens.forEach((child) => {
      flatTextNodes(child.children as Scene[], child.name);
    });

    const message = JSON.stringify(sceneDatas);
    messenger.updateUI("table", message);
  };

  return {
    sceneDatas,
    onExport,
  };

  function flatTextNodes(children: Scene[], name: string) {
    if (children.length === 0) return;
    children.forEach((child) => {
      const isText = child.type === "TEXT";
      if (isText) {
        const index = sceneDatas.findIndex((data) => data.name === name);
        const textData = textNodeToData(child);
        sceneDatas[index].textNodes.push(...textData);
      } else {
        if (child.children === undefined) return;
        flatTextNodes(child.children as Scene[], name);
      }
    });
  }
}

export default useTextMapper;
