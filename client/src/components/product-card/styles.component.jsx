import colors from "colors";
import { css, styled } from "styled-components";

const Wrapper = styled.div`
  border: 2px solid white;
  padding: 10px;
  background: rgba(56, 104, 39, 37%);
  border-radius: 8px;

  &:hover {
    border: 2px solid #26ed5e;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  .product_info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    p {
      font-size: 1.2rem;
      color: white;
    }
    button {
      color: white;
      border: none;
      font-size: 1rem;
      padding: 5px 15px;
      border-radius: 50px;
      background-color: #356ec2;
      transition: all 0.2s;

      &:hover {
        background-color: #6b94d1;
        cursor: pointer;
      }
    }
  }

  ${(props) => {
    if (props.role === "admin") {
      return css`
        .product_info {
          flex-direction: column;

          .info_admin,
          .btn_admin {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 2%;
          }

          .btn_admin {
            button {
              &:first-child {
                background-color: red;
                &:hover {
                  background-color: ${colors.admin_color};
                }
              }
            }
          }
        }
      `;
    }
  }}

  @media screen and (max-width: 426px) {
    img {
      width: 179px;
      height: 179px;
    }
  }

  @media screen and (max-width: 376px) {
    img {
      width: 155px;
      height: 156px;
    }
    .product_info {
      p {
        font-size: 1rem;
      }

      button {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 321px) {
    img {
      width: 129px;
      height: 129px;
    }

    .product_info {
      p {
        font-size: 0.9rem;
      }

      button {
        font-size: 0.7rem;
      }
    }
  }
`;

export default Wrapper;
