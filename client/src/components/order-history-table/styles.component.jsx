import { styled } from "styled-components";

const Wrapper = styled.table`
  width: 100%;
  /* background-color: green; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .order_header {
    text-align: center;
    padding: 5px 0 20px 0;
    font-size: 1.5rem;
  }
  .table_header {
    th {
      font-size: 1.3rem;
      text-transform: capitalize;
    }
  }

  tbody > tr td {
    background-color: red;
    text-align: center;
    font-size: 1.2rem;
    text-transform: capitalize;

    padding: 5px 0;
  }
`;

export default Wrapper;
