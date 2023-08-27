import React, { useRef } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./context";
import Home from "./router/Home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
