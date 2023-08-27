import store from "../context";
import { setMode } from "../context/mode";

const { dispatch } = store;

function pluginMessageListener(pluginMessage: PluginMessage) {
  const { type, value } = pluginMessage;

  console.log(pluginMessage);

  switch (type) {
    case "navigateUi": {
      dispatch(setMode(value));
    }
    case "updateUi": {
    }
  }
}

/**
 * on event of plug-in message received
 * @param event MessageEvent
 */
const onPluginMessage = (event: MessageEvent): void => {
  const {
    data: { pluginMessage },
  } = event;
  //handelr message
  pluginMessageListener(pluginMessage);
};

export default onPluginMessage;
