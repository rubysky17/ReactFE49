import React from "react";
import "./Navbar.css";
import logo from "../../Assets/img/logo@2x.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid navbar-img" />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Khóa học
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Trợ giúp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Đăng kí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
