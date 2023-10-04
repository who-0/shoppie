import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Wrapper from "./styles.component";

const MiniImage = ({ images }) => {
  return (
    <Wrapper>
      <BiChevronLeft className="previous_btn img_btn" />

      <img src={images[0]} alt="" className="active" />
      <img src={images[1]} alt="" />
      <img src={images[2]} alt="" />
      <img src={images[3]} alt="" />

      <BiChevronRight className="next_btn img_btn" />
    </Wrapper>
  );
};
export default MiniImage;
