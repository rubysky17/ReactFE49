import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {
    sinhVien = {
        hoTen: "Mạnh Đạt",
        hinhAnh: "https://api.adorable.io/avatars/152/song",
        lop: "FE49",
    }
    render() {
        return (
            <div>
                <ThongTinSinhVien sinhVien={this.sinhVien} />
            </div>
        )
    }
}
