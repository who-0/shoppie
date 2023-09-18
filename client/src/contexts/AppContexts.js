import { useReducer, createContext } from "react";
import reducer from "./reducers";
import axios from "axios";
import {
  USER_SIGNUP,
  OPEN_MENU,
  SUBMIT_AUTH_SUCCESS,
  SUBMIT_AUTH_START,
  SUBMIT_AUTH_ERROR,
  DISPLAY_ERROR,
  CLEAR_ERROR,
} from "./actions";

const data = localStorage.getItem("user");
const user = JSON.parse(data);

const initialState = {
  color: "",
  loading: false,
  logo: "logo_1",
  home_active: true,
  shop_active: false,
  auth_active: false,
  profile_active: false,
  menu_open: false,
  signup: false,
  isLogined: false,
  alert: false,
  alert_msg: "",
  alert_type: "",
  user: user || "",
  token: null,
};
const Context = createContext();

const API = axios.create({ baseURL: "/api/v1" });

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (action) => {
    dispatch({ type: action });
  };
  const menuOpen = () => {
    dispatch({ type: OPEN_MENU });
  };

  const signUpUser = () => {
    dispatch({ type: USER_SIGNUP });
  };

  const submitAuth = async (data) => {
    dispatch({ type: SUBMIT_AUTH_START });
    try {
      const authEndPoint = state.signup ? "signup" : "login";
      const response = await API.post(`/auth/${authEndPoint}`, data);
      const { user, token } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      let alertMsg;
      if (authEndPoint === "signup") {
        alertMsg = "User Created! Redirecting...";
      } else {
        alertMsg = "Login Successful! Redirecting....";
      }
      dispatch({
        type: SUBMIT_AUTH_SUCCESS,
        payload: { token, user, success: alertMsg },
      });
    } catch (error) {
      dispatch({
        type: SUBMIT_AUTH_ERROR,
        payload: { msg: error.response.data.msg },
      });
      clearAlert();
    }
  };

  const displayAlert = (msg) => {
    dispatch({ type: DISPLAY_ERROR, payload: msg });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 2000);
  };

  return (
    <Context.Provider
      value={{
        ...state,
        changeColor,
        menuOpen,
        signUpUser,
        submitAuth,
        displayAlert,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
