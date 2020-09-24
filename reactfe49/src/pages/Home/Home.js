import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { layDanhSachPhimApiAction } from "../../redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
function Home(props) {
  // Dùng useSelector thay cho mapStateToProps lấy danh sách từ reducer về
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  //Dùng useDispatch thay thế cho this.props.dispatch bên react component
  const dispatch = useDispatch();
  // const [danhSachPhim, setDanhSachPhim] = useState([]);
  // useEffect(() => {
  //   axios({
  //     url:
  //       "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
  //     method: "get",
  //   })
  //     .then((res) => {
  //       setDanhSachPhim(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []); // tham số thứ 2 của useEffect là mảng trống => ứng với componetnDidMount của reactjs lifecycle

  const getFilmApi = async () => {
    // let promise = await axios({
    //   url:
    //     "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
    //   method: "get",
    // });
    // //Lệnh await bắt buộc các lệnh phúa sau phải đợi đến khi hàm này thực thi xong thì mới làm tiếp
    // let { data } = promise;
    // setDanhSachPhim(data);
    dispatch(layDanhSachPhimApiAction());
  };
  const renderPhim = () => {
    return dsPhim.map((phim, index) => {
      return (
        <div className="card col-3" key={index}>
          <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">{phim.moTa}</p>
          </div>
          <NavLink className="btn btn-success" to={`/detail/${phim.maPhim}`}>
            Xem chi tiết
          </NavLink>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <button
        className="btn btn-danger"
        onClick={() => {
          getFilmApi();
        }}
      >
        Click
      </button>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
export default connect()(Home);
