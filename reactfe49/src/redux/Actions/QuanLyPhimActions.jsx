import Axios from "axios"
import { LAY_DANH_SACH_PHIM, LAY_CHI_TIET_PHIM } from "../Constants/QuanLyPhimConstants";
import axios from "axios";

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        let { data } = await axios.get("http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02")
        dispatch({
            type: LAY_DANH_SACH_PHIM,
            dsPhim: data
        })
    }
}
export const layChiTietPhimAction = (maPhim) => {
    return async (dispatch) => {
        let { data } = await axios.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
        dispatch({
            type: LAY_CHI_TIET_PHIM,
            chiTietPhim: data
        })
    }
}