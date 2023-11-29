import React from "react";
import moment from "moment";
import Wrapper from "./styles.component";

const OrderTable = ({ userOrders }) => {
  return (
    <>
      {userOrders.length === 0 && (
        <div style={{ fontSize: "1.5rem", textAlign: "center" }}>No Orders</div>
      )}

      {userOrders.map((order) => (
        <Wrapper key={order._id}>
          <thead>
            <tr>
              <th colSpan="5" className="order_header">
                {moment(order.createdAt).calendar()}
              </th>
            </tr>
            <tr className="table_header">
              <th>name</th>
              <th>quantity</th>
              <th>single price</th>
              <th>total price</th>
              <th>status</th>
            </tr>
          </thead>
          {order.orderProducts.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td className="title">
                  {product.title.length > 40
                    ? product.title.slice(0, 40) + "...."
                    : product.title}
                </td>
                <td>x{product.quantity}</td>
                <td>${product.singlePrice}</td>
                <td>${product.singlePrice * product.quantity}</td>
                <td className="status">{product.status}</td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <td colSpan="5" className="totalprice">
                totalprice ${order.totalPrice}
              </td>
            </tr>
          </tfoot>
        </Wrapper>
      ))}
    </>
  );
};

export default OrderTable;
