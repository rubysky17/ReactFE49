import React, { Component } from "react";

export default class RenderWithMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList: [
        { id: 1, name: "iphone", price: 1000 },
        { id: 2, name: "Samsung galaxy Note 10", price: 700 },
        { id: 3, name: "HTC m10", price: 2000 },
        { id: 4, name: "Sony Xperia XZ10", price: 1500 },
      ],
    };
  }
  renderTable = () => {
    return this.state.ProductList.map((sp, index) => {
      return (
        <tr>
          <td>{sp.id}</td>
          <td>{sp.name}</td>
          <td>{sp.price}</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };

  renderProduct = () => {
    // let content = [];
    // for (let i = 0; i < this.ProductList.length; i++) {
    //   let product = this.ProductList[i];
    //   let cardContent = (
    //     <div className="card text-left col-3">
    //       <div className="card-body">
    //         <h4 className="card-title">{product.name}</h4>
    //         <p className="card-text">{product.price}</p>
    //       </div>
    //     </div>
    //   );
    //   content.push(cardContent);
    // }
    // return content;
    return this.state.ProductList.map((product, index) => {
      return (
        <div className="col-3">
          <div classname="card text-left" key={index}>
            <div classname="card-body">
              <img src="https://picsum.photos/200/200" />
              <h4 classname="card-title">{product.name}</h4>
              <p classname="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        {/* <div className="row">{this.renderProduct()}</div> */}
        <h3>Danh sách sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
