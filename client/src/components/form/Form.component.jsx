import { Link } from "react-router-dom";
import Button from "../button/Button.component";
import Input from "../input/Input.component";
import FormCustom from "./styles.component";
const Form = ({ handleSubmit, handleChange, formField }) => {
  const { email, password } = formField;
  return (
    <FormCustom>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          text="Enter Email"
        />
        <Input
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          text="Enter Password"
        />
        <div className="btn_container">
          <Button type="button" name="google" />
          <Button type="submit" name="login" />
        </div>
      </form>
      <p>
        if you don't have account. Please{" "}
        <Link to="/signup" className="signup_link">
          Signup
        </Link>
      </p>
    </FormCustom>
  );
};
export default Form;
