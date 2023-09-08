import styled from "styled-components";

const Menuicon = styled.button`
  display: none;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 2rem;
  color: white;
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  .menu_icon {
    animation: iconani 0.4s ease-in;
  }

  @keyframes iconani {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 426px) {
    display: flex !important;
  }

  @media screen and (max-width: 376px) {
    font-size: 1.7rem;
  }
`;
export default Menuicon;
