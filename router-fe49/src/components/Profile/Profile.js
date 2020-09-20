import React from "react";
import { Redirect } from "react-router-dom";

export const Profile = (props) => {
  if (localStorage.getItem("userLogin")) {
    return <div className="display-4">Hello, user</div>;
  } else {
    alert("Đăng nhập để vào trang đăng nhập");
    return <Redirect to="/login" />;
  }
};
