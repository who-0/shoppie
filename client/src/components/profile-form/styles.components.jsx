import { styled } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    height: 40px;
    margin: 10px 0px;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    padding-left: 10px;
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    cursor: pointer;
    color: white;

    &:first-child {
      text-transform: capitalize;
    }

    &::placeholder {
      color: white;
    }
  }

  .btn_container {
    margin-top: 20%;

    .btn {
      padding: 7px 25px;
      font-size: 1.3rem;
      margin: 0 10px;
      border: none;
      border-radius: 50px;
      text-transform: capitalize;
      font-weight: bold;
      color: white;
    }

    .btn1 {
      background: #f24949;
    }

    .btn2 {
      background-color: #70a1d7;
    }
  }
`;
