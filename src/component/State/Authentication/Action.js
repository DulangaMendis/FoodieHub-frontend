import axios from 'axios';
import {
  ADD_TO_FAVORITE_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionTypes";
import { api } from "../../config/api"; // Import the axios instance

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT-OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT-OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get("/auth/signin", {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
  }
};

export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });
  try {
    const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorite`, {}, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });
  try {
    localStorage.clear();
    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: null });
  } catch (error) {
    console.log("Error during logout:", error);
  }
};
