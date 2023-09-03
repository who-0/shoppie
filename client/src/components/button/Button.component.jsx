import { useNavigate } from "react-router-dom";
import BTN from "./styles.component";
import React, { useContext } from "react";
import { Context } from "../../contexts/StylesContext";

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
  const { color, route } = useContext(Context);
  console.log(color, route);
  const click = () => {
    navigate(action);
  };

  const Btn = getButton(type);
  return <Btn onClick={click}>{title}</Btn>;
};
export default Button;
