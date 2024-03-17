import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import orderSuccessful from '../../../assets/images/OrderSuccessful.jpg';
import OrderResult from './/OrderResult.css';
import Home from '../home/Home';

const OrderConfirmationPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const navigate = useNavigate();

  const handleViewOrders = () => {
    console.log('View orders');
    // Add the logic to navigate to the profile page
    navigate('/orderHistory'); //och länka till order history
  };

  const handleContinueShopping = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {showConfirmation && (
        <div className="order-container">
          <img className="order-img" src={orderSuccessful} alt="Order accepted" />
          <div className="btn-container">
            <button onClick={handleViewOrders} className="button">VIEW ORDERS</button>
            <Link to="/home" className="link">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      )}
      {!showConfirmation && <Home />}
    </>
  );
};

export default OrderConfirmationPage;