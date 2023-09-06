import { useContext, useEffect } from "react";
import { Context } from "../../contexts/AppContexts";

const body = document.body;

const Shop = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== "#A4D792") {
      changeColor("/shop");
    } else {
      body.style.background = color;
    }
  }, [color]);
  return <div>This is Shop Page.</div>;
};
export default Shop;
