const showUIoptions: ShowUIOptions = {
  title: "Text Pack Manager",
  themeColors: true,
};
figma.showUI(__html__, showUIoptions);

// This monitors the selection changes and posts the selection to the UI
figma.on("selectionchange", () => {
  figma.ui.postMessage(figma.currentPage.selection);
});
