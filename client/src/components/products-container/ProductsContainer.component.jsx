import ProductCard from "../product-card/ProductCard.component";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";
import { useContext, useEffect } from "react";

const ProductsContainer = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Wrapper>
  );
};
export default ProductsContainer;
