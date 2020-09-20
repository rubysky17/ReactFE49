import Axios from "axios";
import React, { useState } from "react";
import axios from "axios";

export const Home = (props) => {
  let { match, history, location } = props;
  const [dsPhim, setDsPhim] = useState([]);
  // function getPhim() {
  //   axios({
  //     url:
  //       "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
  //     method: "get",
  //   })
  //     .then((res) => {
  //       console.log("kết quả", res.data);
  //       setDsPhim(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }
  async function getPhim() {
    const reqUrl =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02";
    const res = await axios.get(reqUrl);
    console.log(res);
    setDsPhim(res.data);
  }
  function renderPhim() {
    return dsPhim.map((phim) => {
      return (
        <div className="card text-white bg-primary col-4">
          <img className="card-img-top" src={phim.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container">
      <button
        className="btn btn-success"
        onClick={() => {
          getPhim();
        }}
      >
        Lấy danh sách phim
      </button>
      <h3>Danh sách phim</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
};
