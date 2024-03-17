import './topHeader.css';
import React from 'react';
import Contact from '../../../views/contact/Contact';
import { NavLink } from 'react-router-dom';

const TopHeader = () => {

    return(<>
    
        <div className='top-header-container'>
            <Contact />
            <NavLink className='top-header-title' to="/home">Flame</NavLink>
            <NavLink className="top-header-bag" to="/shoppingcart"><i className="fa-2xs fa-light fa-bag-shopping"></i></NavLink>
        </div>
    
    </>);
}

export default TopHeader;