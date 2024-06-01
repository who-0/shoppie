import Wrapper from "./styles.component";
const MiniImage = ({ images, showImage, changeShowImage }) => {
  return (
    <Wrapper>
      {images.map((img) => (
        <img
          src={img}
          alt="img"
          key={img}
          className={img === showImage ? "active" : null}
          onClick={() => changeShowImage(img)}
        />
      ))}
    </Wrapper>
  );
};
export default MiniImage;
