import useTextMapper from "../text_mapper";

interface GetTextData {
  method: "getTextData";
  param: string;
}
interface ImportFile {
  method: "import";
  param: string;
}
interface ExportFile {
  method: "export";
  param: string;
}
interface SelectNode {
  method: "select";
  param: SceneNode;
}
interface ChangeNode {
  method: "change";
  param: SceneNode;
}

type PluginData =
  | GetTextData
  | ImportFile
  | ExportFile
  | SelectNode
  | ChangeNode;

function pluginDataHandler(data: PluginData) {
  const { method, param } = data;
  const textMapper = useTextMapper();

  console.log(data);

  switch (method) {
    case "getTextData": {
      textMapper.onGetTextData();
    }
    case "import": {
      //TODO : import xlsx or json
    }
    case "export": {
      //TODO : export xlsx or json
    }
    case "change": {
      //TODO : change node(param)
    }
    case "select": {
    }
  }
}

const onUImessage: MessageEventHandler = (pluginMessage): void => {
  const pluginData: PluginData = JSON.parse(pluginMessage);
  pluginDataHandler(pluginData);
};

export default onUImessage;
