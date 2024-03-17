// import "./verifyphonenumber.css";
// import { useContext } from "react";
// import { ApiContext } from "../../../../contexts/ApiProvider";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const ConfirmCode =({phonenumber, validCode})=>{

//     const { verifyPhoneNumber } = useContext(ApiContext);
//     const [verified, setVerified] = useState(false);

//     const handleValue =(e)=>{
//         if(Number(e.target.value) || e.target.value == 0)
//         {
//             document.querySelector("#confirmCode").innerHTML = "";
//         }
//         else
//         {
//             document.querySelector("#confirmCode").innerHTML = "Only numbers are valid";
//         }
//         if(e.target.value === "")
//             document.querySelector("#confirmCode").innerHTML = "";
//     }

//     const handleVerifyCode = async (e)=>{
//         e.preventDefault();
//         document.querySelector("#confirmCode").innerHTML = "";

//         var inputList = document.querySelectorAll('input');
//         var code = "";
//         inputList.forEach(item => {
//             code += item.value;
//         });
//         if(code == validCode)
//         {
//             console.log(code + " = " + validCode);
//             setVerified(true);
//         }
//         else
//         {
//             document.querySelector("#confirmCode").innerHTML = "Not a valid code";
//             var inputList = document.querySelectorAll('input');
//             inputList.forEach(item => {
//                 item.value = "";
//             });
//         }
//     }

//     const resendCode = async (e)=>{
//         e.preventDefault();
//         document.querySelector("#confirmCode").innerHTML = "";
//         let result = await verifyPhoneNumber({Phone: phonenumber});
//         if(result != null)
//         {
//            validCode = result;
//            console.log(validCode + " newcode:" + result);
//             var inputList = document.querySelectorAll('input');
//             inputList.forEach(item => {
//                 item.value = "";
//             });
//         }
//         else
//         {
//             document.querySelector("#confirmCode").innerHTML = "Something went wrong, please try again!";
//             var inputList = document.querySelectorAll('input');
//             inputList.forEach(item => {
//                 item.value = "";
//             });
//         }
//     }
//     return(
//         <>
//         <div className="verify-container">
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-2"><NavLink className="nav-standard" to="/verifyphonenumber"><i className="fa-solid fa-angle-left"></i></NavLink></div>
//                     <span className="col-8 verify-title">Verify your phone number</span>
//                 </div>
//             </div>
//             {!verified &&(
//                 <div className="confirm-code-container mt-5">
//                 <div className="confirm-message">Enter your OPT code here.</div>
//                 <form onSubmit={handleVerifyCode} noValidate>   
//                     <div className="row">
//                         <div className="confirm-code-input-fields mt-5 mb-5">
//                             <input type="text" maxLength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onKeyUp={(e)=>{handleValue(e)}}/>
//                             <input type="text" maxLength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onKeyUp={(e)=>{handleValue(e)}}/>
//                             <input type="text" maxLength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onKeyUp={(e)=>{handleValue(e)}}/>
//                             <input type="text" maxLength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onKeyUp={(e)=>{handleValue(e)}}/>
//                             <input type="text" maxLength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onKeyUp={(e)=>{handleValue(e)}}/>
//                             <input type="text" maxLength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onKeyUp={(e)=>{handleValue(e)}}/>
//                         </div>
//                     </div>    
//                     <div className="row">
//                         <div className="confirm-message">Didn't receive the OPT? <span onClick={resendCode}> Resend.</span></div>
//                     </div>
//                     <button className="dark-btn-standard mt-3">VERIFY</button>
//                     <span id="confirmCode" className="text-danger ml-5"></span>
//                 </form>
//             </div>
//             )}
//             {verified &&(
//                 <div className="container-confirmed-code mt-5">
//                     <div className="confirmed-title mb-3">Your number has been verified!</div>
//                         <div className="confirmed-text-go-back mb-3">Get back to</div>
//                         <NavLink className="confirmed-links-text-home" to="/">Home <span className="confirmed-links-icon-home"><i className="fa-regular fa-greater-than"></i></span></NavLink>
//                         <div className="confirmed-links-border"></div>
//                         <NavLink className="confirmed-links-text-profile" to="/profile">Profile <span className="confirmed-links-icon-profile"><i className="fa-regular fa-greater-than"></i></span></NavLink>

//                 </div>
//             )}
//         </div>
//         </>
//     );
// }
// export default ConfirmCode;