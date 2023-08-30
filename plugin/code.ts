import onUimessage from "./api/ui_listener";
import onSelectionChange from "./handlers/onSelectionChange";

// SHOW UI
figma.showUI(__html__, { themeColors: true, width: 500 });

// Skip over invisible nodes and their descendants inside instances
// for faster performance.
figma.skipInvisibleInstanceChildren = true;

//LISTENERS
figma.ui.onmessage = onUimessage;
figma.on("run", () => {
  onSelectionChange();
});
figma.on("selectionchange", onSelectionChange);
