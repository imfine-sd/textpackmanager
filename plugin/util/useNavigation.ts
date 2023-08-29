type Page = "page" | "frame";

function navigate(page: Page) {
  const path = __uiFiles__[page];
  figma.showUI(path, { themeColors: true });
}

function useNavigator() {
  const onSelectionChange = () => {
    const selection = figma.currentPage.selection;
    if (selection.length > 0) {
      navigate("frame");
    } else {
      navigate("page");
    }
  };

  // const onCurrentPageChange = () => {
  //   const selection = figma.currentPage.selection;
  //   if (selection.length > 0) {
  //     navigate("frame");
  //   } else {
  //     navigate("page");
  //   }
  // };
  return {
    init: () => {
      onSelectionChange();
      figma.on("selectionchange", onSelectionChange);
    },
  };
}

export default useNavigator;
