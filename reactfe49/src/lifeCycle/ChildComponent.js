import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor child");
    this.state = {};
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return currentState;
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
    // Nếu giá trị là false thì sẽ dừng render lại giá trị, còn true sẽ render chạy tiếp
  }
  render() {
    console.log("render Child");
    return <div></div>;
  }
  componentDidMount() {
    console.log("componentDidMount Child");
  }
  componentDidUpdate(propsCu, stateCu) {
    console.log("componentDidUpdate con");
  }
}
