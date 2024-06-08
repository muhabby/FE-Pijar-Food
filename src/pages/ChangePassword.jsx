/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../redux/action/auth";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUpdate = useSelector((state) => state.auth_update);
  const [inputData, setInputData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  // console.log(inputData)

  const updateData = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append("newPassword", inputData.newPassword);
    bodyData.append("confirmPassword", inputData.confirmPassword);

    dispatch(changePassword(bodyData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="change-password">
        {/* content */}
        <div
          className="container d-flex flex-column align-items-center"
          style={{ paddingTop: 80, paddingBottom: 80, color: "#efc81a" }}
        >
          <p style={{ fontSize: 20, fontWeight: 600 }}>
            Change Your Password Here
          </p>
          <div className="box" style={{ width: 50, backgroundColor: "grey" }} />
        </div>
        <form onSubmit={updateData} className="container col-3">
          <div className="mb-3">
            <label htmlFor="new-newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              onChange={onChange}
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={onChange}
              placeholder="Confirm Password"
              style={{ padding: 10, fontSize: 13 }}
            />
          </div>

          {/* Notification */}
          {authUpdate.isLoading ? (
            <div
              className="alert alert-primary"
              style={{ fontSize: "14px", padding: "10px 20px" }}
            >
              Loading ...
            </div>
          ) : null}
          {authUpdate.isError ? (
            <div
              className="alert alert-danger"
              style={{ fontSize: "14px", padding: "10px 20px" }}
            >
              {authUpdate.errorMessage ?? " - "}
            </div>
          ) : null}

          <button
            type="submit"
            className="btn col-12 mt-2 btn-lg text-white"
            style={{ padding: 10, fontSize: 15, backgroundColor: "#efc81a" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ceac18")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#EFC81A")
            }
          >
            Change Password
          </button>
        </form>
        <p
          className="container col-3 mt-4"
          style={{ fontSize: 13, color: "grey" }}
        >
          Back to edit profile?{"\u00A0\u00A0"}
          <Link
            to={"/edit-profile"}
            className="text-warning"
            style={{ textDecoration: "none", color: "#efc81a" }}
          >
            Click here
          </Link>
        </p>
      </div>
    </>
  );
};

export default ChangePassword;
