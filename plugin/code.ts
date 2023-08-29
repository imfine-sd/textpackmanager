import onUimessage from "./api/ui_listener";
import onSelectionChange from "./handlers/onSelectionChange";

figma.showUI(__html__, { themeColors: true, width: 500, height: 500 });

figma.ui.onmessage = onUimessage;
figma.on("run", () => {
  onSelectionChange();
});
figma.on("selectionchange", onSelectionChange);
