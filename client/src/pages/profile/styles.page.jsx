import { styled } from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
  .user_container {
    width: 90%;
    height: 60%;
    background-color: #424141;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
  }

  @media screen and (max-width: 426px) {
    .user_container {
      flex-direction: column;
      height: 85%;
      margin-bottom: 15%;
    }
  }

  @media screen and (max-width: 321px) {
    .user_container {
      width: 95%;
    }
  }
`;

export default Wrapper;