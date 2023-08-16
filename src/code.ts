import useNavigator from "./router";

function main() {
  const navigator = useNavigator();

  //initialize==================================================================
  navigator.init();

  figma.ui.postMessage("aaa");
}

figma.ui.onmessage = (message) => {
  console.log(message);
};

main();
