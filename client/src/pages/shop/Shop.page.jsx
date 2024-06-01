import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/AppContexts.jsx";
import colors from "@colors";
import { SHOP } from "../../contexts/actions";
import { ProductsContainer, Search } from "@components";
import Wrapper from "./styles.page.jsx";
import {ProductBtn} from "@components";
const body = document.body;

const Shop = () => {
  const [productName, setProductName] = useState("");
  const {
    user,
    color,
    changeColor,
    products,
    getAllProducts,
    searchProduct,
    categories,
    skip,
    isCartOpen,
    limit,
    total,
    changePage,
    acitvePage,
  } = useContext(Context);

  useEffect(() => {
    if (color !== colors.shop_color) {
      changeColor(SHOP);
    } else {
      body.style.background = color;
    }
    getAllProducts();
    // eslint-disable-next-line
  }, [color, skip]);

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
        caterogires={categories}
        user={user}
        isCartOpen={isCartOpen}
      />
      <ProductsContainer products={products} />
      <ProductBtn
        skip={skip}
        limit={limit}
        total={total}
        changePage={changePage}
        acitvePage={acitvePage}
      />
    </Wrapper>
  );
};
export default Shop;
