/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import ProductsHeader from './styles.component';
import ProdcutsRadio from 'components/products-radio/ProdcutsRadio.component';

const AdminProductsHeader = () => {
  const defaultValue = {
    rating:false,
    price:false,
    type:false,
  }
  const [defaultState,setDefaultState] = useState(defaultValue)
  const isOpen = (e) => {
    switch (e.target.attributes.name.value) {
      case 'rating':
        setDefaultState({...defaultState,[e.target.attributes.name.value]:!defaultState.rating})
        break;
      case 'price':
        setDefaultState({...defaultState,[e.target.attributes.name.value]:!defaultState.price})
        break;
      case 'type':
        setDefaultState({...defaultState,[e.target.attributes.name.value]:!defaultState.type})
        break;
      default:
        break;
    }

    
  }
    const filter = {
        rating:[1,2,3,4,5],
        price:['1 ~ 50','50 ~ 100','100 ~ 200'],
        type:['men','shoe','women']
    }
    
    
    // Object.entries(filter).map((value,i) => <ProdcutsRadio key={i} title={value[0]} value={value[1]} />)
  return (
    <ProductsHeader>
      <form>
        <input type="search" name="search" id="search" />
        <TfiSearch className='search_icon' />
      </form>
      {Object.entries(filter).map((value,i) => <ProdcutsRadio key={i} title={value[0]} value={value[1]} isOpen={isOpen} defaultState={defaultState} />)}
  </ProductsHeader>
  )
}

export default AdminProductsHeader;
