import React, { useContext } from 'react';
import { useState } from 'react';
import "./detailedItem.css";
import StarRating from '../starRating/StarRating';
import Navigation from '../../navigation/Navigation';
import { ProductContext } from '../../../../contexts/ProductProvider';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartProvider';



const DetailedItem = () => {
    const [count, setCount] = useState(1);
    const { item } = useContext(ProductContext);
    const { addProductToCart } = useContext(ShoppingCartContext);
    const [addedToCart, setAddedToCart] = useState(true);
  
    const addToShoppingCart = async (product) => {
      await addProductToCart(product, product.price, count);
      setAddedToCart(true);
      console.log(count);
    };
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const decrementCount = () => {
      if (count != 1) {
        setCount(count - 1);
      }
    };
  
    return (
      <>
        <div className='container'>
          <div className='item-wrapper-detailed'>
            <div className="image-section-detailed">
              <img src={item.imageUrl} alt={item.name}/>
            </div>
            <div className='body-section-detailed'>
              <div className='container-flex'>
                <div className="name">{item.name}</div>
                <i className="fa-regular fa-heart"></i>
              </div>
              <StarRating rating={item.rating} numberOfReviews={item.reviewCount} />
              <div className='container-grid'>
                <div className="price">{item.price}</div> 
                <div className='amount-counter'>
                  <button onClick={decrementCount}>-</button>
                  <p>{count}</p>
                  <button onClick={incrementCount}>+</button>
                </div>
              </div>
              <p className='mt-3'>Description</p>
              <div className='my-3'>{item.description}</div>
            </div>
          </div>
          <button className="dark-btn-standard" onClick={() => { addToShoppingCart(item) }}>+ ADD TO CART</button>      
        </div> 
      </>
    );
  };
  
  export default DetailedItem;