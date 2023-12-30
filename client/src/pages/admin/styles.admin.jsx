import styled from "styled-components";

const AdminLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Dashboard = styled.div`
  width: 100%;
  background-color: white;
  height: 85vh;
  margin-right: 15px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

const Products = styled.div`
  width: 100%;
  background-color: white;
  height: 85vh;
  margin-right: 15px;
  border-radius: 10px;

  overflow-y: scroll;
  padding: 0 0 1% 1%;
  position: relative;

  .icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1%;

    div {
      font-size: 2rem;
      background-color: lightgray;
      margin: 0 1.5%;
      font-weight: bolder;
      padding: 5px 10px;
      border-radius: 5px;
      transition: all 0.2s;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: gray;
        color: white;
      }
    }
  }
`;

const Users = styled.div`
  width: 100%;
  background-color: white;
  height: 85vh;
  margin-right: 15px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Orders = styled.div`
  width: 100%;
  background-color: white;
  height: 85vh;
  margin-right: 15px;
  border-radius: 10px;
`;

export { AdminLayout, Dashboard, Products, Users, Orders };
