import colors from 'colors'
import {styled} from 'styled-components'

const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 3% 0;
    /* background-color: green; */

    form{
        /* background-color: red; */
        width: 40%;
        position: relative;

        input{
            width: 90%;
            height: 2rem;
            border: 1px solid ${colors.admin_color};
            border-radius: 50px;
            outline: none;
            font-size: 1.2rem;
            padding-left: 10px;
        }

        .search_icon{
            position: absolute;
            top: -1px;
            right: 51px;

            font-size: 1.5rem;
            /* background-color: red; */
            height: 100%;
        }
    }
`
export default ProductsHeader