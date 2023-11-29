import colors from "colors";
import { css, styled } from "styled-components";
const Wrapper = styled.div`
  //! change value ui for auth and profile
  width: 100%;
  text-align: center;
  padding: 5px 0px;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  ${(props) => {
    switch (props.$alert_type) {
      case "success":
        return css`
          color: ${colors.alert_success_color};
          background-color: ${colors.alert_success_bg_color};
        `;
      case "error":
        return css`
          color: ${colors.alert_error_color};
          background-color: ${colors.alert_error_bg_color};
        `;
      default:
        return;
    }
  }}
  
  /* &[${(props) => props.alert_type}] {
   
  }

  &[${(props) => props.alert_type}] {
  
  } */
`;
export default Wrapper;
