import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import onPluginMessage from "./api/plugin_listener";

onmessage = onPluginMessage;

ReactDOM.render(<App />, document.getElementById("root"));
