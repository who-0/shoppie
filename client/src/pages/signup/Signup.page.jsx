import { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";
const body = document.body;

const Signup = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== "#70A1D7") {
      changeColor("/login");
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return <div>This is SignUp Page</div>;
};
export default Signup;
