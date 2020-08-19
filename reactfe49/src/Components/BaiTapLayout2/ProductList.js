import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <section id="smartphone" class="container-fluid pt-5 pb-5 bg-dark">
        <h1 class="text-white text-center">BEST SMARTPHONE</h1>
        <div class="row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    );
  }
}
