import React, { Component } from 'react'
import KetQua from './KetQua';
import { connect } from "react-redux"
import NutChon from './NutChon';
import LeftPlayer from './LeftPlayer';
import RightPlayer from './RightPlayer';

class NguoiChoi extends Component {
    render() {
        let { giaTriOanTuTi } = this.props
        return (
            <div className="row text-center" style={{ color: "white" }}>
                <div className="col-3">
                    <LeftPlayer />
                    <NutChon />
                </div>
                <div className="col-6">
                    <KetQua />
                </div>
                <div className="col-3">
                    <RightPlayer />
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return { giaTriOanTuTi: state.oanTuTiReducer }
}
export default connect(mapStateToProps, null)(NguoiChoi)

