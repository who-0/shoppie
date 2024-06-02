import colors from "@colors";
import { styled } from "styled-components";

const Update = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;

  div {
    padding: 5%;
    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      img {
        margin-bottom: 10%;
      }

      label {
        font-size: 30px;
        padding-left: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5% 0;
        background-color: ${colors.nav_color};
        width: 50%;
        border-radius: 20px;
        color: white;

        input {
          border: none;
          background-color: transparent;
          outline: none;
          margin-left: 3%;
          font-size: 1.2rem;
          width: 100%;
          color: white;
        }
      }
    }
    &:last-child {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      position: relative;

      input {
        border: none;
        outline: none;
        background-color: ${colors.nav_color};
        color: white;

        font-size: 1.5rem;
        width: 60%;
        padding: 2% 3%;
      }
      textarea {
        width: 100%;
        font-size: 1.2rem;
        height: 100px;
        padding: 1%;
        background-color: ${colors.nav_color};
        color: white;
        outline: none;
        margin: 5% 0;
      }

      div {
        width: 100%;
        text-align: end;

        button {
          font-size: 1.3rem;
          text-transform: capitalize;
          padding: 2% 4%;
          border: none;
          outline: none;
          margin-left: 2%;
          color: white;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;

          &:first-child {
            background-color: red;

            &:hover {
              background-color: ${colors.admin_color};
            }
          }

          &:last-child {
            background-color: blue;

            &:hover {
              background-color: lightblue;
            }
          }
        }
      }
      .close_btn {
        position: absolute;
        top: 12px;
        right: 0;
        font-size: 2.5rem;
        cursor: pointer;
        background: lightgray;
        border-radius: 5px;
        transition: all 0.2s;

        &:hover {
          background-color: darkgray;
          color: white;
        }
      }
    }
  }
`;

export default Update;
