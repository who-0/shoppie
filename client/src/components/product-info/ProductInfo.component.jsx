import { FiX } from "react-icons/fi";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";
import { useContext } from "react";
import { Alert } from "components";

const ProductInfo = ({ singleProduct }) => {
  const { title, description, price } = singleProduct;
  const { closeProductInfo, addToCart, alert } = useContext(Context);
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>
        Price: <span>$ {price}</span>{" "}
      </h3>
      {alert && (
        <div className="message">
          <Alert />
        </div>
      )}

      <button onClick={() => addToCart(singleProduct)}>add to cart</button>
      <FiX className="close_btn" onClick={closeProductInfo} />
    </Wrapper>
  );
};
export default ProductInfo;
{
  /* <div className="message"> */
}
{
  /* </div> */
}
