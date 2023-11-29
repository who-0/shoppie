import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: 450px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 426px){
    width: 90%;
    height: 270px;
  }
`;

export default Wrapper;
