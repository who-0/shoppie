import React, { useContext } from "react";
import Wrapper from "./styles.component";
import { Context } from "contexts/AppContexts";

const Filter = ({ caterogires }) => {
  const { getCategoryByName, getAllProducts } = useContext(Context);
  const filteProduct = async (e) => {
    const filterName = e.target.value;

    if (filterName === "default") {
      await getAllProducts();
    } else await getCategoryByName(filterName);
  };
  return (
    <Wrapper>
      <label htmlFor="filter">filter product</label>
      <select
        name="filter"
        id="filter"
        defaultValue={"default"}
        onChange={filteProduct}
      >
        <option value="default">all products</option>
        {caterogires.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default Filter;
