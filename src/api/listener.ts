interface ImportData {
  method: "import";
  param: string;
}
interface ExportData {
  method: "export";
  param: string;
}
interface SelectData {
  method: "select";
  param: SceneNode;
}
interface ChangeData {
  method: "change";
  param: SceneNode;
}

type PluginData = ImportData | ExportData | SelectData | ChangeData;

function pluginDataHandler(data: PluginData) {
  const { method, param } = data;

  switch (method) {
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
