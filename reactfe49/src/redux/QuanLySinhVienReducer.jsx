import { THEM_SINH_VIEN } from "./types/QuanLySinhVienType";

const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: "Nguyễn Văn A", email: "nguyenvanA@gmail.com", soDienThoai: "0121412514" },
        { maSinhVien: 2, tenSinhVien: "Nguyễn Văn B", email: "nguyenvanB@gmail.com", soDienThoai: "0121411514" }
    ]
}

export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.data]
            return { ...state }
        }
    }
    return { ...state };
}