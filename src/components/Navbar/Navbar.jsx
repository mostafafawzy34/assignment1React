import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark px-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand fw-bold fs-2" to="/">
          START FRAMEWORK
        </NavLink>
        <div className="d-flex gap-3 fs-5">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                isActive ? "active-nav rounded-3" : ""
              }`
            }
            style={{ width: "fit-content" }}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                isActive ? "active-nav rounded-3" : ""
              }`
            }
            style={{ width: "fit-content" }}
          >
            PORTFOLIO
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                isActive ? "active-nav rounded-3" : ""
              }`
            }
            style={{ width: "fit-content" }}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
