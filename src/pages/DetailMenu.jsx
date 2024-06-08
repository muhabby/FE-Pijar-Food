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
import Footer from "../component/Footer";

const DetailMenu = () => {
  const dispatch = useDispatch();
  const menu_detail = useSelector((state) => state.menu_detail);
  const { id } = useParams();
  const [activeBookmark, setActiveBookmark] = useState(false);
  const [activeThumbsUp, setActiveThumbsUp] = useState(false);

  useEffect(() => {
    dispatch(getMenuDetail(id));
  }, [dispatch, id]);

  let dateRecipe = menu_detail?.data?.created_at;

  const dateRecipeShow = (dateRecipe) => {
    const dateObject = new Date(dateRecipe);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  const handleClickBookmark = () => {
    setActiveBookmark(!activeBookmark);
  };

  const handleClickThumbsUp = () => {
    setActiveThumbsUp(!activeThumbsUp);
  };

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
          {menu_detail?.data ? (
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
                    backgroundImage: `url(${menu_detail?.data?.users_photo})`,
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
                    {menu_detail?.data?.author}
                  </span>
                </div>
              </div>
              <div className="date-like col-6 d-flex flex-column justify-content-center">
                <div
                  className="d-flex flex-column align-items-end"
                  style={{ fontSize: "small" }}
                >
                  <span className="mb-1" style={{ fontSize: 17 }}>
                    {dateRecipeShow(dateRecipe)}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

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
              ></div>
            </div>

            {/* Description recipe */}
            <div className="Ingredients d-flex flex-column mt-4 mb-4 ">
              <span style={{ fontSize: 35, marginBottom: 20 }}>
                Ingredients :
              </span>
              <span style={{ fontSize: 20 }}>
                {menu_detail.data?.ingredient}
              </span>
            </div>

            {/* Bookmark & like */}
            {/* <div className="filter d-flex flex-column mt-3">
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
            </div> */}

            {/* Line */}
            {/* <div className="line d-flex mt-4 mb-4">
              <div
                className="box"
                style={{ backgroundColor: "#EFC81A", height: 7, width: "100%" }}
              ></div>
            </div> */}

            {/* Commentator */}
            {/* <div className="commentator d-flex flex-column mt-3 mb-3">
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
            </div> */}

            {/* Line */}
            {/* <div className="line d-flex mt-4 mb-4">
              <div
                className="box"
                style={{ backgroundColor: "#EFC81A", height: 7, width: "100%" }}
              ></div>
            </div> */}

            {/* Input Comment */}
            {/* <form action="" className="d-flex flex-column col-6 mt-4 mb-4">
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
            </form> */}
          </section>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailMenu;
