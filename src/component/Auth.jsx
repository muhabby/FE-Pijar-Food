/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth({ children }) {
  const authData = useSelector((state) => state.auth_login.data);
  if (!authData) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
