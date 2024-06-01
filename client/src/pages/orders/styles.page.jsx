import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 89vh;
  padding: 20px;
  overflow: auto;
  position: relative;

  @media screen and (max-width: 376px) {
    padding: 0px;
  }
`;
export default Wrapper;
