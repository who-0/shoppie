import { useNavigate } from "react-router-dom";
import BTN from "./styles.component";
import React, { useContext } from "react";
import { Context } from "../../contexts/AppContexts";

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

const Button = ({ title, type, path }) => {
  const navigate = useNavigate();
  const { changeLogo } = useContext(Context);
  const click = () => {
    navigate(path);
    changeLogo(path);
  };

  const Btn = getButton(type);
  return <Btn onClick={click}>{title}</Btn>;
};
export default Button;
