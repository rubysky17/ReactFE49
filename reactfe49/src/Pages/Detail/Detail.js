import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietPhimAction } from "../../redux/Actions/QuanLyPhimActions";
export default function Detail() {
  let { maPhim } = useParams();
  const chiTietPhim = useSelector(
    (state) => state.QuanLyPhimReducer.chiTietPhim
  );
  const dispatch = useDispatch();
  dispatch(layChiTietPhimAction(maPhim));
  return (
    <div>
      <div className="card text-white bg-primary col-4">
        <img className="card-img-top" src={chiTietPhim.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{chiTietPhim.tenPhim}</h4>
          <p className="card-text">{chiTietPhim.moTa}</p>
        </div>
      </div>
    </div>
  );
}
