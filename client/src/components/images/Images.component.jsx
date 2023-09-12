import { Shoe, Glass, Hat, Bag } from "assets";
import ImageContainer from "./styles.components";

const Images = () => {
  return (
    <ImageContainer>
      <span className="circle_1_cs"></span>
      <span className="circle_2_cs"></span>
      <span className="circle_3_cs"></span>
      <Shoe className="img_shoe_cs" />
      <Hat className="img_hat_cs" />
      <Glass className="img_glass_cs" />
      <Bag className="img_bag_cs" />
    </ImageContainer>
  );
};
export default Images;
