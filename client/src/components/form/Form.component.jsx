/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../btn/Button.component";
import Input from "../input/Input.component";
import Wrapper from "./styles.component";
import { useContext } from "react";
import { Context } from "../../contexts/AppContexts";
import { Alert } from "@components";

const Form = ({ handleSubmit, handleChange, formField }) => {
  const { signUpUser, signup, alert } = useContext(Context);
  const { email, password, name, cpassword } = formField;

  return (
    <Wrapper $signup={+signup} onSubmit={handleSubmit}>
      {alert && <Alert />}
      {signup && (
        <Input
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
          text="Username"
        />
      )}
      <Input
        type="email"
        name="email"
        value={email}
        handleChange={handleChange}
        text="Email"
      />
      <Input
        type="password"
        name="password"
        value={password}
        handleChange={handleChange}
        text="Password"
      />
      {signup && (
        <Input
          type="password"
          name="cpassword"
          value={cpassword}
          handleChange={handleChange}
          text="Confirme Password"
        />
      )}
      <div className="btn_container">
        <Button type="submit" name={`${signup ? "signup" : "login"}`} />
      </div>

      <p>
        if you don't have account. Please{" "}
        <Link
          onClick={signUpUser}
          className="signup_link"
          data-testid="text-content"
        >
          {signup ? "login" : "signup"}
        </Link>
      </p>
    </Wrapper>
  );
};
export default Form;
