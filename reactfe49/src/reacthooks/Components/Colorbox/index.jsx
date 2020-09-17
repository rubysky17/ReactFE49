import React from 'react';
import PropTypes from 'prop-types';
import '../Colorbox/ColorBox.scss'
import { useState } from 'react';

ColorBox.propTypes = {

};
function handleChangeColor() {
    let mangMauRandom = ["black", "red", "blue", "green", "yellow"];
    let randomNumber = Math.floor(Math.random() * 4);
    localStorage.setItem("box-color", mangMauRandom[randomNumber])
    return mangMauRandom[randomNumber]
}

function ColorBox(props) {
    //Sử dụng useState color để gán giá trị cho state đồng thời setState bằng màu khác khi người dùng click vào
    const [color, setColor] = useState(() => {
        let initialColor = localStorage.getItem("box-color")
        return initialColor;
    })
    return (
        <div className="container" style={{ display: 'flex', justifyContent: "center" }}>
            <div>
                <h3 className='text-center my-5'>
                    Bài 1: Color đổi màu khi được người dùng click vào (useState)
                 </h3>
                <p>Demo useState qua ứng dụng click đổi màu box</p>
                <div className='color-box' style={{ backgroundColor: color, cursor: "pointer" }} onClick={() => {
                    setColor(handleChangeColor)
                }}>

                </div>
            </div>

        </div>
    );
}

export default ColorBox;