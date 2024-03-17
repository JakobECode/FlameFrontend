// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import "./header.css";
// import {ShoppingCartContext} from "../../../contexts/ShoppingCartProvider";



// const Header = ({route, title, shoppingBag }) => {

//     const {totalItems, totalPrice} = useContext(ShoppingCartContext)
   
  
  
//       return (
//           <>
//             <div className="row">
//             <div className="col-4"><NavLink className="nav-standard" to={route}><i className="fa-solid fa-angle-left"></i></NavLink></div>
  
//             <div className="col-4 header-title">{title}</div>  
//             {shoppingBag == "hidden" ? (
//                   <div className="col-4 header-icon-content"><NavLink to="/shoppingcart" className="nav-standard"><i className="fa-2xs fa-light fa-bag-shopping"></i>
//             <span class='badge badge-warning' id='lblCartCount'> ${totalPrice} </span></NavLink></div>
//             ) : (
//                 <div className="col-4 header-icon-content"><NavLink to="/shoppingcart" className="nav-standard"><i className="fa-2xs fa-light fa-bag-shopping"></i>
//             <span class='badge badge-warning' id='lblCartCount'> {totalItems} </span></NavLink></div>
            
//             )}
           
//             </div>
//           </>
//       )
  
//   }
  
//   export default Header;