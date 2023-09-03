import { createContext, useReducer } from "react";
const AppProvider = createContext();

const initalState = { color: "#f7fdb6" };

const reducer = (state, action) => {
  switch (action.type) {
    case "change_color_shop":
      return { ...state, color: "#A4D792" };
    case "change_color_login":
      return { ...state, color: "#70A1D7" };
    default:
      return state;
  }
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const changeColorShop = () => {
    dispatch({ type: "change_color_shop" });
  };
  const changeColorLogin = () => {
    dispatch({ type: "change_color_login" });
  };

  return (
    <AppProvider.Provider
      value={{ ...state, changeColorLogin, changeColorShop }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export { AppContext, initalState, AppProvider };
