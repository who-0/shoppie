import ProductCard from "../product-card/ProductCard.component";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";
import { useContext } from "react";
import { Loader, ProductDetail } from "components";

const ProductsContainer = ({ products }) => {
  const { loading, showProduct } = useContext(Context);
  if (loading) return <Loader order={false} />;
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
      {showProduct && <ProductDetail />}
    </Wrapper>
  );
};
export default ProductsContainer;
