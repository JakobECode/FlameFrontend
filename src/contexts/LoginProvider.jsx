// import { createContext, useContext, useState } from "react";
// import { ApiContext } from "./ApiProvider";
// export const LoginContext = createContext();

// const LoginProvider = (props) => {
//   const [loginResult, setLoginResult] = useState("");
//   const [validation, setValidation] = useState("");
//     const [email, setEmail] = useState("");
//     const { loginAsync, getProfile, loginFacebook } = useContext(ApiContext);
 
//   const handleLogin = (response) => {
//     setLoginResult(response);
//   }

//   const handleValidation = (response) => {
//     setValidation(response)
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const email = event.target.elements.email.value;
//     setEmail(email);
//     const password = event.target.elements.password.value;
//     const remember = event.target.elements.remember.value; 

//     const data = {email : email, password : password, remember : remember}
//     const url = 'https://localhost:7272/api/Account/Login'
//     await loginAsync(url, data, handleLogin, handleValidation)
//   };
  
//   return (
//       <>
//           <LoginContext.Provider value={{ handleSubmit, loginResult, email, handleLogin, validation, handleExternalSubmit }}>
//         {props.children}
//       </LoginContext.Provider>
//     </>
//   );
// };

// export default LoginProvider;
