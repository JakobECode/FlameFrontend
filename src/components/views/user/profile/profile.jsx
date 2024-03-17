import "./profile.css"
import React from "react";
import Navigation from "../../../partials/navigation/Navigation";
import { useContext, useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { ApiContext } from "../../../../contexts/ApiProvider";
import ProfilePicture from "./ProfilePicture";


const Profile = () => {
    const [signout, setSignOut] = useState("");
    const {getProfile} = useContext(ApiContext);
    const [user, setUser] = useState({});
    const [userHasValue, setUserHasValue] = useState(false)


    useEffect (() => { getUser() }, []);
    
      const getUser = async () => {
      const response = await getProfile();
      await handleUser(response)
    }

    const handleUser = async (response) => { 
      if(response != null){ 
         await setUser(response)
         setUserHasValue(true); 
      }
      else {
         setUserHasValue(false);
      }
   }

    const handleSignOut = (response) => {
      setSignOut(response)
    }

    if (signout == "false"){ return <Navigate to="/signout"/> }

    return (
        <>
        <div className="container profile-section">
        <div className="mt-5 upper-profile-content">
         <span className="line-login"></span>
         <NavLink to="/editprofile"><ProfilePicture></ProfilePicture></NavLink>
         <h2 className="heading-standard mt-3"> {userHasValue? user.firstName + " " + user.lastName : "" }
         </h2>
         <div className="standard-text">{user.email}</div>
         </div>

         <div className="row profile-content">
         <hr className="mt-5"/>       
          <div className="col">
            <i className="fa-light fa-bag-shopping profile-icon"></i>
                   <NavLink className="nav-standard" to="/orderHistory"><span className="profile-text">Order history
                   </span></NavLink>
            </div>
            <div className="col profile-arrow">
            <NavLink className="nav-standard" to="/orderHistory"><i className="fa-light fa-chevron-right"></i></NavLink>
            </div>
        <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">          
         <div className="col">
            <i className="fa-light fa-credit-card-blank profile-icon"></i>
            <NavLink className="nav-standard" to="/paymentMethod"><span className="profile-text">Payment method</span></NavLink>
            </div>
            <div className="col profile-arrow">
            <NavLink className="nav-standard" to="/paymentmethod"><i className="fa-light fa-chevron-right"></i></NavLink>
            </div>
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">                   
         <div className="col">
         <i className="fa-regular fa-location-dot profile-icon"></i>
            <NavLink className="nav-standard" to="/address"> <span className="profile-text">My adress</span></NavLink>
            </div>
            <div className="col profile-arrow">
            <NavLink className="nav-standard" to="/address"><i className="fa-light fa-chevron-right"></i></NavLink>
            </div>
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">                   
         <div className="col">
         <i className="fa-regular fa-phone profile-icon"></i>
            <NavLink className="nav-standard" to="/verifyphonenumber"> <span className="profile-text">Verify phone</span></NavLink>
            </div>
            <div className="col profile-arrow">
            <NavLink className="nav-standard" to="/verifyphonenumber"><i className="fa-light fa-chevron-right"></i></NavLink>
            </div>
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">         
         <div className="col">
            <i className="fa-light fa-gift profile-icon"></i>
            <NavLink className="nav-standard" to="/mypromocodes"><span className="profile-text">My promocodes</span></NavLink>
            </div>
            <div className="col profile-arrow">
            <NavLink className="nav-standard" to="/mypromocodes"><i className="fa-light fa-chevron-right"></i></NavLink>
            </div> 
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">                      
         <div className="col log-out">
            <i onClick={(event) => {handleSignOut("false")}} className="fa-regular fa-right-from-bracket profile-icon"></i>
            <span onClick={(event) => {handleSignOut("false")}} className="profile-text">Sign out</span>
         </div>       
         <hr className="mt-4 mb-4"/>
         </div>
        </div> 
        <Navigation />
        </>
    )

}

export default Profile; 