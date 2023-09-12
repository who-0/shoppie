import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import colors from "colors";

const body = document.body;

const Shop = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== colors.shop_color) {
      changeColor("/shop");
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return <div>This is Shop Page.</div>;
};
export default Shop;
