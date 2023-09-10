import { styled } from "styled-components";

const InputCS = styled.input`
  width: 60%;
  height: 40px;
  font-size: 1rem;
  margin: 2% auto;
  border: none;
  outline: none;
  padding-left: 10px;
  transition: all 0.3s;

  &:focus {
    box-shadow: 1px 10px 5px black;
  }

  @media screen and (max-width: 1025px) {
    width: 62%;
  }

  @media screen and (max-width: 769px) {
    width: 60%;
  }
  @media screen and (max-width: 426px) {
    width: 80%;
  }
`;

export default InputCS;
