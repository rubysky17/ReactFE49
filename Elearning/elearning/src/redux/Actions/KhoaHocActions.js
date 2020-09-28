import {
  LAY_DANH_MUC_KHOA_HOC,
  LAY_DANH_SACH,
} from "../Constants/KhoaHocConstants";

import axios from "axios";

export const layDanhMucKhoaHocAction = () => {
  return async (dispatch) => {
    let { data } = await axios(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
    );
    dispatch({
      type: LAY_DANH_MUC_KHOA_HOC,
      danhMucKhoaHoc: data,
    });
  };
};

export const layDanhSachKhoaHocAction = () => {
  return async (dispatch) => {
    let { data } = await axios(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
    );
    console.log(data);
    dispatch({
      type: LAY_DANH_SACH,
      dsKhoaHoc: data,
    });
  };
};
