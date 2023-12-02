import {styled} from 'styled-components'

const Lists = styled.div`
    background-color: lightgray;
    width: 30%;
    margin-left: 3%;
    padding: 2%;
    overflow-y: scroll;
    border-radius: 10px;

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 3% 0;
        /* background-color: green; */

        p{
            font-size: 1.3rem;
            text-transform: capitalize;

            &:nth-child(2){
                width: 80%;
                margin: 0 3%;

            }
        }

        .icon{
            font-size: 1.4rem;  
        }
        .check{
                font-size: 1.5rem;
                color: green;
            }
        .right{
            color: blue;
        }
        .cancel{
            font-size: 1.5rem;

        }
    }
`

export default Lists;