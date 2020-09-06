import React, { Component } from 'react';
import { connect } from "react-redux";

class ModalRedux extends Component {

    tinhTongTien = () => {
        return this.props.gioHang.reduce((tsl, sp, i) => {
            return tsl += ((sp.soLuong * sp.giaBan));
        }, 0)
    }

    renderGioHang = () => {

        return this.props.gioHang.map((sp, i) => {
            return (
                <tr key={i}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <img src={sp.hinhAnh} alt={sp.hinhAnh} width={70} />
                    </td>
                    <td>
                        <button className="btn btn-warning" onClick={() => {
                            this.props.tangGiamSoLuong(sp.maSP, true)
                        }}>+</button>
                        {sp.soLuong}
                        <button className="btn btn-warning" onClick={() => {
                            this.props.tangGiamSoLuong(sp.maSP, false)
                        }}>-</button>
                    </td>
                    <td>{sp.giaBan.toLocaleString()}</td>
                    <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
                    <td className="btn btn-danger" onClick={() => {
                        this.props.xoaGioHang(sp.maSP)
                    }}>Xóa</td>
                </tr>
            )
        })
    }
    render() {
        return (

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Mã SP</td>
                            <td>Tên SP</td>
                            <td>Hình Ảnh</td>
                            <td>Số lượng</td>
                            <td>Đơn giá</td>
                            <td>Giá Bán</td>
                            <td>Thành tiền</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">Tổng tiền</td>
                            <td className="text-primary" style={{ fontSize: "30px" }}>{this.tinhTongTien().toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
//Phương thức StateRedux => props của component (lấy dữ liệu từ state của redux về)
const mapStateToProps = (state) => { //State là rootReducer
    return { gioHang: state.gioHangReducer.gioHang }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            dispatch({
                type: "XOA_SAN_PHAM", maSP
            })
        },
        tangGiamSoLuong: (maSP, status) => {
            dispatch({
                type: "TANG_GIAM_SO_LUONG", maSP, status
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux)
