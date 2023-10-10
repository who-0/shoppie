import { FiX } from "react-icons/fi";
import { CartProduct } from "components";
import { Context } from "contexts/AppContexts";
import { useContext, useEffect } from "react";
import Wrapper from "./styles.page";
import colors from "colors";
import { SHOP } from "contexts/actions";
import { useNavigate } from "react-router-dom";
const body = document.body;

const Orders = () => {
  const { cartItem, handleQuantity, changeColor, color } = useContext(Context);
  const navigate = useNavigate();
  let totalPrice = 0;

  useEffect(() => {
    if (colors !== colors.shop_color) {
      changeColor(SHOP);
    }
    body.style.background = color;
    // eslint-disable-next-line
  }, [color]);

  return (
    <Wrapper>
      <div className="order_container">
        <div className="order_title">
          <h1>Orders</h1>
          <FiX className="close_btn" onClick={(_) => navigate("/shop")} />
        </div>
        {cartItem.map((item) => {
          const { id, title, price, quantity } = item;
          const cost = price * quantity;
          totalPrice += cost;
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
          <h3>total price </h3>
          <p>$ {totalPrice}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Orders;
