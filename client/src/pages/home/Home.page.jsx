import React, { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";

import { Content, Images } from "components";

import Container from "./styles.page";
import colors from "colors";
import { HOME } from "contexts/actions";
const body = document.body;
const Home = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== colors.home_color) {
      changeColor(HOME);
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
