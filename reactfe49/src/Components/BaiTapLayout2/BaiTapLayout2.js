import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import SliderComponent from "./SliderComponent";
import ProductList from "./ProductList";
import Footer from "../BaiTapLayout2/Footer";

export default class BaiTapLayout2 extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <SliderComponent />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
