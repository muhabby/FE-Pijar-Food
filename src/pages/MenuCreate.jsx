/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import axios from 'axios'

const base_url = import.meta.env.VITE_BASE_URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzYzg4YzU4LTc5MTEtNDdhMi1hOGZmLTJkODg3NWMzYWE1ZCIsImZ1bGxfbmFtZSI6Ik11aGFiYnkgTSIsImVtYWlsIjoibXVoQGdtYWlsLmNvbSIsInByb2ZpbGVfcGljdHVyZSI6Im51bGwiLCJiaW8iOiJudWxsIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDMtMjNUMjE6MjA6NTEuODE3WiIsInVwZGF0ZWRfYXQiOiIyMDI0LTAzLTIzVDIxOjM1OjQ4LjUzMFoiLCJpYXQiOjE3MTEyMjYxNTh9.VwlxVEBDnfjyxEgdL8djOalaYXU_R79SapZwuoU81FA'

const MenuCreate = () => {
    const navigate = useNavigate()
    const [photo, setPhoto] = useState()
    const [inputData, setInputData] = useState({
        title:"",
        ingredient:"",
        category_id:1,
        photo_url:""
    })

    const postData = (event) => {
        event.preventDefault()
        let bodyData = new FormData()
        bodyData.append('title', inputData.title)
        bodyData.append('ingredient', inputData.ingredient)
        bodyData.append('category_id', inputData.category_id)
        bodyData.append('photo', photo)

        axios.post(base_url+"/recipe",bodyData,{
			headers: {
				"Authorization" : `Bearer ${token}`,
				"Content-Type": "multipart/form-data"
			}
		}).then((res)=>{
			console.log("success")
			console.log(res)
			navigate("/menu")
		}).catch((err)=>{
			console.log("failed")
			console.log(err)
		})
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
        <div>
            <Navbar />
            <div className="container">
                <h1>Create Recipe</h1>
                <form onSubmit={postData}>
					{photo && <img src={inputData.photo_url} width={150} />}
					<div className="form-group">
						<label htmlFor="photo">Photo</label>
						<input type="file" className="form-control" id="photo" required onChange={onChangePhoto} />
					</div>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" className="form-control" name="title" id="title" placeholder="input your title" required onChange={onChange} />
					</div>
					<div className="form-group">
						<label htmlFor="ingredient">Ingredient</label>
						<input type="text" className="form-control" name="ingredient" id="ingredient" placeholder="input your ingredient" required onChange={onChange} />
					</div>
					<button type="submit" className="btn btn-primary mt-2">
								Submit
					</button>
				</form>
            </div>
        </div>
    )
}

export default MenuCreate
