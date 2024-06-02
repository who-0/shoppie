
import Wrapper from "./styles.component";
import {ImageContainer,ProductInfo} from "@components";
import { Context } from "../../contexts/AppContexts";
import { useContext } from "react";

const ProductDetail = () => {
  const { singleProduct } = useContext(Context);
  return (
    <Wrapper>
      <div className="product_info_container">
        <ImageContainer />
        <ProductInfo singleProduct={singleProduct} />
      </div>
    </Wrapper>
  );
};
export default ProductDetail;
