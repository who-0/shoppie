import React, { useContext, useState } from "react";
import { LuChevronRightCircle } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import Lists from "./styles.component";
import { Context } from "../src/contexts/AppConte";
import colors from "colors";

const OrderLists = ({ orderLists }) => {
  const [active, setActive] = useState("");
  const { setOrderInfo } = useContext(Context);
  let indexNo = 0;
  const icon = {
    pending: <LuChevronRightCircle className="icon right" />,
    success: <IoCheckmarkCircleOutline className="icon check" />,
    cancel: <FcCancel className="icon cancel" />,
  };

  const productCollection = [];

  // eslint-disable-next-line array-callback-return
  orderLists.map((order) => {
    const { customerId, email, name, orderId, phone } = order;
    // eslint-disable-next-line array-callback-return
    order.products.map((product) => {
      productCollection.push({
        ...product,
        customerId,
        email,
        name,
        orderId,
        phone,
      });
    });
  });

  const checkDetailOrder = (...others) => {
    const { product, id } = others[0];
    setActive(id);
    setOrderInfo(product);
  };

  return (
    <Lists>
      {productCollection.map((product, index) => (
        <div
          key={product._id}
          style={{
            backgroundColor: `${
              active === product._id ? colors.admin_color : "transparent"
            }`,
            color: `${active === product._id ? "white" : colors.admin_color}`,
          }}
          index={+index}
          onClick={(_) => checkDetailOrder({ product, id: product._id })}
        >
          <p>{(indexNo += 1)}</p>
          <p>{product.name}</p>
          {icon[product.status]}
        </div>
      ))}
    </Lists>
  );
};

export default OrderLists;
