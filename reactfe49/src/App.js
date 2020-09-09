import React from "react";
import "./App.css";
import BTGH from "./BaiTapRedux/BaiTapGioHangRedux/BTGH";
import ModalRedux from "./BaiTapRedux/BaiTapGioHangRedux/ModalRedux";
import BaiTapTaiXiu from "./BaiTapRedux/BaiTapTaiXiu/BaiTapTaiXiu";

function App() {
  return (
    <div className="App">
      {/* <BTGH />
      <ModalRedux /> */}
      <BaiTapTaiXiu />
    </div>
  );
}

export default App;
