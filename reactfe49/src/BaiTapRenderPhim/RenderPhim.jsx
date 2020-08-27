import React, { Component } from 'react'
import dataPhim from "../BaiTapRenderPhim/DataFilms.json"
import styles from "./RenderPhim.module.css"

export default class RenderPhim extends Component {
    state = {
        data: dataPhim
    }
    renderGiaoDienPhim = () => {
        return this.state.data.map((phim, index) => {
            return (
                <div className="col-2 py-2" key={index}>
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} alt="hello" style={{ height: "280px" }} />
                        <div className="card-body" className={`${styles.card_body}`} style={{ backgroundColor: "#333", color: "white" }}>
                            <h4 className="card-title" className={`${styles.card_title}`}>{phim.tenPhim.length > 20 ? <span>{phim.tenPhim.substr(0, 20)}... </span> : <span>{phim.tenPhim}</span>}</h4>
                            <p className="card-text" className={`${styles.card_text}`}>{phim.moTa.length > 40 ? <span>{phim.moTa.substr(0, 40)}... </span> : <span>{phim.moTa}</span>}</p>
                        </div>
                    </div>
                </div>


            )
        })
    }
    render() {
        return (
            <div className="container-fluid" className={`${styles.content}`}>
                <div className={`${styles.overlay}`}></div>
                <nav className="navbar navbar-expand-sm navbar-light mb-5" style={{ backgroundColor: "rgba(178, 190, 195,1.0)" }}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        {this.renderGiaoDienPhim()}
                    </div>
                </div>

            </div>
        )
    }
}
