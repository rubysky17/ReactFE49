import React, { Component } from 'react';
import { connect } from 'react-redux'

class LeftPlayer extends Component {
    render() {
        let { giaTriOanTuTi } = this.props
        return (
            <div>
                <div className="row center-item">
                    <img src={giaTriOanTuTi.hinhAnh.nguoiChoi} style={{ width: "100px" }} className="bg_white" />
                    <div className="speech-bubble">
                    </div>
                </div>
                <div className="row center-item mt-3">
                    <img src="./img/oantutiGame/player.png" style={{ width: "100px" }} />
                </div>
            </div>
        )
    }
}
const mapPropToState = (state) => {
    return {
        giaTriOanTuTi: state.oanTuTiReducer
    }
}
export default connect(mapPropToState)(LeftPlayer)