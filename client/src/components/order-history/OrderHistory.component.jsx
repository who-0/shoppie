import OrderTable from "components/order-history-table/OrderTable.component";
import Wrapper from "./styles.component";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import { Loader } from "components";
const OrderHistory = () => {
  const { getAllUserOrders, userOrders, orderHistoryStart, loading } =
    useContext(Context);
  useEffect(() => {
    getAllUserOrders();
    // eslint-disable-next-line
  }, [orderHistoryStart]);
  return (
    <Wrapper>
      <h1>order history</h1>
      {loading && <Loader order={true} />}
      <div className="order_history_container">
        <OrderTable userOrders={userOrders} />
      </div>
    </Wrapper>
  );
};
export default OrderHistory;
