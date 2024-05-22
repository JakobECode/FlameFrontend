import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';


//Komponent som hanterar navigeringen i applikationen

const Navigation = () => {

    const [email, setUsername] = useState('');
    const [role, setUserrole] = useState('');
    useEffect(() => {
        // Retrieve the username from localStorage when the component mounts
        const storedUsername = localStorage.getItem('email');
        if (storedUsername) {
            setUsername(storedUsername);
        }
        const storedUserrole = localStorage.getItem('role');
        if (storedUserrole) {
            setUserrole(storedUserrole);
        }
    }, []); // The empty array ensures this effect runs only once after the initial render

    const logout = () => {
        // Perform any cleanup or state management you need here
        // For example, clearing local storage, managing Redux state, etc.
        localStorage.removeItem('token'); // Clear token or other auth details
        localStorage.removeItem('email');

        // Redirect to login page or any other appropriate page
        //navigate('/');
        window.location = '/';
    };

    return(<>
        <nav>
            <ul>
                <li><NavLink to="/">Hem</NavLink>  </li> 
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/Register">Register</NavLink></li>
                {/* <li><NavLink to="/productdetail">ProductDetail</NavLink></li> */}
                {/* <li><NavLink to="/login">Login</NavLink></li> */}
                {/* <li><NavLink to="/OrderList">OrderList</NavLink></li> */}
                {/* <li><NavLink to="/OrderDetail">OrderDetail</NavLink></li> */}
            
                {email && role && role === 'admin' && (
                                <>
                                    <li><NavLink to="/OrderCreate">OrderCreate</NavLink></li>
                                    <li><NavLink to="/OrderList">OrderList</NavLink></li>
                                </>
                            )}
                <div className="dropdown">
                        <button className="dropbtn">{email}</button>
                        <div className="dropdown-content">
                            {email ? (
                                <>
                                     <button className="btn btn-danger" onClick={logout}>Log Out</button>
                                </>
                            ):(
                                <>
                                <a href='/login' className="btn btn-danger">Log in</a>
                                </>
                            )}
                        </div>
                </div>
            </ul>
        </nav>
    </>
    );
}

export default Navigation;