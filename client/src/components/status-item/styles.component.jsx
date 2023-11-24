import {styled} from 'styled-components'

const Item = styled.div`
  background-color: ${props => props.color};
  /* opacity: 72%; */
        margin: 2% 4%;
        width: 24%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;

        h1,p{
          font-family: 'Orbitron', sans-serif;
          color:${props => props.textcolor};
          /* opacity: 1; */
        }

        p{
          font-size: 1.3rem;
          text-transform: capitalize;
        }
`

export default Item;