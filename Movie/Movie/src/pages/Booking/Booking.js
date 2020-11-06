import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  datVeApiAction,
  layDanhSachGheApiAction,
} from "../../redux/actions/QuanLyPhongVeAction";
import { useDispatch, useSelector } from "react-redux";
export default function Booking(props) {
  let { maLichChieu } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachGheApiAction(maLichChieu));
  }, []);
  const { danhSachGhe } = useSelector((state) => state.QuanLyPhongVeReducer);
  console.log(danhSachGhe);
  const handleClassName = (ghe) => {
    if (ghe.daDat) {
      //đã đặt
      return "btn bg-dark text-white m-2";
    } else {
      if (ghe.dangChon) {
        //đang chọn
        return "btn bg-info text-white m-2";
      } else {
        //chưa đặt
        return "btn bg-dark text-white m-2";
      }
    }
  };
  const renderDanhSachGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      return (
        <button
          key={index}
          className={handleClassName(ghe)}
          disabled={ghe.daDat}
          onClick={() => {
            dispatch({
              type: "TOGGLE_GHE",
              ghe,
            });
          }}
        >
          {ghe.tenGhe}
        </button>
      );
    });
  };
  const handleBooking = () => {
    let gheDaChon = danhSachGhe.filter((ghe) => ghe.dangChon);
    // console.log(gheDaChon);
    gheDaChon = gheDaChon.map((ghe) => ({
      maGhe: ghe.maGhe,
      giaVe: ghe.giaVe,
    }));
    console.log(gheDaChon);
    // call API
    dispatch(datVeApiAction(maLichChieu, gheDaChon));
  };
  //Nếu có login thì cho phép đặt vé, không có thì chuyển hướng sang trang đăng nhập
  if (localStorage.getItem("userLogin")) {
    return (
      <div className="text-center">
        <h2>Danh sách ghế</h2>
        <div>{renderDanhSachGhe()}</div>
        <div>
          <button className="btn btn-success" onClick={handleBooking}>
            Đặt ghế
          </button>
        </div>
      </div>
    );
  }
  return <Redirect to="/login" />;
}
