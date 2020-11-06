import axios from "axios";
import { DOMAIN, USER_LOGIN } from "../../ultity/ConfigWeb";
import { LAY_DANH_SACH_GHE } from "../constants/QuanLyPhongVeConstant";

export const layDanhSachGheApiAction = (maLichChieu) => {
  return (dispatch) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: LAY_DANH_SACH_GHE,
          danhSachGhe: res.data.danhSachGhe,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export const datVeApiAction = (maLichChieu, danhSachVe) => {
  return (dispatch) => {
    const { taiKhoan, accessToken } = JSON.parse(
      localStorage.getItem(USER_LOGIN)
    );
    axios({
      url: DOMAIN + "/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
