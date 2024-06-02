import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;

  @media screen and (max-width: 1025px) {
    padding-top: 10%;
  }

  @media screen and (max-width: 426px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export default Container;
