import React, { useState } from "react";

export const Login = (props) => {
  const [userLogin, setUserLogin] = useState({
    userName: "",
    passWord: "",
  });

  function login(e) {
    e.preventDefault();

    console.log(userLogin);
    if (
      userLogin.userName === "cybersoft" &&
      userLogin.passWord === "cybersoft"
    ) {
      //   props.history.goBack(); //Kiểm tra userName = cybersoft => chuyển về trang trước đó link đến trang này ngược lại báo lỗi
      //   props.history.push("/home"); //Chuyển hướng đến trang chỉ định => home
      props.history.replace("/home"); //Chuyển đổi thành route tương ứng
    } else {
      alert("login fail");
    }
  }

  function onHandleChange(e) {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  }

  return (
    <form className="container" onSubmit={login}>
      <h3>Login</h3>
      <div className="form-group">
        <p>UserName</p>
        <input
          className="form-control"
          type="text"
          name="userName"
          onChange={onHandleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          type="text"
          name="passWord"
          onChange={onHandleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Xac Nhan
        </button>
      </div>
    </form>
  );
};
