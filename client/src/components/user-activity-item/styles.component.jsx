import { styled } from "styled-components";

const Item = styled.tr`
  height: 32px;
  background-color: pink;


  td{
      text-align: start;
      padding-left: 10px;
  }

  td:first{
    color: green;
 }
`

export default Item;