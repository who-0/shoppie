import { styled } from "styled-components";

const IconProfile = styled.div`
  width: 250px;
  height: 250px;
  padding: 4%;
  border-radius: 50%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  #user_icon {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 769px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 769px) {
    width: 150px;
    height: 150px;
  }
`;

export default IconProfile;
