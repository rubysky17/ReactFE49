import React from "react";
import "./App.css";
import Styling from "./StylingComponent/Styling";
import RenderWithState from "./RenderWithState/RenderWithState";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import RenderPhim from "./BaiTapRenderPhim/RenderPhim";
import DemoProps from "./DemoProps/DemoProps";
import QuanLySanPham from "./BaiTapQuanLySanPham/QuanLySanPham";

function App() {
  // let mangSanPham = [
  //   {
  //     maSP: 1,
  //     tenSP: "Black Berry",
  //     hinhAnh: "./img/sp_blackberry.png",
  //     gia: 1000,
  //   },
  //   { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
  //   { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
  //   { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  // ];
  return (
    <div className="App">
      {/* <Styling /> */}
      {/* <RenderWithState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <RenderPhim /> */}
      {/* <DemoProps /> */}
      <QuanLySanPham />
    </div>
  );
}
export default App;
