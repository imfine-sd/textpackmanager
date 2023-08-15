const page = {
  ...__uiFiles__,
};

figma.showUI(page.main);

figma.ui.onmessage = (message) => {
  const newText = figma.createText();
  newText.fontName = { family: "Inconsolata", style: "normal" };
  newText.characters = message;
};
