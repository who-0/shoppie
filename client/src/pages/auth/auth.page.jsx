import colors from "colors";
import { useContext, useEffect, useState } from "react";
import { Context } from "contexts/AppContexts";
import { useNavigate } from "react-router-dom";
import { Form } from "components";
import LoginCS from "./styles.page";
import { AUTH, DISPLAY_ERROR } from "contexts/actions";

const body = document.body;

const defaultState = {
  email: "",
  password: "",
  name: "",
  cpassword: "",
};

const Auth = () => {
  const { color, changeColor, submitAuth, signup, displayAlert, user } =
    useContext(Context);
  const [formField, setFormField] = useState(defaultState);
  const navigate = useNavigate();
  useEffect(() => {
    if (color !== colors.login_color) {
      changeColor(AUTH);
    } else {
      body.style.background = color;
    }
    if (user) {
      setTimeout(() => {
        navigate("/shop");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [color, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, cpassword, email, name } = formField;
    if (!email || !password)
      return displayAlert(DISPLAY_ERROR, "please all input required!");
    if (signup) {
      if (password !== cpassword) {
        return displayAlert(
          DISPLAY_ERROR,
          "password doesn't match. please try again."
        );
      } else if (!name) {
        return displayAlert(DISPLAY_ERROR, "Username is require.");
      }
      submitAuth({ name, email, password });
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
