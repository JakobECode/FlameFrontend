// import "./ForgotPassword.css";
// import { useState, useContext } from 'react';
// import { NavLink  } from "react-router-dom";
// import { ForgotPasswordContext } from "../../../../contexts/ForgotPasswordProvider";

// const ForgotPassword = () => {

//     const {handleSubmit} = useContext(ForgotPasswordContext)
//     const [email, setEmail] = useState("");
//     const [buttonText, setButtonText] = useState("SEND");

//     const changeText = (text) => {
//         setButtonText(text);
//     }

//     return (
//         <>
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-4"><NavLink to="/login"><i className="fa-solid fa-angle-left nav-standard"></i></NavLink></div>
//                     <div style={{textAlign : 'center', fontWeight : 'bold'}} className="col-4">Forgot Password</div>
//                     <div className="col-4"></div>
//                 </div>
//                 <div className="standard-text mt-5">
//                    Please enter your email adress. You will recieve a link to create a new password via email.
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                     <div className="row">
//                         <div className="col-lg-12 mt-3 input-wrapper">
//                             <label htmlFor="email">Email</label>
//                             <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text"></input>
//                         </div>
//                         <div className="col-lg-12 mt-5">
//                             <button className="dark-btn-standard" type="submit" onClick={() => changeText("Email sent")}>{buttonText}</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default ForgotPassword;