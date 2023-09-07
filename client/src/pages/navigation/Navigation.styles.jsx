import styled from "styled-components";
import styles from "../../styles";

const Nav = styled.div`
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
`;
export default Nav;
