import React, { Component } from 'react';
import { connect } from "react-redux"
import { onChangeAction, themSinhVienAction } from '../redux/actions/QuanLySinhVienAction';

class FormSinhVien extends Component {
    handleChange = (event) => {
        let { values, errors } = this.props
        let { value, name } = event.target;
        let newValues = { ...values, [name]: value }
        let newErrors = { ...errors, [name]: value.trim() === "" ? `không được bỏ trống` : "" }
        let type = event.target.getAttribute("type_")
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (type === 'email') {
            if (!regexEmail.test(value)) {
                newErrors[name] = "email không hợp lệ"
            }
        }
        let action = onChangeAction(newValues, newErrors)
        this.props.dispatch(action)
    }
    onHandleSubmit = (event) => {
        let { values, errors } = this.props
        event.preventDefault();
        //validate
        let valid = true;
        for (let key in values) {
            if (values[key].trim() === "") {
                valid = false
            }
        }
        for (let key in errors) {
            if (errors[key].trim() !== "") {
                valid = false
            }
        }
        if (!valid) {
            alert("Mời bạn kiểm tra lại!")
            return
        }
        //dispatch cái action lên reducer để thêm sinh viên
        let action = themSinhVienAction(values)
        this.props.dispatch(action)
    }

    render() {
        console.log('render');
        return (
            <div className='container-fluid'>
                <h1 className='bg-dark text-white text-center p-3'>Thông tin sinh viên</h1>
                <form onSubmit={this.onHandleSubmit} >
                    <div className="row">
                        <div className="col-6 form-group">
                            <p>Mã sinh viên</p>
                            <input className="form-control" name="maSinhVien" onChange={this.handleChange} value={this.props.values.maSinhVien} />
                            <p className="text-danger">{this.props.errors.maSinhVien}</p>
                            <p>Tên sinh viên</p>
                            <input className="form-control" name="tenSinhVien" onChange={this.handleChange} value={this.props.values.tenSinhVien} />
                            <p className="text-danger">{this.props.errors.tenSinhVien}</p>
                        </div>
                        <div className="col-6 form-group">
                            <p>Email</p>
                            <input type_="email" className="form-control" name="email" onChange={this.handleChange} value={this.props.values.email} />
                            <p className="text-danger">{this.props.errors.email}</p>
                            <p>Số điện thoại</p>
                            <input className="form-control" name="soDienThoai" onChange={this.handleChange} value={this.props.values.soDienThoai} />
                            <p className="text-danger">{this.props.errors.soDienThoai}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 text-right">
                            <button className="btn btn-success" type="submit">Xác nhận</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    values: state.QuanLySinhVienReducer.values,
    errors: state.QuanLySinhVienReducer.errors,
    sinhVienEdit: state.QuanLySinhVienReducer.sinhVienEdit
})
export default connect(mapStateToProps)(FormSinhVien)