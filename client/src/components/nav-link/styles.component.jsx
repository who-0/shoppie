import { styled } from "styled-components";
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

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 5px;

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
