import ProductBtn from "components/product-btn/ProductBtn.component";
import ProductCard from "../product-card/ProductCard.component";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";
import { useContext } from "react";

const ProductsContainer = ({ products }) => {
  const { skip, limit, total, changePage, acitvePage } = useContext(Context);
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
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
export default ProductsContainer;
