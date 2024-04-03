/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import ayudiaPhoto from "/src/assets/ayudia-photo.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getMenuDetail } from "../redux/action/menu";
import Navbar from "../component/Navbar";

const DetailMenu = () => {
  const dispatch = useDispatch();
  const menu_detail = useSelector((state) => state.menu_detail);
  const { id } = useParams();
  const [activeBookmark, setActiveBookmark] = useState(false);
  const [activeThumbsUp, setActiveThumbsUp] = useState(false);

  const handleClickBookmark = () => {
    setActiveBookmark(!activeBookmark);
  };

  const handleClickThumbsUp = () => {
    setActiveThumbsUp(!activeThumbsUp);
  };

  useEffect(() => {
    dispatch(getMenuDetail(id));
  }, []);

  return (
    <>
      <Navbar />
      <div className="detail-menu">
        {/* Content */}
        <div
          className="content container d-flex flex-column"
          style={{ marginTop: 25, marginBottom: 100 }}
        >
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
                <div className="d-flex flex-row">
                  <span>20 Likes</span>
                  <span className="mx-2"> - </span>
                  <span>2 Comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notification */}
          {menu_detail.isLoading ? (
            <div className="alert alert-primary">Loading ...</div>
          ) : null}

          {/* body content */}
          <section className="row">
            {/* Title */}
            <div className="title d-flex flex-row justify-content-center mt-4 mb-4">
              <span style={{ fontSize: 50 }}>
                {menu_detail.data
                  ? menu_detail.data.title
                    ? menu_detail.data.title
                    : null
                  : null}
              </span>
            </div>

            {/* Recipe picture*/}
            <div className="photo d-flex flex-column align-items-center mt-4 mb-4">
              <div
                className="img-recipe"
                style={{ backgroundImage: `url(${menu_detail.data?.photo})` }}
              >
                {/* <img src={item.photo} className="img-fluid" alt="" style={{borderRadius:'15px', maxWidth:"350px"}}/> */}
              </div>
              {/* <img
                src={data?.photo}
                className="img-fluid"
                alt=""
                style={{ maxWidth: 700 }}
              /> */}
            </div>

            {/* Description recipe */}
            <div className="Ingredients d-flex flex-column mt-4 mb-4 ">
              <span style={{ fontSize: 40, marginBottom: 20 }}>
                Ingredients
              </span>
              <span style={{ fontSize: 20 }}>
                {menu_detail.data?.ingredient}
              </span>
            </div>

            {/* Bookmark & like */}
            <div className="filter d-flex flex-column mt-3 mb-3">
              <div className="d-flex flex-row" role="group">
                <button
                  className={
                    activeBookmark ? "btn active-btn" : "btn not-active-btn"
                  }
                  onClick={handleClickBookmark}
                >
                  <FontAwesomeIcon className="fas" icon={faBookmark} />
                </button>
                <button
                  className={
                    activeThumbsUp ? "btn active-btn" : "btn not-active-btn"
                  }
                  onClick={handleClickThumbsUp}
                >
                  <FontAwesomeIcon className="fas" icon={faThumbsUp} />
                </button>
              </div>
            </div>

            {/* Line */}
            <div className="line d-flex mt-4 mb-4">
              <div
                className="box"
                style={{ backgroundColor: "#EFC81A", height: 7, width: "100%" }}
              ></div>
            </div>

            {/* Commentator */}
            <div className="commentator d-flex flex-column mt-3 mb-3">
              <div className="d-flex flex-row mt-4 mb-4">
                <div className="profile col-2 d-flex flex-row align-items-center">
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
                    <span className="mb-1">Karen</span>
                    <span style={{ fontWeight: 600 }}>20 Recipe</span>
                  </div>
                  <div
                    className="box"
                    style={{
                      width: 5,
                      height: 50,
                      backgroundColor: "#EFC81A",
                      marginLeft: 20,
                    }}
                  />
                </div>
                <div className="comment-text col d-flex flex-column justify-content-center text-align-center">
                  <span style={{ fontSize: "small" }}>
                    Wow, I just made this and it was delicious! Thanks for
                    sharing!
                  </span>
                </div>
              </div>
              <div className="d-flex flex-row mt-4 mb-4">
                <div className="profile col-2 d-flex flex-row align-items-center">
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
                    <span className="mb-1">Ariel</span>
                    <span style={{ fontWeight: 600 }}>20 Recipe</span>
                  </div>
                  <div
                    className="box"
                    style={{
                      width: 5,
                      height: 50,
                      backgroundColor: "#EFC81A",
                      marginLeft: 20,
                    }}
                  />
                </div>
                <div className="comment-text col d-flex flex-column justify-content-center text-align-center">
                  <span style={{ fontSize: "small" }}>
                    So simple and delicious!
                  </span>
                </div>
              </div>
            </div>

            {/* Line */}
            <div className="line d-flex mt-4 mb-4">
              <div
                className="box"
                style={{ backgroundColor: "#EFC81A", height: 7, width: "100%" }}
              ></div>
            </div>

            {/* Input Comment */}
            <form action="" className="d-flex flex-column col-6 mt-4 mb-4">
              <div className="d-flex flex-column mb-4">
                <textarea
                  type="text"
                  className="form-control"
                  id="textComment"
                  placeholder="Your comment here!"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <div className="d-flex flex-column col-6">
                <button
                  type="submit"
                  className="btn-submit btn text-white p-2"
                  style={{ fontSize: 15, backgroundColor: "#FFB167" }}
                >
                  Send a comment
                </button>
              </div>
            </form>
          </section>
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

export default DetailMenu;
