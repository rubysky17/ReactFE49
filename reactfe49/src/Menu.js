import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const menus = [
  { label: "Trang chủ", to: "/", activeExact: true },
  { label: "Liên hệ", to: "/contact", activeExact: false },
  { label: "Giới thiệu", to: "/about", activeExact: false },
];
const CustomLink = ({ label, to, activeExact }) => {
  return (
    <Route
      path={to}
      exact={activeExact}
      children={({ match }) => {
        var activeClass = match ? "actived" : "";
        return (
          <li className={activeClass}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
export default function Menu() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
            {menus.map((item, index) => {
              return (
                <CustomLink
                  key={index}
                  label={item.label}
                  to={item.to}
                  activeExact={item.activeExact}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
}
