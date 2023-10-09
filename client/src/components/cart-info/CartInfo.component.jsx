import React, { useContext } from "react";
import Wrapper from "./styles.component";
import CartProduct from "components/cart-products/CartProduct.component";
import { Context } from "contexts/AppContexts";

const CartInfo = () => {
  const { cartItem, handleQuantity } = useContext(Context);
  return (
    <Wrapper>
      <h1>your orders</h1>
      <div className="order_info">
        {cartItem.map((item) => (
          <CartProduct
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            handleQuantity={handleQuantity}
          />
        ))}
      </div>
      <button>check orders</button>
    </Wrapper>
  );
};

export default CartInfo;
