import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 3% 1%;
  position: relative;

  .product_info_overlay {
    position: absolute;
    top: -23px;
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
      justify-content: center;
      align-items: center;
      padding: 5% 0;

      .img_container {
        background-color: red;
        width: 60%;
      }
    }
  }
`;

export default Wrapper;
