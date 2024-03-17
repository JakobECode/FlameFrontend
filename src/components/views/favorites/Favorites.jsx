// import {useContext, useState, useEffect} from 'react';
// import React from 'react';
// import "./favorites.css";
// import { NavLink } from 'react-router-dom';
// import Header from "../../partials/header/Header";
// import StarRating from "../../partials/shared/starRating/StarRating";
// import Navigation from '../../partials/navigation/Navigation';
// import { WishlistContext } from '../../../contexts/WishlistProvider';



// const Favorites = () => {

//     const { wishlist, deleteWishlist, setWishlist } = useContext(WishlistContext);
  
//     const deleteProduct = async (id) => {
//      await deleteWishlist(id)
//     }
  
//     const renderWishlist = () => {
  
//       if(wishlist != 0){
//         return (    
//           <>    
//           {wishlist.map((item, index) => (
//             <div className="row wishlist-content">
        
//             <div className="img-content">
//             <img className="img-wishlist" src={item.imageUrl}></img>
//             </div>
            
//             <div className='col text-content'>
//             <div className='text'> {item.description}</div>
//             <div className='text'> ${item.price}</div>
//             <div className='text'><StarRating rating={item.rating} numberOfReviews={item.reviewCount}/></div> 
//             </div>
          
//             <div className="col icon-content">
//             <i class="fa-solid fa-heart icon-heart fa-lg" onClick={() => {deleteProduct(item.id)}}></i>
//             </div>
    
//             <hr className='mt-3'></hr>
//             </div> 
//           ))}
//           </>
//         )
//       } else {
//         return (
//         <>
//         <div className='wishlist-empty-content mb-5'>
//         <img className='wishlist-empty' src={wishImg}></img>
//         <NavLink to="/home"><div className='mt-5'><button className="button-wishlist-empty col-12 col-lg-6">SHOP NOW</button></div></NavLink>
//         </div>
//         </>
//         )
//       }
//     }
  
    
//     return (
//        <>
//        <div className='container mt-5 mb-5'>
//        <Header title="Wishlist" route="/home" link="no"/>
//        <div className='mt-5'>
//        {renderWishlist()}
//        </div>
//        </div>
//        <Navigation />
//       </>
//     )
//   }
  
//   export default Favorites;