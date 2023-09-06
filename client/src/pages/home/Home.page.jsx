import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";
import "./styles.components";

const body = document.body;

const Home = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== "#F7FDB6") {
      changeColor("/");
    } else {
      body.style.background = color;
    }
  }, [color]);

  return <div>This is a Home Page.</div>;
};
export default Home;
