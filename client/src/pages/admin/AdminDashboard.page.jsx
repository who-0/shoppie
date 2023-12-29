import { useContext, useEffect } from "react";
import { Dashboard } from "./styles.admin";
import { Context } from "contexts/AppContexts";
import { ActivityContainer, StatusContainer } from "components";

const AdminDashboard = () => {
  const {
    getStatusUser,
    orderTimes,
    userStatus,
    orderCreatedTime,
    userCreatedTime,
  } = useContext(Context);

  useEffect(() => {
    getStatusUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Dashboard>
      <StatusContainer />
      <ActivityContainer
        orderTimes={orderTimes}
        userStatus={userStatus}
        orderCreatedTime={orderCreatedTime}
        userCreatedTime={userCreatedTime}
      />
    </Dashboard>
  );
};
export default AdminDashboard;
