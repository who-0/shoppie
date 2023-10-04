import MiniImage from "components/product-mini-show-img/MiniImage.component";
import ShowImage from "components/product-show-img/ShowImage.component";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";
import { useContext } from "react";

const ImageContainer = () => {
  const { singleProduct } = useContext(Context);
  const { images } = singleProduct;

  return (
    <Wrapper>
      <ShowImage imgaes={images} />
      <MiniImage images={images} />
    </Wrapper>
  );
};
export default ImageContainer;
