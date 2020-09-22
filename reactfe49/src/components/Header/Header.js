import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink exact className="navbar-brand" to="/home">
        Mạnh Đạt
      </NavLink>
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
        <ul className="navbar-nav ml-auto ml-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="my-link"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="my-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="my-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="my-link"
              to="/detail"
            >
              Detail
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="my-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
