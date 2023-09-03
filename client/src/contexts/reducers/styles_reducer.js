import {
  CHANGE_BACKGROUND_HOME,
  CHANGE_BACKGROUND_LOGIN,
  CHANGE_BACKGROUND_SHOP,
} from "../actions/styles_action";

const reducer = (state, action) => {
  if (action.type === CHANGE_BACKGROUND_HOME) {
    return { ...state, color: "#F7FDB6" };
  } else if (action.type === CHANGE_BACKGROUND_SHOP) {
    return { ...state, color: "#A4D792", route: "shop" };
  } else if (action.type === CHANGE_BACKGROUND_LOGIN) {
    return { ...state, color: "#70A1D7", route: "login" };
  }
  throw new Error("no such action");
};

export default reducer;
