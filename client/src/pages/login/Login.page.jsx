import { useEffect } from "react";

const body = document.body;
const Login = () => {
  useEffect(() => {
    body.style.background = "#70A1D7";
  }, []);
  return <div>This is Login Page.</div>;
};
export default Login;
