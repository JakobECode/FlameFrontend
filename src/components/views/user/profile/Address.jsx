// import { NavLink, useLocation } from "react-router-dom";
// import "./profile.css"
// import { useContext, useEffect, useState } from "react";
// import { ApiContext } from "../../../../contexts/ApiProvider";
// import { AddressContext } from "../../../../contexts/AddressProvider";
// import EditAddress from "./EditAddress";


// const Address = () => {
//     const { getAddress, removeAddress } = useContext(ApiContext);
//     const { handleEditAdress, handleChosenAddress } = useContext(AddressContext);
//     const [address, setAddress] = useState([]);
//     const [orderAddress, setOrderAddress] = useState([]);
//     const [deleteResult, setDeleteResult] = useState(1);
//     const [navigationSource, setNavigationSource] = useState('');
//     const [chosenDiv, setChosenDiv] = useState({});
//     const location = useLocation();
  
//     useEffect(() => {
//       setNavigationSource(getNavigationSource());
//     }, []);

//     const getNavigationSource = () => {
//            return location.pathname;
//     };
   
//     useEffect (() => { handleGetAdress()}, [deleteResult]);

//     const handleGetAdress = async () => {     
//         const response = await getAddress();
//         setOrderAddress(response.map((item) => ({...item.address, title: item.title})))
//         setAddress(response.map((item) => ({ ...item.address, id: item.id, title: item.title })))
//     }
    
//   const declareAddress = (adress) => {
//       const filteredAddress = orderAddress.filter((orderAddress) => orderAddress.name === address.name );
//       const chosenAddress = filteredAddress.length > 0 ? filteredAddress[0] : null;
//       handleChosenAddress(chosenAddress);
//       setChosenDiv(adress.id)
//     }

//     const updatingAddress = async (address) => {
//      await handleEditAdress(address)
//     }

//     const deleteAddress = async (id) => {
//       if(await removeAddress (id)){
//         setDeleteResult(deleteResult + deleteResult + 1)
//       }
//     }

//     const renderContent = () => {
//       switch (navigationSource) {
//         case '/address':
//           return (
//             <> 
//               <div className="container my-5">
//                 <div className="row">
//                   <div className="col-4">
//                     <NavLink className="nav-standard" to="/profile">
//                       <i className="fa-solid fa-angle-left"></i>
//                     </NavLink>
//                   </div>
//                   <div className="col-4 address-title">My Address</div>
//                   <div className="col-4"></div>
//                 </div>
    
//                 <div className="row profile-content mb-5">
//                   <hr className="mb-4 mt-4"/>
//                   {address.map((item) => (
//                     //Användning av React.Fragment med key props där det behövs för att säkerställa att varje element i listrenderingen har en unik identifierare.
//                     <React.Fragment key={item.id}>   
//                       <div className="col">
//                         <i className="fa-sharp fa-solid fa-location-dot address-icon"></i>
//                         <span className="profile-text">{item.title}</span>
//                         <div className="profile-addresses-text">
//                           {item.streetName}, {item.postalCode}, {item.city}
//                         </div>
//                       </div>
    
//                       <div className="col profile-arrow">
//                         <i id="delete-icon" className="fa-sharp fa-regular fa-xmark" onClick={() => deleteAddress(item.id)}></i>
//                         <NavLink className="nav-standard" onClick={() => updatingAddress(item)} to='/editaddress'>
//                           <i className="fa-thin fa-pen"></i>
//                         </NavLink>
//                       </div>
    
//                       <hr className="mb-4 mt-4"/>
//                     </React.Fragment>    
//                   ))}  
//                 </div>
              
//                 <div className="my-5 new-address">
//                   <NavLink to="/addaddress" className="nav-standard">
//                     <i className="fa-duotone fa-plus fa-xl"></i>
//                   </NavLink>
//                   <div>Add a new address</div>
//                 </div>
//               </div>
//             </>
//           );
//         case '/checkout':
//           return (
//             <> 
//               <div className="container my-5">
//                 <div className="row">
//                   <div className="col-4"></div>
//                   <div className="col-4 address-title">Shipping Details</div>
//                   <div className="col-4"></div>
//                 </div>
    
//                 <div className="row profile-content mb-5">
//                   <hr className="mb-4 mt-4" />
//                   {address.map((item) => (
//                     <React.Fragment key={item.id}>   
//                       <div className="address-checkout-wrapper" onClick={() => declareAddress(item)}>
//                         <div className="col">
//                           <i className="fa-sharp fa-solid fa-location-dot address-icon"></i>
//                           <span className="profile-text">{item.title}</span>
//                           <div className="profile-addresses-text">
//                             {item.streetName}, {item.postalCode}, {item.city}
//                           </div>
//                         </div>
    
//                         <div className="profile-arrow-default text-end">
//                           {chosenDiv == item.id ? (
//                             <i className="fa-sharp fa-solid fa-circle"></i>
//                           ) : (
//                             <i className="fa-sharp fa-regular fa-circle"></i>
//                           )}
//                         </div>
//                       </div>    
//                       <hr className="mb-4 mt-4"/>
//                     </React.Fragment>
//                   ))}  
//                 </div>
//               </div>
//             </>
//           );
//         default:
//           return <div>Default content</div>;
//       }
//     };
    
//     return <div>{renderContent()}</div>;


// }

// export default Address;