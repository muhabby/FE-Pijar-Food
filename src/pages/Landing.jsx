/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import foodImage1 from "/src/assets/food-image-1.png";
import foodImage2 from "/src/assets/food-image-2.png";
import foodImage3 from "/src/assets/food-image-3.png";
import foodImage4 from "/src/assets/food-image-4.png";
import foodImage5 from "/src/assets/food-image-5.png";
import foodImage6 from "/src/assets/food-image-6.png";
import foodImage7 from "/src/assets/food-image-7.png";
import foodImage8 from "/src/assets/food-image-8.png";
import foodImage9 from "/src/assets/food-image-9.png";
import decor1 from "/src/assets/decor-1.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landing-page">
        <>
          <div className="front-object">
            {/* Page 1 */}
            <div
              className="container container-relative mb-5"
              style={{ paddingLeft: 8 }}
            >
              {/* navbar */}
              <nav className="navbar navbar-expand-lg mt-4">
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
                        to={"/regist"}
                        className="nav-link"
                        style={{ fontSize: 17, color: "black" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#efc81a")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "black")
                        }
                      >
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/login"}
                        className="nav-link"
                        style={{ fontSize: 17, color: "black" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#efc81a")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "black")
                        }
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="box"
                  style={{ width: 5, height: 50, marginRight: 20 }}
                />
              </nav>
              {/* Content */}
              <div
                className="content d-flex flex-row align-items-center"
                style={{ height: 550 }}
              >
                <div className="left-content col-6 d-flex flex-column">
                  <span
                    className="mb-3"
                    style={{ fontSize: 60, fontWeight: 500, paddingRight: 20 }}
                  >
                    Discover Recipe &amp; Delicious Food
                  </span>
                  <div className="search-form">
                    <form
                      action="#"
                      method="GET"
                      className="form-inline search-form"
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control search-input"
                          placeholder="Search Restaurant, Food"
                          name="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="right-content col-6 d-flex flex-column align-items-end">
                  <img
                    src={foodImage1}
                    alt=""
                    style={{
                      borderRadius: 15,
                      maxWidth: 400,
                      maxHeight: 400,
                      objectFit: "contain",
                    }}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* Page 2 */}
            <div
              className="container container-relative mt-5 mb-5"
              style={{ paddingLeft: 8 }}
            >
              {/* First object */}
              <div
                className="d-flex flex-row align-items-center"
                style={{ paddingTop: 30 }}
              >
                <div
                  className="box"
                  style={{
                    backgroundColor: "#efc81a",
                    height: 70,
                    width: 10,
                    marginRight: 30,
                  }}
                />
                <span style={{ fontSize: 30 }}>Popular For You !</span>
              </div>
              {/* Content */}
              <div
                className="content p-1 d-flex flex-row align-items-center"
                style={{ height: 550 }}
              >
                <div className="left-content col-6 d-flex flex-column align-items-start">
                  <img
                    src={foodImage2}
                    alt=""
                    style={{
                      borderRadius: 15,
                      maxWidth: 420,
                      objectFit: "contain",
                    }}
                    className="img-fluid"
                  />
                </div>
                <div className="right-content col-6 d-flex flex-column">
                  <span
                    className="mb-3"
                    style={{ fontSize: 50, fontWeight: 500 }}
                  >
                    Healthy Bone Broth Ramen (Quick &amp; Easy)
                  </span>
                  <span className="mb-4" style={{ fontSize: 20 }}>
                    Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                    in a hurry? That’s right!
                  </span>
                  <button
                    type="submit"
                    className="col-4 btn text-white"
                    style={{
                      fontSize: "medium",
                      backgroundColor: "#efc81a",
                      padding: "15px 20px",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Page 3 */}
            <div
              className="container container-relative mb-5"
              style={{ paddingLeft: 8 }}
            >
              {/* First object */}
              <div
                className="d-flex flex-row align-items-center"
                style={{ paddingTop: 30 }}
              >
                <div
                  className="box"
                  style={{
                    backgroundColor: "#efc81a",
                    height: 70,
                    width: 10,
                    marginRight: 30,
                  }}
                />
                <span style={{ fontSize: 30 }}>New Recipe</span>
              </div>
              {/* Content */}
              <div
                className="content d-flex flex-row align-items-center"
                style={{ height: 550 }}
              >
                <div className="left-content col-6 d-flex flex-column align-items-start">
                  <img
                    src={foodImage3}
                    alt=""
                    style={{
                      borderRadius: 15,
                      maxWidth: 420,
                      objectFit: "contain",
                    }}
                    className="img-fluid"
                  />
                </div>
                <div className="right-content col-6 d-flex flex-column">
                  <span
                    className="mb-3"
                    style={{ fontSize: 50, fontWeight: 500 }}
                  >
                    Healthy Bone Broth Ramen (Quick &amp; Easy)
                  </span>
                  <span className="mb-4" style={{ fontSize: 20 }}>
                    Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                    in a hurry? That's right!
                  </span>
                  <button
                    type="submit"
                    className="col-4 btn text-white"
                    style={{
                      fontSize: "medium",
                      backgroundColor: "#efc81a",
                      padding: "15px 20px",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Page 4 */}
            <div
              className="container container-relative mb-5"
              style={{ paddingLeft: 8 }}
            >
              {/* First object */}
              <div className="d-flex flex-row align-items-center mb-5">
                <div
                  className="box"
                  style={{
                    backgroundColor: "#efc81a",
                    height: 70,
                    width: 10,
                    marginRight: 30,
                  }}
                />
                <span style={{ fontSize: 30 }}>Popular Recipe</span>
              </div>
              {/* Content */}
              <div
                className="content d-flex flex-column"
                style={{ height: 700 }}
              >
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-between mb-5">
                    <div className="image-container">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="text-overlay col-6">Chiken Kare</div>
                        <img src={foodImage4} alt="Gambar" />
                      </a>
                    </div>
                    <div className="image-container">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="text-overlay col-6">Bomb Chicken</div>
                        <img src={foodImage5} alt="Gambar" />
                      </a>
                    </div>
                    <div className="image-container">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="text-overlay col-6">
                          Banana Smothie Pop
                        </div>
                        <img src={foodImage6} alt="Gambar" />
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="image-container">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="text-overlay col-6">
                          Coffe Lava Cake
                        </div>
                        <img src={foodImage7} alt="Gambar" />
                      </a>
                    </div>
                    <div className="image-container">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="text-overlay col-6">Sugar Salmon</div>
                        <img src={foodImage8} alt="Gambar" />
                      </a>
                    </div>
                    <div className="image-container">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="text-overlay col-6">Indian Salad</div>
                        <img src={foodImage9} alt="Gambar" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background object*/}
          <div className="d-flex flex-column align-items-end">
            <div className="background-object">
              <div
                className="d-flex flex-column"
                style={{ width: 280, height: 740, backgroundColor: "#efc81a" }}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-start">
            <div className="background-object">
              <div
                className="d-flex flex-column"
                style={{ width: 280, height: 890 }}
              />
              <div className="d-flex flex-row">
                <img
                  className="img-fluid"
                  src={decor1}
                  alt=""
                  style={{ maxHeight: 35, maxWidth: 70, marginLeft: 5 }}
                />
                <div
                  style={{
                    marginLeft: 100,
                    marginTop: 10,
                    width: 350,
                    height: 400,
                    borderWidth: 5,
                    borderStyle: "solid",
                    borderColor: "#efc81a",
                    borderRadius: 15,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start">
            <div className="background-object">
              <div
                className="d-flex flex-column"
                style={{ width: 280, height: 1520 }}
              />
              <div
                className="d-flex flex-column"
                style={{ width: 280, height: 400, backgroundColor: "#efc81a" }}
              />
            </div>
          </div>
          {/* Footer */}
          <footer
            className="footer mt-5"
            style={{ backgroundColor: "#efc81a" }}
          >
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
              style={{ backgroundColor: "#efc81a" }}
            >
              <a
                href="#"
                style={{
                  padding: 10,
                  textDecoration: "none",
                  color: "#707070",
                }}
              >
                Product
              </a>
              <a
                href="#"
                style={{
                  padding: 10,
                  textDecoration: "none",
                  color: "#707070",
                }}
              >
                Company
              </a>
              <a
                href="#"
                style={{
                  padding: 10,
                  textDecoration: "none",
                  color: "#707070",
                }}
              >
                Learn more
              </a>
              <a
                href="#"
                style={{
                  padding: 10,
                  textDecoration: "none",
                  color: "#707070",
                }}
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
        </>
      </div>
    </>
  );
};

export default Landing;
