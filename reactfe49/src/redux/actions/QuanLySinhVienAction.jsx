import { ONCHANGE_FORM } from "../Types/QuanLySinhVienType";
import { THEM_SINH_VIEN } from "../Types/QuanLySinhVienType"
import { XOA_SINH_VIEN } from "../Types/QuanLySinhVienType"
import { CHINH_SUA_SINH_VIEN } from "../Types/QuanLySinhVienType"
export const onChangeAction = (values, errors) => ({
    type: ONCHANGE_FORM,
    values,
    errors
})
export const themSinhVienAction = (sinhVien) => ({
    type: THEM_SINH_VIEN,
    sinhVien
})
export const xoaSinhVienAction = (maSinhVien) => ({
    type: XOA_SINH_VIEN,
    maSinhVien
})
export const chinhSuaSinhVienAction = (sinhVien) => ({
    type: CHINH_SUA_SINH_VIEN,
    sinhVien
})

