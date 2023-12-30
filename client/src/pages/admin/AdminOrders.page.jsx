import { useContext, useEffect } from "react";
import { Orders } from "./styles.admin";
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { ADMIN_ORDERS } from "contexts/actions";
import { OrderHeader, OrderInfoContainer } from "components";

const body = document.body;

const AdminOrders = () => {
  const {
    color,
    changeColor,
    orderStatus,
    allOrders,
    getStatusUser,
    allOrderByAdmin,
    updateOrder,
  } = useContext(Context);
  useEffect(() => {
    if (color !== colors.home_color) {
      changeColor(ADMIN_ORDERS);
    } else {
      body.style.background = color;
    }

    getStatusUser();
    allOrderByAdmin();
    // eslint-disable-next-line
  }, [color, updateOrder]);

  return (
    <Orders>
      <OrderHeader orderStatus={orderStatus} />
      <OrderInfoContainer allOrders={allOrders} />
    </Orders>
  );
};
export default AdminOrders;
