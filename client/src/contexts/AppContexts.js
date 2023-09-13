import { useReducer, createContext } from "react";
import reducer from "./reducers";
import axios from "axios";
import {
  USER_SIGNUP,
  OPEN_MENU,
  SUBMIT_AUTH,
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
  menu_open: false,
  signup: false,
  alert: false,
  alert_msg: "",
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
    dispatch({ type: SUBMIT_AUTH, payload: data });
    const response = await API.post("/auth", {
      ...data,
      isSignup: state.signup,
    });
    console.log(response.data);
  };

  const displayAlert = (msg) => {
    dispatch({ type: DISPLAY_ERROR, payload: msg });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 3000);
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
