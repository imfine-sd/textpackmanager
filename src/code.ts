import useNavigator from "./router";
import onUImessage from "./api/listener";

function main() {
  const navigator = useNavigator();

  //initialize==================================================================
  navigator.init();
}

figma.ui.onmessage = onUImessage;

main();
