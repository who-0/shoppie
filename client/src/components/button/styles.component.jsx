import styled from "styled-components";

const NavBtn = styled.button`
  width: 100px;
  height: 37px;
  color: #424141;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: white;
  transition: all 0.2s;

  &:hover {
    background-color: #f7fdb6;
  }
`;

const shop = styled(NavBtn)`
  background-color: red;
  $home-color: #a4d792;
`;
const login = styled(NavBtn)`
  background-color: blue;
  $home-color: #70a1d7;
`;

const BTN = {
  nav: NavBtn,
  shop,
  login,
};

export default BTN;
