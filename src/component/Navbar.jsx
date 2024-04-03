/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import defaultPP from "/src/assets/default-pp.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/action/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authdata = useSelector((state) => state.auth_login.data);

  const logout = () => {
    dispatch(authLogout());
    navigate("/login");
  };

  const location = useLocation(); // menggunakan useLocation hook untuk mendapatkan lokasi saat ini

  return (
    <div className="navbar">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg container p-2 mt-4">
        {/* Home, add recipe, search */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ fontSize: 15 }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/home"
                className={`nav-link ${
                  location.pathname === "/home" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add-menu"
                className={`nav-link ${
                  location.pathname === "/add-menu" ? "active" : ""
                }`}
              >
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to=""
                className={`nav-link ${
                  location.pathname === "/search-menu" ? "active" : ""
                }`}
              >
                Search Menu
              </Link>
            </li>
          </ul>
        </div>

        {/* Profile & Logout*/}
        <div className="profile d-flex flex-row align-items-center">
          <div
            className="box"
            style={{
              width: 5,
              height: 50,
              backgroundColor: "#EFC81A",
              marginRight: 20,
            }}
          />
          <Link to="/">
            {authdata?.data?.profile_picture ? (
              <div
                className="profile-picture"
                style={{
                  backgroundImage: `url(${authdata?.data?.profile_picture})`,
                }}
              ></div>
            ) : (
              <div
                className="profile-picture"
                style={{
                  backgroundImage: `url(${defaultPP})`,
                }}
              ></div>
            )}
          </Link>
          <div
            className="d-flex flex-column"
            style={{ fontSize: "small", marginRight: 10, textAlign: "left" }}
          >
            {authdata ? (
              <div className="">{authdata?.data?.full_name ?? " - "}</div>
            ) : null}
            {authdata ? (
              <Link
                to="/login"
                className="text-black"
                style={{ fontWeight: 600, textDecoration: "none" }}
                onClick={() => logout()}
              >
                Logout
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
