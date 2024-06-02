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
          font-size: 1.5rem;
          justify-content: space-evenly;
          padding: 25px;

          .title {
            width: 45%;
          }

          .price {
            width: 20%;
            text-align: end;
          }
          .btn {
            cursor: pointer;
            font-size: 2rem;
          }
          @media screen and (max-width: 426px) {
            font-size: 1rem;
          }
        `;
      default:
        return;
    }
  }}
`;
export default Wrapper;
