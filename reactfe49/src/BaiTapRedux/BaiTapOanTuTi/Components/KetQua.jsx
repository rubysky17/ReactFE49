import React, { Component } from 'react';
import { connect } from "react-redux";


class KetQua extends Component {
    render() {
        let { playGame, giaTriOanTuTi } = this.props
        return (
            <div className="">
                <p className="text-success" style={{ fontSize: "40px" }}>Số bàn thắng: <span className="text-white">{giaTriOanTuTi.soBanThang}</span></p>
                <p className="text-success" style={{ fontSize: "40px" }}>Số bàn chơi: <span className="text-white">{giaTriOanTuTi.soBanChoi}</span></p>
                <button className="btn btn-danger" style={{ fontSize: "40px" }} onClick={() => {
                    playGame()
                }}>Bắt đầu</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: "PLAY_GAME"
            })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        giaTriOanTuTi: state.oanTuTiReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KetQua)
