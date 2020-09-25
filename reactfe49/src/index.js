import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//-----------------------------Redux----------------------------------
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/Reducer/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
