import { useReducer, createContext } from "react";

import reducer from "./reducers";

const Context = createContext();

const initialState = {
  color: "#F7FDB6",
  logo: "logo_1",
  home_active: true,
  shop_active: false,
  login_active: false,
  menu_open: false,
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "/":
//       return { logo: "Logo1" };
//     case "/shop":
//       return { logo: "Logo2" };
//     case "/login":
//       return { logo: "Logo3" };
//     default:
//       return state;
//   }
// };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (path) => {
    dispatch({ type: path });
  };
  const menuOpen = () => {
    console.log("hi");
    dispatch({ type: "open_menu" });
  };

  return (
    <Context.Provider value={{ ...state, changeColor, menuOpen }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
