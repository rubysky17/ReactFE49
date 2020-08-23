import React, { Component } from "react";

export default class RenderWithState extends Component {
  //Phương thức khởi tạo
  constructor() {
    super();
    //Quản lý những giá trị thay đổi
    this.state = {
      //Thuộc tính
      login: false,
      userName: "Đạt",
    };
  }
  //   login = false;
  //   userName = "Đạt";
  //Hàm handle login sẽ thay đổi giá trị của các thuộc tính nhưng giao diện render không tải lại giao diện, vì vậy những gì viết trong hàm này sẽ không được render lại
  //   handleLogin = () => {
  //     this.state.login = true;
  //     console.log(this.state.login);
  //   };

  loginStatus = () => {
    if (this.state.login) {
      return <p>Hello {this.state.userName}</p>;
    } else {
      return (
        <button className="btn btn-outline-success" onClick={this.handleLogin}>
          Đăng nhập
        </button>
      );
    }
  };

  //Phương thức render()
  render() {
    return (
      <div>
        {/* {this.login ? (
          <p>Hello {this.userName}</p>
        ) : (
          <div>
            <button className="btn btn-success">Đăng nhập</button>
          </div>
        )} */}
        {this.loginStatus()}
      </div>
    );
  }
  handleLogin = () => {
    this.setState({
      login: true,
    });
    //Hàm setState là phương thức bất đồng bộ
  };
}
