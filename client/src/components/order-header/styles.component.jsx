import colors from "@colors";
import { styled } from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3%;

  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    border-radius: 50px;
    background-color: lightgray;

    p {
      font-size: 1.3rem;
      text-transform: capitalize;

      &:last-child {
        color: ${colors.admin_color};
        margin-left: 5px;
      }
    }
  }
`;

export default Header;
