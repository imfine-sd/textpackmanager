type Mode = "Page" | "Group" | "Text" | "NoText";

interface NavigateUi {
  type: "navigateUi";
  value: Mode;
}

type TextData = {
  name: string;
  textNodes: TextNode[];
  // textNodes: Pick<
  //   StyledTextSegment,
  //   | "characters"
  //   | "start"
  //   | "end"
  //   | "fontSize"
  //   | "fontName"
  //   | "fontWeight"
  //   | "fills"
  // >[];
};

type UpdateUiTarget = "allText" | "selectedGroup" | "selectedText";

interface UpdateAllText {
  target: "allText";
  data: TextData[];
}

interface UpdateGroup {
  target: "selectedGroup";
  data: TextData[];
}

interface UpdateText {
  target: "selectedText";
  data: TextData;
}

type UpdateUiValue = UpdateAllText | UpdateGroup | UpdateText;

interface UpdateUi {
  type: "updateUi";
  value: UpdateUiValue;
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
