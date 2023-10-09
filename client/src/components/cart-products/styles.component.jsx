import { styled } from "styled-components";

const Wrapper = styled.div`
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
export default Wrapper;
