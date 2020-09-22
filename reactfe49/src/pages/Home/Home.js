import React, { useEffect, useState } from "react";
import axios from "axios";
// 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
export default function Home() {
  const [danhSachPhim, setDanhSachPhim] = useState([]);
  function getAPI() {
    async function layAPI() {
      const reqUrl =
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02";
      const res = await axios.get(reqUrl);
      let { data } = res;
      setDanhSachPhim(data);
    }
    layAPI();
  }

  const renderPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <div className="card col-4" key={index}>
          <img className="card-img-top" src={phim.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{phim.title}</h4>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <button className="btn btn-success" onClick={() => getAPI()}>
        Click để lấy danh sách phim
      </button>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
