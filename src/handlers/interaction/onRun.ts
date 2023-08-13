import textNodeToData from "../node/textNode";

const onRun = (event: RunEvent) => {
  const currentPage = figma.currentPage;
  const allTextNodes = currentPage.findAll(
    (node) => node.type === "TEXT"
  ) as TextNode[];
  const textData = allTextNodes.map(textNodeToData);

  // const data = { allTextNodes };
  const message = JSON.stringify(textData);

  figma.ui.postMessage(message);
};

export default onRun;
