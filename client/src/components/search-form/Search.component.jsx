import { TfiSearch } from "react-icons/tfi";
import Wrapper from "./styles.component";
import Filter from "components/product-filter/Filter.component";

const Search = ({ handleChange, handleSubmit, productName, caterogires }) => {
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
    </Wrapper>
  );
};
export default Search;
