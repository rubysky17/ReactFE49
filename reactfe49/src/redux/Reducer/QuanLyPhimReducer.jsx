import { LAY_DANH_SACH_PHIM, LAY_CHI_TIET_PHIM } from "../Constants/QuanLyPhimConstants"

const initialState = {
    dsPhim: [],
    chiTietPhim: {}
}
export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM: {
            state.dsPhim = action.dsPhim
            return { ...state }
        }
        case LAY_CHI_TIET_PHIM: {
            state.chiTietPhim = action.chiTietPhim
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}