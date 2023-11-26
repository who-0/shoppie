import { styled } from "styled-components";

const Item = styled.tr`
  height: 32px;
  background-color: pink;
  margin-left:5px ;

  td{
      text-align: start;
  }

  td:first{
    color: green;
 }
`

export default Item;