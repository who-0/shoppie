import { useContext, useEffect, useState } from "react";
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { SHOP } from "contexts/actions";
import { ProductsContainer, Search, ProductDetail } from "components";
import Wrapper from "./styles.page.jsx";
const body = document.body;

const Shop = () => {
  const [productName, setProductName] = useState("");
  const {
    color,
    changeColor,
    products,
    getAllProducts,
    searchProduct,
    showProduct,
    getAllCategories,
  } = useContext(Context);

  useEffect(() => {
    if (color !== colors.shop_color) {
      changeColor(SHOP);
    } else {
      body.style.background = color;
    }

    getAllCategories();
    // eslint-disable-next-line
  }, [color]);

  const handleChange = (e) => {
    setProductName(e.target.value);

    if (e.target.value.length === 0) {
      getAllProducts();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct(productName);
  };

  return (
    <Wrapper>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        productName={productName}
      />
      <ProductsContainer products={products} />
      {showProduct && <ProductDetail />}
    </Wrapper>
  );
};
export default Shop;
