/* eslint-disable no-unused-vars */
const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false
}

const menuReducers = (state = initialState, action) => {
    if (action.type === 'GET_MENU_PENDING') {
        return {
            ...state, isLoading: true,
            data: null
        }
    }
    else if (action.type === 'GET_MENU_SUCCESS') {
        return {
            ...state, isLoading: false,
            isSuccess: true,
            data: action.payload
        }
    }
    else if (action.type === 'GET_MENU_ERROR') {
        return {
            ...state, isLoading: false,
            isSuccess: false,
            isError: true,
            data: null
        }
    }
    else {
        return state
    }
}

export default menuReducers