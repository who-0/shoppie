import { styled } from "styled-components";

const Btn = styled.button`
  font-size: 1.3rem;
  padding: 5px 25px;
  border: none;
  outline: none;
  color: #003249;
  transition: all 0.2s;
  text-transform: capitalize;

  &:hover {
    background-color: #0d47a1;
    color: white;
  }
`;
export default Btn;
