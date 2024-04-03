/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../component/testNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;

const Menu = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  async function getData() {
    try {
      let res = await axios.get(`${base_url}/recipe/${id}`);
      console.log(res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    console.log(id);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ color: "black" }}>Menu</h1>
      <div className="">
        <h3>{data ? (data.title ? data.title : null) : null}</h3>
        <p>{data?.ingredient}</p>
      </div>
    </div>
  );
};
export default Menu;
