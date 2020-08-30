import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { gioHang, xoaGioHang, tangGiamSoLuong, thanhTien } = this.props
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: "1000px", left: "-30%" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Mã SP</td>
                                        <td>Tên SP</td>
                                        <td>Hình ảnh</td>
                                        <td>Số lượng</td>
                                        <td>Đơn giá</td>
                                        <td>Thành tiền</td>

                                    </tr>

                                </thead>
                                <tbody>
                                    {gioHang.map((sp, index) => {
                                        return (<tr key={index}>
                                            <td>{sp.maSP}</td>
                                            <td>{sp.tenSP}</td>
                                            <td>
                                                <img src={sp.hinhAnh} alt={sp.hinhAnh} style={{ width: "80px" }} />
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={
                                                    () => {
                                                        tangGiamSoLuong(sp.maSP, true)
                                                    }
                                                }>+</button>
                                                {sp.soLuong}
                                                <button className="btn btn-danger" onClick={
                                                    () => {
                                                        tangGiamSoLuong(sp.maSP, false)
                                                    }
                                                }>-</button>
                                            </td>
                                            <td>{sp.giaBan.toLocaleString()}</td>
                                            <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => {
                                                    xoaGioHang(sp.maSP)
                                                }}>xóa</button>
                                            </td>
                                        </tr>)
                                    })}
                                </tbody>
                                <tfoot>
                                    <td colSpan="5">
                                        <td className="text-right">Tổng tiền:</td>
                                    </td>
                                    <td colSpan="5">
                                        <td className="text-right">{thanhTien().toLocaleString()}</td>
                                    </td>

                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
