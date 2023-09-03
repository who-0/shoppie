import React, { useReducer } from "react";
// import createDataContext from "./createDataContext";
import reducer from "./reducers/styles_reducer";

export const initialState = {
  color: "red",
  route: "home",
};
export const Context = React.createContext();

export const StyleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeBodyBackgroundColor = (type) => {
    dispatch({ type });
  };
  return (
    <Context.Provider value={{ state, changeBodyBackgroundColor }}>
      {children}
    </Context.Provider>
  );
};

// export const { useAppContext, Provider } = createDataContext(
//   reducer,
//   { changeBodyBackgroundColor },
//   initialState
// );
