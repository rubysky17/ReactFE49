import { THEM_SINH_VIEN } from "./Types/QuanLySInhVienType"
const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: "Nguyễn Văn A", email: "nguyenvanA@gmail.com", soDienThoai: "0211512541" },
        { maSinhVien: 2, tenSinhVien: "Nguyễn Văn B", email: "nguyenvaB@gmail.com", soDienThoai: "01231654851" }
    ]
}
export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.data];
            return { ...state }
        }
    }
    return { ...state }
}