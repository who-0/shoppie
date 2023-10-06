import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 20%;
  margin-left: 3%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    text-transform: capitalize;
    /* margin-right: 1%; */
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
`;

export default Wrapper;
