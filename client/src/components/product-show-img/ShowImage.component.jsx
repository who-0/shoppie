/* eslint-disable react/prop-types */
import Wrapper from "./styles.component";

export const ShowImage = ({ imgaes }) => {
  return (
    <Wrapper>
      <img src={imgaes} alt={imgaes} />
    </Wrapper>
  );
};

export default ShowImage;
