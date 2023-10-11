import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  .order_title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-left: 20px;
      font-size: 4rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .close_btn {
      font-size: 3rem;
      margin-right: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: gray;
      }
    }
  }

  .total_price {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 10px 60px;
    font-size: 1.5rem;
    position: sticky;
    bottom: 0;
    padding: 10px 20px;
    background-color: #424141;
    color: white;
    border-radius: 50px;

    h3 {
      text-transform: capitalize;
      margin-right: 10px;
    }

    button {
      font-size: 1.5rem;
      padding: 5px 20px;
      border-radius: 50px;
      border: none;
      margin-right: 50px;
      background-color: #1dde3d;
      color: white;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
