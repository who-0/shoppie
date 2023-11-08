import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  font-size: 2.3rem;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: 19px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }

  span {
    color: white;
    position: absolute;
    top: -4px;
    left: 35px;
    font-size: 0.8rem;
    font-weight: bold;
    background-color: red;
    padding: 0px 4px;
    border-radius: 50px;
  }

  @media screen and (max-width: 1025px) {
    span{
      left: 40px;
      padding: 1px 4px;
    }
  }

  @media screen and (max-width: 426px) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    top: -1px;
    right: 2px;

    span{
      top: -4px;
    left: 25px;
    }
  }

  
  @media screen and (max-width: 321px) {
    font-size: 1.5rem;
    width: 35px;
    height: 35px;
    top: -1px;
    right: 2px;

    span{
      top: -4px;
    left: 25px;
    }
  }
`;

export default Wrapper;
