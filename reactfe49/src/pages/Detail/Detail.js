import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietPhimAction } from "../../redux/actions/QuanLyPhimAction";

export default function Detail(props) {
  //Kết nối với reducer lấy dữ liệu phim thông qua useSelector
  let chiTietPhim = useSelector((state) => state.QuanLyPhimReducer.chiTietPhim);
  console.log(chiTietPhim);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietPhimAction(props.match.params.id));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} />
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}
