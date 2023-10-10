import { styled, css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${(props) => {
    switch (props.$styleType) {
      case "shop":
        return css`
          justify-content: space-between;
          margin: 10px 0;
          .title {
            width: 45%;
          }

          .price {
            width: 20%;
            text-align: end;
          }

          .btn {
            cursor: pointer;
          }
        `;
      case "order":
        return css`
          /* background-color: green; */
          font-size: 1.5rem;
          justify-content: space-evenly;
          padding: 25px;

          .title {
            width: 45%;
            /* background-color: white; */
          }

          .price {
            width: 20%;
            text-align: end;
            /* background-color: white; */
          }
          .btn {
            cursor: pointer;
            font-size: 2rem;
          }
        `;
      default:
        return;
    }
  }}
`;
export default Wrapper;

/* 
  ${(props) => {
    switch (props.$styleType) {
      case "shop":
        return css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
          .title {
            width: 45%;
          }

          .price {
            width: 20%;
            text-align: end;
          }

          .btn {
            cursor: pointer;
          }
        `;
      default:
        return;
    }
  }}
*/
