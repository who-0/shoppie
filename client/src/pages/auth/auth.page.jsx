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
  const { color, changeColor, submitAuth, signup, displayAlert } =
    useContext(Context);

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
    const { password, cpassword, email, uname } = formField;
    if (!email || !uname || !password || !cpassword)
      return displayAlert("please all input required!");
    if (signup) {
      if (password !== cpassword)
        return displayAlert("password doesn't match. please try again.");
      submitAuth({ uname, email, password });
    } else {
      submitAuth({ email, password });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <LoginCS>
      <h2 className="title">{signup ? "signup" : "login"}</h2>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formField={formField}
      />
    </LoginCS>
  );
};
export default Auth;
