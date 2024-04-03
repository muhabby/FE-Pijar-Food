/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/action/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authdata = useSelector((state) => state.auth.data);

  const logout = () => {
    dispatch(authLogout());
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link" aria-current="page">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link" aria-current="page">
                  Profile
                </Link>
              </li>
              {authdata ? (
                <li className="nav-item">
                  <Link
                    to="/menu-create"
                    className="nav-link"
                    aria-current="page"
                  >
                    Add Menu
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
          {authdata ? <p>{authdata?.data?.full_name ?? " - "}</p> : null}
          {authdata ? (
            <button className="btn btn-danger" onClick={() => logout()}>
              logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
