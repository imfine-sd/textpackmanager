interface UpdateUi {
  type: "updateUI";
  targetId: string;
  value: string;
}

type PluginMessage = UpdateUi;

function pluginMessageListener(pluginMessage: PluginMessage) {
  const { type, value } = pluginMessage;

  console.log(pluginMessage);

  switch (type) {
    case "updateUI": {
    }
  }
}

const onPluginMessage: MessageEventHandler = (pluginMessage): void => {
  const pluginData: PluginMessage = JSON.parse(pluginMessage);
  pluginMessageListener(pluginData);
};

export default onPluginMessage;
