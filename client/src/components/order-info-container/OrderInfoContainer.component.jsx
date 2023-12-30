import OrderCheck from "components/order-check/OrderCheck.component";
import OrderLists from "components/order-lists/OrderLists.component";
import React from "react";
import InfoContainer from "./styles.component";

const OrderInfoContainer = ({ allOrders }) => {
  const orderLists = [];

  allOrders.forEach((order) => {
    orderLists.push({
      name: order.name,
      products: order.products,
      orderId: order.orderId,
      customerId: order.customerId,
      email: order.email,
      phone: order.phone,
    });
  });

  return (
    <InfoContainer>
      <OrderLists orderLists={orderLists} />
      <OrderCheck />
    </InfoContainer>
  );
};

export default OrderInfoContainer;
