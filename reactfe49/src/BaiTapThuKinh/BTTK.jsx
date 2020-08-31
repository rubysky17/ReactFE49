import React, { Component } from 'react'
import ThuKinh from './ThuKinh'
import DSMK from './DSMK'

export default class BTTK extends Component {
    state = {
        matKinh: {}
    }
    MangMatKinh = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];
    changeMatKinh = (sp) => {
        this.setState({
            matKinh: sp
        })
    }
    render() {
        return (
            <div className="container-fluid" style={{
                backgroundImage: "url(/img/background.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "800px",
                padding: "0px",
            }}>
                <div className="container-fluid" style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    padding: "30px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <h3>TRY GLASS APP ONLINE</h3>
                </div>
                <div className="container">
                    <ThuKinh matKinh={this.state.matKinh} />
                    <DSMK MangMatKinh={this.MangMatKinh} changeMatKinh={this.changeMatKinh} />
                </div>
            </div>
        )
    }
}
