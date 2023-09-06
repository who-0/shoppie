import { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";

const body = document.body;

const Login = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== "#70A1D7") {
      changeColor("/login");
    } else {
      body.style.background = color;
    }
    body.style.background = color;
  }, [color]);
  return <div>This is Login Page.</div>;
};
export default Login;
