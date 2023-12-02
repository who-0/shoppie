import React from 'react'
import Header from './styles.component';

const OrderHeader = ({orderStatus}) => {
  return (
    <Header>
    <h1>orders</h1>
    <div>
      <p>total pending orders - </p>
      <p>{orderStatus.pending}</p>
    </div>
 </Header>
  )
}

export default OrderHeader;