// import "./profile.css"
// import { LoginContext } from "../../../../contexts/LoginProvider"
// import { ApiContext } from "../../../../contexts/ApiProvider"
// import { useContext, useState } from "react"
// import { Navigate } from "react-router-dom"
// import Profile from "./Profile"

// const SignOut = () => {

//     const { handleLogin, loginResult } = useContext(LoginContext);
//     const { logoutAsync } = useContext (ApiContext);
//     const [cancel, setCancel] = useState("");

//     if(loginResult == "false"){ return <Navigate to="/home"/> }
//     if (cancel == "false"){ return <Navigate to="/profile"/> }

//     return (

//             <div id="sign-out">

//             <div className="row">

//             <div id="profile-section">
//                 <Profile/>
//             </div>

//             <div className="sign-out-content">
//                     <div className="outer-circle">
//                         <div className="container inner-circle">
                        
//                         <div className="mt-5">
//                         <span className="line-login"></span>
//                         <div className="text-inner-circle">Are you sure you want to sign out?</div>

//                         <div className="row">
//                         <div className="col-lg-12">
//                         <button className="button-inner-circle black-button" onClick={(event) => 
//                         {
//                             if (logoutAsync()) { handleLogin("false") }           
//                         }
//                             }>Sure</button>
//                         </div>

//                         <div className="col-lg-12">
//                         <button className="button-inner-circle white-button" onClick={(event) => {setCancel("false")}}>Cancel</button>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//             </div>
//             </div>
//             </div>       
        
//     )
// }

// export default SignOut;