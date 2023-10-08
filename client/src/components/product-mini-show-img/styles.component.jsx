import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  height: 19%;
  display: flex;
  background-color: #a4d792;
  padding: 1% 5%;
  border-radius: 5px;
  position: relative;

  img {
    height: 75%;
    /* width: 100%; */
    margin: auto 3px;
    border-radius: 5px;
    cursor: pointer;
  }

  .active {
    transform: scale(1.2);
    box-shadow: 2px 2px 5px black;
  }
  .img_btn {
    font-size: 3rem;
    color: #424141;
    position: absolute;
    position: absolute;
    cursor: pointer;
  }
  .previous_btn {
    top: 23%;
    left: -14px;
  }

  .next_btn {
    top: 23%;
    right: -14px;
  }
`;

export default Wrapper;
