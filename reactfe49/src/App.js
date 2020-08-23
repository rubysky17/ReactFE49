import React from "react";
import "./App.css";
import Styling from "./StylingComponent/Styling";
import RenderWithState from "./RenderWithState/RenderWithState";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";

function App() {
  return (
    <div className="App">
      {/* <Styling /> */}
      {/* <RenderWithState /> */}
      {/* <BaiTapChonXe /> */}
      <RenderWithMap />
    </div>
  );
}
export default App;
