import React, { useState } from "react";
import Update from "./styles.component";
import { AiFillStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const ProductUpdate = ({ updateProduct,closeUpdate,updateProductByAdmin }) => {
  const defaultValue = {
    rating:updateProduct.rating,
    price:updateProduct.price,
    title:updateProduct.title,
    description:updateProduct.description
  }
  const [defaultState,setDefaultState] = useState(defaultValue);

  const changeHandler = e => setDefaultState({ ...defaultState, [e.target.name]: e.target.value });
  
  const clearButton = _ => setDefaultState({rating:'',price:'',title:'',description:''});

  const submitHandler = e => {
    e.preventDefault();
    updateProductByAdmin(updateProduct.id,defaultState)
  }
  return (
    <Update>
      <div>
        <img
          src={updateProduct.images[0]}
          alt={defaultState.title}
          width="200px"
        />
        <label>
          <AiFillStar style={{ color: "yellow" }} />
          <input name="rating" value={defaultState.rating} onChange={changeHandler} />
        </label>

        <label>
          $
          <input name="price" value={defaultState.price}  onChange={changeHandler}/>
        </label>
      </div>

      <div>
        <input name="title" type="text" value={defaultState.title} onChange={changeHandler} />
        <textarea name="description" type='text' value={defaultState.description} onChange={changeHandler} />
        <div>
          <button type="button" onClick={clearButton}>clear</button>
          <button type="button" onClick={submitHandler}>save</button>
        </div>
        <IoClose className="close_btn" onClick={closeUpdate} />
      </div>
    </Update>
  );
};

export default ProductUpdate;
