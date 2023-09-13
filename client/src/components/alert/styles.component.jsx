import colors from "colors";
import { styled } from "styled-components";
const Wrapper = styled.div`
  color: ${colors.alert_error_color};
  background-color: ${colors.alert_error_bg_color};
  width: 80%;
  text-align: center;
  padding: 5px 0px;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export default Wrapper;
