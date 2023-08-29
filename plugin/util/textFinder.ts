type Scene = SceneNode & ChildrenMixin;

function textNodeToData(node: TextNode) {
  const { id, name } = node;
  const textDatas = node.getStyledTextSegments([
    "fontName",
    "fontSize",
    "fontWeight",
    "fills",
  ]);

  const data = textDatas.map((data) => ({
    id,
    name,
    ...data,
  }));

  return data;
}

function useTextFinder() {
  /**STATE MANAGEMENT**/
  let allText: EverySceneTextsData[] = [];

  function setAllText(value: EverySceneTextsData[]) {
    allText = value;
  }

  const getAllText = () => {
    /*get current page's children */
    const childrens = figma.currentPage.children as Scene[];

    /*reset & set base Data Structures
    depend on number of frame groups*/
    const groupByName: EverySceneTextsData[] = childrens.map(({ name }) => ({
      name,
      textDatas: [] as unknown as EverySceneTextsData["textDatas"],
    }));

    setAllText(groupByName);

    /*set Every Scene's TextNode[] */
    childrens.forEach((child) => {
      flatTextNodes(child.children as Scene[], child.name);
    });

    return allText;
  };

  return {
    getAllText,
  };

  function flatTextNodes(children: Scene[], name: string) {
    if (children.length === 0) return;
    children.forEach((child) => {
      const isText = child.type === "TEXT";
      if (isText) {
        const index = allText.findIndex((data) => data.name === name);
        const textData = textNodeToData(child);
        allText[index].textDatas.push(...textData);
      } else {
        if (child.children === undefined) return;
        flatTextNodes(child.children as Scene[], name);
      }
    });
  }
}

const textFinder = useTextFinder();

export default textFinder;
