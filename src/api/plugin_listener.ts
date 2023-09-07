import store from "../context";
import { setQueriedTexts } from "../context/queriedTexts";
import { setMode } from "../context/mode";
import { setSelectedGroup } from "../context/selectedGroup";
import { setSelectedText } from "../context/selectedText";

const { dispatch } = store;

function pluginMessageListener(pluginMessage: PluginMessage) {
  const { type, value } = pluginMessage;
  switch (type) {
    case "navigateUi":
      dispatch(setMode(value));
      break;

    case "updateUi":
      const { target, data } = value;
      switch (target) {
        case "allText":
          dispatch(setQueriedTexts(data));
          break;

        case "selectedGroup":
          dispatch(setSelectedGroup(data));
          break;

        case "selectedText":
          dispatch(setSelectedText(data));
          break;
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
