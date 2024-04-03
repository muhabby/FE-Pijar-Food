/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../component/testNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../redux/action/auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authdata = useSelector((state) => state.auth);
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

  return (
    <div>
      <Navbar />
      <form className="container my-5 bg-light border p-5" onSubmit={postData}>
        <div className="mb-3">
          <h1>Login</h1>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            required
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
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
        {authdata.isLoading ? (
          <div className="alert alert-primary">loading ...</div>
        ) : null}
        {authdata.isError ? (
          <div className="alert alert-danger">
            Login Failed : {authdata.ErrorMessage ?? "-"}
          </div>
        ) : null}
      </form>
    </div>
  );
}
