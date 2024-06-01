import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LogoContainer = styled(Link)`
  width: 280px;
  height: 50px;

  .logo {
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 426px) {
    width: 186px;
  }
  @media screen and (max-width: 376px) {
    width: 170px;
  }
`;

export default LogoContainer;
