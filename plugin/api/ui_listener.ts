import useTextMapper from "../hooks/useTextMap";

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

type PluginData =
  | GetTextData
  | ImportFile
  | ExportFile
  | SelectNode
  | ChangeNode;

function uiMessageListener(data: PluginData) {
  const { type, value } = data;
  const textMapper = useTextMapper();

  console.log(data);

  switch (type) {
    case "getTextData": {
      textMapper.onGetTextData();
    }
    case "import": {
      //TODO : import xlsx or json
    }
    case "export": {
      //TODO : export xlsx or json
    }
    case "select": {
    }
    case "change": {
      //TODO : change node(param)
    }
  }
}

const onUImessage: MessageEventHandler = (pluginMessage): void => {
  const pluginData: PluginData = JSON.parse(pluginMessage);
  uiMessageListener(pluginData);
};

export default onUImessage;
