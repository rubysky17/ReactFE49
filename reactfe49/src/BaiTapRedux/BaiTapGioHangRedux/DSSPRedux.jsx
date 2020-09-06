import React, { Component } from 'react';
import { connect } from "react-redux"

class DSSPRedux extends Component {
    render() {
        const { sp } = this.props
        return (
            <div className="card col-4">
                <img className="card-img-top" src={sp.hinhAnh} alt={sp.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        this.props.themGioHang(sp)
                    }}>Thêm sản phẩm</button>
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            let sanPhamMoi = { maSP: sanPham.maSP, tenSP: sanPham.tenSP, giaBan: sanPham.giaBan, hinhAnh: sanPham.hinhAnh, soLuong: 1 }
            dispatch({
                type: "THEM_GIO_HANG",
                sanPhamMoi: sanPhamMoi
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(DSSPRedux)
