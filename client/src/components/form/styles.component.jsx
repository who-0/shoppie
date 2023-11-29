import styled from "styled-components";
import colors from "colors";

const Wrapper = styled.form`
  width: 40%;
  height: ${(props) => (props.$signup ? "65%" : "40%")};
  margin: 3% 0 10% 0;
  padding: 0 5%;
  background-color: ${colors.nav_color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2vmax;
  transition: all 0.2s;

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
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  }

  p {
    color: white;
    margin-top: 20px;
    text-transform: capitalize;
    font-family: Arial, Helvetica, sans-serif;
  }

  .signup_link {
    text-decoration: none;
    text-transform: capitalize;
    color: #70a1d7;
  }

  @media screen and (max-width: 1025px) {
    width: 50%;
  }

  @media screen and (max-width: 769px) {
    width: 70%;
    .btn_container {
      padding: 0 10%;
      /* justify-content: space-evenly; */
    }
  }
  @media screen and (max-width: 426px) {
    width: 95%;
    margin: 3% 0 30% 0;
    .btn_container {
      padding: 0 5%;
      /* justify-content: space-evenly; */
    }
    .title {
      font-size: 3.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
