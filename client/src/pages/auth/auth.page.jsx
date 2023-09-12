import { useContext, useEffect, useState } from "react";
import { Context } from "contexts/AppContexts";

import LoginCS from "./styles.page";

import { Form } from "components";
import colors from "colors";

const body = document.body;

const defaultState = {
  email: "",
  password: "",
  uname: "",
  cpassword: "",
};

const Auth = () => {
  const { color, changeColor, submitAuth } = useContext(Context);

  const [formField, setFormField] = useState(defaultState);

  useEffect(() => {
    if (color !== colors.login_color) {
      changeColor("/auth");
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formField);
    submitAuth(formField);
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
export default Auth;
