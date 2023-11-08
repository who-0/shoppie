import { styled } from "styled-components";

const Wrapper = styled.div`
/* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  position: relative;
  padding-bottom: 5%;

  @media screen and (max-width: 1025px) {
    gap: 30px;
  }
`;
export default Wrapper;
