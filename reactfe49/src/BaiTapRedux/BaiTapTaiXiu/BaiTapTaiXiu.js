import React, { Component } from "react";
import XucXac from "./Components/XucXac";
import KetQua from "./Components/KetQua";
import "./styleGame/styleGame.css";

export default class BaiTapTaiXiu extends Component {
  render() {
    return (
      <div className="gameXucXac">
        <h1 className="text-center pt-2 text-warning">Game xúc xắc</h1>
        <XucXac />
        <KetQua />
      </div>
    );
  }
}
