import { useContext, useEffect } from "react";
import { Dashboard } from "./styles.admin";
import { Context } from "contexts/AppContexts";


const AdminDashboard = () => {
  const {getStatusUser} = useContext(Context);

  // useEffect(()=>{
  //   getStatusUser();
  // },[])

  return <Dashboard>AdminDashboard</Dashboard>;
};
export default AdminDashboard;
