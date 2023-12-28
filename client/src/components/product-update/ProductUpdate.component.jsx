import React from "react";
import Update from "./styles.component";
import { AiFillStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const ProductUpdate = ({ updateProduct }) => {
  return (
    <Update>
      <div>
        <img
          src={updateProduct.images[0]}
          alt={updateProduct.title}
          width="200px"
        />
        <label>
          <AiFillStar style={{ color: "yellow" }} />
          <input value={updateProduct.rating} />
        </label>

        <label>
          $
          <input value={updateProduct.price} />
        </label>
      </div>

      <div>
        <input value={updateProduct.title} />
        <input value={updateProduct.description} />
        <div>
          <button>clear</button>
          <button>save</button>
        </div>
        <IoClose />
      </div>
    </Update>
  );
};

export default ProductUpdate;
