/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import ayudiaPhoto from "/src/assets/ayudia-photo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenuDetail, updateMenu } from "../redux/action/menu";

const EditMenu = () => {
  const menu_detail = useSelector((state) => state.menu_detail);
  const menu_update = useSelector((state) => state.menu_update);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    title: "",
    ingredient: "",
    category_id: "",
    photo_url: "",
  });

  useEffect(() => {
    dispatch(getMenuDetail(id));
    dispatch({ type: "UPDATE_MENU_RESET" });
  }, []);

  const updateData = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append("title", inputData.title);
    bodyData.append("ingredient", inputData.ingredient);
    bodyData.append("category_id", inputData.category_id);
    bodyData.append("photo", photo);

    dispatch(updateMenu(id, bodyData, navigate));
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

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="edit-menu">
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
                  className="nav-link"
                  aria-current="page"
                  style={{ textDecorationLine: "underline" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add-menu" className="nav-link" aria-current="page">
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link" aria-current="page">
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
            <a href="detail-profile.html">
              <img
                src={ayudiaPhoto}
                style={{
                  border: 200,
                  borderRadius: "100%",
                  height: 40,
                  padding: "1.5px",
                  marginRight: 15,
                }}
                className=""
                alt=""
              />
            </a>
            <div
              className="d-flex flex-column"
              style={{ fontSize: "small", marginRight: 10, textAlign: "left" }}
            >
              <div className="">Ayudia</div>
              <a
                href="login.html"
                className="text-black"
                style={{ fontWeight: 600, textDecoration: "none" }}
              >
                Logout
              </a>
            </div>
          </div>
        </nav>
        {/* Content */}
        <div
          className="content container d-flex flex-column"
          style={{ marginTop: 50, marginBottom: 100 }}
        >
          {/* Notification */}
          {menu_detail.isLoading ? (
            <div className="alert alert-primary">Loading ...</div>
          ) : null}

          {/* body content */}
          <section className="row">
            {/* Input Recipe */}
            <form
              onSubmit={updateData}
              className="d-flex flex-column mt-4 mb-4"
            >
              {/* Photo */}
              <div className="d-flex flex-column mb-4">
                <label
                  htmlFor="uploadPhoto"
                  className="form-label"
                  style={{ fontWeight: 500, fontSize: 20 }}
                >
                  Photo
                </label>
                <div className="upload-container d-flex flex-column align-items-center justify-content-center">
                  {photo ? (
                    <img
                      src={inputData.photo_url}
                      className="img-fluid"
                      alt=""
                      style={{ maxHeight: 250 }}
                    />
                  ) : (
                    <img
                      src={menu_detail.data?.photo}
                      className="img-fluid"
                      alt=""
                      style={{ maxHeight: 250 }}
                    />
                  )}
                </div>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  onChange={onChangePhoto}
                />
              </div>

              {/* Title */}
              <label
                htmlFor="title"
                className="form-label"
                style={{ fontWeight: 500, fontSize: 20 }}
              >
                Title
              </label>
              <div className="d-flex flex-column mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  onChange={onChange}
                  defaultValue={menu_detail.data?.title}
                />
              </div>

              {/* Ingredients */}
              <label
                htmlFor="ingredients"
                className="form-label"
                style={{ fontWeight: 500, fontSize: 20 }}
              >
                Ingredients
              </label>
              <div className="d-flex flex-column mb-4">
                <textarea
                  type="text"
                  className="form-control"
                  id="ingredient"
                  name="ingredient"
                  placeholder="Ingredients"
                  onChange={onChange}
                  rows={10}
                  style={{ whiteSpace: "pre-line" }}
                  defaultValue={menu_detail.data?.ingredient}
                />
              </div>

              {/* Category */}
              <div className="d-flex flex-column mb-4 col-4">
                <label
                  htmlFor="category"
                  className="form-label"
                  style={{ fontWeight: 500, fontSize: 20 }}
                >
                  Category
                </label>
                <select
                  className="form-select"
                  id="category_id"
                  name="category_id"
                  onChange={onChange}
                  style={{ padding: 15 }}
                  value={
                    inputData.category_id
                      ? inputData?.category_id
                      : menu_detail.data?.category_id
                  }
                >
                  <option value="">Select category</option>
                  <option value="1">Desert</option>
                  <option value="2">Main Course</option>
                  <option value="3">Appetizer</option>
                </select>
              </div>

              {/* Notification */}
              {menu_update.isLoading ? (
                <div className="alert alert-primary">Loading ...</div>
              ) : null}
              {menu_update.isError ? (
                <div className="alert alert-danger">
                  Update menu failed: {menu_update.errorMessage ?? " - "}
                </div>
              ) : null}

              {/* Update Button */}
              <div className="d-flex flex-column align-items-center mt-5">
                <button
                  type="submit"
                  className="btn text-white"
                  style={{
                    padding: "10px 150px",
                    fontSize: 17,
                    backgroundColor: "#EFC81A",
                  }}
                  onClick={handleButtonClick}
                >
                  Update
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Footer */}
        <footer className="footer mt-5" style={{ backgroundColor: "#EFC81A" }}>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ padding: 75, paddingTop: 150 }}
          >
            <p style={{ fontSize: 55 }}>Eat, Cook, Repeat</p>
            <p className="mt-4" style={{ color: "#707070" }}>
              Share your best recipe by uploading here!
            </p>
          </div>
          <div
            className="d-flex flex-row justify-content-center text-align-center p-5"
            style={{ backgroundColor: "#EFC81A" }}
          >
            <a
              href=""
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Product
            </a>
            <a
              href=""
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Company
            </a>
            <a
              href=""
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Learn more
            </a>
            <a
              href=""
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Get in touch
            </a>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ paddingBottom: 30 }}
          >
            <p>© Pijar Camp</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EditMenu;
