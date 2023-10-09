import { styled } from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 77px;
  background-color: white;
  z-index: 10;
  width: 25%;
  height: 270px;
  border-radius: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: -6px 12px 18px 3px #353434;

  h1 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .order_info {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 10px;

    .order {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  button {
    margin: 0 20px;
    margin-top: 10px;
    font-size: 1.1rem;
    background-color: lightgreen;
    color: white;
    text-transform: capitalize;
    padding: 5px 0;
    border: none;
    border-radius: 50px;
    transition: all 0.2s;

    &:hover {
      background-color: #5fcf5f;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
