import { styled } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    padding: 5px 20px;
    margin: auto 5px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: rgba(56, 104, 39, 37%);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: rgba(56, 104, 39, 37%);
    }
  }
  .active {
    background-color: white;
    color: rgba(56, 104, 39, 37%);
  }

  @media screen and (max-width: 426px) {
    button{
    font-size: .8rem;

      margin: auto 2px;
    }
  }
  @media screen and (max-width: 321px) {
    button{
    font-size: .7rem;

      margin: auto 1px;
    }
  }
`;
export default Wrapper;
