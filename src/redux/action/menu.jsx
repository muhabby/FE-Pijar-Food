/* eslint-disable no-unused-vars */
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL

export const getMenu = () =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: "GET_MENU_PENDING" })
            
            const res = await axios.get(base_url + "/recipe")
            
            dispatch({type:"GET_MENU_SUCCESS", payload: res.data.data})
        }
        catch (err) {
            console.log(err?.message ? err.message : err)
            dispatch({type:"GET_MENU_ERROR"})
        }
    }