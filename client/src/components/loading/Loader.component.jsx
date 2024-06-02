/* eslint-disable react/prop-types */
import Wrapper from "./styles.component";

const Loader = ({ order }) => {
  return (
    <Wrapper order={+order}>
      <div className="loading-spinner"></div>
    </Wrapper>
  );
};
export default Loader;
