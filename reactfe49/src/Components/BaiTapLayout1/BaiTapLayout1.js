import React, { Component } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import Footer from "./Footer";

export default class BaiTapLayout1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-3 text-center px-0">
            <SideBar />
          </div>
          <div className="col-9 px-0">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
