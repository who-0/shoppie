import { styled } from "styled-components";
import { Link } from "react-router-dom";
import styles from "../../styles";

const Navlink = styled(Link)`
  background-color: ${(props) => (props.isactive ? props.color : "white")};
  color: ${(props) => (props.isactive ? "white" : styles.color.nav_color)};
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
`;

export default Navlink;
