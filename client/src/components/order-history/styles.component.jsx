import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  margin-top: 5%;
  padding: 3%;
  border-radius: 10px;

  h1 {
    text-transform: capitalize;
    font-size: 2.5rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  @media screen and (max-width: 426px){
    h1{
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
