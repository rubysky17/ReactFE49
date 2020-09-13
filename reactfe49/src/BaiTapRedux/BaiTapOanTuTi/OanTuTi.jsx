import React, { Component } from 'react';
import "./style/OanTuTi.css";
import NguoiChoi from './Components/NguoiChoi';

export default class OanTuTi extends Component {
    render() {
        return (
            <div className="mainbackground">
                <div className="container-fluid mt-5">
                    <NguoiChoi />
                </div>
            </div>
        )
    }
}
