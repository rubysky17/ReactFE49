import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card-padding">
      <div className="card text-white bg-secondary">
        <img
          className="card-img"
          src="https://4cawmi2va33i3w6dek1d7y1m-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Control-your-emotions-control-your-life_portfolio-440x320.png"
          alt="https://4cawmi2va33i3w6dek1d7y1m-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Control-your-emotions-control-your-life_portfolio-440x320.png"
        />
        <div className="card-body">
          <h4 className="card-title">
            Control your emotions, control your life
          </h4>
          <p className="card-text">
            Do you go from zero to Hulk at record speed? Are fears holding you
            back…
          </p>
        </div>
      </div>
    </div>
  );
}
