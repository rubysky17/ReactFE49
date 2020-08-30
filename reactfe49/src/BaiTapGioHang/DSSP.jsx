import React, { Component } from 'react'
import SP from './SP'

export default class DSSP extends Component {
    render() {
        let { MangSanPham, themGioHang } = this.props
        return (
            <div className="row">
                {MangSanPham.map((sp, index) => {
                    return <SP sp={sp} key={index} themGioHang={themGioHang} />
                })}
            </div>
        )
    }
}
