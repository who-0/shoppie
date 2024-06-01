import ProductInfo from "components/product-info/ProductInfo.component";

import Wrapper from "./styles.component";
import ImageContainer from "components/product-info-img-conatiner/ImageContainer.component";
import { Context } from "../src/contexts/AppConte";
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
