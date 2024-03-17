// import { NavLink } from "react-router-dom";
// import React, { useState, useContext } from "react";
// import "./Search.css";
// import Navigation from "../../partials/navigation/Navigation";
// import { ApiContext } from "../../../contexts/ApiProvider";
// import { ProductContext } from "../../../contexts/ProductProvider";
// import Contact from "../contact/Contact";



// const Search = () => {
//     const { getAllProductsAsync } = useContext(ApiContext);
//     const { setProducts } = useContext(ProductContext);
//     const [showCategories, setShowCategories] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
  
//     const handleMenuToggle = () => {
//       setShowCategories(!showCategories);
//     };
//     const handleDropdownToggle = () => {
//       setShowDropdown(!showDropdown);
//     };
  
//     const handleProducts = async (category) => {
//       console.log(category);
//       let products = await getAllProductsAsync();
//       let filterProducts = products.filter((item) => item.tags == category);
//       setProducts(filterProducts);
//     };
  
  
//     const handleProductsCategory = async (category) => {
//       let products = await getAllProductsAsync();
//       let filterProducts = products.filter((item) => item.category == category);
//       setProducts(filterProducts);
//     };
  
  
//     return (
//       <>
//         <Navigation />
//         <div className="category-search-page">
//           <div className="top-navbar-grid">
//             <div className="top-navbar-menu-block" onClick={handleMenuToggle}>
//               <Contact />
//             </div>
//             <div className="top-navbar-search">
//               <input placeholder="&#x1F50E;&#xFE0E; Search..." />
//             </div>
//           </div>
  
//           <div className="top-navbar-cart" style={{ justifySelf: "end" }}>
//             <i class="fa-light fa-bag-shopping"></i>
//           </div>
  
//           <div className="category-grid-links">
//             <NavLink className="nav-standard" to="/filter">
//               <div
//                 onClick={() => {
//                   handleProductsCategory("Men");
//                 }}
//                 className="category-links"
//               >
//                 Men
//               </div>
//             </NavLink>
  
//             <NavLink className="nav-standard" to="/filter">
//               <div
//                 onClick={() => {
//                   handleProductsCategory("Woman");
//                 }}
//                 className="category-links"
//               >
//                 Women
//               </div>
//             </NavLink>
  
//             <NavLink className="nav-standard" to="/filter">
//               <div
//                 onClick={() => {
//                   handleProductsCategory("Kids");
//                 }}
//                 className="category-links"
//               >
//                 <div>Kids</div>
//               </div>
//             </NavLink>
  
//             <NavLink className="nav-standard" to="/filter">
//               <div
//                 onClick={() => {
//                   handleProductsCategory("Accessories");
//                 }}
//                 className="category-links"
//               >
//                 Accessories
//               </div>
  
//             </NavLink>
  
//                   </div>
  
//               <div className='top-navbar-cart' style={{ justifySelf: 'end' }}>
//                   <i class="fa-light fa-bag-shopping"></i>
//               </div> 
           
   
//             <div
//               onClick={() => {
//                 handleProducts("dresses");
//               }}
//               className="category-block-1"
//             >
//               <NavLink to="/filter" className="category-block-link">
//                 <img src={dressesImage} alt="Dresses" />
//                 <div className="category-block-text">Dresses</div>
//               </NavLink>
//             </div>
  
//             <div
//               onClick={() => {
//                 handleProducts("pants");
//               }}
//               className="category-block-1"
//             >
//               <NavLink to="/filter" className="category-block-link">
//                 <img src={pantsImage} alt="Pants" />
//                 <div className="category-block-text">PANTS</div>
//               </NavLink>
//             </div>
  
//             <div
//               onClick={() => {
//                 handleProducts("accessories");
//               }}
//               className="category-block-2"
//             >
//               <NavLink to="/filter" className="category-block-link">
//                 <img src={accImage} alt="Acc" />
//                 <div className="category-block-text">ACCESORIES</div>
//               </NavLink>
//             </div>
  
//             <div
//               onClick={() => {
//                 handleProducts("shoes");
//               }}
//               className="category-block-1"
//             >
//               <NavLink to="/filter" className="category-block-link">
//                 <img src={shoeImage} alt="Shoes" />
//                 <div className="category-block-text">SHOES</div>
//               </NavLink>
//             </div>
  
//             <div
//               onClick={() => {
//                 handleProducts("t-shirt");
//               }}
//               className="category-block-1"
//             >
//               <NavLink to="/filter" className="category-block-link">
//                 <img src={tshirtImage} alt="Tshirt" />
//                 <div className="category-block-text">T-SHIRTS</div>
//               </NavLink>
//             </div>
//           </div>
//       </>
//     );
//   };
  
//   export default Search;