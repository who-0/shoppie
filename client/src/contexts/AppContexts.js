import { useReducer, createContext } from "react";
import reducer from "./reducers";

const Context = createContext();

const initialState = {
  logo: "Logo1",
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

  const changeLogo = (path) => dispatch({ type: path });

  return (
    <Context.Provider value={{ ...state, changeLogo }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
