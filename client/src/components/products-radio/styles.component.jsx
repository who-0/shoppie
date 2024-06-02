import colors from "@colors";
import { css, styled } from "styled-components";

const Radio = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "defaultstate",
})`
  position: relative;
  width: 12%;

  div {
    &:first-child {
      width: 100%;
      background-color: lightgray;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 50px;
      padding: 5px 20px;
      cursor: pointer;
      user-select: none;

      p {
        text-transform: capitalize;
        font-size: 1.3rem;
        z-index: 10;
      }

      .dorp_icon {
        color: ${colors.admin_color};
        font-size: 1.5rem;
      }
    }

    &:last-child {
      position: absolute;
      margin-top: 10px;
      background-color: ${colors.admin_color};
      z-index: 10;

      label {
        font-size: 1.3rem;
        margin: 0 5px;
        color: white;
        cursor: pointer;

        input {
          cursor: pointer;
        }
      }
      ${(props) => {
        switch (props.title) {
          case "rating":
            return css`
              display: ${(props) =>
                props.defaultstate.rating ? "block" : "none"};
              border-radius: 50px;
              width: 138%;
              padding: 2px 3px;
              left: -20px;
            `;
          case "price":
            return css`
              display: ${(props) =>
                props.defaultstate.price ? "flex" : "none"};
              border-radius: 5px;
              flex-direction: column;
              left: 7px;
            `;
          case "type":
            return css`
              display: ${(props) =>
                props.defaultstate.type ? "flex" : "none"};
              border-radius: 5px;
              flex-direction: column;
              left: 25px;
              text-transform: capitalize;
            `;
          default:
            break;
        }
      }}
    }
  }
`;

export default Radio;
