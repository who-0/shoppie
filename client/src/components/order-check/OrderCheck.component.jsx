import React, { useContext, useEffect, useState } from "react";
import Check from "./styles.component";
import { Context } from "../../contexts/AppContexts";

const OrderCheck = () => {
  const { orderInfo, submitOrder } = useContext(Context);
  const {
    customerId,
    email,
    name,
    phone,
    quantity,
    singlePrice,
    status,
    title,
    orderId,
    _id,
    comment,
  } = orderInfo;
  const defaultValue = {
    comment: comment,
    changeStatus: status,
  };
  const [defaultState, setDefaultState] = useState(defaultValue);
  useEffect(() => {
    setDefaultState({ comment, changeStatus: status });
  }, [comment, status]);

  const Info = [
    {
      id: 1,
      customerId: customerId || "",
    },
    {
      id: 2,
      name: name || "",
    },
    {
      id: 3,
      email: email || "",
    },
    {
      id: 4,
      phone: phone || 0,
    },
    {
      id: 5,
      orderId: orderId || 0,
    },
    {
      id: 6,
      orderName: title || "",
    },
    {
      id: 7,
      orderQuantity: quantity || 0,
    },
    {
      id: 8,
      price: singlePrice || 0,
    },
    {
      id: 9,
      totalPrice: singlePrice * quantity || 0,
    },
  ];

  const changeHandler = (e) => {
    setDefaultState({ ...defaultState, [e.target.name]: e.target.value });
  };

  const submitHandler = (_) => {
    submitOrder({ ...defaultState, orderId, _id });
  };

  return (
    <Check>
      {Info.map((i) => (
        <div key={i.id} className="info">
          <p>{Object.keys(i)[1]}</p>
          <p>{Object.values(i)[1]}</p>
        </div>
      ))}

      <div className="comment">
        <textarea
          placeholder="comments"
          name="comment"
          value={defaultState.comment}
          onChange={changeHandler}
        />
      </div>
      <div className="status">
        <label>Status:</label>
        <label name="status">{status}</label>

        <select
          onChange={changeHandler}
          name="changeStatus"
          value={defaultState.changeStatus}
        >
          <option value="" disabled autoFocus>
            select status
          </option>
          {status === "pending" ? (
            <option value="success">success</option>
          ) : (
            <option value="pending">pending</option>
          )}
          {status === "cancel" ? (
            <option value="success">success</option>
          ) : (
            <option value="cancel">cancel</option>
          )}
        </select>
      </div>

      <div className="btn_gp">
        <button type="button">cancel</button>
        <button type="button" onClick={submitHandler}>
          submit
        </button>
      </div>
    </Check>
  );
};

export default OrderCheck;
