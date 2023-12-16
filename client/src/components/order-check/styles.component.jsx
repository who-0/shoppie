import colors from 'colors';
import {styled} from 'styled-components'

const Check = styled.div`
    background-color: #fff2f2;
    width: 55%;
    margin-right: 5%;
    display: flex;
    flex-wrap: wrap;
    /* gap: 1%; */
    column-gap: 1%;
    justify-content: center;
    padding: 1%;

    div{
        background-color: green;
        width: 48%;
        height: 15%;
        text-align: center;
        font-size: 1.2rem;
        background-color: white;
        border-radius: 6px;
        box-shadow: 1px 3px 5px 0px #bcbcbcd4;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;


        p{
            color: ${colors.admin_color};
            &:first-child{
                text-transform: capitalize;
            }
        }
        /* height: 0 ; */
        &:nth-child(9){
      
            width: 20%;
        }
     
    }
 .comment{
            width: 75%;
            background-color: rd;

            textarea{
                  width: 100%;
                height: 57px;
                border: none;
                outline: none;
                padding: 1%;
                color: ${colors.admin_color};
                font-size: 1.1rem;
                text-transform: capitalize;
            }
       }

       .btn_gp{
        flex-direction: row;

        button{
            font-size: 1.2rem;
            text-transform: capitalize;
            padding: 1.5% 6%;
            border: none;
            outline: none;

            &:first-child{
                background-color: red;
                color: white;
            }

            &:last-child{
                background-color: blue;
                color: white;
            }

            &:hover{
                cursor: pointer;
            }
            &:active{
                transform: translateY(5px);
            }
        }
       }

    .status{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 0 20px;

        label{
            font-size: 1rem;
            text-transform: capitalize;

            &[name='status']{
                color: ${colors.admin_color};
            }
        }

        select{
            width: 50%;
            outline: none;
            border: none;
            background-color: ${colors.admin_color};
            color: white;
            font-size: 1rem;
            padding: 1% 2% 1% 0;
        }
    }
`

export default Check;