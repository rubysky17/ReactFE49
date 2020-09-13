import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import { connect } from "react-redux";

class DanhSachSinhVien extends Component {
  render() {
    console.log(this.props.mangSinhVien);
    return (
      <div className="container-fluid">
        <FormSinhVien />
        <table className="table">
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangSinhVien.map((sv, index) => {
              return (
                <tr key={index}>
                  <td>{sv.maSinhVien}</td>
                  <td>{sv.tenSinhVien}</td>
                  <td>{sv.email}</td>
                  <td>{sv.soDienThoai}</td>
                  <td>
                    <button className="btn btn-warning">Chỉnh sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps, null)(DanhSachSinhVien);
