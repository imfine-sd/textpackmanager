type Mode = "Page" | "Group" | "Text";

interface NavigateUi {
  type: "navigateUi";
  value: Mode;
}

interface UpdateUi {
  type: "updateUi";
  targetId: string;
  value: string;
}

type PluginMessage = NavigateUi | UpdateUi;

interface GetTextData {
  type: "getTextData";
  value: string;
}
interface ImportFile {
  type: "import";
  value: string;
}
interface ExportFile {
  type: "export";
  value: string;
}
interface SelectNode {
  type: "select";
  value: SceneNode;
}
interface ChangeNode {
  type: "change";
  value: SceneNode;
}

type UiMessage =
  | GetTextData
  | ImportFile
  | ExportFile
  | SelectNode
  | ChangeNode;
