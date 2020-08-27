import React, { Component } from "react";

export default class RenderSanPham extends Component {
  render() {
    let { sanPham, renderChiTiet } = this.props;
    return (
      <div className="card col-4 my-5 py-3">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          style={{ height: "300px" }}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success col-4"
            onClick={() => renderChiTiet(sanPham)}
          >
            Thông tin
          </button>
        </div>
      </div>
    );
  }
}
