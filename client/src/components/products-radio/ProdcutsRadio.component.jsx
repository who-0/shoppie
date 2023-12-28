import React, { useState } from 'react'
import Radio from './styles.component';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const ProdcutsRadio = ({value,title,isOpen,defaultState}) => {
const defaultValue = {
  rating:'',
  price:'',
  type:'',
}
  const [filter,setFilter] = useState(defaultValue);

  const changeHandler = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    setFilter({...filter,[e.target.name]:e.target.id})
    
  }
  console.log(filter);
  return (
<Radio title={title} defaultstate={defaultState}>
  <div onClick={isOpen} name={title}>
    <p name={title}>{title}</p>
    <MdOutlineArrowDropDownCircle className='dorp_icon'  />
  </div>
  <div>
      {
        value.map((value,i)=> (
          <label htmlFor={value} key={i}>
             <input type="radio" id={value} name={title} onChange={changeHandler} value={filter} />
              {title === 'price' ? '$' + value : value}
          </label>
        ))
      }
  </div>
</Radio>
  )
}

export default ProdcutsRadio;




