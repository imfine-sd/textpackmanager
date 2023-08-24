type Route = "page" | "selection";

interface NavigateUI {
  type: "navigateUI";
  value: Route;
}

interface UpdateUI {
  type: "updateUI";
  target: string;
  value: string;
}

type PluginMessage = NavigateUI | UpdateUI;

function toUI(message: PluginMessage) {
  figma.ui.postMessage(message);
}

export function navigateUI(value: Route) {
  const message: NavigateUI = { type: "navigateUI", value };
  toUI(message);
}

export function updateUI(target: string, value: string) {
  const message: UpdateUI = { type: "updateUI", target, value };
  toUI(message);
}
