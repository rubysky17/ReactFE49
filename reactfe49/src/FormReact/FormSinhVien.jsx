import React, { Component } from 'react';
import { connect } from "react-redux"

class FormSinhVien extends Component {
    render() {
        console.log(this.props.mangSinhVien);
        return (
            <div className="container-fluid">
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên Sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangSinhVien.map((sinhVien, index) => {
                            return <tr key={index}>
                                <td>{sinhVien.maSinhVien}</td>
                                <td>{sinhVien.tenSinhVien}</td>
                                <td>{sinhVien.email}</td>
                                <td>{sinhVien.soDienThoai}</td>
                                <td>
                                    <button className="btn btn-warning mr-3">Chỉnh sửa</button>
                                    <button className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(FormSinhVien)