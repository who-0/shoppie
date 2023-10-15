import React from "react";
import Wrapper from "./styles.component";

const OrderTable = () => {
  return (
    <Wrapper>
      {" "}
      <thead>
        <th colspan="5" className="order_header">
          Today Orders
        </th>
        <tr className="table_header">
          <th>name</th>
          <th>quantity</th>
          <th>single price</th>
          <th>total price</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>shoe</td>
          <td>3</td>
          <td>3.2</td>
          <td>9.6</td>
          <td>pending</td>
        </tr>
      </tbody>
    </Wrapper>
  );
};

export default OrderTable;
