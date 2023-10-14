import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  margin-top: 5%;
  padding: 3%;
  border-radius: 10px;

  h1 {
    text-transform: capitalize;
    font-size: 2.5rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  table {
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
  }
`;

export default Wrapper;
