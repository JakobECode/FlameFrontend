import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./filterAndSort.css";
import Header from "../../partials/header/Header";
import Navigation from "../../../components/partials/navigation/Navigation";
import { FilterContext } from "../../../contexts/FilterProvider";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductCard from "./ProductCard";


const FilterAndSort = () => {

    const {title} = useContext(FilterContext);
    const {products, setProducts} = useContext(ProductContext)
    const [sorting, handleSorting] = useState(false);


    const handlePriceClick = (range) => {
        if (range == "low"){
            const newList = [...products]
            newList.sort((a,b) => {
                return a.price > b.price ? 1 : -1;
            })
            setProducts(newList)
        }

        if(range == "high"){
            const newList = [...products]
            newList.sort((a,b) => {
                return a.price < b.price ? 1 : -1;
            })
            setProducts(newList) 
        }
    }

    return (
        <>
        <div className="container mt-5 mb-5">
        <Header route="/home" title={title}/>

        <div className="row filter-content mt-5">
        <div className="col"><NavLink to="/filterproducts" className="nav-standard"><i class="fa-light fa-arrow-up-arrow-down"></i></NavLink> Filters </div>
        <div className="col sorting">Sorting by     <i onClick={() => {sorting? handleSorting(false) : handleSorting(true)}} class="fa-solid fa-sort-down sort-icon"></i></div>
        </div>

        {sorting && 
        <div className="row mt-1">
        <div className="col sorting-content">
        <div className="sorting-text" onClick={() => {handlePriceClick("low")}}>Lowest Price</div>
        <div className="sorting-text" onClick={() => {handlePriceClick("high")}}>Highest Price</div>
        </div> 
        </div>}

        <div className="container mt-5">
        <ProductCard products={products}/>
        </div>

        <Navigation/>

        </div>   
        </>
    )
}

export default FilterAndSort;