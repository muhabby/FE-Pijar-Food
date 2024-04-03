/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { authLogin } from "../redux/action/auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authdata = useSelector((state) => state.auth_login);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const postData = (event) => {
    event.preventDefault();
    let data = inputData;
    console.log("inputData");
    console.log(inputData);
    dispatch(authLogin(data, navigate));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="login">
        {/* content */}
        <div
          className="container d-flex flex-column align-items-center"
          style={{ paddingTop: 80, paddingBottom: 20, color: "#EFC81A" }}
        >
          <p style={{ fontSize: 25, fontWeight: 600 }}>Recipe...</p>
          <p style={{ fontSize: 25, fontWeight: 600, marginTop: 60 }}>
            Welcome
          </p>
          <p style={{ color: "#8692A6", marginTop: 5, fontSize: 15 }}>
            Log in into your existing account
          </p>
          <div className="box" style={{ width: 50, backgroundColor: "grey" }} />
          <hr style={{ width: 390, color: "#EFC81A" }} />
        </div>
        <form className="container col-4" onSubmit={postData}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              required
              placeholder="Enter email address"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              required
              placeholder="Password"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
          <div className="form-check mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
              required
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              style={{ fontSize: "small" }}
            >
              I agree to terms & conditions
            </label>
          </div>

          {/* Notification */}
          {authdata.isLoading ? (
            <div className="alert alert-primary my-3">Loading ...</div>
          ) : null}
          {authdata.isError ? (
            <div
              className="alert alert-danger my-3 py-2"
              style={{ fontSize: "14px" }}
            >
              {authdata.ErrorMessage ?? " - "}
            </div>
          ) : null}

          <button
            type="submit"
            className="btn col-12 btn-lg text-white"
            style={{ fontSize: 15, backgroundColor: "#EFC81A" }}
          >
            Login
          </button>
        </form>

        {/* forgot password */}
        <p
          className="container col-4 mt-4"
          style={{ fontSize: 13, color: "grey" }}
        >
          Forgot your Password?{"\u00A0\u00A0"}
          <Link
            to="/"
            className="text-warning"
            style={{ textDecoration: "none", color: "#EFC81A" }}
          >
            Click here
          </Link>
        </p>

        {/* dont have account */}
        <p
          className="container col-3"
          style={{
            marginTop: 70,
            textAlign: "center",
            fontSize: 13,
            color: "grey",
          }}
        >
          Don't have an account?{"\u00A0\u00A0"}
          <Link
            to="/regist"
            className="text-warning"
            style={{ textDecoration: "none", color: "#EFC81A" }}
          >
            Sign Up Here
          </Link>
        </p>
      </div>
    </>
  );
}
