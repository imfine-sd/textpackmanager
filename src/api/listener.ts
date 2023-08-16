interface IframeData {
  method: string;
  param: string;
  node?: SceneNode;
}

const onUImessage: MessageEventHandler = (pluginMessage): void => {
  const data: IframeData = JSON.parse(pluginMessage);
  console.log(data);
};

export default onUImessage;
