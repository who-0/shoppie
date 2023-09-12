import colors from "colors";
const reducer = (state, action) => {
  switch (action.type) {
    case "/":
      return {
        ...state,
        logo: "logo_1",
        color: colors.home_color,
        home_active: true,
        shop_active: false,
        auth_active: false,
        menu_open: false,
      };
    case "/shop":
      return {
        ...state,
        color: colors.shop_color,
        logo: "logo_2",
        home_active: false,
        shop_active: true,
        auth_active: false,
        menu_open: false,
      };
    case "/auth":
      return {
        ...state,
        color: colors.login_color,
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        auth_active: true,
        menu_open: false,
      };
    case "user_signup":
      return { ...state, signup: !state.signup };
    case "open_menu":
      return { ...state, menu_open: !state.menu_open };
    case "submit_auth":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
