/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import Wrapper from "./styles.component";
import { Context } from "../../contexts/AppContexts";

const CartIcon = () => {
  const { cartItem, CartOpenorNot } = useContext(Context);
  const count = cartItem.length;
  return (
    <Wrapper onClick={CartOpenorNot}>
      <span>{count}</span>
      <GiShoppingCart />
    </Wrapper>
  );
};

export default CartIcon;
