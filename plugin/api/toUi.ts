function toUi(message: PluginMessage) {
  figma.ui.postMessage(message);
}

export function changeUiMode(value: Mode) {
  const message: NavigateUi = { type: "navigateUi", value };
  toUi(message);
}

export function updateUi(value: UpdateUiValue) {
  const message: UpdateUi = {
    type: "updateUi",
    value,
  };
  toUi(message);
}
