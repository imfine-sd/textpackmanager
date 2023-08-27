import onUimessage from "./api/ui_listener";
import onSelectionChange from "./handlers/onSelectionChange";

figma.showUI(__html__, { themeColors: true, width: 500, height: 500 });

figma.ui.onmessage = onUimessage;
figma.on("selectionchange", onSelectionChange);

// if (msg.type === "create-rectangles") {
//   const nodes = [];

//   for (let i = 0; i < msg.count; i++) {
//     const rect = figma.createRectangle();
//     rect.x = i * 150;
//     rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
//     figma.currentPage.appendChild(rect);
//     nodes.push(rect);
//   }

//   figma.currentPage.selection = nodes;
//   figma.viewport.scrollAndZoomIntoView(nodes);
// }

// figma.closePlugin();
