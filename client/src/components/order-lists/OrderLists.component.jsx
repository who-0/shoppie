import React, { useContext, useState } from 'react'
import { LuChevronRightCircle } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import Lists from './styles.component';
import { Context } from 'contexts/AppContexts';


const OrderLists = ({orderLists}) => {
  const [active,setActive] = useState(false);
  const {setOrderInfo} = useContext(Context)
  let indexNo = 0;
  const icon = {
    pending: <LuChevronRightCircle className='icon right' />,
    success: <IoCheckmarkCircleOutline className='icon check' />,
    cancel: <FcCancel className='icon cancel' />
  };
 

  const productCollection = [];

  orderLists.map((order) => {
    const {customerId,email,name,orderId,} = order;
    order.products.map((product) => {
      productCollection.push({...product,customerId,email,name,orderId})
    })
  })
  // console.log(orderCollection);
  // console.log(productCollection);

    
 
  const checkDetailOrder = (...others) => {
    const {product,id} = others[0];
    console.log(id);
    console.log(product);
    setActive(true)
    setOrderInfo(product);
  }
 




  return (
    <Lists>
    {
    
      productCollection.map((product) => (
        
          <div key={product._id} 
          active={+active}
          onClick={ _ => checkDetailOrder({product,id:product._id})}>
              <p>{indexNo+=1}</p>
              <p>{product.name}</p>
              {icon[product.status]}
          </div>
        ))

    }
    </Lists>
  )
}

export default OrderLists;