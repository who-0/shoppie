import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Wrapper from "./styles.component";

const CartProduct = ({ title, price, quantity, handleQuantity, id }) => {
  const productName = title.length > 15 ? title.slice(0, 12) + "...." : title;
  const totalPrice = price * quantity;
  return (
    <Wrapper>
      <p className="title">{productName}</p>
      <AiOutlineLeft
        className="btn"
        onClick={() => handleQuantity(id, "prev")}
      />
      <p>x {quantity}</p>
      <AiOutlineRight
        className="btn"
        onClick={() => handleQuantity(id, "next")}
      />
      <p className="price">${totalPrice}</p>
    </Wrapper>
  );
};
export default CartProduct;
