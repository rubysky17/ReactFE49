import React from "react";
import Login from "../pages/Login/Login";
import ModalHOC from "./ModalHOC";

export default function DemoHOC() {
  return (
    //Children dùng để truyền giá trị từ cha sang con thông qua phần inner HTML của thẻ component (thường dùng để truyền giao diện)
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#modelId"
      >
        Open Login
      </button>
      <ModalHOC Component={Login} />
    </div>
  );
}
