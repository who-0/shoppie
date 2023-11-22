import { css, styled } from "styled-components";
import { Link } from "react-router-dom";
import colors from "colors";

const Navlink = styled(Link)`
  background-color: ${(props) => (props.isactive ? props.color : "white")};
  color: ${(props) => (props.isactive ? "white" : colors.nav_color)};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;  
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding: 6px 20px;
  border-radius: 4px;
  margin: 5px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: all .2s;
  /* margin:  ${(props) => (props.name === 'profile'  || props.name === 'dashboard' ? "5px" : 'auto ')} 5px; */

  ${props => {
    switch (props.name) {
      case "profile":
      case "dashboard":
        return css`
          margin: 5px 5px;
        `;
      case "status":
      case "products":
      case "orders":
      case "users":
        return css`
          margin: 15px 5px;
          background-color: ${(props) => (props.isactive ? props.color : '#424141')};
          color: ${(props) => (props.isactive ? "white" : colors.admin_color)};
          border-radius: ${props => props.isopen ? "50px":"5px"};
          font-size: 1.2rem;  
          padding: 10px 15px;

          .admin_icon{
            font-size: 1.6rem;
          }
        `
      default:
       return css`
        margin: auto 5px;
       `;
    }
  }}

  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }

  @media screen and (max-width: 426px) {
    width: 399px;
    height: 50px;
    letter-spacing: 1px;
    font-size: 1.3rem;
    margin: 7px 0;
    border-radius: 50px;
    border: ${(props) =>
      props.isactive ? "none" : `1px solid ${props.color}`};
    box-shadow: ${(props) => (props.isactive ? "0px 3px 6px gray" : "none")};
  }
  @media screen and (max-width: 376px) {
    width: 350px;
  }
  @media screen and (max-width: 321px) {
    width: 295px;
  }
`;

export default Navlink;
