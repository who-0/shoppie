import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";
import { ReactComponent as Shoe } from "../../assets/shoe.svg";
import "./styles.components.css";

const body = document.body;

const Home = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== "#F7FDB6") {
      changeColor("/");
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);

  return (
    <div className="container_cs">
      <div className="content_conatiner_cs">
        <h1>Life is</h1>
        <div className="content_ani_cs">Eazy</div>
      </div>
      <div className="image-container_cs">
        <Shoe />
      </div>
    </div>
  );
};
export default Home;
