import { useContext, useEffect, useState } from "react";
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { SHOP } from "contexts/actions";
import { ProductsContainer, Search } from "components";

import Wrapper from "./styles.page.jsx";
const body = document.body;

const Shop = () => {
  const [productName, setProductName] = useState("");
  const { color, changeColor, products, getAllProducts, searchProduct } =
    useContext(Context);

  useEffect(() => {
    if (color !== colors.shop_color) {
      changeColor(SHOP);
    } else {
      body.style.background = color;
    }
    getAllProducts();
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
      {/* <ProductsContainer products={products} /> */}

      <div className="product_info_overlay">
        <div className="product_info_container">
          <div className="img_container">
            <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="" />
            {/* <img src="https://i.dummyjson.com/data/products/1/2.jpg" alt="" />
          <img src="https://i.dummyjson.com/data/products/1/3.jpg" alt="" />
          <img src="https://i.dummyjson.com/data/products/1/4.jpg" alt="" /> */}
          </div>
          <div className="info_container">
            <h1>iPhone 9</h1>
            <p>An apple mobile which is nothing like apple</p>
            <h3>Price:$ 549</h3>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Shop;
