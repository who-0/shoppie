import Wrapper from "./styles.component";

const OrderHistory = () => {
  return (
    <Wrapper>
      <h1>order history</h1>
      <div className="order_history_container">
        <table>
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
        </table>
      </div>
    </Wrapper>
  );
};
export default OrderHistory;
