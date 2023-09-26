import { Link } from "react-router-dom";
import Button from "../btn/Button.component";
import Input from "../input/Input.component";
import Wrapper from "./styles.component";
import { useContext } from "react";
import { Context } from "contexts/AppContexts";
import Alert from "components/alert/Alert.component";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Form = ({ handleSubmit, handleChange, formField }) => {
  const { signUpUser, signup, alert } = useContext(Context);
  const { email, password, name, cpassword } = formField;
  const googleAuth = () => {
    window.open(`http://localhost:4000/auth/google`, "_self");
  };
  // const google = () => {
  //   googleAuth();
  // };
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
        {/* <Button type="button" name="google" func={google} /> */}
        <Button type="submit" name="google" func={googleAuth} />
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
