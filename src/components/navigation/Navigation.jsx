import { NavLink } from "react-router-dom";

//Komponent som hanterar navigeringen i applikationen
const Navigation = () => {

    return(<>
        <nav>
            <ul>
                <li><NavLink to="/">Hem</NavLink>  </li> 
                <li><NavLink to="/about">Om företaget</NavLink></li>
                <li><NavLink to="/contact">Kontakt</NavLink></li>
                <li><NavLink to="/productdetail">ProductDetail</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/Register">Register</NavLink></li>
                
            </ul>

        </nav>
        
    
    </>
    );

}

export default Navigation;