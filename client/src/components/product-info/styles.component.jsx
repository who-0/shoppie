import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 35%;
  height: 400px;
  position: relative;

  h1 {
    font-family: "Orbitron", sans-serif;
    font-size: 1.5;
    /* margin-bottom: 2%; */
  }

  p {
    color: gray;
    margin: 2% 0;
    font-size: 1.1rem;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 1.3rem;
    padding: 2% 5%;
    text-transform: capitalize;
    border-radius: 50px;
    border: none;
    background-color: #356ec2;
    color: white;
  }

  h3 {
    margin: 5% 0;
    font-family: "Sansita Swashed", cursive;

    span {
      font-family: "Orbitron", sans-serif;
      font-size: 1.2rem;
    }
  }

  .close_btn {
    position: absolute;
    top: -33px;
    right: -32px;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default Wrapper;