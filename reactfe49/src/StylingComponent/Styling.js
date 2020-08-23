import React, { Component } from "react";
import Child from "./Child";

export default class styling extends Component {
  render() {
    return (
      <div>
        <h1 className="title">abc</h1>
        <Child />
      </div>
    );
  }
}
