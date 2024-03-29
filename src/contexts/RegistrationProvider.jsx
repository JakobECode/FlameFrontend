import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiProvider";
export const RegistrationContext = createContext();

const RegistrationProvider = (props) => {

  const {registrationAsync} = useContext(ApiContext);
  const [registrationResult, setRegistrationResult] = useState("");

  const handleRegistration = (response) => {
    setRegistrationResult(response);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;


    if (firstName.length < 1 || lastName.length < 1 || password != confirmPassword )  { handleRegistration("false"); }

    const regExEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    if(!regExEmail.test(email)){ handleRegistration("false"); }

    const regExPassword = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$');
    if(!regExPassword.test(password)) { handleRegistration("false"); }
    
    const data = {firstName : firstName, lastName : lastName, email : email, password : password}
    const url = "https://localhost:7272/api/Account/Register";
    await registrationAsync(url, data, handleRegistration);
  };

  return (
    <>
      <RegistrationContext.Provider value={{ handleSubmit, registrationResult }}>
        {props.children}
      </RegistrationContext.Provider>
    </>
  );
};

export default RegistrationProvider;
