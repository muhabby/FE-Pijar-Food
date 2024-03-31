/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../component/Navbar"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMenu } from '../redux/action/menu'
import { useDispatch, useSelector } from 'react-redux'

const Menu = () => {
    const dispatch = useDispatch()
    const menu = useSelector((state)=>state.menu)

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    return (
        <div>
            <Navbar />
            {menu.isLoading ?
            <div className="alert alert-primary">loading ...</div>
            : null}
            <h1 style={{ color: 'black' }} onClick={()=>dispatch(getMenu())}>Menu</h1>
            { menu.isSuccess && menu.data ? menu.data.map((item, index) => {
                return (
                <div className="alert-primary" key={index}>
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
