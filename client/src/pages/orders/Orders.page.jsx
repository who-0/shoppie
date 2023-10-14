import { OrderContainer, OrderFrom, OrderHistory } from "components";
import { Context } from "contexts/AppContexts";
import { useContext, useEffect } from "react";
import Wrapper from "./styles.page";
import colors from "colors";
import { SHOP } from "contexts/actions";
const body = document.body;

const Orders = () => {
  const {
    cartItem,
    handleQuantity,
    changeColor,
    color,
    order,
    user,
    checkInfo,
    confirmeOrder,
    updatePhone,
    totalPrice,
  } = useContext(Context);
  let costPrice = 0;

  useEffect(() => {
    if (colors !== colors.shop_color) {
      changeColor(SHOP);
    }
    body.style.background = color;
    // eslint-disable-next-line
  }, [color]);

  return (
    <Wrapper>
      <OrderContainer
        cartItem={cartItem}
        costPrice={costPrice}
        handleQuantity={handleQuantity}
        checkInfo={checkInfo}
      />
      <OrderHistory />
      {order && (
        <OrderFrom
          user={user}
          checkInfo={checkInfo}
          confirmeOrder={confirmeOrder}
          cartItem={cartItem}
          totalPrice={totalPrice}
          updatePhone={updatePhone}
        />
      )}
    </Wrapper>
  );
};

export default Orders;
