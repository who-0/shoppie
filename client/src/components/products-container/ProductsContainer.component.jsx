/* eslint-disable react/prop-types */
// import ProductCard from "../product-card/ProductCard.component";
import Wrapper from "./styles.component";
import { Context } from "../../contexts/AppContexts";
import { useContext } from "react";
import { Loader, ProductDetail, ProductCard } from "@components";

const ProductsContainer = ({ products, role = "normal" }) => {
  const { loading, showProduct } = useContext(Context);
  if (loading) return <Loader order={false} />;
  return (
    <Wrapper role={role}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} role={role} />
      ))}
      {showProduct && <ProductDetail />}
    </Wrapper>
  );
};
export default ProductsContainer;
