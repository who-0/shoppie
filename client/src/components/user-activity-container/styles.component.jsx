import colors from "colors";
import { styled } from "styled-components";

const Activity = styled.div`
       background-color: ${colors.admin_color};
       width: 40%;
    height: 24rem;
    overflow-y: scroll;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4%;

    h1{
        background-color: ${colors.admin_color};;
    width: 100%;
    text-align: center;
    position: sticky;
    top: 0;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

export default Activity;