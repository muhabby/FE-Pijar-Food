/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link" aria-current="page">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link" aria-current="page">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu-create" className="nav-link" aria-current="page">Add Menu</Link>
                        </li>
                    </ul>
                </div>
                {/* <button className="btn btn-primary" onClick={token ? logout : login}>
                    {token ? "logout" : "login"}
                </button> */}
            </div>
        </nav>
    )
}

export default Navbar