import React, { Component } from "react";
import RenderSanPham from "./RenderSanPham";

export default class QuanLySanPham extends Component {
  state = {
    SanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  renderSanPham = () => {
    return this.mangSanPham.map((sp, index) => {
      return <RenderSanPham sanPham={sp} renderChiTiet={this.renderChiTiet} />;
    });
  };
  renderChiTiet = (sanPham) => {
    // console.log(sanPham);
    this.setState({
      SanPhamChiTiet: sanPham,
    });
  };

  render() {
    let { SanPhamChiTiet } = this.state;
    return (
      <div className="container">
        <h3 className="text-primary">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-4">
            <h3>{SanPhamChiTiet.tenSP}</h3>
            <img src={SanPhamChiTiet.hinhAnh} style={{ width: "200px" }} />
          </div>
          <div className="col-8">
            <h3>Thông tin sản phẩm</h3>
            <table className="table">
              <tr>
                <td>Màn hình</td>
                <td>{SanPhamChiTiet.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{SanPhamChiTiet.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera Trước</td>
                <td>{SanPhamChiTiet.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera Sau</td>
                <td>{SanPhamChiTiet.cameraSau}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{SanPhamChiTiet.ram}</td>
              </tr>
              <tr>
                <td>Rom</td>
                <td>{SanPhamChiTiet.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
