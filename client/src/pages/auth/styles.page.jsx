import colors from "colors";
import styled from "styled-components";

const LoginCS = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-family: "Anton", sans-serif;
    font-size: 4rem;
    text-transform: capitalize;
    color: ${colors.login_header_color};
  }
`;
export default LoginCS;
