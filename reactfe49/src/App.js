import React from "react";
import "./App.css";
import BTGH from "./BaiTapRedux/BaiTapGioHangRedux/BTGH";
import ModalRedux from "./BaiTapRedux/BaiTapGioHangRedux/ModalRedux";
import BaiTapTaiXiu from "./BaiTapRedux/BaiTapTaiXiu/BaiTapTaiXiu";
import OanTuTi from "./BaiTapRedux/BaiTapOanTuTi/OanTuTi";

function App() {
  return (
    <div className="App">
      {/* <BTGH />
      <ModalRedux /> */}
      {/* <BaiTapTaiXiu /> */}
      <OanTuTi />
    </div>
  );
}

export default App;
