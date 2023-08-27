function toPlugin(message: UiMessage) {
  parent.postMessage({ pluginMessage: message }, "*");
}

export default toPlugin;
