import styled from "styled-components";

const FormCustom = styled.form`
  width: 40%;
  height: 40%;
  margin: 3% 0 10% 0;
  background-color: #04395e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2vmax;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .btn_container {
    margin: 4% 0 0 0;
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  p {
    color: white;
    margin-top: 20px;
    text-transform: capitalize;
    font-family: Arial, Helvetica, sans-serif;
  }

  .signup_link {
    text-decoration: none;
    color: #70a1d7;
  }

  @media screen and (max-width: 1025px) {
    width: 50%;
  }

  @media screen and (max-width: 769px) {
    width: 70%;
  }
  @media screen and (max-width: 426px) {
    width: 95%;
    margin: 3% 0 30% 0;

    .title {
      font-size: 3.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default FormCustom;
