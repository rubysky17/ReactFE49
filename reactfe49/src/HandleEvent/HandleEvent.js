import React, { Component } from "react";

export default class HandleEvent extends Component {
  HandleClick = () => {
    alert("Hello");
  };
  showName = (name) => {
    alert(`Tên: ${name}`);
  };
  render() {
    return (
      <div className="container">
        {/* Cách 1 Truyền callback function */}
        <button onClick={this.HandleClick}>Click here</button>
        <br />
        <button onClick={this.showName.bind(this, "Đạt")}>show Info 1</button>
        {/* Cách 2 truyền function nặc danh ( dùng arrow Function )*/}
        <button
          onClick={() => {
            alert("Hello Các bạn!");
            // Click vào nhiều hàm thực hiện
            this.HandleClick();
          }}
        >
          Show message
        </button>
        <br />
        <button
          onClick={() => {
            this.showName("Mẫn");
          }}
        >
          Show Info
        </button>
        <br />
      </div>
    );
  }
}
