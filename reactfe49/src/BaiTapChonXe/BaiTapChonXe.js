import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  //state
  state = {
    img: "./img/black-car.jpg",
  };
  changeColor = (color) => {
    this.setState({
      img: `./img/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img src={this.state.img} width="500px" />
          </div>
          <div className="col-4">
            <div className="card text-left">
              <div className="card-header">Change Color</div>
              <div className="card-body">
                {/* //xe đen */}
                <div
                  className="row"
                  style={{ border: "1px solid #eee" }}
                  onClick={() => {
                    this.changeColor("black");
                  }}
                >
                  <div className="col-3">
                    <img src="./img/icon-black.jpg" style={{ width: "100%" }} />
                  </div>
                  <div className="col-9">
                    <p>Crytal black</p>
                    <p>Pearl</p>
                  </div>
                </div>
                {/* Xe đỏ */}
                <div
                  className="row"
                  style={{ border: "1px solid #eee", marginTop: "5px" }}
                  onClick={() => {
                    this.changeColor("red");
                  }}
                >
                  <div className="col-3">
                    <img src="./img/icon-red.jpg" style={{ width: "100%" }} />
                  </div>
                  <div className="col-9">
                    <p>Rallye Red</p>
                    <p>Metallic</p>
                  </div>
                </div>
                {/* Xe xám */}
                <div
                  className="row"
                  style={{ border: "1px solid #eee", marginTop: "5px" }}
                  onClick={() => {
                    this.changeColor("silver");
                  }}
                >
                  <div className="col-3">
                    <img
                      src="./img/icon-silver.jpg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-9">
                    <p>Lunar Silver</p>
                    <p>Metallic</p>
                  </div>
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
// - Xác định nguồn lưu trự dữ liệu làm thay đổi giao diện ( xác định state ). Tổ chứ lưu trự
// - Thực hiện xử lý chức năng
