import { changeUiMode, updateUi } from "../api/toUi";
import useTextFinder from "../hooks/useTextNode";

const selection = figma.currentPage.selection;
const textFinder = useTextFinder();

const onNoSelection = () => {
  const allText = textFinder.getAllText();
  changeUiMode("Page");
  updateUi({ target: "allText", data: allText });
};

const onSelectionChange = () => {
  selection.length === 0
    ? // No Selcection
      onNoSelection()
    : selection.length === 1
    ? // Selection includes just one node
      selection[0].type === "TEXT"
      ? // if one selected node is Text Node
        changeUiMode("Text")
      : // if one selected node is not Text Node
        changeUiMode("NoText")
    : //  Selection includes multiple nodes
      changeUiMode("Group");
};

export default onSelectionChange;
