import { TfiSearch } from "react-icons/tfi";
import Wrapper from "./styles.component";
import Filter from "components/product-filter/Filter.component";
import CartIcon from "components/cart-icon/CartIcon.component";
import CartInfo from "components/cart-info/CartInfo.component";

const Search = ({
  handleChange,
  handleSubmit,
  productName,
  caterogires,
  user,
  isCartOpen,
  cartItem,
}) => {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <input
        disableclearable="true"
        type="search"
        name="search"
        id="search"
        value={productName}
        onChange={handleChange}
      />
      <button type="submit" className="search_icon">
        <TfiSearch />
      </button>
      <Filter caterogires={caterogires} />
      {user && <CartIcon />}
      {isCartOpen && <CartInfo cartItem={cartItem} />}
    </Wrapper>
  );
};
export default Search;
