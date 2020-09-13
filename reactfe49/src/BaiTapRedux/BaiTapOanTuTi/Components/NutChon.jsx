import React, { Component } from 'react';
import { connect } from "react-redux"

class NutChon extends Component {
    render() {
        let { thayDoiGiaTri } = this.props
        return (
            <div className="row center-item mt-3">
                <button className="btn btn-warning mr-5" onClick={() => {
                    thayDoiGiaTri("bao")
                }}>
                    <img src="./img/oantutiGame/bao.png" width="50px" />
                </button>
                <button className="btn btn-warning mr-5" onClick={() => {
                    thayDoiGiaTri("bua")
                }}>
                    <img src="./img/oantutiGame/bua.png" width="50px" />
                </button>
                <button className="btn btn-warning" onClick={() => {
                    thayDoiGiaTri("keo")
                }}>
                    <img src="./img/oantutiGame/keo.png" width="50px" />
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        thayDoiGiaTri: (status) => {
            dispatch({
                type: "CHON_GIA_TRI",
                status
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(NutChon)