/* eslint-disable array-callback-return */
import React from 'react'
import { TfiSearch } from "react-icons/tfi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import ProductsHeader from './styles.component';
import ProdcutsRadio from 'components/products-radio/ProdcutsRadio.component';

const AdminProductsHeader = () => {

    const filter = {
        rating:[1,2,3,4,5],
        price:['1 ~ 50','50 ~ 100','100 ~ 200'],
        type:['men','shoe','women']
    }
    
    Object.entries(filter).map((value) => {
        if(value[0] === 'rating') value[1].map(v => console.log(v));
    })
  return (
    <ProductsHeader>
    <form>
      <input type="search" name="search" id="search" />
      <TfiSearch />
    </form>
   

    <div className="rating_conatiner">
      <div>
        <p>Rating</p>
        <MdOutlineArrowDropDownCircle />
      </div>
      <div>
        {  Object.entries(filter).map((value) => {
        if(value[0] === 'rating') return value[1].map((v ,i)=> <ProdcutsRadio key={i} title={value[0]} value={v} />);
        })}
      </div>
    </div>

    <div className="price_container">
      <div>
        <p>Price</p>
        <MdOutlineArrowDropDownCircle />
      </div>
      <div>
      {  Object.entries(filter).map((value) => {
        if(value[0] === 'price') return value[1].map((v,i) => <ProdcutsRadio key={i} title={value[0]} value={v} />);
        })}
      </div>
    </div>

       <div className="type_container">
      <div>
        <p>Type</p>
        <MdOutlineArrowDropDownCircle />
      </div>
      <div>
      {Object.entries(filter).map((value) => {
        if(value[0] === 'type') return value[1].map((v,i) => <ProdcutsRadio key={i} title={value[0]} value={v} />);
        })}
      </div>
    </div>
  </ProductsHeader>
  )
}

export default AdminProductsHeader;


/*
<label htmlFor="1">
          <input type="radio" id="1" name="rating" />
          1
        </label>

        <label htmlFor="2">
          <input type="radio" id="2" name="rating" />
          2
        </label>

        <label htmlFor="3">
          <input type="radio" id="3" name="rating" />
          3
        </label>

        <label htmlFor="4">
          <input type="radio" id="4" name="rating" />
          4
        </label>

        <label htmlFor="5">
          <input type="radio" id="5" name="rating" />
          5
        </label>

*/