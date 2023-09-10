import styles from "../styles";
const reducer = (state, action) => {
  switch (action.type) {
    case "/":
      return {
        ...state,
        logo: "logo_1",
        color: styles.color.home_color,
        home_active: true,
        shop_active: false,
        login_active: false,
        menu_open: false,
      };
    case "/shop":
      return {
        ...state,
        color: styles.color.shop_color,
        logo: "logo_2",
        home_active: false,
        shop_active: true,
        login_active: false,
        menu_open: false,
      };
    case "/login":
      return {
        ...state,
        color: styles.color.login_color,
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        login_active: true,
        menu_open: false,
      };
    case "/signup":
      return {
        ...state,
        color: styles.color.login_color,
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        login_active: true,
        menu_open: false,
      };
    case "open_menu":
      return { ...state, menu_open: !state.menu_open };
    default:
      return state;
  }
};

export default reducer;
