import styled from "styled-components";
import styles from "../../styles";

const Nav = styled.div`
  /* width: 100%; */
  background-color: ${styles.color.nav_color};
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

  .isShow {
    display: none;
  }

  .menu_icon_container {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 2rem;
    color: white;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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
      transform: translateY(-100px) rotateX(90deg);
      opacity: 0;
    }
    .show {
      animation: menuani 1s ease-in;
      transform: translateY(0) rotateX(0);
      opacity: 1;
    }
    @keyframes menuani {
      0% {
        transform: translateY(-80px) rotateX(90deg);
        opacity: 0;
      }
      50% {
        transform: rotateX(0);
        opacity: 0.8;
      }
      90% {
        transform: translateY(20px) rotateX(0);
        opacity: 0.9;
      }
      100% {
        transform: translateY(0) rotateX(0);
      }
    }
  }
`;
export default Nav;
