import { THEM_SINH_VIEN } from '../Types/QuanLySinhVienType';
import { CHINH_SUA_SINH_VIEN } from "../Types/QuanLySinhVienType";
import { CAP_NHAT_SINH_VIEN } from "../Types/QuanLySinhVienType";
export const themSinhVienAction = (data) => {
    return {
        type: THEM_SINH_VIEN,
        data
    }
}
export const chinhSuaSinhVienAction = (sinhVien) => {
    return {
        type: CHINH_SUA_SINH_VIEN,
        sinhVien
    }
}
export const capNhatSinhVienAction = (sinhVien) => {
    return {
        type: CAP_NHAT_SINH_VIEN,
        sinhVien
    }
}
// export const actionName = (payload) => ({
//     type: type,
//     payload
// })
