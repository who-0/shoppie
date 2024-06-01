import ChartContainer from "components/chart-container/ChartContainer.component";
import UserActivityContainer from "components/user-activity-container/UserActivityContainer.component";
import React from "react";
import Activity from "./styles.component";

const ActivityContainer = ({
  orderTimes,
  userStatus,
  orderCreatedTime,
  userCreatedTime,
}) => {
  return (
    <Activity>
      <ChartContainer orderTimes={orderTimes} userStatus={userStatus} />
      <UserActivityContainer
        orderCreatedTime={orderCreatedTime}
        userCreatedTime={userCreatedTime}
      />
    </Activity>
  );
};

export default ActivityContainer;
