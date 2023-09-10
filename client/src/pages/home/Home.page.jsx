import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";

import Content from "../../components/content_home/Content.component";
import Images from "../../components/img_home/Images.component";
import Container from "./styles.page";

const body = document.body;
const Home = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== "#727d71") {
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
