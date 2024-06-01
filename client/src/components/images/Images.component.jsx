import { Shoe, Glass, Hat, Bag } from "@assets";
import ImageContainer from "./styles.components";

const Images = () => {
  return (
    <ImageContainer>
      <span className="circle_1_cs"></span>
      <span className="circle_2_cs"></span>
      <span className="circle_3_cs"></span>
      <Shoe data-testid="svg-img" className="img_shoe_cs" />
      <Hat data-testid="svg-img" className="img_hat_cs" />
      <Glass data-testid="svg-img" className="img_glass_cs" />
      <Bag data-testid="svg-img" className="img_bag_cs" />
    </ImageContainer>
  );
};
export default Images;
