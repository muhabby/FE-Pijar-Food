/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/testNavbar";
import axios from "axios";
import { postMenu } from "../redux/action/menu";
import { useDispatch, useSelector } from "react-redux";

const MenuCreate = () => {
  const dispatch = useDispatch();
  const menu_post = useSelector((state) => state.menu_post);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    title: "",
    ingredient: "",
    category_id: 1,
    photo_url: "",
  });

  const postData = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append("title", inputData.title);
    bodyData.append("ingredient", inputData.ingredient);
    bodyData.append("category_id", inputData.category_id);
    bodyData.append("photo", photo);

    dispatch(postMenu(bodyData, navigate));
  };

  const onChange = (e) => {
    setInputData((prevInputData) => ({
      ...prevInputData,
      [e.target.name]: e.target.value,
    }));
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
    <div>
      <Navbar />
      <div className="container">
        <h1>Create Recipe</h1>
        <form onSubmit={postData}>
          {photo && <img src={inputData.photo_url} width={150} />}
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              className="form-control"
              id="photo"
              required
              onChange={onChangePhoto}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder="input your title"
              required
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredient">Ingredient</label>
            <input
              type="text"
              className="form-control"
              name="ingredient"
              id="ingredient"
              placeholder="input your ingredient"
              required
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2 mb-2">
            Submit
          </button>
        </form>
        {menu_post.isLoading ? (
          <div className="alert alert-primary">loading ...</div>
        ) : null}
        {menu_post.isError ? (
          <div className="alert alert-danger">
            Post menu failed: {menu_post.errorMessage ?? " - "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MenuCreate;
