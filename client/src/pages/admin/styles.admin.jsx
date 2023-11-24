import styled from "styled-components";


const AdminLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Dashboard = styled.div`
    width: 100%;
    background-color:white ;
    height: 85vh;
    margin-right: 15px;
    border-radius: 10px;

   display: flex;
   flex-direction: column;
`

const Products = styled.div`
  width: 100%;
    background-color:white ;
    height: 85vh;
    margin-right: 15px;
    border-radius: 10px;
`

const Users = styled.div`
  width: 100%;
    background-color:white ;
    height: 85vh;
    margin-right: 15px;
    border-radius: 10px;
`
const Orders = styled.div`
  width: 100%;
    background-color:white ;
    height: 85vh;
    margin-right: 15px;
    border-radius:10px;
`

export {AdminLayout,Dashboard,Products,Users,Orders}