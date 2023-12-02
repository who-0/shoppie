import OrderCheck from 'components/order-check/OrderCheck.component';
import OrderLists from 'components/order-lists/OrderLists.component';
import React from 'react'
import InfoContainer from './styles.component';

const OrderInfoContainer = () => {
  return (
    <InfoContainer>
    <OrderLists />
    <OrderCheck />
  </InfoContainer>
  )
}

export default OrderInfoContainer;