import styled from "styled-components";
import styles from "../../styles";

const Nav = styled.div`
  /* width: 100%; */
  background-color: ${styles.color.nav_color};
  border-radius: 10px;
  margin: 10px 5px;
  display: flex;
  justify-content: space-between;

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  @media screen and (max-width: 1025px) {
  }
`;
export default Nav;
