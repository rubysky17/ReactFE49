import { THEM_SINH_VIEN } from '../Types/QuanLySInhVienType'

export const themSinhVienAction = (data) => {
    return {
        type: THEM_SINH_VIEN,
        data
    }
}