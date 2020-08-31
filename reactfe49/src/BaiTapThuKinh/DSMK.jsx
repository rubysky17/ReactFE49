import React, { Component } from 'react'

export default class DSMK extends Component {
    render() {
        let { MangMatKinh, changeMatKinh } = this.props
        return (
            <div className="row" style={{
                background: "#fff"
            }}>
                {MangMatKinh.map((sp, index) => {
                    return (
                        <div key={index} className="col-4 p-3" style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid #333",
                            cursor: "pointer"
                        }} onClick={() => changeMatKinh(sp)} >
                            <img src={sp.url} style={{ width: "100px" }} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
