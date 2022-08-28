import React from "react";
import createRoot from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
/* import { BrowserRouter } from "react-router-dom"; */

createRoot.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
