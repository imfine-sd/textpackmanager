const { main, text_editor } = __uiFiles__;
const uiOptions = {
  themeColors: true,
};

function showUI(ui: string) {
  return figma.showUI(ui, uiOptions);
}

const runDevMode = () => {
  const isSelectionEmpty = figma.currentPage.selection.length === 0;
  //if no selection, show main html
  if (isSelectionEmpty) {
    showUI(main);
  } else {
    showUI(text_editor);
  }
};

function resetUI() {
  //Switch for editorType
  switch (figma.editorType) {
    case "dev":
      runDevMode();
      break;
    // case "figma": {
    //   break;
    // }
    // case "figjam": {
    //   break;
    // }
    default:
      showUI(main);
      break;
  }
}

export default resetUI;
