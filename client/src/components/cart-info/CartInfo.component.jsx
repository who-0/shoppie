import React from "react";
import Wrapper from "./styles.component";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CartInfo = () => {
  return (
    <Wrapper>
      <h1>your orders</h1>
      <div className="order_info">
        <div className="order">
          <p>order name</p>
          <AiOutlineLeft className="left" />
          <p>x1</p>
          <AiOutlineRight className="right" />
          <p>price</p>
        </div>
      </div>
      <button>check orders</button>
    </Wrapper>
  );
};

export default CartInfo;
