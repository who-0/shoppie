import { useState } from "react";
import Wrapper from "./styles.component";

const OrderFrom = ({ user }) => {
  const { name, email } = user;
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    if (isNaN(e.target.value)) return;
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order From", phone);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Your Contact Info</h1>
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
          <button type="button" className="btn">
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
