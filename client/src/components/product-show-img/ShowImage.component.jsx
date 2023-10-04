import Wrapper from "./styles.component";

export const ShowImage = ({ imgaes }) => {
  return (
    <Wrapper>
      <img src={imgaes[0]} alt="" />
    </Wrapper>
  );
};

export default ShowImage;
