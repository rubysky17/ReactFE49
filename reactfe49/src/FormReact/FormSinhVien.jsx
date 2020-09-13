import React, { Component } from 'react'
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { themSinhVienAction } from "../redux/actions/QuanLySinhVienAction"


class FormSinhVien extends Component {
    state = {
        values: {
            maSinhVien: "",
            tenSinhVien: "",
            soDienThoai: "",
            email: "",
        },
        errors: {
            maSinhVien: "",
            tenSinhVien: "",
            soDienThoai: "",
            email: "",
        }

    };
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let type = target.getAttribute("type_")
        const newValues = { ...this.state.values, [name]: value }
        const newError = { ...this.state.errors, [name]: value.trim() === "" ? `${name} không được bỏ trống` : "" }

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (type === "email") {
            if (!regexEmail.test(value)) {
                newError[name] = "Email không hợp lệ!"
            }
        }
        this.setState({
            values: newValues,
            errors: newError
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        const action = themSinhVienAction(this.state.values)
        Swal.fire({
            text: 'Thành công',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'OK',
        })
        //validate
        let valid = true;
        for (let key in this.state.values) {
            if (this.state.values[key].trim() === "") {
                valid = false
            }
        }
        for (let key in this.state.errors) {
            if (this.state.errors[key].trim() !== "") {
                valid = false
            }
        }

        if (!valid) {
            Swal.fire({
                text: 'Vui lòng nhập đầy đủ thông tin',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'OK',
            })
            return;
        }
        //Dùng props.dispatch có sãng khi liên kết với redux sẽ có props này => dispatch action lên reducer
        this.props.dispatch(action)
    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.onSubmit} >
                <div className="card text-left">
                    <div className="card-header">
                        Thông tin sinh viên
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã sinh viên</p>
                                    <input type_="maSinhVien" className="form-control" name="maSinhVien" onChange={
                                        this.onChange
                                    } />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={
                                        this.onChange
                                    } />
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type_="email" className="form-control" name="email" onChange={
                                        this.onChange
                                    } />
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input type_="phone" className="form-control" name="soDienThoai" onChange={
                                        this.onChange
                                    } />
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-right">
                                <button className="btn btn-success" type="submit">Xác nhận</button>
                                <button className="btn btn-warning ml-2">Chỉnh sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
// const mapDispatchToState = (dispatch) => {
//     return {
//         themSinhVien: (sinhVien) => {
//             dispatch({
//                 type: "THEM_SINH_VIEN",
//                 sinhVien
//             })
//         }
//     }
// }
export default connect(null)(FormSinhVien)