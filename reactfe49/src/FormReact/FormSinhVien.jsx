import React, { Component } from 'react';
import swal from 'sweetalert2';
import { themSinhVienAction } from "../redux/Actions/QuanLySinhVienAction";
import { connect } from "react-redux"

class FormSinhVien extends Component {
    state = {
        values: {
            maSinhVien: "",
            tenSinhVien: "",
            email: "",
            soDienThoai: ""
        },
        errors: {
            maSinhVien: "",
            tenSinhVien: "",
            email: "",
            soDienThoai: ""
        }
    }
    //Lưu ý: validate viết trong hàm submit và trước action submit, còn regex sẽ viết bên trong hàm onChange và trước setState

    handleChange = (event) => {
        let { name, value } = event.target;

        let newValues = { ...this.state.values, [name]: value }
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? "Không được bỏ trống" : "" }

        //Đây là Regex
        let type = event.target.getAttribute('type_');
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (type === "email") {
            if (!regexEmail.test(value)) {
                newErrors[name] = "Email không hợp lệ"
            }
        }
        let regexPhoneNumber = /^0(1\d{9}|9\d{8})$/;
        if (type === "phone") {
            if (!regexPhoneNumber.test(value)) {
                newErrors[name] = "Số điện thoại không hợp lệ !"
            }
        }

        this.setState({
            values: newValues,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Đây là validate
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
            swal.fire(
                'Thất bại',
                'Dữ liệu không hợp lệ !',
                'error'
            )
            return;
        }
        //Hàm thêm sinh viên
        const action = themSinhVienAction(this.state.values);
        this.props.dispatch(action);
        swal.fire(
            'Thành công',
            'Thêm sinh viên thành công !',
            'success'
        )
    }





    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleSubmit}>
                <div class="card">
                    <div className="card-header text-white bg-dark font-weight-bold">
                        <p>Thông tin sinh viên</p>
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className='form-group'>
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChange} />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className='form-group'>
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChange} />
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>



                            <div className="col-6">
                                <div className='form-group'>
                                    <p>Email</p>
                                    <input type_="email" className="form-control" name="email" onChange={this.handleChange} />
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className='form-group'>
                                    <p>Số điện thoại</p>
                                    <input className="form-control" type_="phone" name="soDienThoai" onChange={this.handleChange} />
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-right">
                                <button type='submit' className="btn btn-success">
                                    Xác nhận
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}
export default connect()(FormSinhVien)