import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DetailedItem from '../../partials/shared/detailedItem/DetailedItem';
import { ApiContext } from '../../../contexts/ApiProvider';
import { ProductContext } from '../../../contexts/ProductProvider';
import ReviewSection from '../../partials/shared/reviews/ReviewSection';
import Header from '../../partials/header/Header';



const Product = () => {
    const { getProductByIdAsync } = useContext(ApiContext);
    const { id } = useParams();
    const { item, designateDetailedItem } = useContext(ProductContext);
    const [ showReview, setShowReview ] = useState(false);
  
    const setDetailedItem = async () => {
      const item = await getProductByIdAsync(id)
      await designateDetailedItem(item)
      setShowReview(true)
    }
  
    useEffect(() => {
      setDetailedItem()
    }, []);
  
   
      return (
      <>
      <div className="container mt-5">
      <Header route={"/home"} title={"Flame"}/>
      </div>
        
        <DetailedItem item={item} />
        {showReview && <ReviewSection item={ item }/>}       
      </>
    );
    
    
  };
  
  export default Product;