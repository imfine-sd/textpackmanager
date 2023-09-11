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
  let allText: TextsNode[] = [];

  function setAllText(value: TextsNode[]) {
    allText = value;
  }

  const getAllText = (): TextsNode[] => {
    /*get current page's children */
    const childrens = figma.currentPage.children as Scene[];

    /*reset & set base Data Structures
    depend on number of frame groups*/
    const groupByName: TextsNode[] = childrens.map(({ id, name }) => ({
      id,
      name,
      textDatas: [] as unknown as TextsNode["textDatas"],
    }));

    setAllText(groupByName);

    /*set Every Scene's TextNode[] */
    childrens.forEach((child) => {
      flatTextNodes(child.children as Scene[], child.name);
    });

    return allText;
  };

  /*get Selected Group texts */
  const getSelectedGroup = (scene: Scene): TextsNode => {
    let selectedTextData: TextsNode = {
      id: scene.id,
      name: scene.name,
      textDatas: [],
    };

    flatTextNode(selectedTextData, scene.children as Scene[]);

    return selectedTextData;
  };

  /*get Selected Text */
  const getSelectedText = (scene: TextNode) => {};

  return {
    getAllText,
    getSelectedGroup,
    getSelectedText,
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
  function flatTextNode(targetData: TextsNode, children: Scene[]) {
    if (children.length === 0) return;
    children.forEach((child) => {
      const isText = child.type === "TEXT";
      if (isText) {
        const textData = textNodeToData(child);
        targetData.textDatas.push(...textData);
      } else {
        if (child.children === undefined) return;
        flatTextNode(targetData, child.children as Scene[]);
      }
    });
  }
}

const textFinder = useTextFinder();

export default textFinder;
