/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzYzg4YzU4LTc5MTEtNDdhMi1hOGZmLTJkODg3NWMzYWE1ZCIsImZ1bGxfbmFtZSI6Ik11aGFiYnkgTSIsImVtYWlsIjoibXVoQGdtYWlsLmNvbSIsInByb2ZpbGVfcGljdHVyZSI6Im51bGwiLCJiaW8iOiJudWxsIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDMtMjNUMjE6MjA6NTEuODE3WiIsInVwZGF0ZWRfYXQiOiIyMDI0LTAzLTIzVDIxOjM1OjQ4LjUzMFoiLCJpYXQiOjE3MTEyMjYxNTh9.VwlxVEBDnfjyxEgdL8djOalaYXU_R79SapZwuoU81FA";

export const getMenu = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_MENU_PENDING" });

    const res = await axios.get(base_url + "/recipe");
    console.log("res");
    console.log(res);

    dispatch({ type: "GET_MENU_SUCCESS", payload: res.data.data });
    window.scrollTo(0, 0);
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({ type: "GET_MENU_ERROR" });
  }
};

export const postMenu = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "POST_MENU_PENDING" });
    let token = getState().auth_login.data.token;

    const res = await axios.post(base_url + "/recipe", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("res");
    console.log(res);

    dispatch({ type: "POST_MENU_SUCCESS", payload: res.data });
    navigate("/home");
    window.scrollTo(0, 0);
  } catch (err) {
    console.log("err");
    console.log(err);
    console.log(err?.message ? err.message : err);
    dispatch({
      type: "POST_MENU_ERROR",
      payload: err?.response?.data?.message ?? "post menu error",
    });
  }
};

export const deleteMenu = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "DELETE_MENU_PENDING" });
    let token = getState().auth_login.data.token;

    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const res = await axios.delete(`${base_url}/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: "DELETE_MENU_SUCCESS", payload: res.data.data });

      // Refresh halaman
      // window.location.reload();
      location.href = location.href;
    }
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({ type: "DELETE_MENU_ERROR" });
  }
};

export const getMenuDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_MENU_DETAIL_PENDING" });

    const res = await axios.get(`${base_url}/recipe/${id}`);
    console.log("res");
    console.log(res);

    dispatch({ type: "GET_MENU_DETAIL_SUCCESS", payload: res.data.data });
    window.scrollTo(0, 0);
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({ type: "GET_MENU_DETAIL_ERROR" });
  }
};

export const updateMenu =
  (id, data, navigate) => async (dispatch, getState) => {
    try {
      dispatch({ type: "UPDATE_MENU_PENDING" });
      let token = getState().auth_login.data.token;

      const res = await axios.put(base_url + "/recipe/" + id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res");
      console.log(res);

      dispatch({ type: "UPDATE_MENU_SUCCESS", payload: res.data });
      navigate("/home");
      window.scrollTo(0, 0);
    } catch (err) {
      console.log("err");
      console.log(err);
      console.log(err?.message ? err.message : err);
      dispatch({
        type: "UPDATE_MENU_ERROR",
        payload: err?.response?.data?.message ?? "update menu error",
      });
    }
  };
