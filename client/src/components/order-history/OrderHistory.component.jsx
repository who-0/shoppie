import OrderTable from "components/order-history-table/OrderTable.component";
import Wrapper from "./styles.component";

const OrderHistory = () => {
  return (
    <Wrapper>
      <h1>order history</h1>
      <div className="order_history_container">
        <OrderTable />
      </div>
    </Wrapper>
  );
};
export default OrderHistory;
