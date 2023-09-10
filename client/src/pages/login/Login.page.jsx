import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/AppContexts";

import LoginCS from "./styles.page";

import Form from "../../components/form/Form.component";

const body = document.body;

const defaultState = {
  email: "",
  password: "",
};

const Login = () => {
  const { color, changeColor } = useContext(Context);

  const [formField, setFormField] = useState(defaultState);

  useEffect(() => {
    if (color !== "#70A1D7") {
      changeColor("/login");
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <LoginCS>
      <h2 className="title">Login</h2>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formField={formField}
      />
    </LoginCS>
  );
};
export default Login;
