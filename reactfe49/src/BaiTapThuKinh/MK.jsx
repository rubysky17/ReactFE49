import React, { Component } from 'react'

export default class MK extends Component {
    render() {
        let { matKinh } = this.props
        let style = {
            position: "absolute",
            bottom: "0",
            backgroundColor: "rgba(254,178,62,0.6)",
        }
        return (
            <div style={style}>
                <h3>{matKinh.name}</h3>
                <p style={{ color: "#fff" }}>{matKinh.desc}</p>
            </div>
        )
    }
}
