import { styled } from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 77px;
  background-color: white;
  z-index: 10;
  width: 25%;
  height: 250px;
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
    margin-bottom: 10px;
  }
  .order_info {
    /* background-color: black; */
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 10px;

    .order {
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* .left {
        margin-left: 50px;
      }

      .right {
        margin-right: 50px;
      } */
    }
    p {
      overflow: hidden;
    }
  }

  button {
    margin-top: 10px;
  }
`;

export default Wrapper;
