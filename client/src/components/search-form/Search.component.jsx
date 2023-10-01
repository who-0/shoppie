import { TfiSearch } from "react-icons/tfi";
import Wrapper from "./styles.component";

const Search = ({ handleChange, handleSubmit, productName }) => {
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
    </Wrapper>
  );
};
export default Search;
