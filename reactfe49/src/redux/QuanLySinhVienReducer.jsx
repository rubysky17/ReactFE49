import { THEM_SINH_VIEN } from "./types/QuanLySinhVienTypes"
const initialState = {
    mangSinhVien: []
}
export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien]
            return { ...state }
        }
        default:
            return state
    }
}
