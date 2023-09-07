import { ReactComponent as Shoe } from "../../assets/shoe.svg";
import { ReactComponent as Glass } from "../../assets/glass.svg";
import { ReactComponent as Hat } from "../../assets/hat.svg";
import { ReactComponent as Bag } from "../../assets/side_bag_pack.svg";
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
