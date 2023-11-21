import {styled} from 'styled-components'

const Wrapper = styled.div`
    background-color:white;
    font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding: 3px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
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

  @media screen and (max-width: 426px) {
    width: 399px;
    height: 50px;
    /* letter-spacing: 1px; */
    font-size: 1.3rem;
    margin: 7px 0;
    background-color: lightblue;
    border-radius: 50px;
    color: white;

  }
  @media screen and (max-width: 376px) {
    width: 350px;
  }
  @media screen and (max-width: 321px) {
    width: 295px;
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
    justify-content: space-between;
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
      user-select: none;
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

    @media screen and (max-width: 426px) {
      top: 197px;
      right: 0px;
      border-radius: 10px;

      div{
        width: 399px;
    height: 50px;
    /* letter-spacing: 1px; */
    font-size: 1.3rem;
    margin: 7px 0;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
      }
  }
  @media screen and (max-width: 376px) {
    div{

      width: 350px;
    }
  }
  @media screen and (max-width: 321px) {
    div{

      width: 295px;
    }
  }
`

export  {Wrapper,Menu};