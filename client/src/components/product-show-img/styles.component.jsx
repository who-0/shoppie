import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 82%;
  padding: 2%;
  margin-bottom: 3%;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 769px) {
    width: 97%;
    height: 72%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 73%;
  }
`;

export default Wrapper;
