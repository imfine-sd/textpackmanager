import useNavigator from "./router";
import onUImessage from "./api/listener";

function main() {
  const navigator = useNavigator();

  //initialize==================================================================
  function initialize() {
    navigator.init();
  }

  return initialize();
}

// retrive message from uimessage
figma.ui.onmessage = onUImessage;

main();
