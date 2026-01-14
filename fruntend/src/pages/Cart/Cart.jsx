import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreConext';
import { food_list } from '../../assets/assets';
import { Link, Navigate } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const totalAmount = food_list.reduce((acc, item) => {
    return acc + item.price * (cartItems[item._id] || 0);
  }, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Your Cart</h2>
        <div className="cart-items-title">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(item._id)}>-</button>
                  <span>{cartItems[item._id]}</span>
                  <button onClick={() => addToCart(item._id)}>+</button>
                </div>
                <p>₹{item.price * cartItems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)} className='remove-btn'>
                  <MdDeleteOutline size={22} color="#ff4d4f" />
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="summary-details">
          <p>Subtotal: <b>₹{totalAmount}</b></p>
          <p>Delivery: <b>${totalAmount > 0 ? 2 : 0}</b></p>
          <hr />
          <p>Total: <b>₹{totalAmount > 0 ? totalAmount +(2*85) : 0}</b></p>
        </div>
        <button onClick={()=>Navigate('/order/')} className="checkout-btn" >Proceed to Checkout</button>
        <Link to="/"><button className="back-btn">← Continue Shopping</button></Link>
      </div>
    </div>
  );
};

export default Cart;
