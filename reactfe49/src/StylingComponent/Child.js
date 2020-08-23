import React, { Component } from "react";
import "./Styling.scss";
import style from "./Styling.module.scss";
export default class Child extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            borderColor: "red",
            backgroundColor: "blue",
            fontSize: "50px",
            color: "white",
          }}
        >
          Hello Cybersoft
        </p>
        <div className={`${style.content}`}>
          <p className={`${style.text}`}>text</p>
          <h1>child</h1>
        </div>
      </div>
    );
  }
}
