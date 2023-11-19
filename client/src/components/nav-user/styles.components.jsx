import {styled} from 'styled-components'

const Wrapper = styled.div`
    background-color:white;
    font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding: 3px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s;

  &:hover{
    background-color: lightgray;
  }

  p{
    text-transform: capitalize;
    margin: 0 4px;
  }

  .nav-user-icon{
    border-radius: 50%;
    width: 25px;
    height: 25px;

  }

  .nav-dropdown{
    margin-top: 5px;
  }
`

const Menu = styled.div`
     position: absolute;
    background: white;
    border-radius: 5px;
    top: 55px;
    right: 8px;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .nav-profile{
      color: lightblue;
      background-color: white;
    }

    div{
      text-transform: uppercase;
      font-size: 1rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 600;
      padding: 6px 20px;
      border-radius: 4px;
      margin-top: 5px;
      transition: all .2s;
    }

    .nav-logout{
      color: red;

      &:hover{
        cursor: pointer;
        background-color: red;
        color: white;
      }
    }

    .nav-dashboard{
      color: #3f9ae7;

      
      &:hover{
        cursor: pointer;
        background-color:  #3f9ae7;
        color: white;
      }
    }

`

export  {Wrapper,Menu};