/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import recipePicture from '/src/assets/recipe-picture.png'
import karenPhoto from '/src/assets/karen-photo.png'
import ayudiaPhoto from '/src/assets/ayudia-photo.png'

export const SearchMenu = () => {
  return (
    <>
      <div className="search-menu">
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textDecorationLine: "underline" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Add Recipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Search Menu
                </a>
              </li>
            </ul>
          </div>
          {/* Profile & Logout*/}
          <div className="profile d-flex flex-row" style={{ alignItems: "center" }}>
            <div
              className="box"
              style={{
                width: 5,
                height: 50,
                backgroundColor: "#EFC81A",
                marginRight: 20
              }}
            />
            <a href="#">
              <img
                src={ayudiaPhoto}
                style={{
                  border: 200,
                  borderRadius: "100%",
                  height: 40,
                  padding: "1.5px",
                  marginRight: 15
                }}
                className=""
                alt="..."
              />
            </a>
            <div
              className="d-flex flex-column"
              style={{ fontSize: "small", marginRight: 10, textAlign: "left" }}
            >
              <div className="">Ayudia</div>
              <div className="">
                <a
                  href="#"
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
          {/* Title */}
          <div className="title row p-1 mt-5 mb-2">
            <p style={{ fontSize: 50 }}>
              Discover Recipe <br />
              &amp; Delicious Food
            </p>
          </div>
          {/* Search */}
          <form className="search row p-1 mt-4 mb-4">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Telur Gulung"
                style={{ padding: 10, paddingLeft: 30 }}
              />
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-md text-white"
                style={{
                  backgroundColor: "#EFC81A",
                  padding: 10,
                  paddingLeft: 30,
                  paddingRight: 30
                }}
              >
                Search
              </button>
            </div>
          </form>
          {/* Filter */}
          <div className="filter row p-1 mt-4 mb-4">
            <div className="d-flex flex-row" role="group">
              <input
                type="checkbox"
                id="toggleBtn1"
                className="toggle-checkbox visually-hidden"
              />
              <label htmlFor="toggleBtn1" className="btn toggle-btn toggle-label">
                New
              </label>
              <input
                type="checkbox"
                id="toggleBtn2"
                className="toggle-checkbox visually-hidden"
              />
              <label htmlFor="toggleBtn2" className="btn toggle-btn toggle-label">
                Populer
              </label>
              <input
                type="checkbox"
                id="toggleBtn3"
                className="toggle-checkbox visually-hidden"
                defaultChecked=""
              />
              <label htmlFor="toggleBtn3" className="btn toggle-btn toggle-label">
                Vegetarian
              </label>
              <input
                type="checkbox"
                id="toggleBtn4"
                className="toggle-checkbox visually-hidden"
                defaultChecked=""
              />
              <label htmlFor="toggleBtn4" className="btn toggle-btn toggle-label">
                Breakfast
              </label>
            </div>
          </div>
          {/* body content */}
          <div className="d-flex flex-row p-1">
            <section className="col-8">
              {/* Card Recipe*/}
              <div className="card-recipe mt-4 mb-4">
                <div
                  className="card d-flex flex-row"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <div className="d-flex flex-row align-items-center">
                    <div className="col-6" style={{ marginRight: 20, maxWidth: 360 }}>
                      <img src={recipePicture} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6">
                      <div
                        className="card-body d-flex flex-column"
                        style={{ margin: 10 }}
                      >
                        <a
                          href="#"
                          className="card-title mb-3"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <span style={{ fontSize: 35 }}>
                            Bomb <br />
                            Chicken
                          </span>
                        </a>
                        <span className="card-text mb-4" style={{ fontSize: 18 }}>
                          Ingredients: <br /> chicken, dumpling wrap, garlic, spring
                          onion, soy sauce, black sesame seed.
                        </span>
                        <div className="like-comment-bookmark mb-4">
                          <span>10 Likes - 12 Comments - 3 Bookmarks</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src={karenPhoto}
                            style={{
                              border: 200,
                              borderRadius: "100%",
                              height: 40,
                              padding: "1.5px",
                              marginRight: 15
                            }}
                            className=""
                            alt="..."
                          />
                          <div
                            className="d-flex flex-column"
                            style={{
                              fontSize: 15,
                              marginRight: 10,
                              textAlign: "left"
                            }}
                          >
                            <div className="">Karen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Recipe*/}
              <div className="card-recipe mt-4 mb-4">
                <div
                  className="card d-flex flex-row"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <div className="d-flex flex-row align-items-center">
                    <div className="col-6" style={{ marginRight: 20, maxWidth: 360 }}>
                      <img src={recipePicture} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6">
                      <div
                        className="card-body d-flex flex-column"
                        style={{ margin: 10 }}
                      >
                        <span className="card-title mb-3" style={{ fontSize: 35 }}>
                          Bomb <br />
                          Chicken
                        </span>
                        <span className="card-text mb-4" style={{ fontSize: 18 }}>
                          Ingredients: <br /> chicken, dumpling wrap, garlic, spring
                          onion, soy sauce, black sesame seed.
                        </span>
                        <div className="like-comment-bookmark mb-4">
                          <span>10 Likes - 12 Comments - 3 Bookmarks</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src={karenPhoto}
                            style={{
                              border: 200,
                              borderRadius: "100%",
                              height: 40,
                              padding: "1.5px",
                              marginRight: 15
                            }}
                            className=""
                            alt="..."
                          />
                          <div
                            className="d-flex flex-column"
                            style={{
                              fontSize: 15,
                              marginRight: 10,
                              textAlign: "left"
                            }}
                          >
                            <div className="">Karen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Recipe*/}
              <div className="card-recipe mt-4 mb-4">
                <div
                  className="card d-flex flex-row"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <div className="d-flex flex-row align-items-center">
                    <div className="col-6" style={{ marginRight: 20, maxWidth: 360 }}>
                      <img src={recipePicture} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6">
                      <div
                        className="card-body d-flex flex-column"
                        style={{ margin: 10 }}
                      >
                        <span className="card-title mb-3" style={{ fontSize: 35 }}>
                          Bomb <br />
                          Chicken
                        </span>
                        <span className="card-text mb-4" style={{ fontSize: 18 }}>
                          Ingredients: <br /> chicken, dumpling wrap, garlic, spring
                          onion, soy sauce, black sesame seed.
                        </span>
                        <div className="like-comment-bookmark mb-4">
                          <span>10 Likes - 12 Comments - 3 Bookmarks</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src={karenPhoto}
                            style={{
                              border: 200,
                              borderRadius: "100%",
                              height: 40,
                              padding: "1.5px",
                              marginRight: 15
                            }}
                            className=""
                            alt="..."
                          />
                          <div
                            className="d-flex flex-column"
                            style={{
                              fontSize: 15,
                              marginRight: 10,
                              textAlign: "left"
                            }}
                          >
                            <div className="">Karen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Recipe*/}
              <div className="card-recipe mt-4 mb-4">
                <div
                  className="card d-flex flex-row"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <div className="d-flex flex-row align-items-center">
                    <div className="col-6" style={{ marginRight: 20, maxWidth: 360 }}>
                      <img src={recipePicture} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6">
                      <div
                        className="card-body d-flex flex-column"
                        style={{ margin: 10 }}
                      >
                        <span className="card-title mb-3" style={{ fontSize: 35 }}>
                          Bomb <br />
                          Chicken
                        </span>
                        <span className="card-text mb-4" style={{ fontSize: 18 }}>
                          Ingredients: <br /> chicken, dumpling wrap, garlic, spring
                          onion, soy sauce, black sesame seed.
                        </span>
                        <div className="like-comment-bookmark mb-4">
                          <span>10 Likes - 12 Comments - 3 Bookmarks</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src={karenPhoto}
                            style={{
                              border: 200,
                              borderRadius: "100%",
                              height: 40,
                              padding: "1.5px",
                              marginRight: 15
                            }}
                            className=""
                            alt="..."
                          />
                          <div
                            className="d-flex flex-column"
                            style={{
                              fontSize: 15,
                              marginRight: 10,
                              textAlign: "left"
                            }}
                          >
                            <div className="">Karen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Recipe*/}
              <div className="card-recipe mt-4">
                <div
                  className="card d-flex flex-row"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <div className="d-flex flex-row align-items-center">
                    <div className="col-6" style={{ marginRight: 20, maxWidth: 360 }}>
                      <img src={recipePicture} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6">
                      <div
                        className="card-body d-flex flex-column"
                        style={{ margin: 10 }}
                      >
                        <span className="card-title mb-3" style={{ fontSize: 35 }}>
                          Bomb <br />
                          Chicken
                        </span>
                        <span className="card-text mb-4" style={{ fontSize: 18 }}>
                          Ingredients: <br /> chicken, dumpling wrap, garlic, spring
                          onion, soy sauce, black sesame seed.
                        </span>
                        <div className="like-comment-bookmark mb-4">
                          <span>10 Likes - 12 Comments - 3 Bookmarks</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src={karenPhoto}
                            style={{
                              border: 200,
                              borderRadius: "100%",
                              height: 40,
                              padding: "1.5px",
                              marginRight: 15
                            }}
                            className=""
                            alt="..."
                          />
                          <div
                            className="d-flex flex-column"
                            style={{
                              fontSize: 15,
                              marginRight: 10,
                              textAlign: "left"
                            }}
                          >
                            <div className="">Karen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Decoration */}
            <aside
              className="col-4 d-flex flex-column align-items-end justify-content-between"
              style={{ padding: "20px 0px" }}
            >
              <div
                className="box"
                style={{ height: 800, width: 40, backgroundColor: "#EFC81A" }}
              />
              <div
                className="box"
                style={{ height: 800, width: 40, backgroundColor: "#EFC81A" }}
              />
            </aside>
          </div>
        </div>
        {/* Page */}
        <div className="pagination row mt-5 mb-5">
          <div
            className="col d-flex flex-column align-items-center"
            style={{ padding: 75 }}
          >
            <div className="d-flex flex-row align-items-center">
              <span style={{ marginRight: 30 }}>Show 1 - 5 from 20</span>
              <button
                type="submit"
                className="btn text-white"
                style={{
                  fontSize: "small",
                  backgroundColor: "#EFC81A",
                  padding: 10,
                  paddingLeft: 20,
                  paddingRight: 20
                }}
              >
                Next
              </button>
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
              href="#"
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Product
            </a>
            <a
              href="#"
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Company
            </a>
            <a
              href="#"
              style={{ padding: 10, textDecoration: "none", color: "#707070" }}
            >
              Learn more
            </a>
            <a
              href="#"
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
  )
}

export default SearchMenu