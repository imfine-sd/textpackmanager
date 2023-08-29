type Mode = "Page" | "Group" | "Text" | "NoText";

interface NavigateUi {
  type: "navigateUi";
  value: Mode;
}

interface TextData {
  characters: string;
  start: number;
  end: number;
  fontSize: number;
  fontName: FontName;
  fontWeight: number;
  fills: Paint[];
  id: string;
  name: string;
}

type EverySceneTextsData = {
  name: string;
  textDatas: TextData[];
};

type UpdateUiTarget = "allText" | "selectedGroup" | "selectedText";

interface UpdateAllText {
  target: "allText";
  data: EverySceneTextsData[];
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
