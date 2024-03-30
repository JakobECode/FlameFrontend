// import React, { useContext, useState } from 'react';
// import "./shoppingCart.css";
// import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider';
// import { NavLink } from 'react-router-dom';
// import { ApiContext } from '../../../contexts/ApiProvider';
// import Address from '../user/profile/Address';
// import PaymentMethod from '../user/profile/PaymentMethod';
// import { AddressContext } from '../../../contexts/AddressProvider';
// import Header from '../../partials/header/Header';
// import OrderDeclinedPage from '../oderResult/OrderDeclined';
// import OrderConfirmationPage from '../oderResult/OrderConfirmationPage';



// const Checkout = () => {
//     const { totalPrice, shoppingCart } = useContext(ShoppingCartContext);
//     const { chosenAddress} = useContext(AddressContext);
//     const { createOrderAsync } = useContext(ApiContext);
//     const [paymentMethod, setPaymentMethod] = useState({});
//     const [showAddress, setShowAddress] = useState(false);
//     const [showPaymentMethod, setShowPaymentMethod] = useState(false);
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [showDeclined, setShowDeclined] = useState(false);
//     const [orderConfirmed, setOrderConfirmed] = useState(true);

//     const showAddresses = () => {
//       setShowAddress(!showAddress);
//       setShowPaymentMethod(false);
//     };
  
//     const showPaymentMethods = () => {
//       setShowPaymentMethod(!showPaymentMethod);
//       setShowAddress(false);
//     };
  
//     const placeOrder = async () => {
//         if (chosenAddress.id != null) {
//             var orderItems = shoppingCart.map((item) => {
//                 let orderItem = {
//                     "id": item.id,
//                     "productId": item.id,
//                     "productName": item.name,
//                     "unitPrice": item.price,
//                     "imageUrl": item.imageUrl,
//                     "quantity": item.quantity
//                 }
//                 return orderItem;
//             })

//             const order = {
//                 "addressId": chosenAddress.id,
//                 "items": orderItems,
//                 "price": totalPrice
//             }
//             console.log(order)

//             const response = await createOrderAsync(order);
//             if (response) {
//                 setShowConfirmation(true);
//             } else {
//                 setShowDeclined(true);
//             }
//         } else {
//             setOrderConfirmed(false)
//         }      
//     }
  
//     if (showConfirmation) {
//         return <OrderConfirmationPage />
//     } else if (showDeclined) {
//         return <OrderDeclinedPage />
//     } else {
//         return (
//             <>
//                 <div className='container'>
//                     <Header route={"/shoppingcart"} title={"Checkout"} shoppingBag={"hidden"} />

//                     <div>
//                         <div className='text-space mt-4'>
//                             <div><p>My Order</p></div>
//                             <div><p>${ totalPrice }</p></div>
//                         </div>
//                         <hr></hr>
              
//                         <div>
//                             {shoppingCart.map((item) => (
//                                 <div className="row wishlist-content">
//                                     <div className='col text-space'>
//                                         <div className='text'> {item.name}</div> 
//                                         <div className='text'> {item.quantity} X ${item.price} </div>
//                                     </div>
//                                 </div> 
//                             ))}   
//                             <hr />
//                         </div>
              
//                         <div className='text-space'>
//                             <div><p>Discount </p></div>
//                             <div><p> $0 </p></div>
//                         </div>
//                         <div className='text-space'>
//                             <div><p>Delivery</p></div>
//                             <div><p>Free</p></div>
//                         </div>
//                     </div>
          
//                     <hr className='mt-4 mb-4'></hr>

//                     <div className="row profile-content">          
//                         <div className="col" onClick={showAddresses}>
//                             <i className="fa-regular fa-location-dot profile-icon"></i>
//                             <span className="profile-text">Address</span>
//                         </div>
//                         <div className="col profile-arrow" onClick={showAddresses}>
//                             <i className={!showAddress ? 'fa-light fa-chevron-right' : 'fa-light fa-chevron-left'} ></i>
//                         </div>
          
//                         <hr className="mb-4 mt-4" />
//                         {showAddress && <Address />}
//                     </div>

//                     <div className="row profile-content" >          
//                         <div className="col" onClick={showPaymentMethods}>
//                             <i className="fa-light fa-credit-card-blank profile-icon"></i>
//                             <span className="profile-text">Payment method</span>
//                         </div>
//                         <div className="col profile-arrow" onClick={showPaymentMethods}>
//                             <i className={!showPaymentMethod ? 'fa-light fa-chevron-right' : 'fa-light fa-chevron-left'} ></i>
//                         </div>
          
//                         <hr className="mb-4 mt-4" />
//                         {showPaymentMethod && <PaymentMethod />}
//                     </div>
            
//                     <div>
//                         {!orderConfirmed && <p className='center'>You must choose an address and a payment method</p>}
//                         <button className="dark-btn-standard" onClick={placeOrder}>CONFIRM ORDER</button>   
//                     </div>
//                 </div>    
//             </>
//         )
//     }
// }

// export default Checkout;