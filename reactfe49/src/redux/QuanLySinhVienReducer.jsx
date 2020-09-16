/* eslint-disable default-case */
import { CAP_NHAT_SINH_VIEN, CHINH_SUA_SINH_VIEN, THEM_SINH_VIEN } from "./Types/QuanLySinhVienType";

const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: "Nguyễn Văn A", email: "nguyenvanA@gmail.com", soDienThoai: "0121412514" },
        { maSinhVien: 2, tenSinhVien: "Nguyễn Văn B", email: "nguyenvanB@gmail.com", soDienThoai: "0121411514" }
    ],
    sinhVienEdit: {
        maSinhVien: "", tenSinhVien: "", email: "", soDienThoai: ""
    }
}

export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.data]
            return { ...state }
        }
        case CHINH_SUA_SINH_VIEN: {
            state.sinhVienEdit = action.sinhVien
            return { ...state }
        }
        case CAP_NHAT_SINH_VIEN: {
            console.log(action.sinhVien);
            let mangSinhVienMoi = [...state.mangSinhVien]
            let index = mangSinhVienMoi.findIndex(sv => sv.maSinhVien === action.sinhVien.maSinhVien)
            if (index !== -1) {
                mangSinhVienMoi[index] = { ...action.sinhVien }
            }
            state.mangSinhVien = mangSinhVienMoi;
            return { ...state }
        }
    }
    return { ...state };
}