import colors from 'colors';
import {styled} from 'styled-components'

const Chart = styled.div`
/* background-color: red; */
width: 50%;
height: 27rem;

    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: capitalize;
        text-align: center;
        color: ${colors.admin_color};
    }


   div{
    text-align: center;

    button{
        font-size: 1rem;
    text-transform: capitalize;
    padding: 8px 13px;
    border-radius: 13px;
    border: none;
    background-color: #e67f7fd1;
    /* border: 1px solid #a20000; */
    color: #a20000;
    }
   }
`
export default Chart;