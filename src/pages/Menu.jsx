/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../component/Navbar"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const base_url = import.meta.env.VITE_BASE_URL

const Menu = () => {
    const [data, setData] = useState([])

    async function getData(){
        try {
            let res = await axios.get(`${base_url}/recipe`)
            console.log(res.data.data)
            setData(res.data.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Navbar />
            <h1 style={{ color: 'black' }}>Menu</h1>
            { data.length ? data.map((item, index) => {
                return (
                <div className="" key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.ingredient}</p>
                    <Link to={`/menu/${item.id}`}>
                        <p>Detail</p>
                    </Link>
                </div>
                )
            }) : null}
        </div>
    )
}
export default Menu
