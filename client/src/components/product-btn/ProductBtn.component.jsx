/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Wrapper from "./styles.component";

const ProductBtn = ({ limit, skip, total, changePage, acitvePage }) => {
  const numOfPage = total / limit;
  const pages = Array.from({ length: numOfPage }, (_, index) => {
    return index + 1;
  });

  return (
    <Wrapper>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={page === acitvePage ? "active" : "null"}
        >
          {page}
        </button>
      ))}
    </Wrapper>
  );
};

export default ProductBtn;
