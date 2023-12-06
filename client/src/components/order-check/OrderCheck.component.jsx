import React, { useContext } from 'react'
import Check from './styles.component';
import { Context } from 'contexts/AppContexts';


const OrderCheck = () => {
  const {orderInfo} = useContext(Context);
  const {order={},product={}} = orderInfo;
  const Info = [
    {
      id: 1,
      customerId:order.customerId || '',
    },
    {
      id:2,
      name:order.name || '',
    },
    {
      id:3,
      email:order.email || '',
    },
    {
      id:4,
      phone:order.phone || 0,
    },
    {
      id:5,
      orderId:order.orderId || 0,
    },
    {
      id:6,
      orderName:product.title || '',
    },
    {
      id:7,
      orderQuantity:product.quantity || 0,
    },
    {
      id:8,
      price:product.singlePrice || 0,
    },
    {
      id:9,
      totalPrice:product.singlePrice * product.quantity || 0,
    }
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
     

        {/* <div>
        <p>Name</p>
        <p>kaung kaung</p>
        </div>

        <div>
        <p>contact email</p>
        <p>kaung@gmail.com</p>
        </div>

        <div>
        <p>phone</p>
        <p>9423008718</p>
        </div>

        <div>
        <p>orderID</p>
        <p>123456</p>
        </div>

        <div>
        <p>order name</p>
        <p>men shoe</p>
        </div>

        <div>
        <p>order quantity</p>
        <p>x3</p>
        </div>

        <div>
        <p>price</p>
        <p>$19.0</p>
        </div>

        <div>
        <p>total price</p>
        <p>$57.9</p>
        </div> */}

        <div className='comment'>
        <textarea  placeholder="comments">
        </textarea>
        
        </div>
        <div className='btn_gp'>
            <button type="button" >cancel</button>
            <button type="button" >submit</button>
        </div>
  </Check>
  )
}

export default OrderCheck;