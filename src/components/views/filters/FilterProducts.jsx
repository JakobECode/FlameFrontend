import Head from "../../partials/header/Header";
import {useState, useContext } from 'react';
import { Navigate, NavLink } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductProvider";
import { ApiContext } from "../../../contexts/ApiProvider";
import { FilterContext } from "../../../contexts/FilterProvider";


const FilterProducts = () => {
    const {products, setProducts} = useContext(ProductContext);
    const {getProductsByFilters} = useContext(ApiContext);
    const {title, setTitle} = useContext(FilterContext);
    
    const [currentPriceRange, setCurrentPriceRange] = useState(null);
    const [category, setCategory] = useState(null);
    const [tag, setTag] = useState(null);

    const onlyOne = (checkbox, e) => {
        setCategory(e.target.value);

        if(checkbox == "check-1"){
            document.querySelector('#check-2').checked = false;
            document.querySelector('#check-3').checked = false;
            return;
        }
        if (checkbox == "check-2"){
            document.querySelector('#check-1').checked = false;
            document.querySelector('#check-3').checked = false;
            return;
        }
        if (checkbox == "check-3"){
            document.querySelector('#check-1').checked = false;
            document.querySelector('#check-2').checked = false;
            return;
        }
    }

    const handlePrice = () => {
        const slider = document.querySelector("#slider");
        setCurrentPriceRange(slider.value)
    }

    const handleClickTag = (e) => {
        const elements = document.querySelectorAll("#tag-filter");
        elements.forEach((item) => {
            item.classList.remove("dark-background");
        })

        e.target.className = "tags-filter dark-background";
        return;
    }

    const handleClick = async () => {
        const filter = {
            name: null,
            minPrice: null,
            maxPrice: currentPriceRange,
            tags: tag,
            category: null,
            salesCategory: category,
            amount: null
        };
        setTitle("Filtered Products");
        setProducts(await getProductsByFilters(filter));
    }

    return (
        <>
            <div className="container">
                <Head title="Filter" route="/filter" link="no"/>

                <div className="mt-5 mb-3 under-title">Price</div>
                <div className="col-12">
                    <div className="col text-price current-value">{currentPriceRange}</div>
                    <input onChange={() => {handlePrice()}} id="slider" type="range" min="0" max="2000" step="10"></input>
                </div>
                
                <div className="mt-5 mb-3 under-title">Price</div>
                <div className="col-12">
                <div className="col text-price current-value">{currentPriceRange}</div>
                <input onChange={() => {handlePrice()}} id="slider" type="range" min="0" max="2000" step="10"></input>
                </div>
                
                <div className="row">
                <div className="col text-price">$0</div>
                <div className="col text-price max-price">$2000</div>
                </div>

                <div className="row mt-5">
                <div className="col-4 col-lg-2"><div className="row"><div className="col-6 checkbox-content"><input value="Featured" onClick={(e) => {onlyOne("check-1", e)}} id="check-1" className="checkbox-filter" type="checkbox"></input></div><div className="col-6 tag-filter background-green"><p className="text-filter">Featured</p></div></div> </div>
                <div className="col-4 col-lg-2"><div className="row"><div className="col-6 checkbox-content"><input value="New" onClick={(e) => {onlyOne("check-2", e)}} id="check-2" className="checkbox-filter" type="checkbox"></input></div><div className="col-6 tag-filter background-yellow"><p className="text-filter">New</p></div></div></div>
                <div className="col-4 col-lg-2"><div className="row"><div className="col-6 checkbox-content"><input value="Top" onClick={(e) => {onlyOne("check-3", e)}} id="check-3" className="checkbox-filter" type="checkbox"></input></div><div className="col-6 tag-filter background-purple"><p className="text-filter">Top</p></div></div></div>
                </div>

                <div className="mt-5 mb-3 under-title">Tags</div>
                <div className="row">
                <div title="Kids" id="tag-filter"  onClick={(e) => {setTag(e.target.title); handleClickTag(e)}} className="col-3 col-lg-2 tags-filter">Kids</div>
                <div title="Sport" id="tag-filter" onClick={(e) => {setTag(e.target.title); handleClickTag(e)}} className="col-3 col-lg-2 tags-filter">Sport</div>
                <div title="Dress" id="tag-filter" onClick={(e) => {setTag(e.target.title); handleClickTag(e)}} className="col-3 col-lg-2 tags-filter">Dress</div>
                <div title="Pants" id="tag-filter" onClick={(e) => {setTag(e.target.title); handleClickTag(e)}} className="col-3 col-lg-2 tags-filter">Pants</div>
                </div>

                <NavLink to="/filter"><div className="mt-5"><button onClick={() => {handleClick()}} className="dark-btn-standard">APPLY FILTERS</button></div></NavLink>
            </div> 
        </>
    );
}

export default FilterProducts;