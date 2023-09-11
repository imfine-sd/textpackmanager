type Scene = SceneNode & ChildrenMixin;

type Mode = "Page" | "Group" | "Text" | "NoText";

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

type TextsNode = {
  id: string;
  name: string;
  textDatas: TextData[];
};

type UpdateUiTarget = "allText" | "selectedGroup" | "selectedText";

interface UpdateAllText {
  target: "allText";
  data: TextsNode[];
}

interface UpdateGroup {
  target: "selectedGroup";
  data: TextsNode;
}

interface UpdateText {
  target: "selectedText";
  data: TextNode;
}

type UpdateUiValue = UpdateAllText | UpdateGroup | UpdateText;

interface UpdateUi {
  type: "updateUi";
  value: UpdateUiValue;
}

type PluginMessage = UpdateUi;

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
