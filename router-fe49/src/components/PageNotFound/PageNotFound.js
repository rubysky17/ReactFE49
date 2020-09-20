import React from "react";

export const PageNotFound = (props) => {
  return (
    <div>
      Không tìm thấy trang : {props.location.pathName}
      <button
        className="btn btn-success"
        onClick={() => {
          props.history.replace("/home");
        }}
      >
        Quay về trang chủ
      </button>
    </div>
  );
};
