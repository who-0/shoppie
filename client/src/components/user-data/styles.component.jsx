import colors from 'colors';
import {css, styled} from 'styled-components'

const User = styled.div`
        background-color: white;
        border-radius: 10px;
        margin: 2%;
        box-shadow: 4px 4px 5px 2px #706f6f73;

        ${props => {
            if (props.$edit) {
                return css`
                    height: 53%;
                    padding: 2%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                    align-content: flex-start;
                    div{
                        width: 49%;
                        height: 25%;
                        padding: 10px;
                        
                        label{
                            font-size: 1.1rem;
                            text-transform: capitalize;
                            text-transform: uppercase;
                            margin-right: 5px;
                        }

                        input{
                            width: 70%;
                            font-size: 1.3rem;
                            border: none;
                            outline: none;
                            text-align: start;
                            background-color: transparent;
                            color: ${colors.admin_color};
                            border-bottom: 1px solid ${colors.admin_color};
                        }

                        select{
                            width: 50%;
                            font-size: 1.3rem;
                            border: none;
                            outline: none;
                            text-align: start;
                            background-color: transparent;
                            color: ${colors.admin_color};
                            border-bottom: 1px solid ${colors.admin_color};
                            text-transform: capitalize;
                        }

                        &:last-child{
                            text-align: center;

                            button{
                                font-size: 1.3rem;
                                text-transform: capitalize;
                                padding: 4px 38px;
                                cursor: pointer;
                                border: none;
                                margin: 1%;
                                color: white;
                                border-radius: 5px;
                                transition: all .2s;

                                &:first-child{
                                    background-color: red;

                                    &:hover{
                                        background-color: ${colors.admin_color};
                                    }
                                    
                                }

                                &:last-child{
                                    background-color: blue;
                                    &:hover{
                                        background-color: lightblue;
                                    }
                                }
                            }
                        }
                    }
                `
            }else{
                return css` 
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    height:  10%;

                    div{
                        display: block;
                        
                        input{
                            width: 100%;
                            font-size: 1.3rem;
                            border: none;
                            outline: none;
                            text-align: center;
                            background-color: transparent;
                            color: ${colors.admin_color};
                        }

                        &:nth-child(2){
                            width: 35%;
                        }

                        &:nth-child(1){
                            input{
                                text-transform: capitalize;
                            }
                        }
                    }
                `
            }
        }}


       
        .icon{
            cursor: pointer;
            margin: 0 10px;
            transition:all .2s;

            &:first-child:hover{
                color:blue;
            }

            &:last-child:hover{
                color:red;
            }
        }

        
    
`
export default User;