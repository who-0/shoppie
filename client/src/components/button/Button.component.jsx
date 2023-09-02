import { useNavigate } from "react-router-dom";
import BTN from "./styles.component";

console.log("BTN", BTN);

const getButton = (type) => {
  return Object.keys(BTN).find((key) => {
    console.log("key", BTN[key] === type);
    return BTN[key] === type;
  });
};

const Button = ({ title, type, action }) => {
  const navigate = useNavigate();
  const click = () => {
    navigate(action);
  };
  console.log("type", type);
  const Btn = getButton(type);
  console.log("btn", Btn);
  return <Btn onClick={click}>{title}</Btn>;
};
export default Button;
