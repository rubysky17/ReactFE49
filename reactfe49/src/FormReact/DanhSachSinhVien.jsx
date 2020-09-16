import React, { Component } from 'react';
import FormSinhVien from './FormSinhVien';
import { capNhatSinhVienAction, themSinhVienAction } from '../redux/actions/QuanLySinhVienAction';
import { connect } from "react-redux";

class DanhSachSinhVien extends Component {
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

    handleChange = (event) => {
        let { name, value } = event.target
        let newValues = { ...this.state.values, [name]: value }
        let newErrors = { ...this.state.errors, [name]: value.trim() === "" ? "Không được bỏ trống" : "" }
        let type = event.target.getAttribute("type_");
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (type === 'email') {
            if (!regexEmail.test(value)) {
                newErrors[name] = "Trường email không hợp lệ!"
            }
        }
        this.setState({
            values: newValues,
            errors: newErrors
        })
    }
    onHandleSubmit = (event) => {
        event.preventDefault()
        //validate
        let valid = true;
        for (let key in this.state.values) {
            if (this.state.values[key] === "") {
                valid = false
            }
        }
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== "") {
                valid = false
            }
        }

        if (!valid) {
            alert("Bạn nhập không hợp lệ!!")
            return;
        }

        //hàm add
        const action = themSinhVienAction(this.state.values);
        this.props.dispatch(action);
    }
    // componentWillReceiveProps(newProps) {
    //     //Lifecycle Chạy trước khi render
    //     //Component không chạy lại setState
    //     //Mỗi lần người dùng bấm chỉnh sửa thì props thay đổi newProps là Props mới (state.sinhVienEdit của redux) => đem props mới gán vào this.state.values
    //     this.setState({
    //         values: newProps.sinhVienEdit
    //     })
    // }

    render() {
        let sinhVienEdit = this.state.values
        return (
            <div className='container-fluid'>
                <form class="card" onSubmit={this.onHandleSubmit}>
                    <div className='card-header bg-dark text-white text-center'>
                        <p style={{ fontSize: "30px" }}>Thông tin sinh viên</p>
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChange} value={sinhVienEdit.maSinhVien} />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChange} value={sinhVienEdit.tenSinhVien} />
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type_="email" className="form-control" name="email" onChange={this.handleChange} value={sinhVienEdit.email} />
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input className="form-control" name="soDienThoai" onChange={this.handleChange} value={sinhVienEdit.soDienThoai} />
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-right">
                            <button type="submit" className="btn btn-success">Xác nhận</button>
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                let action = capNhatSinhVienAction(this.state.values);
                                this.props.dispatch(action)
                            }}>Cập nhật</button>
                        </div>
                    </div>
                </form>
                <FormSinhVien />
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.sinhVienEdit.maSinhVien !== prevState.values.maSinhVien) {
            //setState trong didUpdate phải có if
            this.setState({
                values: prevProps.sinhVienEdit
            })
        }
    }
}
const mapStateToProps = state => {
    return { sinhVienEdit: state.QuanLySinhVienReducer.sinhVienEdit }
}
export default connect(mapStateToProps)(DanhSachSinhVien)