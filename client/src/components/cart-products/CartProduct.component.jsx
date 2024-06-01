import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Wrapper from "./styles.component";

const CartProduct = ({
  title,
  price,
  quantity,
  handleQuantity,
  id,
  styleType,
}) => {
  let productName;
  switch (styleType) {
    case "shop":
      productName = title.length > 15 ? title.slice(0, 12) + "...." : title;
      break;
    case "order":
      productName = title.length > 45 ? title.slice(0, 40) + "...." : title;
      break;
    default:
      break;
  }

  const totalPrice = price * quantity;
  return (
    <Wrapper $styleType={styleType}>
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
