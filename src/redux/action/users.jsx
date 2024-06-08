/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getUsers = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "USERS_DETAIL_PENDING" });

    const res = await axios.get(`${base_url}/users/${id}`);
    
    // console.log("res");
    // console.log(res);
    dispatch({ type: "USERS_DETAIL_SUCCESS", payload: res.data.data });
    
    window.scrollTo(0, 0);
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({ type: "USERS_DETAIL_ERROR" });
  }
};

export const updateUsers =
  (data, navigate) => async (dispatch, getState) => {
    try {
      dispatch({ type: "USERS_UPDATE_PENDING" });
      let token = getState().auth_login.data.token;

      const res = await axios.put(base_url + "/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      // console.log("res");
      // console.log(res);
      dispatch({ type: "USERS_UPDATE_SUCCESS", payload: res.data });
      
      navigate("/home");
      window.scrollTo(0, 0);
    } catch (err) {
      console.log("err");
      console.log(err);
      console.log(err?.message ? err.message : err);
      dispatch({
        type: "USERS_UPDATE_ERROR",
        payload: err?.response?.data?.message ?? "update users error",
      });
    }
  };
