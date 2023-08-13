import onRun from "./handlers/interaction/onRun";
import onDocumentChange from "./handlers/interaction/onDocumentChange";
import onSelectionsChange from "./handlers/interaction/onSelectionChange";
import onCurrentPageChange from "./handlers/interaction/onCurrentPageChange";
import resetUI from "./interface/setUI";

resetUI();

figma.on("run", onRun);
figma.on("documentchange", onDocumentChange);
figma.on("selectionchange", onSelectionsChange);
figma.on("currentpagechange", onCurrentPageChange);
