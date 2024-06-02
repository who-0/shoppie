import React, { useContext } from "react";
import Container from "./styles.component";
import {StatusItem} from "@components";
import { Context } from "../../contexts/AppContexts";

const StatusContainer = () => {
  const { orderStatus } = useContext(Context);

  const defaultStatus = [
    {
      title: "pending",
      count: orderStatus.pending || 0,
      color: "#6E9EFC",
      textColor: "#083489",
    },
    {
      title: "success",
      count: orderStatus.success || 0,
      color: "#52F362",
      textColor: "#007B0C",
    },
    {
      title: "cancel",
      count: orderStatus.cancel || 0,
      color: "#FD5A5A",
      textColor: "#860505",
    },
  ];

  return (
    <Container>
      {defaultStatus.map((status) => (
        <StatusItem
          key={status.title}
          title={status.title}
          count={status.count}
          color={status.color}
          textColor={status.textColor}
        />
      ))}
    </Container>
  );
};

export default StatusContainer;
