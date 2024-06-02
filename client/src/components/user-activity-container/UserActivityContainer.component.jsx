/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Activity from "./styles.component";
import { ActivityItem } from "@components";
import moment from "moment";
const UserActivityContainer = ({ orderCreatedTime, userCreatedTime }) => {
  const activityArray = [...orderCreatedTime, ...userCreatedTime];
  const newArray = activityArray.sort((a, b) => {
    let c = new Date(a.createdAt);
    let d = new Date(b.createdAt);
    return d - c;
  });

  return (
    <Activity>
      <h1>User Activity</h1>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>status</td>
            <td>time</td>
          </tr>
        </thead>
        <tbody>
          {newArray.map((activity) => (
            <ActivityItem
              key={activity.createdAt}
              name={activity.name}
              action={activity.action}
              time={moment(activity.createdAt).format("L h:mm a")}
            />
          ))}
        </tbody>
      </table>
    </Activity>
  );
};

export default UserActivityContainer;
