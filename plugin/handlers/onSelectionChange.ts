import { changeUiMode } from "../api/toUi";

const onSelectionChange = () => {
  const selection = figma.currentPage.selection;
  // No Selcection
  if (selection.length === 0) {
    changeUiMode("Page");

    // At least, Selection has one node
  } else {
    if (selection.length === 1 && selection[0].type === "TEXT") {
      changeUiMode("Text");
    } else {
      changeUiMode("Group");
    }
  }
};

export default onSelectionChange;
