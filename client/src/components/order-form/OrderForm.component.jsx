/* eslint-disable react/prop-types */
import { useState } from "react";
import Wrapper from "./styles.component";

const OrderFrom = ({
  user,
  checkInfo,
  confirmeOrder,
  cartItem,
  updatePhone,
  totalPrice,
}) => {
  const { name, email } = user;
  const [phone, setPhone] = useState(user.phone || "");

  const handleChange = (e) => {
    if (isNaN(e.target.value)) return;
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.phone !== phone) {
      updatePhone(phone);
    }
    await confirmeOrder(cartItem, totalPrice);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Check Your Contact Info</h1>
        {phone.length === 0 && (
          <span style={{ color: "red" }}>Please Provide a Phone Number</span>
        )}
        <label htmlFor="name" className="name">
          name
        </label>
        <input type="text" name="name" id="name" disabled value={name} />

        <label htmlFor="email" className="email">
          email
        </label>
        <input type="email" name="email" id="email" disabled value={email} />

        <label htmlFor="phone" className="phone">
          phone no:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          value={phone}
          placeholder="9xxxxx"
          onChange={handleChange}
          maxLength="10"
        />
        <div className="order_btn">
          <button type="button" className="btn" onClick={checkInfo}>
            cancel
          </button>
          <button type="submit" className="btn">
            confirme
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default OrderFrom;
