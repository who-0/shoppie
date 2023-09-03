import { useNavigate } from "react-router-dom";
import BTN from "./styles.component";

const getButton = (type) => {
  switch (type) {
    case "nav":
      return BTN.nav;
    case "shop":
      return BTN.shop;
    case "login":
      return BTN.login;
    default:
      return;
  }
};

const Button = ({ title, type, action }) => {
  const navigate = useNavigate();
  const click = () => {
    navigate(action);
  };

  const Btn = getButton(type);
  console.log("Btn", Btn);
  return <Btn onClick={click}>{title}</Btn>;
};
export default Button;
