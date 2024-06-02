import { UserActivityContainer, ChartContainer } from "@components";
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
