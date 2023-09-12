import { styled } from "styled-components";
import colors from "colors";
const Btn = styled.button`
  font-size: 1.3rem;
  padding: 5px 25px;
  border: none;
  outline: none;
  color: ${colors.btn_color};
  transition: all 0.2s;
  text-transform: capitalize;

  &:hover {
    background-color: ${colors.login_color};
    color: white;
  }
`;
export default Btn;
