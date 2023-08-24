import React, { useRef } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./context";

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
