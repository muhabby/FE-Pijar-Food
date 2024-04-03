/* eslint-disable no-unused-vars */
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const authLogin = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOGIN_AUTH_PENDING" });
    const res = await axios.post(base_url + "/auth/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("data");
    console.log(data);
    console.log("res");
    console.log(res);
    dispatch({ type: "LOGIN_AUTH_SUCCESS", payload: res.data });
    navigate("/home");
  } catch (err) {
    console.log("err");
    console.log(err);
    console.log(err?.message ? err.message : err);
    dispatch({
      type: "LOGIN_AUTH_ERROR",
      payload: err?.response?.data?.message ?? "login error",
    });
  }
};

export const authLogout = () => async (dispatch, getState) => {
  dispatch({ type: "AUTH_LOGOUT" });
};

export const authRegist = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "REGIST_AUTH_PENDING" });
    const res = await axios.post(base_url + "/auth/register", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("data");
    console.log(data);
    console.log("res");
    console.log(res);
    dispatch({ type: "REGIST_AUTH_SUCCESS", payload: res.data });
    navigate("/login");
  } catch (err) {
    console.log("err");
    console.log(err);
    console.log(err?.message ? err.message : err);
    dispatch({
      type: "REGIST_AUTH_ERROR",
      payload: err?.response?.data?.message ?? "login error",
    });
  }
};
