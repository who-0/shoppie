import colors from "@colors";
import { styled } from "styled-components";

const ContentContainer = styled.div`
  color: white;
  font-family: "MuseoModerno", cursive;
  font-weight: 900;
  font-size: 1.5rem;
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-left: 5%;

  .content_btn_cs {
    text-decoration: none;
    background-color: ${colors.content_btn};
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    border-radius: 50px;
    margin-top: 10%;

    position: relative;
    transition: all 0.2s;

    &:hover {
      background-color: ${colors.content_btn_hover};
    }
    &:after {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }

    &:hover::after {
      border: 2px solid ${colors.content_btn_hover};
      transform: scale(1);
      animation: content_btn 0.5s infinite ease-out;
    }

    @keyframes content_btn {
      0% {
        transform: scale(1);
      }
      35% {
        transform: scale(1.1);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.2);
        opacity: 0.35;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }

    &:hover::before {
      border: 2px solid ${colors.content_btn_hover};
      transform: scale(1);
      animation: content_btn 1s infinite ease-in;
    }
    @keyframes content_btn {
      0% {
        transform: scale(1);
      }
      35% {
        transform: scale(1.1);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.2);
        opacity: 0.35;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }
    .btn_logo {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 45%;
    font-size: 1.1rem;
    .content_btn_cs {
      width: 80%;
    }
  }

  @media screen and (max-width: 769px) {
    width: 50%;
    font-size: 1rem;
    .content_btn_cs {
      width: 85%;
    }
  }

  @media screen and (max-width: 426px) {
    font-size: 0.6rem;
    text-align: center;

    .content_btn_cs {
      width: 90%;
    }
  }

  @media screen and (max-width: 376px) {
    width: 80%;
    font-size: 0.69rem;
    text-align: center;

    .content_btn_cs {
      width: 80%;
      align-self: center;
    }
  }
`;

export default ContentContainer;
