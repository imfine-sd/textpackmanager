import { updateUi } from "../api/toUi";
import textFinder from "../util/textFinder";

const onNoSelection = () => {
  const allText = textFinder.getAllText();
  updateUi({ target: "allText", data: allText });
};

const onGroupSelection = (scene: Scene) => {
  const selectedGroup = textFinder.getSelectedGroup(scene);
  updateUi({ target: "selectedGroup", data: selectedGroup });
};

const onSelectAText = (scene: TextNode) => {
  updateUi({ target: "selectedText", data: scene });
};

const onSelectionChange = () => {
  const selection = figma.currentPage.selection;

  // No Selcection
  if (selection.length === 0) return onNoSelection();

  // Selection includes just one node
  if (selection.length === 1) {
    switch (selection[0].type) {
      case "SECTION":
      case "FRAME":
      case "GROUP":
      case "COMPONENT_SET":
        return onGroupSelection(selection[0]);
      case "TEXT":
        return onSelectAText(selection[0]);
      default:
        return onNoSelection();
    }
  }

  // //  Selection includes multiple nodes
  // if (selection.length > 1) {
  //   console.log(selection);
  // }
};

export default onSelectionChange;
