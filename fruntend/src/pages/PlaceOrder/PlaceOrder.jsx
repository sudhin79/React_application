import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../components/context/StoreConext';
import { food_list } from '../../assets/assets';

const PlaceOrder = () => {
  const { cartItems } = useContext(StoreContext);

  // Calculate totals
  const totalAmount = food_list.reduce((acc, item) => {
    return acc + item.price * (cartItems[item._id] || 0);
  }, 0);
  const deliveryFee = totalAmount > 0 ? 40 : 0;
  const grandTotal = totalAmount + deliveryFee;

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    mobile: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Info:', formData);
    alert('Order Placed Successfully!');
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" name="firstName" placeholder="First name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required />
        </div>

        <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Full address" onChange={handleChange} required />

        <div className="multi-fields">
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" onChange={handleChange} required />
        </div>

        <div className="multi-fields">
          <input type="text" name="zip" placeholder="Zip code" onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        </div>

        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
      </div>

      <div className="place-order-right">
        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <div className="summary-details">
            <p>Subtotal: <b>₹{totalAmount}</b></p>
            <p>Delivery: <b>₹{deliveryFee}</b></p>
            <hr />
            <p>Total: <b>₹{grandTotal}</b></p>
          </div>
          <button type="submit" className="confirm-btn">Confirm Order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
