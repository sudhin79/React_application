import React from 'react';
import './Order.css';
import { FaBoxOpen } from 'react-icons/fa';

const Order = () => {
  return (
    <div className="order-page">
      <h2>Order Page</h2>
      <div className="order-card">
        <div className="order-left">
          <FaBoxOpen className="order-icon" />
          <div className="order-details">
            <p className="order-items"><strong>Greek salad x 2, Peri Peri Rolls x 3</strong></p>
            <p>Avinash Kumar</p>
            <p>GreatStack, Whitefield,</p>
            <p>Bangalore, Karnataka, 560066, 560066</p>
            <p>9876543210</p>
          </div>
        </div>

        <div className="order-right">
          <p>Items: <strong>2</strong></p>
          <p><strong>$65</strong></p>
          <select className="order-status">
            <option>Food Processing</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Order;
