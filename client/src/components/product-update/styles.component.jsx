import {styled} from 'styled-components'

const Update = styled.form`
position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      display: flex;

      div{
        &:first-child{
            background-color: green;
        }
        &:last-child{
            background-color: blue;
        }
      }
`

export default Update;