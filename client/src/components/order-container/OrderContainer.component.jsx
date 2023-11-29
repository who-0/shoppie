import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartProduct } from "components";
import Wrapper from "./styles.component";

const OrderContainer = ({ cartItem, costPrice, handleQuantity, checkInfo }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="order_title">
        <h1>Orders</h1>
        <FiX className="close_btn" onClick={(_) => navigate("/shop")} />
      </div>
      {cartItem.map((item) => {
        const { id, title, price, quantity } = item;
        const cost = price * quantity;
        costPrice += cost;
        return (
          <CartProduct
            key={id}
            title={title}
            price={price}
            quantity={quantity}
            handleQuantity={handleQuantity}
            id={id}
            styleType="order"
          />
        );
      })}
      <div className="total_price">
        <button type="button" onClick={() => checkInfo(costPrice)}>
          Order
        </button>
        <h3>total price </h3>
        <p>$ {costPrice}</p>
      </div>
    </Wrapper>
  );
};

export default OrderContainer;
