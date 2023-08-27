function toUi(message: PluginMessage) {
  figma.ui.postMessage(message);
}

export function changeUiMode(value: Mode) {
  const message: NavigateUi = { type: "navigateUi", value };
  toUi(message);
}

export function updateUi(targetId: string, value: string) {
  const message: UpdateUi = { type: "updateUi", targetId, value };
  toUi(message);
}
