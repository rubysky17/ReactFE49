import React, { Component } from 'react'

export default class SP extends Component {
    render() {
        let { sp, themGioHang } = this.props;
        return (
            <div className="card col-4">
                <img className="card-img-top" src={sp.hinhAnh} alt={sp.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        themGioHang(sp);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}