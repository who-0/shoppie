import { OrderContainer, OrderFrom } from "components";
import { Context } from "contexts/AppContexts";
import { useContext, useEffect } from "react";
import Wrapper from "./styles.page";
import colors from "colors";
import { SHOP } from "contexts/actions";
const body = document.body;

const Orders = () => {
  const { cartItem, handleQuantity, changeColor, color, order, user } =
    useContext(Context);
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
      {/* <OrderContainer
        cartItem={cartItem}
        totalPrice={totalPrice}
        handleQuantity={handleQuantity}
      /> */}
      {true && <OrderFrom user={user} />}
    </Wrapper>
  );
};

export default Orders;
