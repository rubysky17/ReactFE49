import React, { Component } from 'react'
import KetQua from './KetQua';
import { connect } from "react-redux"
import NutChon from './NutChon';

class NguoiChoi extends Component {
    render() {
        let { giaTriOanTuTi } = this.props
        return (
            <div className="row text-center" style={{ color: "white" }}>
                <div className="col-3">
                    <div className="row center-item">
                        <img src={giaTriOanTuTi.hinhAnh.nguoiChoi} style={{ width: "100px" }} className="bg_white" />
                        <div className="speech-bubble">
                        </div>
                    </div>
                    <div className="row center-item mt-3">
                        <img src="./img/oantutiGame/player.png" style={{ width: "100px" }} />
                    </div>
                    <NutChon />
                </div>
                <div className="col-6">
                    <p className="display-4 text-warning">{giaTriOanTuTi.text !== "" ? giaTriOanTuTi.text : "Mời bạn chọn"}</p>
                    <KetQua />
                </div>
                <div className="col-3">
                    <div className="row center-item">
                        <img src={giaTriOanTuTi.hinhAnh.may} style={{ width: "100px" }} className="bg_white" />
                        <div className="speech-bubble"></div>
                    </div>

                    <div className="row center-item mt-3">
                        <img src="./img/oantutiGame/playerComputer.png" style={{ width: "100px" }} />

                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return { giaTriOanTuTi: state.oanTuTiReducer }
}
export default connect(mapStateToProps, null)(NguoiChoi)

