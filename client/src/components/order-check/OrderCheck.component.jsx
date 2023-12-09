import React, { useContext, useState } from 'react'
import Check from './styles.component';
import { Context } from 'contexts/AppContexts';


const OrderCheck = () => {
  const {orderInfo} = useContext(Context);
  const {customerId,email,name,phone,quantity,singlePrice,status,title} = orderInfo
  const defaultInfo = {
    customerId,
    email,
    name,
    phone,
    quantity,
    singlePrice,

    status ,
    title,
  }
  console.log(defaultInfo);

  const [defaultState,setDefaultState] = useState(defaultInfo);
  // console.log(defaultState);

  const Info = [
    {
      id: 1,
      customerId:orderInfo.customerId || '',
    },
    {
      id:2,
      name:orderInfo.name || '',
    },
    {
      id:3,
      email:orderInfo.email || '',
    },
    {
      id:4,
      phone:orderInfo.phone || 0,
    },
    {
      id:5,
      orderId:orderInfo.orderId || 0,
    },
    {
      id:6,
      orderName:orderInfo.title || '',
    },
    {
      id:7,
      orderQuantity:orderInfo.quantity || 0,
    },
    {
      id:8,
      price:orderInfo.singlePrice || 0,
    },
    {
      id:9,
      totalPrice:orderInfo.singlePrice * orderInfo.quantity || 0,
    },
  ]





  return (
    <Check>
      {
        Info.map(i =>(
   
          <div key={i.id} className='info'>
            <p>{Object.keys(i)[1]}</p>
            <p>{Object.values(i)[1]}</p>
        </div>
      

        ))
      }
        <div className='comment'>
          <textarea  placeholder="comments">
          </textarea>
        </div>
        <div>
          <select defaultValue={orderInfo.status}>
            <option value="success">success</option>  
            <option value="pending">pending</option>  
            <option value="cancel">cancel</option>  
          </select>
        </div>
       
        <div className='btn_gp'>
            <button type="button" >cancel</button>
            <button type="button" >submit</button>
        </div>
  </Check>
  )
}

export default OrderCheck;