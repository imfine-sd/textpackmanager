function uiMessageListener(data: UiMessage) {
  const { type, value } = data;

  console.log(data);

  switch (type) {
    case "getTextData": {
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

const onUimessage: MessageEventHandler = (pluginMessage): void => {
  const pluginData: UiMessage = JSON.parse(pluginMessage);
  uiMessageListener(pluginData);
};

export default onUimessage;
