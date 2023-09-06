const reducer = (state, action) => {
  switch (action.type) {
    case "/":
      return {
        ...state,
        logo: "logo_1",
        color: "#F7FDB6",
        home_active: true,
        shop_active: false,
        login_active: false,
      };
    case "/shop":
      return {
        ...state,
        color: "#A4D792",
        logo: "logo_2",
        home_active: false,
        shop_active: true,
        login_active: false,
      };
    case "/login":
      return {
        ...state,
        color: "#70A1D7",
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        login_active: true,
      };
    default:
      return state;
  }
};

export default reducer;
