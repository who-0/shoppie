import { AiFillStar } from "react-icons/ai";
import Wrapper from "./styles.component";
import { Context } from "../../contexts/AppContexts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, role }) => {
  const { showProductInfo, user, openUpdate, deleteProductByAdmin } =
    useContext(Context);
  const navigate = useNavigate();
  const showInfo = () => {
    if (!user) return navigate("/auth");
    showProductInfo(product.id);
  };

  const deleteHandler = () => deleteProductByAdmin(product.id);
  const updateHandler = () => openUpdate(product);

  return (
    <Wrapper role={role}>
      <img src={product.thumbnail} alt={product.title} />
      <div className="product_info">
        {role === "admin" ? (
          <>
            <div className="info_admin">
              <p>
                <AiFillStar style={{ color: "yellow" }} />
                {product.rating}
              </p>
              <p>${product.price}</p>
            </div>
            <div className="btn_admin">
              <button type="button" onClick={deleteHandler}>
                delete
              </button>
              <button type="button" onClick={updateHandler}>
                update
              </button>
            </div>
          </>
        ) : (
          <>
            <p>
              <AiFillStar style={{ color: "yellow" }} />
              {product.rating}
            </p>
            <button type="button" onClick={showInfo}>
              see more
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};
export default ProductCard;
