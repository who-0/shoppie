import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Navlink = styled(Link)`
  background-color: white;
  color: #424141;
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

  &:hover,
  &:active {
    background-color: ${(props) => props.color};
    color: white;
  }
`;

export default Navlink;
