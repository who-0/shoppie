import React from "react";
import Item from "./styles.component";

const ActivityItem = ({ name, action, time }) => {
  return (
    <Item>
      <td>{name}</td>
      <td>{action}</td>
      <td>{time}</td>
    </Item>
  );
};

export default ActivityItem;
