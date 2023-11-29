import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.order ? "100%" : "77vh")};
  z-index: 999;
  background-color: #a4d792;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;
  padding: 5%;

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 7px solid #f3f3f3;
    border-top: 7px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
