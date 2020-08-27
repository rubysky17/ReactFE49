import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  //This.props là thuộc tính có sẵn của component, lưu ý: Dùng để nhận giá trị từ compopnent cha truyền vào, và không thay dổi được giá trị
  render() {
    let { sinhVien } = this.props;
    return (
      <div>
        <img src={sinhVien.hinhAnh} />
        <p>Họ tên: {sinhVien.hoTen}</p>
        <p>Lớp: {sinhVien.lop}</p>
      </div>
    );
  }
}
