import { useContext, useEffect } from "react";
import { Dashboard } from "./styles.admin";
import { Context } from "contexts/AppContexts";
import { ActivityContainer, StatusContainer } from "components";


const AdminDashboard = () => {
  const {getStatusUser,orderTimes,userStatus} = useContext(Context);
  // console.log(orderTimes,userStatus);
  useEffect(()=>{
    getStatusUser();
  },[])

  return <Dashboard>
   <StatusContainer />
   <ActivityContainer orderTimes={orderTimes} userStatus={userStatus} />
  </Dashboard>;
};
export default AdminDashboard;
