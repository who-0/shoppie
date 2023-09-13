import colors from "colors";
import {
  HOME,
  SHOP,
  AUTH,
  USER_SIGNUP,
  OPEN_MENU,
  SUBMIT_AUTH,
  DISPLAY_ERROR,
  CLEAR_ERROR,
} from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        logo: "logo_1",
        color: colors.home_color,
        home_active: true,
        shop_active: false,
        auth_active: false,
        menu_open: false,
      };
    case SHOP:
      return {
        ...state,
        color: colors.shop_color,
        logo: "logo_2",
        home_active: false,
        shop_active: true,
        auth_active: false,
        menu_open: false,
      };
    case AUTH:
      return {
        ...state,
        color: colors.login_color,
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        auth_active: true,
        menu_open: false,
      };
    case USER_SIGNUP:
      return { ...state, signup: !state.signup };
    case OPEN_MENU:
      return { ...state, menu_open: !state.menu_open };
    case SUBMIT_AUTH:
      return { ...state, loading: true };
    case DISPLAY_ERROR:
      return { ...state, alert: true, alert_msg: action.payload };
    case CLEAR_ERROR:
      return { ...state, alert: false };
    default:
      return state;
  }
};

export default reducer;
