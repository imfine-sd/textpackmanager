type Scene = SceneNode & ChildrenMixin;

// function textNodeToData(node: TextNode) {
//   const textData = node.getStyledTextSegments([
//     "fontName",
//     "fontSize",
//     "fontWeight",
//     "fills",
//   ]);

//   return textData;
// }

function useTextFinder() {
  /**STATE MANAGEMENT**/
  let allText: TextData[] = [];

  function setAllText(value: TextData[]) {
    allText = value;
  }

  const getAllText = () => {
    /*get current page's children */
    const childrens = figma.currentPage.children as Scene[];

    /*reset & set base Data Structures
    depend on number of frame groups*/
    const groupByName = childrens.map(({ name }) => ({
      name,
      textNodes: [],
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
        // const textData = textNodeToData(child);
        allText[index].textNodes.push(child);
      } else {
        if (child.children === undefined) return;
        flatTextNodes(child.children as Scene[], name);
      }
    });
  }
}

export default useTextFinder;
