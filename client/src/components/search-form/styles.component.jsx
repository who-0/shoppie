import { styled } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  input {
    width: 40%;
    height: 40px;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    font-size: 1rem;

    &:focus {
      outline: 1px solid green;
    }
  }

  .search_icon {
    font-size: 1.4rem;
    position: absolute;
    right: 31%;
    line-height: 10px;
    border: none;
    background-color: transparent;
    height: 100%;
    width: 2%;
    cursor: pointer;
  }
`;
export default Wrapper;
