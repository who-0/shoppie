import styled from "styled-components";
import colors from "colors";

const Nav = styled.div`
  /* width: 100%; */
  background-color: ${colors.nav_color};
  border-radius: 10px;
  margin: 10px 5px;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    z-index: 10;
  }

  @media screen and (max-width: 426px) {
    .btn-container {
      position: absolute;
      top: 75px;
      left: 0;
      border-radius: 10px;
      padding: 10px 5px;
      margin: 0 7px;
      background-color: white;
      flex-direction: column;
      transition: all 0.5s;
      transform: translateY(-80px) rotateX(90deg);
      opacity: 0;
    }
    .show {
      animation: menuani 0.5s ease-in;
      transform: translateY(0) rotateX(0);
      opacity: 1;
    }
    @keyframes menuani {
      0% {
        transform: translateY(-80px) rotateX(90deg);
        opacity: 0;
      }
      50% {
        transform: translateY(20px) rotateX(0);
        opacity: 0.9;
      }
      100% {
        transform: translateY(0) rotateX(0);
        opacity: 1;
      }
    }
  }
`;
export default Nav;
