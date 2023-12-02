import React from 'react'
import { LuChevronRightCircle } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import Lists from './styles.component';

const OrderLists = () => {
  return (
    <Lists>
        <div>
            <p>1</p>
            <p>kaung kaung</p>
            <LuChevronRightCircle className='icon right' />
        </div>

        <div>
            <p>2</p>
            <p>maung kaung</p>
            <IoCheckmarkCircleOutline className='icon check' />
        </div>

        <div>
            <p>3</p>
            <p>aung kaung</p>
            <FcCancel className='icon cancel' />
        </div>
    </Lists>
  )
}

export default OrderLists;