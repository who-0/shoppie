import OrderTable from "components/order-history-table/OrderTable.component";
import Wrapper from "./styles.component";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
const OrderHistory = () => {
  const { getAllUserOrders, userOrders, orderHistoryStart } =
    useContext(Context);
  useEffect(() => {
    getAllUserOrders();
    // eslint-disable-next-line
  }, [orderHistoryStart]);

  return (
    <Wrapper>
      <h1>order history</h1>
      <div className="order_history_container">
        <OrderTable userOrders={userOrders} />
      </div>
    </Wrapper>
  );
};
export default OrderHistory;
