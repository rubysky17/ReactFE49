import { LAY_DANH_SACH_PHIM } from "./constants/QuanLyPhimConstants"
import { LAY_CHI_TIET_PHIM } from "./constants/QuanLyPhimConstants"
const initialState = {
    dsPhim: [],
    chiTietPhim: {}
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM: {
            state.dsPhim = action.data
            return { ...state }
        }
        case LAY_CHI_TIET_PHIM: {
            state.chiTietPhim = action.chiTietPhim
            return { ...state }
        }
        default:
            break;
    }
    return { ...state }
}