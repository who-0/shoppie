import colors from "@colors";
import { styled } from "styled-components";

const Activity = styled.div`
  background-color: ${colors.admin_color};
  width: 40%;
  height: 24rem;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 4%;
  border-radius: 5px;
  position: relative;

  h1 {
    background-color: ${colors.admin_color};
    width: 100%;
    text-align: center;
    position: sticky;
    top: 0;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    z-index: 10;
    overflow: hidden;
  }

  table {
    width: 100%;
    background-color: green;
    position: absolute;
    top: 44px;
    border-collapse: collapse;
    thead {
      height: 32px;
      background-color: white;
      position: sticky;
      top: 42px;

      tr td {
        text-align: center;
        text-transform: capitalize;
        font-size: 1rem;
      }
    }

    tbody {
      background-color: blue;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Activity;
