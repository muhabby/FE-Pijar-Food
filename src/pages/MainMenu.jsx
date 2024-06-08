/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import backArrow from "/src/assets/chevron-back-outline.svg";
import forwardArrow from "/src/assets/chevron-forward-outline.svg";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { searchMenu } from "../redux/action/menu";

const MainMenu = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth_login.data.data);
  const searchMenuData = useSelector((state) => state.menu_search);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeCheckbox, setActiveCheckbox] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [inputData, setInputData] = useState({
    search: "",
  });

  // console.log("halaman ", page);

  useEffect(() => {
    dispatch(searchMenu(search, searchBy, page));
  }, [dispatch, search, searchBy, page]);

  const handleCheckboxChange = (value) => {
    if (activeCheckbox === value) {
      setActiveCheckbox("");
      setSearchBy("title");
      setSearch("");
      setPage(1);
    } else {
      setActiveCheckbox(value);
      setSearchBy("category.name");
      setSearch(value);
      setPage(1);
    }
  };

  const updateData = (e) => {
    e.preventDefault();
    setSearch(inputData.search);
    setActiveCheckbox("");
    setSearchBy("title");
    setPage(1);
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* navbar */}
      <Navbar />

      <div className="main-menu">
        {/* Content */}
        <div className="content container d-flex flex-column my-5">
          {/* Title */}
          <div className="title row p-1 mb-2">
            <p style={{ fontSize: 50, fontWeight: 500 }}>
              Discover Recipe <br />
              &amp; Delicious Food
            </p>
          </div>
          {/* Search */}
          <form onSubmit={updateData} className="search row p-1 mb-2">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Search Recipe"
                style={{ padding: 10, paddingLeft: 20 }}
                name="search"
                defaultValue={inputData.search}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-md text-white"
                style={{
                  backgroundColor: "#efc81a",
                  padding: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ceac18")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#EFC81A")
                }
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
                checked={activeCheckbox === "Main Course"}
                onChange={() => handleCheckboxChange("Main Course")}
              />
              <label
                htmlFor="toggleBtn1"
                className="btn toggle-btn toggle-label"
              >
                Main Course
              </label>
              <input
                type="checkbox"
                id="toggleBtn2"
                className="toggle-checkbox visually-hidden"
                checked={activeCheckbox === "Appetizer"}
                onChange={() => handleCheckboxChange("Appetizer")}
              />
              <label
                htmlFor="toggleBtn2"
                className="btn toggle-btn toggle-label"
              >
                Appetizer
              </label>
              <input
                type="checkbox"
                id="toggleBtn3"
                className="toggle-checkbox visually-hidden"
                checked={activeCheckbox === "Dessert"}
                onChange={() => handleCheckboxChange("Dessert")}
              />
              <label
                htmlFor="toggleBtn3"
                className="btn toggle-btn toggle-label"
              >
                Dessert
              </label>
            </div>
          </div>

          {/* Notification */}
          {searchMenuData?.isLoading ? (
            <div className="alert alert-primary">Loading ...</div>
          ) : null}

          {/* body content */}
          <div className="d-flex flex-row p-1">
            <section className="col-12">
              {/* Card Recipe*/}
              {searchMenuData?.isSuccess && searchMenuData?.data?.data
                ? searchMenuData?.data?.data?.map((item, index) => {
                    return (
                      <div className="card-recipe mt-5" key={index}>
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
                                {item.ingredient.replace(/\n/g, " ").length > 50
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
                              <div className="d-flex flex-row align-items-center">
                                {item.users_photo ? (
                                  <div
                                    style={{
                                      borderRadius: "100%",
                                      height: 40,
                                      width: 40,
                                      padding: "1.5px",
                                      marginRight: 15,
                                      backgroundImage: `url(${item.users_photo})`,
                                      backgroundPosition: "center",
                                      backgroundSize: "cover",
                                    }}
                                  ></div>
                                ) : (
                                  <div
                                    style={{
                                      borderRadius: "100%",
                                      height: 40,
                                      width: 40,
                                      padding: "1.5px",
                                      marginRight: 15,
                                      backgroundImage: `url(https://res.cloudinary.com/dpasid4jl/image/upload/v1717426859/general-assets/3_fuibe7.jpg)`,
                                      backgroundPosition: "center",
                                      backgroundSize: "cover",
                                    }}
                                  ></div>
                                )}
                                <div
                                  className="d-flex flex-column"
                                  style={{
                                    fontSize: 15,
                                    marginRight: 10,
                                    textAlign: "left",
                                  }}
                                >
                                  <span>{item.author}</span>
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

            {/* Decoration */}
            {/* <aside
              className="col-4 d-flex flex-column align-items-end justify-content-between"
              style={{ padding: "20px 0px" }}
            >
              <div
                className="box"
                style={{ height: 800, width: 40, backgroundColor: "#efc81a" }}
              />
              <div
                className="box"
                style={{ height: 800, width: 40, backgroundColor: "#efc81a" }}
              />
            </aside> */}
          </div>
        </div>

        {/* Page */}
        <div className="pagination row">
          <div
            className="col d-flex flex-column align-items-center"
            style={{ paddingBottom: 50 }}
          >
            <div className="d-flex flex-row align-items-center gap-4">
              <button
                type="submit"
                className="btn text-white"
                style={{
                  fontSize: "small",
                  backgroundColor: "#ffdd4500",
                  padding: "7 20",
                }}
                onClick={handlePrevPage}
                disabled={!searchMenuData?.data?.pagination?.pagePrev}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#eeeeee")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ffdd4500")
                }
              >
                <img
                  height={25}
                  width={25}
                  src={backArrow}
                  alt="Forward Arrow"
                />
              </button>
              <span style={{ fontSize: 20, fontWeight: 500 }}>
                {searchMenuData?.data?.pagination?.pageNow}
              </span>
              <button
                type="submit"
                className="btn text-white"
                style={{
                  fontSize: "small",
                  backgroundColor: "#ffdd4500",
                  padding: "7 20",
                }}
                onClick={handleNextPage}
                disabled={!searchMenuData?.data?.pagination?.pageNext}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#eeeeee")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ffdd4500")
                }
              >
                <img
                  height={25}
                  width={25}
                  src={forwardArrow}
                  alt="Forward Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainMenu;
