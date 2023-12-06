import React from 'react'
import { LuChevronRightCircle } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import Lists from './styles.component';

const OrderLists = ({orderLists}) => {
  console.log(orderLists);
  const icon = {
    pending: <IoCheckmarkCircleOutline className='icon check' />,
    success: <LuChevronRightCircle className='icon right' />,
    cancel: <FcCancel className='icon cancel' />
  };

  const checkDetailOrder = (...others) => {
    console.log(others);
  }

  return (
    <Lists>
    {
      orderLists.map((order,index) => (
        order.products.map((product) => (
          <div key={product.orderId} onClick={ _ => checkDetailOrder(order.customerId
,order.orderId,product,order)} >
            <p>{index+1}</p>
            <p>{order.name}</p>
            {icon[product.status]}
          </div>
        ))
      ))
    }
    </Lists>
  )
}

export default OrderLists;