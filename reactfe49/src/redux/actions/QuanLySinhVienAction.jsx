import { THEM_SINH_VIEN } from '../types/QuanLySinhVienType';

export const themSinhVienAction = (data) => {
    return {
        type: THEM_SINH_VIEN,
        data
    }
} 