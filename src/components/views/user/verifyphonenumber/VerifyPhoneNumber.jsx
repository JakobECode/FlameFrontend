// import "./verifyphonenumber.css";
// import ConfirmCode from "./ConfirmCode";
// import { NavLink } from "react-router-dom";
// import flag from "../../../../assets/images/flag.png";
// import { useContext, useState } from "react";
// import { ApiContext } from "../../../../contexts/ApiProvider";


// const VerifyPhoneNumber =()=>{
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [countryCode, setCountryCode] = useState("+46");
//     const {verifyPhoneNumber} = useContext(ApiContext)
//     const [numberSent, setNumberSent ] = useState(false);
//     const [validCode, setValidCode ] = useState("");

//     const handleSubmitPhoneNumber = async (e)=>{
//         e.preventDefault();
//         if(!Number(phoneNumber) || phoneNumber.length < 10)
//         {
//             document.querySelector("#phoneNumber").innerHTML = "Not a valid phone number";
//             return;
//         }

//         let result = await verifyPhoneNumber({Phone: ("+46" + phoneNumber.substring(1,10))});
//         console.log(result);
//         if(result != null)
//         {
//             setValidCode(result);
//             setNumberSent(true);
//         }
//         else
//         {
//             document.querySelector("#phoneNumber").innerHTML = "Something went wrong, please try again!";
//             setPhoneNumber("");
//         }
//     }

//     return(
//         <>
//         {numberSent &&(
//             <ConfirmCode phonenumber = {("+46" + phoneNumber.substring(1,10))} validCode = {validCode}/>
//         )}
//         {!numberSent &&(
//             <div className="verify-container">
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-2"><NavLink className="nav-standard" to="/home"><i className="fa-solid fa-angle-left"></i></NavLink></div>
//                     <span className="col-8 verify-title">Verify your phone number</span>
//                 </div>
//                 <div className="send-verify-code-grid mt-5">
//                     <div className="verify-message">We have sent you an SMS with a code to <br/>{countryCode} {phoneNumber.substring(1,10)}</div>
//                     <form onSubmit={handleSubmitPhoneNumber} noValidate>                    
//                         <div className="col-lg-12 mt-5 input-wrapper mb-4">
//                             <label className="verify-phone-label">PHONE NUMBER</label>
//                             <div className="input-overlay">
//                             <input type="text" onKeyUp={(e)=>{
//                                 if(Number(e.target.value) || e.target.value == 0)
//                                 {
//                                     setPhoneNumber(e.target.value)
//                                     document.querySelector("#phoneNumber").innerHTML = "";
//                                 }
//                                 else
//                                 {
//                                     document.querySelector("#phoneNumber").innerHTML = "Only numbers are valid";
//                                     setPhoneNumber(e.target.value)
//                                 }
//                                 if(e.target.value === "")
//                                     document.querySelector("#phoneNumber").innerHTML = "";
//                             }} maxLength="10"/>
//                             <div className="input-field-country-code"><img src={flag}></img> {countryCode}<i className="fa-light fa-horizontal-rule fa-rotate-90"></i></div>
//                             </div>
//                         </div>
//                         <button className="dark-btn-standard" type="submit">CONFIRM</button>
//                         <span id="phoneNumber" className="text-danger ml-5"></span>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         )}        
//         </>
//     );
// }
// export default VerifyPhoneNumber;