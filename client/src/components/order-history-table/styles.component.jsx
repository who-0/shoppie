import { styled } from "styled-components";

const Wrapper = styled.table`
  width: 100%;
  /* background-color: green; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 2% 0;

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

  tbody {
    tr {
      transition: all 0.2s;
      td {
        text-align: center;
        font-size: 1.2rem;
        text-transform: capitalize;
        padding: 5px 0;

        .title {
          text-align: start;
          padding-left: 3%;
        }
      }

      &:hover {
        color: white;
        background-color: #52d17a;
      }
    }
  }

  tfoot {
    .totalprice {
      color: white;
      font-size: 1.4rem;
      text-align: end;
      padding: 1% 3.5%;
      text-transform: capitalize;
      background-color: #52d17a;
    }
  }

  @media screen and (max-width: 426px) {
    .order_header{
      font-size: 1.2rem;
    }
    .table_header {
    th {
      font-size: 1rem;
      
    }
  }
  }
`;

export default Wrapper;
