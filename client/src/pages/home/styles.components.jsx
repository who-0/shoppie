import { styled } from "styled-components";

const Container = styled.div`
  /* width: 100%; */
  /* min-height: 89.8vh; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;

  @media screen and (max-width: 1025px) {
    /* width: 90%; */
    padding-top: 10%;
  }

  @media screen and (max-width: 426px) {
    flex-direction: column-reverse;
  }
`;

export default Container;
