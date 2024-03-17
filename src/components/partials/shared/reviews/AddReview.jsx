import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { ApiContext } from '../../../../contexts/ApiProvider';
import { ProductContext } from '../../../../contexts/ProductProvider';
import StarRating from '../starRating/StarRating';


const AddReview = () => {
    const { item } = useContext(ProductContext);
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const { addReviewAsync } = useContext(ApiContext)
    const [ submittedReview, setSubmittedReview] = useState(false)
      
      
    const handleStarClick = (selectedRating) => {
          setRating(selectedRating)
    };

    const handleSubmit = async (event) => {
          event.preventDefault();
          const review = { productId: item.id, comment: comment, rating: rating }
          const response = await addReviewAsync(review);
          setSubmittedReview(true);
    };
  
      
  return (
  <form>
    <div className="container mt-5"> 
  
    <div className="row">
          <div className="col-4"><NavLink className="nav-standard" to={"/products/" + item.id}><i className="fa-solid fa-angle-left"></i></NavLink></div>
          <div className="col-4 adress-title">Leave a review</div>
          <div className="col-4"></div>
      </div>
              
  
      <div className='col-lg-12 mt-5 text-center'>
        <StarRating rating={0} onStarClick={handleStarClick} clickable={true} />
      </div>
  
        
      <div className="col-lg-12 mt-5 input-wrapper">
      <label htmlFor="comment">Comment</label>
      <input name="comment" value={comment} onChange={(event) => setComment(event.target.value)} type="text" >
      </input>
      <div id="title" className="text-danger ml-5"></div>
      </div>
  
   
      {!submittedReview && <button className="dark-btn-standard my-5" onClick={handleSubmit}>ADD REVIEW</button>}
      
      {submittedReview && <p>Thank you for leaving a review!</p>}
   </div>
  </form>
  
  )}
  
  export default AddReview;