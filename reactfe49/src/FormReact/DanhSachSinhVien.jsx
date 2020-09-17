import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import { connect } from "react-redux"
import { chinhSuaSinhVienAction, xoaSinhVienAction } from '../redux/actions/QuanLySinhVienAction'

class DanhSachSinhVien extends Component {
    renderMangSinhVien = () => {
        return this.props.mangSinhVien.map((sinhVien, index) => {
            return <tr key={index}>
                <td>{sinhVien.maSinhVien}</td>
                <td>{sinhVien.tenSinhVien}</td>
                <td>{sinhVien.email}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>
                    <button className='btn btn-warning mr-3' onClick={() => {
                        let action = chinhSuaSinhVienAction(sinhVien)
                        this.props.dispatch(action)
                    }}>Chỉnh sửa</button>
                    <button className="btn btn-danger" onClick={() => {
                        let action = xoaSinhVienAction(sinhVien.maSinhVien);
                        this.props.dispatch(action)
                    }}>Xóa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <FormSinhVien />
                <div>
                    <table className="table">
                        <thead className=" bg-dark text-white">
                            <tr>
                                <td>Mã sinh viên</td>
                                <td>Tên sinh viên</td>
                                <td>Email</td>
                                <td>Số điện thoại</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderMangSinhVien()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)
