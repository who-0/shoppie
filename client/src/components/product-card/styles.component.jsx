import { styled } from "styled-components";

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
`;

export default Wrapper;
