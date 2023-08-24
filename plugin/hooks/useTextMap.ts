import uiMessenger from "../api/toUi";
import { textNodeToData } from "../textNode";

type Scene = SceneNode & ChildrenMixin;

type SceneData = {
  name: string;
  textNodes: Pick<any, any>[];
};

function useTextMapper() {
  /**STATE MANAGEMENT**/
  let sceneDatas: SceneData[] = [];

  function setSceneDatas(value: SceneData[]) {
    sceneDatas = value;
  }

  /**
   * **On GetTextData**
   *
   * on 'getTextData' method called.
   */
  const onGetTextData = () => {
    /*get current page's children */
    const childrens = figma.currentPage.children as Scene[];

    /*reset & set base Data Structures
    depend on number of frame groups*/
    const groupByName = childrens.map((child) => ({
      name: child.name,
      textNodes: [],
    }));
    setSceneDatas(groupByName);

    /*set Every Scene's TextNode[] */
    childrens.forEach((child) => {
      flatTextNodes(child.children as Scene[], child.name);
    });

    const message = JSON.stringify(sceneDatas);
    uiMessenger.updateUI("table", message);
  };

  return {
    sceneDatas,
    onGetTextData,
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
