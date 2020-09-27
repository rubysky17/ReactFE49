import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/Actions/QuanLyPhimActions";
import { NavLink } from "react-router-dom";

export default function Home() {
  //lấy API từ server render ra giao diện khi người dùng click nút
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  const dispatch = useDispatch();
  function getAPI() {
    dispatch(layDanhSachPhimAction());
  }
  return (
    <div className="container">
      <button className="btn btn-danger" onClick={() => getAPI()}>
        Hiển thị danh sách phim
      </button>
      <div className="row">
        {dsPhim.map((phim, index) => {
          return (
            <div className="card text-white bg-secondary col-4" key={index}>
              <img className="card-img-top" src={phim.hinhAnh} alt />
              <div className="card-body">
                <h4 className="card-title">{phim.tenPhim}</h4>
                <p className="card-text">{phim.moTa}</p>
              </div>
              <NavLink
                className="btn btn-success"
                to={`/detail/${phim.maPhim}`}
              >
                Xem chi tiết
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
