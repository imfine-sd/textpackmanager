import { changeUiMode, updateUi } from "../api/toUi";
import textFinder from "../util/textFinder";

const onNoSelection = () => {
  const allText = textFinder.getAllText();
  changeUiMode("Page");
  updateUi({ target: "allText", data: allText });
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
        return changeUiMode("Group");
      case "TEXT":
        return changeUiMode("Text");
      default:
        return changeUiMode("NoText");
    }
  }

  //  Selection includes multiple nodes
  if (selection.length > 1) {
    console.log(selection);
  }
};

export default onSelectionChange;
