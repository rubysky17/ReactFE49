import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    img: "./img/black-car.jpg",
  };
  handleChange = (color) => {
    this.setState({
      img: `./img/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1>Product</h1>
            <img src={this.state.img} style={{ width: "100%" }} />
          </div>
          <div className="col-5">
            <h1>Color</h1>
            <div
              className="card"
              onClick={this.handleChange.bind(this, "black")}
            >
              <div className="row p-2">
                <div className="col-3">
                  <img
                    src="./img/icon-black.jpg"
                    className="card-img-top"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-9 text-left">
                  <p className="my-0">Black</p>
                  <p className="my-0">Pearl</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                this.handleChange("silver");
              }}
            >
              <div className="row p-2">
                <div className="col-3">
                  <img
                    src="./img/icon-silver.jpg"
                    className="card-img-top"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-9 text-left">
                  <p className="my-0">Silver</p>
                  <p className="my-0">Pearl</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                this.handleChange("red");
              }}
            >
              <div className="row p-2">
                <div className="col-3">
                  <img
                    src="./img/icon-red.jpg"
                    className="card-img-top"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-9 text-left">
                  <p className="my-0">Red</p>
                  <p className="my-0">Pearl</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                this.handleChange("steel");
              }}
            >
              <div className="row p-2">
                <div className="col-3">
                  <img
                    src="./img/icon-steel.jpg"
                    className="card-img-top"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-9 text-left">
                  <p className="my-0">Steel</p>
                  <p className="my-0">Pearl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Các bước thực hiện 1 task:
// - xây dựng giao diện
// - Xác định nguồn lưu trự dữ liệu làm thay đổi giao diện ( xác định state ). Tổ chức lưu trữ
// - Thực hiện xử lý chức năng
