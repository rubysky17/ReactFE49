import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { SanPhamChiTiet } = this.props;
    return (
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
    );
  }
}
