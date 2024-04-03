/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./pages/testMenu";
import MenuDetail from "./pages/testMenuDetail";
import MenuCreate from "./pages/testMenuCreate";
import ProfileMenu from "./pages/ProfileMenu";
import AddMenu from "./pages/AddMenu";
import DetailMenu from "./pages/DetailMenu";
import EditMenu from "./pages/EditMenu";
import Auth from "./component/Auth";
import Login from "./pages/Login";
import Regist from "./pages/Regist";

const Home = () => {
  return (
    <div>
      {/* <Menu /> */}
      <ProfileMenu />
    </div>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile-recipe" element={<ProfileMenu />} />
          <Route path="/detail-menu/:id" element={<DetailMenu />} />
          <Route path="/edit-menu/:id" element={<EditMenu />} />
          <Route
            path="/add-menu"
            element={
              <Auth>
                <AddMenu />
              </Auth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />

          {/* <Route path="/login" element={<testLogin />} /> */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
          <Route path="/menu-create" element={<MenuCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
