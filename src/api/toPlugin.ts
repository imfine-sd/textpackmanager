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

type Message = GetTextData | ImportFile | ExportFile | SelectNode | ChangeNode;

function toPlugin(message: Message) {
  parent.postMessage({ pluginMessage: message }, "*");
}

export default toPlugin;
