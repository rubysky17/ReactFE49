import React, { Component } from "react";

export default class DataBinding extends Component {
  // Thuộc tính
  product = {
    id: 1,
    name: "IphoneX",
    gia: 1000,
  };
  //Phương thức
  cardBootstrap = () => {
    return (
      <div className="card text-center">
        <img className="card-img-top" src="http://picsum.photos/200" alt />
        <div className="card-body">
          <h4 className="card-title">{this.product.name}</h4>
          <p className="card-text">{this.product.gia}</p>
        </div>
      </div>
    );
  };
  render() {
    //Binding data (Truyền dữ liệu)
    let title = "Front End 49";
    let photo = "http://picsum.photos/300/300";
    //Binding Function
    let rendering = () => {
      return <img src="http://picsum.photos/500/500" />;
    };
    return (
      <div>
        <h1 id="title">{title}</h1>
        <img src={photo} />
        <img src="./img/logo.png" />
        <div>{rendering()}</div>
        <div className="col-3">{this.cardBootstrap()}</div>
      </div>
    );
  }
}
