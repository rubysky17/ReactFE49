import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
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
  render() {
    let { SanPhamChiTiet } = this.state;
    return (
      <div className="container">
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
