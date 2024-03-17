import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import orderFailed from '../../../assets/images/OrderFailed.jpg';
import OrderResult from './/OrderResult.css';
import Home from '../home/Home';

const OrderDeclinedPage = () => {
    const [showDeclined, setShowDeclined] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
   
    const handleTryAgain = () => {
        setShowDeclined(false);
        setIsRefreshing(true);
       // window.location.reload();

    };

    useEffect(() => {
        if (isRefreshing) {
          setTimeout(() => {
            navigate('/shoppingcart'); //ska koppla tillbaka till shoppingbagen
            //window.location.reload();
          }, 1000); // Delay reloading for 1 second
        }
      }, [isRefreshing, navigate]);

      useEffect (() =>{
        const timer = setTimeout(() =>{
            setIsLoading(false);
        }, 2000);
      
        return () => {
            clearTimeout(timer);
        };
    },[]);
    
    return (
        <>
        {showDeclined &&(
        <div className="order-container">
            <img className="order-img" src={orderFailed} alt="Order declined"/>
            {/* <h2>Thank you for your order!</h2>
            <p>Your order will be delivered on time.</p>
            <p>Thank you!</p> */}
            <div className="btn-container">
                <button onClick={handleTryAgain} className="button">TRY AGAIN</button>
                <Link to="/profile" className="link">GO TO MY PROFILE</Link>
            </div>
        </div>
    )}
    {isLoading && <div>Loading...</div>}
    {!showDeclined && !isRefreshing && !isLoading && <Home/>}
    </>
    );
};
export default OrderDeclinedPage;