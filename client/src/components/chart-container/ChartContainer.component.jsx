/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import Chart from "./styles.component";
import { BarChart, AreaChart } from "@components";

const ChartContainer = ({ orderTimes, userStatus }) => {
  const [changeChart, setChangeChart] = useState(true);
  return (
    <Chart>
      <h1>{changeChart ? "order Status" : "user Status"}</h1>
      {changeChart ? (
        <BarChart data={orderTimes} />
      ) : (
        <AreaChart data={userStatus} />
      )}
      <div>
        <button onClick={() => setChangeChart(!changeChart)}>
          {changeChart ? "users status" : "order status"}
        </button>
      </div>
    </Chart>
  );
};

export default ChartContainer;
