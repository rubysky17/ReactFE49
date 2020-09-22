import React, { useState } from "react";

export default function Login(props) {
  const [state, setState] = useState({
    userLogin: {
      userName: "",
      passWord: "",
    },
  });
  const [userLogin, setUserLogin] = useState({
    userName: "",
    passWord: "",
  });
  function onHandleChange(e) {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  }
  function login(e) {
    e.preventDefault();
    // Kiểm tra xem userName, passWord có đúng là manhdat hay không nếu không đúng trả về trang trước đó và báo lỗi
    if (userLogin.userName === "manhdat" && userLogin.passWord === "123456") {
      props.history.push("/home"); //chuyển hướng đến trang (path) chỉ định => home
      //props.history.goBack();// Chuyển hướng đến trang trước đó
    } else {
      alert("Login Fail!");
    }
  }
  return (
    <form className="container" onSubmit={login}>
      <h3 className="display-4">Login Page</h3>
      <div className="form-group">
        <p>userName</p>
        <input
          name="userName"
          className="form-control"
          onChange={onHandleChange}
        />
      </div>
      <div className="form-group">
        <p>passWord</p>
        <input
          name="passWord"
          className="form-control"
          onChange={onHandleChange}
          type="password"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
