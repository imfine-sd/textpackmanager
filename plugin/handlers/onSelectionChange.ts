import { navigateUI } from "../api/toUi";

const onSelectionChange = () => {
  const selection = figma.currentPage.selection;
  if (selection.length > 0) {
    navigateUI("selection");
  } else {
    navigateUI("page");
  }
};

export default onSelectionChange;
