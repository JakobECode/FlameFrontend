// import { NavLink, useParams } from 'react-router-dom';
// import React, { useState, useContext, useEffect } from 'react';
// import "./reviewSection.css";
// import { ProductContext } from '../../../../contexts/ProductProvider';
// import { ApiContext } from '../../../../contexts/ApiProvider';



// const ReviewSection = () => {
    
//     const { item } = useContext(ProductContext);
//     const { getReviewsByIdAsync } = useContext(ApiContext);
//     const { id } = useParams();
    
    
    

//     const [reviewList, setReviewList] = useState([])
    
//     const initiateReviewList = async () => {
//         let data = await getReviewsByIdAsync(item.id);
//         setReviewList(data);
//     }

//         useEffect(() => {
//          initiateReviewList()
//         }, []);


//     return (
//         <>
//             <div className='container mt-5'>
//                 <div className='header-section'>
//                     <div className='col-4'>
//                          <h3>Reviews</h3>
//                     </div>
//                     <div className='col-4 text-center'>
//                         <NavLink to={"/products/" + item.id + "/reviews/add"}>
//                             <button className='camo-btn'><h5>Add Review</h5></button>
//                         </NavLink>
//                     </div>
//                     <div className='col-4 text-end'>
//                         <NavLink to={"/products/" + item.id + "/reviews"}>
//                             <button className='camo-btn'> View all <i class="fa-solid fa-greater-than"></i></button>
//                         </NavLink>
//                     </div>
                   
                 
//                 </div>
//                 {reviewList.map((review) => {
//                     const dateObject = new Date(review.createdDate);
//                     return (
//                         <div className='review-section'>
//                             <div className='profile-image'>
//                                 <img src={review.imageUrl} alt="" className='circle' />
//                             </div>
//                             <div className='text-section'>
//                                 <div className='name'> {review.name} </div>
//                                 <div className='star-rating-review'> <StarRating rating={review.rating} /> </div>
//                                 <div className='date'>{dateObject.toLocaleDateString()}</div>
//                                 <div className='comment'> {review.comment} </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div> 
//         </>
//     );
// }

// export default ReviewSection;