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
  userId: "",
  tokne: "",
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
      const { id, token } = response.data;
      localStorage.setItem("userId", id);
      let alertMsg;
      if (authEndPoint === "signup") {
        alertMsg = "User Created! Redirecting...";
      } else {
        alertMsg = "Login Successful! Redirecting....";
      }
      dispatch({
        type: SUBMIT_AUTH_SUCCESS,
        payload: { token, id, success: alertMsg },
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
    console.log("alert start");
    dispatch({ type: DISPLAY_ERROR, payload: msg });
    clearAlert();
    console.log("alert end");
  };

  const clearAlert = () => {
    console.log("clear start");
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 3000);
    console.log("clear end");
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
