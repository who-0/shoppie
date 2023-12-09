
import {styled} from 'styled-components'

const Lists = styled.div`
    background-color: #fff2f2;
    width: 30%;
    height: 416px;
    margin-left: 3%;
    padding: 2%;
    overflow-y: scroll;
    border-radius: 10px;


    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3% 0;
        padding: 1%;
        border-radius: 5px;
        transition: all .2s;
        z-index: 10;
       
     

        p{
            font-size: 1.3rem;
            text-transform: capitalize;
    
            transition: all .2s;

            &:nth-child(2){
                width: 80%;
                margin: 0 3%;
 
            }
        }

        .icon{
            font-size: 1.4rem;  
            text-align: right;
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

        &:hover{
            cursor: pointer;
            background-color: white;
            p{
                color: black;
            }
        }
    }
`

export default Lists;