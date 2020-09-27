import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Ant design
import "antd/dist/antd.css";
// import { DatePicker } from "antd";
import "./index.css";

//-----------------------------Redux----------------------------------
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
