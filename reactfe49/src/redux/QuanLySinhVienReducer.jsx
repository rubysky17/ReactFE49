import { bindActionCreators } from "redux"
import { ONCHANGE_FORM } from "./Types/QuanLySinhVienType"
import { THEM_SINH_VIEN } from "./Types/QuanLySinhVienType"
import { XOA_SINH_VIEN } from "./Types/QuanLySinhVienType"
import { CHINH_SUA_SINH_VIEN } from "./Types/QuanLySinhVienType"

const initialState = {
    mangSinhVien: [{ maSinhVien: "1", tenSinhVien: "Nguyễn Văn A", email: "NguyenVanA@gmail.com", soDienThoai: "09251254125" },
    { maSinhVien: "2", tenSinhVien: "Nguyễn Văn B", email: "NguyenVanB@gmail.com", soDienThoai: "0935121478" },],
    values: {
        maSinhVien: "",
        tenSinhVien: "",
        email: "",
        soDienThoai: "",
    },
    errors: {
        maSinhVien: "",
        tenSinhVien: "",
        email: "",
        soDienThoai: ""
    },
    sinhVienEdit: {
        maSinhVien: "",
        tenSinhVien: "",
        email: "",
        soDienThoai: "",
    }
}

export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONCHANGE_FORM: {
            state.values = action.values
            state.errors = action.errors
            return { ...state }
        }
        case THEM_SINH_VIEN: {
            let mangSinhVienCapNhat = [...state.mangSinhVien]
            // let maSinhVien = parseInt()
            let index = mangSinhVienCapNhat.findIndex(sv => sv.maSinhVien === action.sinhVien.maSinhVien);
            console.log(index);
            if (index !== -1) {
                let sinhVienObject = {
                    maSinhVien: action.sinhVien.maSinhVien,
                    tenSinhVien: action.sinhVien.tenSinhVien,
                    email: action.sinhVien.email,
                    soDienThoai: action.sinhVien.soDienThoai
                }
                mangSinhVienCapNhat[index] = sinhVienObject
                state.mangSinhVien = mangSinhVienCapNhat
            }
            else {
                let sinhVienObject = {
                    maSinhVien: action.sinhVien.maSinhVien,
                    tenSinhVien: action.sinhVien.tenSinhVien,
                    email: action.sinhVien.email,
                    soDienThoai: action.sinhVien.soDienThoai
                }
                mangSinhVienCapNhat.push(sinhVienObject);
                state.mangSinhVien = mangSinhVienCapNhat
            }
            return { ...state }
        }
        case XOA_SINH_VIEN: {
            console.log(action.maSinhVien);
            let mangSinhVienCapNhat = [...state.mangSinhVien]
            let index = mangSinhVienCapNhat.findIndex(sv => sv.maSinhVien === action.maSinhVien)
            if (index !== -1) {
                mangSinhVienCapNhat.splice(index, 1)
            }
            state.mangSinhVien = mangSinhVienCapNhat
            return { ...state }
        }
        case CHINH_SUA_SINH_VIEN: {
            state.sinhVienEdit = action.sinhVien
            state.values = state.sinhVienEdit
            return { ...state }
        }
        default:
            return { ...state }
    }
}
