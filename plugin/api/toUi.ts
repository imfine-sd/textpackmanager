function toUi(message: PluginMessage) {
  figma.ui.postMessage(message);
}

export function updateUi(value: UpdateUiValue) {
  const message: UpdateUi = {
    type: "updateUi",
    value,
  };
  toUi(message);
}
