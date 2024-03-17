import React from 'react'
import "./collection.css"
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { useRef } from "react"
import CollectionItem from '../collectionItem/CollectionItem';
import { FilterContext } from "../../../../contexts/FilterProvider";
import { ProductContext } from '../../../../contexts/ProductProvider';
import { ApiContext } from "../../../../contexts/ApiProvider";



const Collection = ({ title, itemList }) => {
  
    const { setProducts } = useContext(ProductContext);
    const { setTitle } = useContext(FilterContext);
    const { getProductsByCategory } = useContext(ApiContext);
    const containerRef = useRef(null);
    const scrollDistance = 500;
    
    const scrollLeft = () => {
      if (containerRef.current) {
        const currentScrollLeft = containerRef.current.scrollLeft;
        containerRef.current.scrollTo({
          left: currentScrollLeft - scrollDistance,
          behavior: "smooth",
        });
      }
    };
  
    const scrollRight = () => {
      if (containerRef.current) {
        const currentScrollLeft = containerRef.current.scrollLeft;
        containerRef.current.scrollTo({
          left: currentScrollLeft + scrollDistance,
          behavior: "smooth",
        });
      }
    };
  
    const handleProducts = async () => {
    const splitTitle = title.split(' ');
    if(splitTitle[0] == 'Best'){ 
        setProducts(await getProductsByCategory('Top'))
        return;
    }
    setProducts(await getProductsByCategory(splitTitle[0]))
    }
  
    return (
      <>
      <div className='container'>
      <div className='header-section'>
            <h3>{title}</h3>
        <div>
             View all
            <NavLink to="/filter" className="nav-standard nav-collection"><i onClick={() => {setTitle(title); handleProducts()}} className="fa-solid fa-angle-right"></i></NavLink>
        </div>
      </div>
  
      <div className="item-carousel" ref={containerRef}>
            {
              itemList.map(item => (<CollectionItem key={item.id} item={item} />))
            }            
       </div>
  
       <div className='carousel-snap-container'>
              <button className='camo-btn fa-solid fa-chevron-left' onClick={scrollLeft}></button>
              <button className='camo-btn fa-solid fa-chevron-right' onClick={scrollRight}></button>
        </div>
  
      </div>
      </>
    )  
  }
  
  export default Collection;