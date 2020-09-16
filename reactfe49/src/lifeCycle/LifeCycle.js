import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import Header from "./Header";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      sinhVien: {
        id: 1,
        name: "Nguyễn Văn A",
      },
      number: 1,
    };
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  render() {
    console.log("render cha");
    return (
      <div className="container">
        LifeCycle
        <h1>{this.state.sinhVien.name}</h1>
        <button
          onClick={() => {
            let sinhVien = { ...this.state.sinhVien };
            sinhVien.name = "Nguyễn Văn @";
            this.setState({
              sinhVien: sinhVien,
            });
          }}
        >
          Tăng giá trị
        </button>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Set number
        </button>
        <h1>{this.state.number}</h1>
        {this.state.number < 3 ? <Header sinhVien={this.state.sinhVien} /> : ""}
        <ChildComponent />
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount ");
  }
  componentDidUpdate(propsCu, stateCu) {
    console.log("componentDidUpdate cha");
  }
}
