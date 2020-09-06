import React, { Component } from 'react'
import MK from './MK';

export default class ThuKinh extends Component {
    render() {
        let { matKinh } = this.props;
        return (
            <div className="row my-5" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div className="col-3" style={{
                    position: "relative",
                }}>
                    {/* Thong tin mat kinh */}
                    <MK matKinh={matKinh} />
                    {/* Hinh anh mat kinh */}
                    <img src={matKinh.url} style={{
                        width: "160px",
                        position: "absolute",
                        left: "25%",
                        top: "85px",
                        opacity: 0.7,
                    }} />
                    {/* Anh model */}
                    <img src="/img/model.jpg" style={{ width: '270px' }} />
                </div>
                <div className="col-3">
                    {/* Anh model */}
                    <img src="/img/model.jpg" style={{ width: '270px' }} />
                </div>

            </div>
        )
    }
}
