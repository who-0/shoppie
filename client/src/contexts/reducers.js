const reducer = (state, action) => {
  switch (action.type) {
    case "/":
      return { logo: "Logo1" };
    case "/shop":
      return { logo: "Logo2" };
    case "/login":
      return { logo: "Logo3" };
    default:
      return state;
  }
};

export default reducer;
