// import { createContext, useContext } from 'react';
// import { ApiContext } from "./ApiProvider"
// export const ForgotPasswordContext = createContext();

// const ForgotPasswordProvider = (props) => {

//     const {forgotPassword} = useContext(ApiContext);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const url = "https://localhost:7272/api/Account/ResetPassword";
//         const email = event.target.elements.email.value
//         var bool = await forgotPassword(url, email)
//         return bool;
//     }

//     return (
//         <>
//             <ForgotPasswordContext.Provider value={{handleSubmit}}>
//                 {props.children}
//             </ForgotPasswordContext.Provider>
//         </>
//     )
// }

// export default ForgotPasswordProvider;