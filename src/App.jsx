/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMenu from "./pages/MyMenu";
import AddMenu from "./pages/AddMenu";
import DetailMenu from "./pages/DetailMenu";
import EditMenu from "./pages/EditMenu";
import Auth from "./component/Auth";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import RequestOTP from "./pages/RequestOTP";
import InputOTP from "./pages/InputOTP";
import ResetPassword from "./pages/ResetPassword";
import Landing from "./pages/Landing";
import MainMenu from "./pages/MainMenu";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/request-otp" element={<RequestOTP />} />
        <Route path="/input-otp" element={<InputOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            <Auth>
              <MainMenu />
            </Auth>
          }
        />
        <Route
          path="/my-menu"
          element={<Navigate to="/my-menu" replace={true} />}
        />
        <Route
          path="/my-menu"
          element={
            <Auth>
              <MyMenu />
            </Auth>
          }
        />
        <Route
          path="/detail-menu/:id"
          element={
            <Auth>
              <DetailMenu />
            </Auth>
          }
        />
        <Route
          path="/edit-menu/:id"
          element={
            <Auth>
              <EditMenu />
            </Auth>
          }
        />
        <Route
          path="/add-menu"
          element={
            <Auth>
              <AddMenu />
            </Auth>
          }
        />
        <Route
          path="/landing"
          element={
            <Auth>
              <Landing />
            </Auth>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Auth>
              <EditProfile />
            </Auth>
          }
        />
        <Route
          path="/change-password"
          element={
            <Auth>
              <ChangePassword />
            </Auth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
