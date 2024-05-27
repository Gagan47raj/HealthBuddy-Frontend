import axios from "axios";
import { 
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, 
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS 
} from "./ActionType";
import { API_BASE_URL } from "../../Config/apiConfig";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (data) => ({ type: REGISTER_SUCCESS, payload: data });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const data = response.data;
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        dispatch(registerSuccess(data));
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const data = response.data;
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: { "Authorization": `Bearer ${jwt}` }
        });

        console.log(response.data)
        dispatch(getUserSuccess(response.data));
    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT });
};
