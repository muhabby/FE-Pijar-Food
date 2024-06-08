/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import ayudiaPhoto from "/src/assets/ayudia-photo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUsers } from "../redux/action/users";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth_login.data.data);
  const usersData = useSelector((state) => state.users_detail.data);
  const usersUpdate = useSelector((state) => state.users_update);
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    photo_url: "",
  });

  const id = authData.id;

  useEffect(() => {
    dispatch(getUsers(id));
  }, [dispatch, id]);

  const updateData = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append("full_name", inputData.name);
    bodyData.append("email", inputData.email);
    bodyData.append("password", inputData.password);
    bodyData.append("profile_picture", photo);

    dispatch(updateUsers(bodyData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
        photo_url: URL.createObjectURL(e.target.files[0]),
      });
    console.log(e.target.files);
  };

  return (
    <>
      <div className="edit-profile">
        {/* navbar */}
        <Navbar />

        {/* content */}

        {usersData ? (
          <div>
            {/* Photo */}
            <div
              className="container d-flex flex-column align-items-center back"
              style={{ paddingTop: 80, paddingBottom: 20 }}
            >
              {photo ? (
                <div
                  className=""
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: "100%",
                    backgroundImage: `url(${inputData.photo_url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              ) : (
                <div
                  className=""
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: "100%",
                    backgroundImage: `url(${usersData?.profile_picture})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              )}
              <input
                id="profile_picture"
                type="file"
                style={{ display: "none" }}
                onChange={onChangePhoto}
              />
              <label
                htmlFor="profile_picture"
                className="mt-3"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="hover"
                  href="#"
                  style={{
                    color: "#2e266f",
                    fontSize: "small",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#efc81a")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  Change Photo
                </span>
              </label>
            </div>

            {/* Form */}
            <form onSubmit={updateData} className="container col-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  defaultValue={usersData?.full_name}
                  placeholder="Name"
                  onChange={onChange}
                  style={{ padding: 10, fontSize: 13 }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  defaultValue={usersData?.email}
                  placeholder="Email"
                  onChange={onChange}
                  style={{ padding: 10, fontSize: 13 }}
                />
                <div className="mt-1">
                  <span style={{ fontSize: 12, color: "gray" }}>
                    Leave it blank if you don't want to update
                  </span>
                </div>
              </div>

              {/* Notification */}
              {usersUpdate.isLoading ? (
                <div
                  className="alert alert-primary"
                  style={{ fontSize: "14px", padding: "10px 20px" }}
                >
                  Loading ...
                </div>
              ) : null}
              {usersUpdate.isError ? (
                <div
                  className="alert alert-danger"
                  style={{ fontSize: "14px", padding: "10px 20px" }}
                >
                  {usersUpdate.errorMessage ?? " - "}
                </div>
              ) : null}

              <button
                type="submit"
                className="btn col-12 mt-2 btn-lg text-white"
                style={{
                  padding: 10,
                  fontSize: 15,
                  backgroundColor: "#efc81a",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ceac18")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#EFC81A")
                }
              >
                Update Profile
              </button>
            </form>
            {/* <p
              className="container col-3 mt-4"
              style={{ fontSize: 13, color: "grey" }}
            >
              Change Password?{"\u00A0\u00A0"}
              <Link
                to={"/change-password"}
                className="text-warning"
                style={{ textDecoration: "none", color: "#efc81a" }}
              >
                Click here
              </Link>
            </p> */}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default EditProfile;
