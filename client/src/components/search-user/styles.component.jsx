import colors from "@colors";
import { styled } from "styled-components";

const Search = styled.form`
  width: 70%;
  text-align: center;
  margin-top: 3%;
  position: relative;

  select {
    width: 100px;
    position: absolute;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    text-align: center;
    color: white;
    font-size: 1rem;
    text-transform: capitalize;

    &::after {
      color: red;
    }

    option {
      color: ${colors.admin_color};
    }
  }

  input {
    background-color: ${colors.admin_color};
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 50px;
    padding-left: 110px;
    font-size: 1rem;
    color: white;

    &::placeholder {
      text-transform: capitalize;
      color: white;
    }
  }

  .search_icon {
    position: absolute;
    top: 4px;
    right: 11px;
    font-size: 1.2rem;
    color: red;
    width: 2.5%;
    height: 31px;
    cursor: pointer;
  }
`;

export default Search;
