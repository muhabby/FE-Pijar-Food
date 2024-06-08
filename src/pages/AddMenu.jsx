/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import ayudiaPhoto from "/src/assets/ayudia-photo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postMenu } from "../redux/action/menu";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const AddMenu = () => {
  const dispatch = useDispatch();
  const menu_post = useSelector((state) => state.menu_post);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    title: "",
    ingredient: "",
    category_id: "",
    photo_url: "",
  });

  useEffect(() => {
    dispatch({ type: "POST_MENU_RESET" });
  }, []);

  const postData = async (event) => {
    event.preventDefault();

    let bodyData = new FormData();
    bodyData.append("title", inputData.title);
    bodyData.append("ingredient", inputData.ingredient);
    bodyData.append("category_id", inputData.category_id);
    bodyData.append("photo", photo);

    dispatch(postMenu(bodyData, navigate));
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
      <Navbar />
      <div className="add-menu">
        {/* Content */}
        <div
          className="content container d-flex flex-column"
          style={{ marginTop: 50, marginBottom: 100 }}
        >
          {/* body content */}
          <section className="row">
            {/* Input Recipe */}
            <form onSubmit={postData} className="d-flex flex-column mt-4 mb-4">
              {/* Photo */}
              <div className="form-group d-flex flex-column mb-4">
                <label
                  htmlFor="uploadPhoto"
                  className="form-label"
                  style={{ fontWeight: 500, fontSize: 20 }}
                >
                  Photo
                </label>
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    position: "relative",
                    border: "2px dashed #ccc",
                    height: "300px",
                  }}
                >
                  {photo && (
                    <img
                      src={inputData.photo_url}
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
              <div className="form-group mb-4">
                <label
                  htmlFor="title"
                  className="form-label"
                  style={{ fontWeight: 500, fontSize: 20 }}
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  onChange={onChange}
                />
              </div>

              {/* Ingredients */}
              <div className="form-group mb-4">
                <label
                  htmlFor="ingredients"
                  className="form-label"
                  style={{ fontWeight: 500, fontSize: 20 }}
                >
                  Ingredients
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="ingredient"
                  name="ingredient"
                  placeholder="Ingredients"
                  rows={10}
                  required
                  onChange={onChange}
                />
              </div>

              {/* Category */}
              <div className="form-group d-flex flex-column mb-4 col-4">
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
                  style={{ padding: 15 }}
                  required
                  onChange={onChange}
                >
                  <option defaultValue="">Select category</option>
                  <option value="1">Dessert</option>
                  <option value="2">Main Course</option>
                  <option value="3">Appetizer</option>
                </select>
              </div>

              {/* Notification */}
              {menu_post.isLoading ? (
                <div className="alert alert-primary">Loading ...</div>
              ) : null}
              {menu_post.isError ? (
                <div className="alert alert-danger">
                  {menu_post.errorMessage ?? " - "}
                </div>
              ) : null}

              {/* Post Button*/}
              <div className="d-flex flex-column align-items-center mt-5">
                <button
                  type="submit"
                  className="btn-submit btn text-white"
                  style={{
                    padding: "10px 150px",
                    fontSize: 17,
                    backgroundColor: "#EFC81A",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ceac18")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#EFC81A")
                  }
                >
                  Post
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default AddMenu;
