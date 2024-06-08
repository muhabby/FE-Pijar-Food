/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import defaultPP from "/src/assets/default-pp.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/action/auth";
import { getUsers } from "../redux/action/users";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth_login.data.data);
  const usersData = useSelector((state) => state.users_detail.data);

  const id = authData.id;

  useEffect(() => {
    dispatch(getUsers(id));
  }, []);

  const logout = () => {
    dispatch(authLogout());
    navigate("/login");
  };

  const location = useLocation();

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
                onMouseEnter={(e) => (e.currentTarget.style.color = "#efc81a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
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
                onMouseEnter={(e) => (e.currentTarget.style.color = "#efc81a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
              >
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/my-menu"
                className={`nav-link ${
                  location.pathname === "/my-menu" ? "active" : ""
                }`}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#efc81a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
              >
                My Recipe
              </Link>
            </li>
          </ul>
        </div>

        {/* Profile & Logout*/}
        {usersData ? (
          <div className="profile d-flex flex-row align-items-center">
            {/* <div
              className="box"
              style={{
                width: 5,
                height: 50,
                backgroundColor: "#EFC81A",
                marginRight: 20,
              }}
            /> */}
            <Link to="/edit-profile">
              <div
                className="profile-picture"
                style={{
                  backgroundImage: `url(${usersData?.profile_picture})`,
                }}
                onMouseEnter={
                  (e) =>
                    Object.assign(e.currentTarget.style, {
                      borderColor: "#ceac18",
                      backgroundColor: "#EFC81A",
                      color: "#fff",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.05)",
                    })
                  // (e.currentTarget.style.borderColor = "#ceac18")
                }
                onMouseLeave={
                  (e) =>
                    Object.assign(e.currentTarget.style, {
                      borderColor: "",
                      backgroundColor: "",
                      color: "",
                      boxShadow: "",
                      transform: "scale(1)",
                    })
                  // (e.currentTarget.style.backgroundColor = "#EFC81A")
                }
              ></div>
            </Link>
            <div
              className="d-flex flex-column"
              style={{ fontSize: "small", marginRight: 10, textAlign: "left" }}
            >
              <div className="">{usersData?.full_name ?? " - "}</div>

              <Link
                to="/landing"
                className="text-black"
                style={{ fontWeight: 500, textDecoration: "none" }}
                onClick={() => logout()}
              >
                <span
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d6301b")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  Log Out
                </span>
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
