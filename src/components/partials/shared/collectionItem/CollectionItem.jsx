// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import "./collectionItem.css";
// import { useContext, useState } from 'react';
// import { ProductContext } from '../../../../contexts/ProductProvider';
// import StarRating from '../starRating/StarRating';
// import { WishlistContext } from '../../../../contexts/WishlistProvider';



// const CollectionItem = ({item}) => {
//     const { designateDetailedItem } = useContext(ProductContext)
//     const { handleWishlist, wishlist, deleteWishlist } = useContext(WishlistContext);
  
//     const showDetailedItem = async (item) => {
//         await designateDetailedItem(item)
//     }
 
//     const wishListHandle = async (product) => {
//         await handleWishlist(product)
//     }

//     useEffect (() => {
//         handleHeartOnStart()
//     }, [])

//     const handleHeartOnStart = () => {
//         const elements = document.querySelectorAll(".hej");
//         elements.forEach((item) => {
//             wishlist.filter((element) => {
//                 if(item.id == element.id){
//                     item.classList.add("red")
//                 }
//             })
//         })
//     }

//     const handleHeart = (e) => {
//         const id = e.target.id;
//         const icon = wishlist.filter((item) => {
//             if(item.id == id){
//                 return item;
//             }
//         });
//         if (icon != null){
//             if(e.target.classList.contains("red")){
//                 e.target.classList.remove("red")
//                 deleteWishlist(id)
//             } else {
//                 e.target.classList.add("red")
//             }
//         }
//     }

//     return (

//             <div className="item-wrapper">
//                 <div className="image-section">
//                         <img src={item.imageUrl} alt={item.name}/>
//                     <div className="image-menu">
//                         <div className='icons'>
//                         <button onClick={() => { wishListHandle(item)}} className="image-link"><i id={item.id} onClick={(e) => {handleHeart(e)}} className="fa-solid fa-heart fa-lg hej"></i></button>
                            
//                             <NavLink to={"/products/" + item.id}>
//                             <button onClick={() => { showDetailedItem(item) }} className="image-link mt-2"><i className="fa-regular fa-bag-shopping bag-icon-hej"></i></button>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//                     <div className="body-section">
//                         <div className="name">{item.name}</div>
//                         <StarRating rating={item.rating} numberOfReviews={item.reviewCount}/>
//                     <div className="price">${item.price}</div>
//                 </div>
//             </div>
//   )
// }


// export default CollectionItem;