import { loadData, saveData } from "../../Data/localStorage";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./Action";

const key = "token";

let verify = loadData(key);

const initialValue = {
  user: [],
  isAuth: verify ? true : false,
  token: verify || "",
  isLoading: false,
  isError: false,
};

const Reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      saveData(key, payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
        user: [],
      };

    default:
      return state;
  }
};

export { Reducer };