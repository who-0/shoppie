import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 98%;
  height: 100%;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 40%;
    padding: 20px;
    box-shadow: 11px 6px 20px 2px #00000099;

    h1 {
      margin: 5%;
    }

    label {
      font-size: 1.1rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-transform: capitalize;
      margin: 10px 0 0 0;
    }

    input {
      margin: 10px 0;
      font-size: 1.2rem;
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid black;

      &:focus {
        border-bottom: 1px solid #7689ff;
      }
    }

    .order_btn {
      margin: 2% auto;
      width: 100%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .btn {
        color: white;
        font-size: 1.1rem;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 50px;
        text-transform: uppercase;
        cursor: pointer;

        &:first-child {
          background-color: red;

          &:hover {
            background-color: darkred;
          }
        }
        &:last-child {
          background-color: #7689ff;

          &:hover {
            background-color: #4c6ef5;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    form {
      width: 60%;
    }
  }

  @media screen and (max-width: 426px) {
    form {
      width: 90%;

      h1 {
        font-size: 1.5rem;
      }

      .order_btn {
        .btn {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 376px) {
    form {
      width: 95%;

      h1 {
        font-size: 1.3rem;
      }

      .order_btn {
        .btn {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default Wrapper;
