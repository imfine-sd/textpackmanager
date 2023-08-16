type Page = "page" | "frame";

function navigate(page: Page) {
  const path = __uiFiles__[page];
  figma.showUI(path, { themeColors: true });
}

function useNavigator() {
  const onCurrentPageChange = () => {
    const selection = figma.currentPage.selection;
    if (selection.length > 0) {
      navigate("frame");
    } else {
      navigate("page");
    }
  };
  return {
    init: () => {
      onCurrentPageChange();
      figma.on("currentpagechange", onCurrentPageChange);
    },
  };
}

export default useNavigator;
