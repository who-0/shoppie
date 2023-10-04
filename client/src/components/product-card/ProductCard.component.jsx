import { AiFillStar } from "react-icons/ai";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { showProductInfo } = useContext(Context);
  const showInfo = () => {
    console.log("click showinfi");
    showProductInfo(product.id);
  };
  return (
    <Wrapper>
      <img src={product.thumbnail} alt={product.title} />
      <div className="product_info">
        <p>
          <AiFillStar style={{ color: "yellow" }} />
          {product.rating}
        </p>
        <button type="button" onClick={showInfo}>
          see more
        </button>
      </div>
    </Wrapper>
  );
};
export default ProductCard;
