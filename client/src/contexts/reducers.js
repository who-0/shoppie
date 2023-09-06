const reducer = (state, action) => {
  switch (action.type) {
    case "/":
      return { logo: "logo_1", color: "#F7FDB6" };
    case "/shop":
      return { color: "#A4D792", logo: "logo_2" };
    case "/login":
      return { color: "#70A1D7", logo: "logo_3" };
    default:
      return state;
  }
};

export default reducer;
