import React, { Component } from 'react';
import FormSInhVien from './FormSInhVien';
import { connect } from "react-redux"


class DanhSachSinhVien extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormSInhVien />
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.mangSinhVien.map((sinhVien, index) => {
                                return <tr key={index}>
                                    <td>{sinhVien.maSinhVien}</td>

                                    <td>{sinhVien.tenSinhVien}</td>

                                    <td>{sinhVien.soDienThoai}</td>

                                    <td>{sinhVien.email}</td>
                                    <td>
                                        <button className="btn btn-primary mr-2">Chỉnh sửa</button>
                                        <button className="btn btn-danger">Xóa</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)
