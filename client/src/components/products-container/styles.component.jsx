import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  position: relative;
  padding-bottom: 5%;

  @media screen and (max-width: 1025px) {
    gap: 30px;
  }

  @media screen and (max-width: 769px) {
    padding-bottom: 7%;
  }

  @media screen and (max-width: 426px) {
    gap: 7px;
    padding-bottom: 10%;
  }

  @media screen and (max-width: 321px) {
    padding-bottom: 12%;
  }
`;
export default Wrapper;
