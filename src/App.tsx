import React from "react";
import { Provider } from "react-redux";
import store from "./context";
import MainUI from "./MainUI";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <MainUI />
    </Provider>
  );
}

export default App;
