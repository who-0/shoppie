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
`;

export default LogoContainer;
