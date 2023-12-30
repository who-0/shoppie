import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 20%;
  margin-left: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    text-transform: capitalize;
  }

  select {
    height: 30px;
    border: none;
    outline: none;
    border-radius: 50px;
    text-align: center;
    text-transform: capitalize;
    font-size: 1rem;

    option {
      margin: 10px 0;
      color: green;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 27%;
    margin-left: 2%;
  }

  @media screen and (max-width: 769px) {
    width: 30%;
    margin-left: 1%;
    font-size: 0.8rem;

    select {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 426px) {
    width: 52%;
  }

  @media screen and (max-width: 376px) {
    label {
      display: none;
    }
  }

  @media screen and (max-width: 376px) {
    select {
      font-size: 0.7rem;
    }
  }
`;

export default Wrapper;
