
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const stateDefault = {
    gioHang: [{
        maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg", soLuong: 1
    }]
}
export const gioHangReducer = (state = stateDefault, action) => {
    const notify = () => toast("số lượng không nhỏ hơn 1");
    switch (action.type) {
        case "THEM_GIO_HANG": {
            let gioHangMoi = [...state.gioHang]
            let index = gioHangMoi.findIndex((sp) => sp.maSP === action.sanPhamMoi.maSP);
            if (index !== -1) {
                gioHangMoi[index].soLuong += 1;
            } else {
                gioHangMoi.push(action.sanPhamMoi);
            }
            state.gioHang = gioHangMoi;
            return { ...state };
        }
        case "XOA_SAN_PHAM": {
            let gioHangMoi = [...state.gioHang]
            let index = gioHangMoi.findIndex(sp => sp.maSP === action.maSP)
            if (index !== -1) {
                gioHangMoi.splice(index, 1)
            }
            state.gioHang = gioHangMoi
            return { ...state }
        }
        case "TANG_GIAM_SO_LUONG": {
            let gioHangMoi = [...state.gioHang]
            let index = gioHangMoi.findIndex(sp => sp.maSP === action.maSP)
            if (index !== -1) {
                if (action.status) {
                    gioHangMoi[index].soLuong += 1;
                } else {
                    if (gioHangMoi[index].soLuong > 1) {
                        gioHangMoi[index].soLuong -= 1;
                    } else {
                        alert('số lượng không nhỏ hơn 1');
                    }
                }
            }
            state.gioHang = gioHangMoi
            return { ...state }
        }


        default:
            return { ...state };
    }
}