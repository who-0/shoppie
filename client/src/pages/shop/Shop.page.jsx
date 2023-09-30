import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { SHOP } from "contexts/actions";
import "./styles.scss";
const body = document.body;

const Shop = () => {
  const { color, changeColor, products, getAllProducts } = useContext(Context);

  useEffect(() => {
    if (color !== colors.shop_color) {
      changeColor(SHOP);
    } else {
      body.style.background = color;
    }
    getAllProducts();
    // eslint-disable-next-line
  }, [color]);
  return (
    <div>
      {products.products.foreach((product) => {
        return <div>{product.title}</div>;
      })}
    </div>
  );
};
export default Shop;
