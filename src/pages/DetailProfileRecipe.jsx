/* eslint-disable no-unused-vars */
import React from "react";
import ayudiaPhoto from "/src/assets/ayudia-photo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteMenu, getMenu } from "../redux/action/menu";
import { useDispatch, useSelector } from "react-redux";

const DetailProfileRecipe = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="detail-profile-recipes">
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
          <div
            className="profile d-flex flex-row"
            style={{ alignItems: "center" }}
          >
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
              <div className="">
                <a
                  href="login.html"
                  className="text-black"
                  style={{ fontWeight: 600, textDecoration: "none" }}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="content container d-flex flex-column">
          {/* Profile, date, like */}
          <div className="profile-date-like row mt-5 mb-4 p-2">
            <div className="profile col-6 d-flex flex-row align-items-center">
              <div
                className="box"
                style={{
                  width: 5,
                  height: 50,
                  backgroundColor: "#EFC81A",
                  marginRight: 20,
                }}
              />
              <img
                src={ayudiaPhoto}
                style={{
                  border: 200,
                  borderRadius: "100%",
                  height: 40,
                  padding: "1.5px",
                  marginRight: 15,
                }}
                alt=""
              />
              <div
                className="d-flex flex-column align-items-start"
                style={{ fontSize: "small", marginRight: 10 }}
              >
                <span className="mb-1">Ayudia</span>
                <span style={{ fontWeight: 600 }}>10 Recipe</span>
              </div>
            </div>
            <div className="date-like col-6 d-flex flex-column justify-content-center">
              <div
                className="d-flex flex-column align-items-end"
                style={{ fontSize: "small" }}
              >
                <span className="mb-1">21 February 2023</span>
              </div>
            </div>
          </div>

          {/* Recipes, Bookmarked, Liked*/}
          <div className="recipe-bookmarked-liked d-flex flex-column col-4 mt-4 mb-5 p-2">
            <div className="d-flex flex-row justify-content-between">
              <Link
                to="#"
                className="list-item"
                aria-current="page"
                style={{ textDecoration: "underline" }}
              >
                Recipes
              </Link>
              <Link to="#" className="list-item" aria-current="page">
                Bookmarked
              </Link>
              <Link to="#" className="list-item" aria-current="page">
                Liked
              </Link>
            </div>
            <div
              className="box mt-3"
              style={{ backgroundColor: "#EFC81A", height: 5, width: "100%" }}
            ></div>
          </div>

          {/* Notification */}
          {menu.isLoading ? (
            <div className="alert alert-primary">Loading ...</div>
          ) : null}

          {/* Card Recipe*/}
          <div className="d-flex flex-row p-1">
            <section className="col-8">
              {menu.isSuccess && menu.data
                ? menu.data.map((item, index) => {
                    return (
                      <div className="card-recipe mb-5 " key={index}>
                        <div
                          className="card d-flex flex-row"
                          style={{
                            borderColor: "transparent",
                          }}
                        >
                          <div className="d-flex flex-row align-items-center">
                            <div
                              className="img-recipe col-6"
                              style={{ backgroundImage: `url(${item.photo})` }}
                            >
                              {/* <img src={item.photo} className="img-fluid" alt="" style={{borderRadius:'15px', maxWidth:"350px"}}/> */}
                            </div>
                            <div className="col-6">
                              <div
                                className="card-body d-flex flex-column"
                                style={{ margin: 10 }}
                              >
                                <span className="card-title mb-3">
                                  <Link
                                    to={`/detail-menu/${item.id}`}
                                    style={{
                                      fontSize: 35,
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    onClick={handleButtonClick}
                                  >
                                    {item.title}
                                  </Link>
                                </span>
                                <span
                                  className="card-text mb-4"
                                  style={{ fontSize: 18 }}
                                >
                                  Ingredients: <br />
                                  {item.ingredient}
                                </span>
                                <div className="like-comment-bookmark mb-3">
                                  <span>
                                    10 Likes - 12 Comments - 3 Bookmarks
                                  </span>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                  <Link to={`/edit-menu/${item.id}`}>
                                    <button
                                      type="submit"
                                      className="btn text-white"
                                      style={{
                                        fontSize: 14,
                                        backgroundColor: "#30C0F3",
                                        padding: "8px 30px",
                                      }}
                                      onClick={handleButtonClick}
                                    >
                                      Edit Menu
                                    </button>
                                  </Link>
                                  <button
                                    onClick={() =>
                                      dispatch(deleteMenu(item.id))
                                    }
                                    type="submit"
                                    className="btn text-white"
                                    style={{
                                      fontSize: 14,
                                      backgroundColor: "#F57E71",
                                      padding: "8px 30px",
                                    }}
                                  >
                                    Delete Menu
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </section>
          </div>
        </div>

        {/* Page */}
        <div className="pagination row mb-5">
          <div
            className="col d-flex flex-column align-items-center"
            style={{ padding: 75 }}
          >
            <div className="d-flex flex-row align-items-center">
              <button
                type="submit"
                className="btn text-white"
                style={{
                  fontSize: "small",
                  backgroundColor: "#EFC81A",
                  padding: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                Prev
              </button>
              <span style={{ marginLeft: 30 }}>Show 6 - 10 from 10</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer" style={{ backgroundColor: "#EFC81A" }}>
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

export default DetailProfileRecipe;
