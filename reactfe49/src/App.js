import React from "react";
import "./App.css";
import BTGH from "./BaiTapRedux/BaiTapGioHangRedux/BTGH";
import ModalRedux from "./BaiTapRedux/BaiTapGioHangRedux/ModalRedux";

function App() {
  return (
    <div className="App">
      <BTGH />
      <ModalRedux />
    </div>
  );
}

export default App;
