import React from 'react'
import Item from './styles.component';


const StatusItem = ({title,count,color,textColor}) => {
  return (
    <Item color={color} $textcolor={textColor}>
        <h1>{count}</h1>
        <p>{title}</p>
    </Item>
  )
}

export default StatusItem;