/* eslint-disable no-unused-vars */
import React from 'react'
import ayudiaPhoto from '/src/assets/ayudia-photo.png'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const base_url = import.meta.env.VITE_BASE_URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzYzg4YzU4LTc5MTEtNDdhMi1hOGZmLTJkODg3NWMzYWE1ZCIsImZ1bGxfbmFtZSI6Ik11aGFiYnkgTSIsImVtYWlsIjoibXVoQGdtYWlsLmNvbSIsInByb2ZpbGVfcGljdHVyZSI6Im51bGwiLCJiaW8iOiJudWxsIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDMtMjNUMjE6MjA6NTEuODE3WiIsInVwZGF0ZWRfYXQiOiIyMDI0LTAzLTIzVDIxOjM1OjQ4LjUzMFoiLCJpYXQiOjE3MTEyMjYxNTh9.VwlxVEBDnfjyxEgdL8djOalaYXU_R79SapZwuoU81FA'

const AddMenu = () => {
  const navigate = useNavigate()
  const [photo, setPhoto] = useState()
  const [inputData, setInputData] = useState({
    title:"",
    ingredient:"",
    category_id:"",
    photo_url:""
  })

  // const postData = (event) => {
  //   event.preventDefault()
  //   let bodyData = new FormData()
  //   bodyData.append('title', inputData.title)
  //   bodyData.append('ingredient', inputData.ingredient)
  //   bodyData.append('category_id', inputData.category_id)
  //   bodyData.append('photo', photo)

  //   axios.post(base_url + "/recipe", bodyData, {
  //     headers: {
  //       "Authorization" : `Bearer ${token}`,
  //       "Content-Type": "multipart/form-data"
  //     }
  //   }).then((res)=>{
  //     console.log("success")
  //     console.log(res)
  //     navigate("/home")
  //   }).catch((err)=>{
  //     console.log("failed")
  //     console.log(err)
  //   })
  // }

  const postData = async (event) => {
    event.preventDefault();
    
    let bodyData = new FormData();
    bodyData.append('title', inputData.title);
    bodyData.append('ingredient', inputData.ingredient);
    bodyData.append('category_id', inputData.category_id);
    bodyData.append('photo', photo);

    try {
      const response = await axios.post(base_url + "/recipe", bodyData, {
        headers: {
          "Authorization" : `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("success");
      console.log(response);
      navigate("/home");
      window.scrollTo(0, 0);
    } catch (error) {
      console.log("failed");
      console.error(error);
    }
  }

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  
  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0])
    e.target.files[0] && setInputData({ ...inputData, photo_url: URL.createObjectURL(e.target.files[0]) })
    console.log(e.target.files)
  }

  return (
    <>
      <div className="add-menu">
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
                <Link to="/home" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-menu"
                  className="nav-link"
                  aria-current="page"
                  style={{ textDecorationLine: "underline" }}
                >
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
                marginRight: 20
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
                  marginRight: 15
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
                {/* {photo && <img src={inputData.photo_url} width={150} />}
                <input type="file" className="form-control" id="photo" required onChange={onChangePhoto} /> */}
                <div className="d-flex flex-column align-items-center justify-content-center" style={{position:'relative', border:'2px dashed #ccc', height:'300px'}} >
                  {photo && <img src={inputData.photo_url} className="img-fluid" alt="" style={{ maxHeight: 250 }} /> }
                </div>
                <input type="file" className="form-control" id="photo" onChange={onChangePhoto} />
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
                  required onChange={onChange}
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
                  required onChange={onChange}
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
                  required onChange={onChange}
                >
                  <option defaultValue="">Select category</option>
                  <option value={1}>Desert</option>
                  <option value={2}>Main Course</option>
                  <option value={3}>Appetizer</option>
                </select>
              </div>

              {/* Post Button*/}
              <div className="d-flex flex-column align-items-center mt-5">
                <button
                  type="submit"
                  className="btn-submit btn text-white"
                  style={{
                    padding: "10px 150px",
                    fontSize: 17,
                    backgroundColor: "#EFC81A"
                  }}
                >
                  Post
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
  )
}

export default AddMenu
