/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import recipeEmptyIllustration from "/src/assets/recipe_empty_illustration.svg";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteMenu, getMenuByUserId } from "../redux/action/menu";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../component/Footer";
import { getUsers } from "../redux/action/users";

const MyMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth_login.data.data);
  const menu = useSelector((state) => state.menu_user);
  const usersData = useSelector((state) => state.users_detail.data);
  const id = authData.id;

  useEffect(() => {
    dispatch(getMenuByUserId(id));
    dispatch(getUsers(id));
  }, [dispatch, id]);

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="my-menu">
        {/* Content */}
        <div className="content container d-flex flex-column my-5">
          {/* Profile, date, like */}
          {usersData ? (
            <div className="profile-date-like row mb-4 p-2">
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
                <div
                  style={{
                    height: 47,
                    width: 47,
                    borderRadius: "100%",
                    backgroundImage: `url(${usersData?.profile_picture})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    marginRight: 20,
                  }}
                ></div>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ fontSize: "small", marginRight: 10 }}
                >
                  <span className="mb-1" style={{ fontSize: 17 }}>
                    {usersData?.full_name}
                  </span>
                </div>
              </div>
              <div className="date-like col-6 d-flex flex-column justify-content-center">
                <div
                  className="d-flex flex-column align-items-end"
                  style={{ fontSize: "small" }}
                >
                  {menu?.data ? (
                    <span className="mb-1" style={{ fontSize: 17 }}>
                      {menu?.data?.length} Recipe
                    </span>
                  ) : (
                    <span className="mb-1" style={{ fontSize: 17 }}>
                      0 Recipe
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          {/* Recipes, Bookmarked, Liked*/}
          <div className="recipe-bookmarked-liked d-flex flex-column col-4 mt-4 mb-5 p-2">
            <div className="d-flex flex-row justify-content-between">
              <Link
                to="#"
                className="list-item"
                aria-current="page"
                style={{ pointerEvents: "none", fontWeight: 500 }}
              >
                Recipes
              </Link>
              <Link
                to="#"
                className="list-item"
                aria-current="page"
                style={{
                  pointerEvents: "none",
                  color: "grey",
                }}
              >
                Bookmarked
              </Link>
              <Link
                to="#"
                className="list-item"
                aria-current="page"
                style={{
                  pointerEvents: "none",
                  color: "grey",
                }}
              >
                Liked
              </Link>
            </div>
            {/* <div
              className="box mt-3"
              style={{ backgroundColor: "#EFC81A", height: 5, width: "100%" }}
            ></div> */}
          </div>

          {/* Notification */}
          {menu.isLoading ? (
            <div className="alert alert-primary">Loading ...</div>
          ) : null}
          {/* {menu?.isSuccess ? (
        menu?.data && menu?.data.length > 0 ? (
          <ScrollView style={{marginTop: 20}}>
            {menu?.data.map((item, index) => { */}
          {/* Card Recipe*/}
          <div className="d-flex flex-row p-1">
            <section className="col-12">
              {menu?.isSuccess ? (
                menu?.data && menu?.data.length > 0 ? (
                  <div>
                    {menu.data.map((item, index) => {
                      return (
                        <div className="card-recipe mb-5 " key={index}>
                          <div
                            className="d-flex flex-row align-items-center justify-content-between"
                            style={{ width: 650 }}
                          >
                            <div
                              className="img-recipe mr-10"
                              style={{ backgroundImage: `url(${item.photo})` }}
                            ></div>
                            <div className="" style={{ width: 320 }}>
                              <div
                                className="card-body d-flex flex-column"
                                style={{ margin: 10 }}
                              >
                                <div className="card-title mb-3">
                                  <Link
                                    to={`/detail-menu/${item.id}`}
                                    style={{
                                      fontSize: 35,
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    onClick={handleButtonClick}
                                    onMouseEnter={(e) =>
                                      (e.currentTarget.style.color = "#efc81a")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.currentTarget.style.color = "black")
                                    }
                                  >
                                    {item.title.replace(/\n/g, " ").length > 20
                                      ? item.title
                                          .replace(/\n/g, " ")
                                          .substring(0, 20) + "..."
                                      : item.title.replace(/\n/g, " ")}
                                  </Link>
                                </div>
                                <div
                                  className="card-text mb-3"
                                  style={{ fontSize: 18 }}
                                >
                                  Ingredients: <br />
                                  {item.ingredient.replace(/\n/g, " ").length >
                                  50
                                    ? item.ingredient
                                        .replace(/\n/g, " ")
                                        .substring(0, 50) + "..."
                                    : item.ingredient.replace(/\n/g, " ")}
                                </div>
                                <div
                                  className="category mb-3"
                                  style={{ width: 140 }}
                                >
                                  <span>{item.category}</span>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                  <Link to={`/edit-menu/${item.id}`}>
                                    <button
                                      type="submit"
                                      className="btn text-white"
                                      style={{
                                        fontSize: 14,
                                        backgroundColor: "#30C0F3",
                                        padding: "8px 35px",
                                      }}
                                      onClick={handleButtonClick}
                                      onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                          "#279cc7")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                          "#30C0F3")
                                      }
                                    >
                                      Edit Menu
                                    </button>
                                  </Link>
                                  <button
                                    onClick={() =>
                                      dispatch(deleteMenu(item.id, navigate))
                                    }
                                    type="submit"
                                    className="btn text-white"
                                    style={{
                                      fontSize: 14,
                                      backgroundColor: "#F57E71",
                                      padding: "8px 30px",
                                    }}
                                    onMouseEnter={(e) =>
                                      (e.currentTarget.style.backgroundColor =
                                        "#ca665b")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.currentTarget.style.backgroundColor =
                                        "#F57E71")
                                    }
                                  >
                                    Delete Menu
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // Data is empty
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      padding: 20,
                    }}
                  >
                    <img
                      src={recipeEmptyIllustration}
                      alt=""
                      height={500}
                      width={500}
                    />
                    <span
                      style={{
                        fontSize: 30,
                        color: "#EFC81A",
                      }}
                    >
                      You haven't uploaded any Recipe
                    </span>
                  </div>
                )
              ) : null}
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MyMenu;
