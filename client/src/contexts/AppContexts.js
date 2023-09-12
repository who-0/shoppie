import { useReducer, createContext } from "react";
import reducer from "./reducers";
import axios from "axios";

const Context = createContext();

const initialState = {
  color: "",
  loading: false,
  logo: "logo_1",
  home_active: true,
  shop_active: false,
  auth_active: false,
  menu_open: false,
  signup: false,
};

const API = axios.create({ baseURL: "/api/v1" });

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (path) => {
    dispatch({ type: path });
  };
  const menuOpen = () => {
    dispatch({ type: "open_menu" });
  };

  const signUpUser = () => {
    dispatch({ type: "user_signup" });
  };

  const submitAuth = async (data) => {
    dispatch({ type: "submit_auth", payload: data });
    const response = await API.post("/auth", data);
    console.log(response.data);
  };

  return (
    <Context.Provider
      value={{ ...state, changeColor, menuOpen, signUpUser, submitAuth }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
