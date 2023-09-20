import { styled } from "styled-components";

const InputCS = styled.input`
  width: 90%;
  height: 40px;
  font-size: 1rem;
  margin: 2% auto;
  border: none;
  outline: none;
  padding-left: 10px;
  transition: all 0.3s;
  animation: inputani 0.6s alternate ease-in 1;

  &:focus {
    box-shadow: 1px 10px 5px black;
  }

  @keyframes inputani {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 90%;
  }

  @media screen and (max-width: 769px) {
    width: 80%;
  }
  @media screen and (max-width: 426px) {
    width: 90%;
  }
`;

export default InputCS;
