import React, { Component } from 'react'
import DSSP from './DSSP'
import Modal from './Modal'

export default class BTGH extends Component {
    state = {
        gioHang: []
    }
    MangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Ph? 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Ph? 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    //Phương thức thêm giỏ hàng
    themGioHang = (sanPham) => {
        // tạo ra đối tượng sản phẩm giỏ hàng từ sản phẩm được click
        let spGH = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            soLuong: 1,
            giaBan: sanPham.giaBan,
            hinhAnh: sanPham.hinhAnh
        }
        // Tạo ra mảng chứa các phần tử trong mảng giỏ hàng
        let gioHangUpdate = [...this.state.gioHang]
        let index = gioHangUpdate.findIndex(sp => sp.maSP === spGH.maSP)
        if (index !== -1) {
            // tìm thấy đã tồn tại sản phẩm trong giỏ hàng thì tăng số lượng giỏ hàng thêm 1
            gioHangUpdate[index].soLuong += 1;

        } else {
            //Nếu chưa tìm thấy sản phẩm trong giỏ hàng thì push sản phẩm đó vào mảng
            gioHangUpdate.push(spGH);
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }
    //Phương thức tính tổng số lượng
    tinhSoLuong = () => {
        return this.state.gioHang.reduce((soLuong, sp, index) => {
            return soLuong += sp.soLuong;
        }, 0)
    }
    //Xóa giỏ hàng
    xoaGioHang = (maSP) => {
        let gioHangUpdate = [...this.state.gioHang];
        // let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP)
        // if (index !== -1) {
        //     gioHangUpdate.splice(index, 1)
        // }
        this.setState({
            gioHang: gioHangUpdate.filter(sp => sp.maSP !== maSP)
        })
    }
    // Tăng giảm số lượng
    tangGiamSoLuong = (maSP, status) => {
        // tạo 1 mảng giỏ hàng mới
        let gioHangUpdate = [...this.state.gioHang]
        let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP)
        if (status) {
            gioHangUpdate[index].soLuong += 1;
        } else {
            if (gioHangUpdate[index].soLuong > 1) {
                gioHangUpdate[index].soLuong -= 1
            }
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }
    thanhTien = () => {
        let gioHangCapNhat = [...this.state.gioHang];
        return gioHangCapNhat.reduce((tongTien, sp, index) => {
            return tongTien += (sp.soLuong * sp.giaBan);
        }, 0)
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-warning display-4">
                    Bài tập giỏ hàng
                    </h3>
                <div className="gioHang">
                    <div className="text-right text-danger mb-5" data-toggle="modal" data-target="#modelId" style={{ cursor: "pointer", fontSize: "20px" }}>Giỏ hàng({this.tinhSoLuong()})</div>
                    <Modal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} thanhTien={this.thanhTien} />
                </div>
                <DSSP MangSanPham={this.MangSanPham} themGioHang={this.themGioHang} />
            </div>
        )
    }
}
