import React from 'react'
import Check from './styles.component';

const OrderCheck = () => {
  return (
    <Check>
        <div>
        <p>customerID</p>
        <p>123456</p>
        </div>

        <div>
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
        </div>

        <div>
        <textarea rows='5' cols='50' placeholder="comments">
        </textarea>
        <div>
            <button type="button" >cancel</button>
            <button type="button" >submit</button>
        </div>
        </div>
  </Check>
  )
}

export default OrderCheck;