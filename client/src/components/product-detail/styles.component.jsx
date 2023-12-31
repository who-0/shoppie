import { styled } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 87px;
  left: 0;
  width: 100%;
  height: 85vh;
  z-index: 10;
  border-radius: 10px;
  background-color: rgba(85, 87, 85, 25%);

  display: flex;
  justify-content: center;
  align-items: center;

  .product_info_container {
    width: 85%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2% 0;
  }

  @media screen and (max-width: 1025px) {
    .product_info_container {
      width: 93%;
    }
  }

  @media screen and (max-width: 426px) {
    padding: 2px;
    top: 72px;

    .product_info_container {
      height: 90%;
      flex-direction: column;
    }
  }
`;
export default Wrapper;
