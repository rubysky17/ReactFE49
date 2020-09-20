import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

export const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#333" }}
      >
        <NavLink className="navbar-brand" to="/">
          Navbar
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
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                to="/home"
                exact
                activeClassName="activeMenuItem"
                activeStyle={{ fontWeight: "bold" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/About"
                exact
                activeClassName="activeMenuItem"
                activeStyle={{ fontWeight: "bold" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  className="dropdown-item"
                  to="/Contact"
                  exact
                  activeClassName="activeMenuItem"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Contact
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/Login"
                  exact
                  activeClassName="activeMenuItem"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Login
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
