import React, { useContext } from 'react'
import { LuChevronRightCircle } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import Lists from './styles.component';
import { Context } from 'contexts/AppContexts';


const OrderLists = ({orderLists}) => {

  const {setOrderInfo} = useContext(Context)

  const icon = {
    pending: <IoCheckmarkCircleOutline className='icon check' />,
    success: <LuChevronRightCircle className='icon right' />,
    cancel: <FcCancel className='icon cancel' />
  };

  const checkDetailOrder = (...others) => {
    others = others[0];
    setOrderInfo(others)
  }

  return (
    <Lists>
    {
      orderLists.map((order,index) => (
        order.products.map((product) => (
          <div key={product.orderId} onClick={ _ => checkDetailOrder({
            customerId:order.customerId,
            orderId:order.orderId,
            product,
            order,
            })} >
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