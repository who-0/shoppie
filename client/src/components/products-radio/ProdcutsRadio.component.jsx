import React from 'react'
import Radio from './styles.component';

const ProdcutsRadio = ({value,title}) => {

  return (
    <Radio htmlFor={value}>
    <input type="radio" id={value} name={title} />
    {title === 'price' ? '$' + value : value}
  </Radio>
  )
}

export default ProdcutsRadio;