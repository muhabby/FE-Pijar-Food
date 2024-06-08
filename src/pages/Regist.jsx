/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { authRegist } from "../redux/action/auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authdata = useSelector((state) => state.auth_regist);
  const [inputData, setInputData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const postData = (event) => {
    event.preventDefault();
    let data = inputData;
    // console.log("inputData");
    // console.log(inputData);
    dispatch(authRegist(data, navigate));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: "REGIST_AUTH_RESET" });
  }, [dispatch]);

  return (
    <>
      <div className="registrasi">
        {/* content */}
        <div
          className="container d-flex flex-column align-items-center"
          style={{ paddingTop: 80, paddingBottom: 20, color: "#EFC81A" }}
        >
          <p style={{ fontSize: 25, fontWeight: 600 }}>Recipe...</p>
          <p style={{ fontSize: 25, fontWeight: 600, marginTop: 60 }}>
            Let's get Started !
          </p>
          <p style={{ color: "#8692A6", marginTop: 5, fontSize: 15 }}>
            Create new account to access all features
          </p>
          <div className="box" style={{ width: 50, backgroundColor: "grey" }} />
          <hr style={{ width: 390, color: "#EFC81A" }} />
        </div>
        <form className="container col-4" onSubmit={postData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              onChange={onChange}
              required
              placeholder="Name"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
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

          <button
            type="submit"
            className="btn col-12 mt-3 btn-lg text-white"
            style={{
              fontSize: 15,
              backgroundColor: "#EFC81A",
              padding: "10px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ceac18")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#EFC81A")
            }
          >
            Register Account
          </button>

          {/* Notification */}
          {authdata.isLoading ? (
            <div
              className="alert alert-primary mt-3"
              style={{ fontSize: "14px", padding: "10px 20px" }}
            >
              Loading ...
            </div>
          ) : null}
          {authdata.isError ? (
            <div
              className="alert alert-danger mt-3"
              style={{ fontSize: "14px", padding: "10px 20px" }}
            >
              {authdata.errorMessage ?? " - "}
            </div>
          ) : null}
        </form>
        <p
          className="container col-3 mt-5"
          style={{ textAlign: "center", fontSize: 13, color: "grey" }}
        >
          Already have account?{"\u00A0\u00A0"}
          <Link
            to="/login"
            className="text-warning"
            style={{ textDecoration: "none", color: "#EFC81A" }}
          >
            Log in Here
          </Link>
        </p>
      </div>
    </>
  );
}
