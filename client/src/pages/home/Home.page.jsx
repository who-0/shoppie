import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";

import Content from "../../components/content_home/Content.component";
import Images from "../../components/img_home/Images.component";
import Container from "./styles.components";

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
    <Container>
      <Content />
      <Images />
    </Container>
  );
};
export default Home;
