import { createContext, useState } from "react";
export const ApiContext = createContext();


const ApiProvider = (props) => {

    // GET ALL PRODUCTS
const getAllProductsAsync = async () => {
    const response = await fetch('https://localhost:7272/api/Products/All');
    const data = await response.json();
    return data;
}

// GET PRODUCT BY ID
const getProductByIdAsync = async (id) => {
    const response = await fetch(`https://localhost:7272/api/Products/Get?id=${id}`);
    const data = await response.json();
    if (response.ok) return data;
    return("error")
}

// Get Products by category 
const getProductsByCategory = async (category) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json' }
        };

    const response = await fetch (`https://localhost:7272/api/Products/Category=${category}`, requestOptions)
    const data = await response.json();
    return data;
}

// Get Products by filter
const getProductsByFilters = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
        };
    const response = await fetch('https://localhost:7272/api/Products/Filter', requestOptions)
    return await response.json();
}

// PUT
const putAsync = async (url = '', data = {}) => { 

    const token = Cookies.get('token');
    const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }`},
         body: JSON.stringify(data)
         };
         await fetch(url, requestOptions)
         .then((response) => {
         if(!response.ok){ 
           }
         else { 
          }
          })
         .catch(() => {
           
         });    
    };

// REGISTRATION
const registrationAsync = async (url = '', data = {}, handleRegistration) => {    
 const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type' : 'application/json'},
       body: JSON.stringify(data)
       };
       await fetch(url, requestOptions)
       .then((response) => {
        if(!response.ok){
            handleRegistration("false")
            throw new Error(response.status);
        }
        else {
            handleRegistration("true")
        }
       })
      .catch(() => {
        handleRegistration("false")
      });        
    };


// LOGIN
const loginAsync = async (url = '', data = {}, handleLogin, validation) => { 
    const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type' : 'application/json'},
         body: JSON.stringify(data)
         };
         await fetch(url, requestOptions)
         .then ((response => {
            if (!response.ok){
                validation("The username or password is incorrect")
                handleLogin("false") 
            }
            else {
                const res = response.text()
                .then (data => {   
                    validation("");
                    handleLogin("true");
                    const token = data;                  
                    Cookies.set('token', token)                                     
                 })}}))
          .catch(() => {
                 validation("The username or password is incorrect")
                 handleLogin("false")
            })     
        };


    // LOG OUT
    const logoutAsync = async () => {
        const token = Cookies.get('token');
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization' : `Bearer ${ token }` }
            };
            const response = await fetch('https://localhost:7272/api/Account/LogOut', requestOptions)
            if(response.statusText == "OK") { return true } else { return false }
    };

    // GET PROFILE
  const getProfile = async () => {
       const token = Cookies.get('token');
       const requestOptions = {
          method: 'GET',
          headers: { 'Authorization' : `Bearer ${ token }` }
          };
        const response = await fetch ('https://localhost:7272/api/Account/GetProfile', requestOptions);
        const data = await response.json();
        return data;
}

// Forgot password
    const forgotPassword = async (url = '', email = {}) => {
        const token = Cookies.get('token');
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email : email })
        };

        const response = await fetch(url, requestOptions)
        if(response.statusText == "OK") { return true } else { return false }
    }

// Recover Password
    const recoverPassword = async (userEmail = {}, userToken = {}, newPassword = {}) => {
    const token = Cookies.get('token');
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ Email: userEmail, Token: userToken, Password: newPassword })
    };
    const response = await fetch('https://localhost:7272/api/Account/RecoverPassword', requestOptions)
    if(response.statusText == "OK") { return true } else { return false }
}

// Get Adress
const getAddress = async () => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch('https://localhost:7272/api/Address/GetUserAddresses', requestOptions);
    const data = await response.json();
    return data;
}

// Register Address
const registerAddress = async (adress = {}) => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(adress)
    }
    const response = await fetch('https://localhost:7272/api/Address/RegisterAddress', requestOptions)
    if (response.ok){ return true }
    return false;
}

// Delete Address
const removeAddress = async (id) => {
    const token = Cookies.get('token');
    console.log(token)
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch(`https://localhost:7272/api/Address/RemoveAddress/${id}`, requestOptions)
    if(response.ok){
        return true;
    }
}

// Update Address 
const updateAddress = async (address) => {
    const token = Cookies.get('token');
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(address)
    }

    const response = await fetch ('https://localhost:7272/api/Address/UpdateAddress', requestOptions)
    if(response.ok)
        return true
}

// ADD CREDIT CARD

const registerCreditCard = async (creditCard = {})=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(creditCard)
    }
    const response = await fetch('https://localhost:7272/api/Payment/RegisterCreditCard', requestOptions)
    if (response.ok){ return true }
    return false;
}

// GET ALL CREDIT CARDS
const getUserCreditCards = async ()=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch('https://localhost:7272/api/Payment/GetUserCreditCards', requestOptions);
    const data = await response.json();
    return data;
}

//REMOVE CREDIT CARD
const removeCreditCard = async (id)=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch(`https://localhost:7272/api/Payment/RemoveCreditCard/${id}`, requestOptions);
    if(response.ok){
        return true;
    }
}


//CREATE A NEW ORDER
const createOrderAsync = async (order= {}) => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(order)
    }
    const response = await fetch('https://localhost:7272/api/Order/CreateOrder', requestOptions)
    if (response.ok){ return true }
    return false;
    }
    

//GET REVIEWS BY ID    
const getReviewsByIdAsync = async (id = "") => {
    const response = await fetch(`https://localhost:7272/api/Review/GetByProductId=${id}`);
    const data = await response.json();
    return data;
    console.log(data)
    }

// ADD REVIEW    
const addReviewAsync = async (review = {}) => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(review)
    }
    const response = await fetch('https://localhost:7272/api/Review/AddReview', requestOptions)
    if (response.ok){ return true }
    return false;
    }

 
//VERIFY PHONE NUMBER
// const verifyPhoneNumber = async (phone = {})=>{
//     const token = Cookies.get('token')
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${ token }`},
//         body: JSON.stringify(phone)
//     }

//     const response = await fetch('', requestOptions)
//     const data = await response.json();
//     return data;
// }
    
const OrderHistoryBySignedIn = async ()=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${ token }`}
    }
    const response = await fetch('https://localhost:7272/api/Order/GetBySignedIn', requestOptions)
    const data = await response.json();
    return data;
}


    return (
        <>
            <ApiContext.Provider value={{ getAllProductsAsync, getProductByIdAsync, registrationAsync, loginAsync, logoutAsync, getProfile, recoverPassword, getAddress, registerAddress, removeAddress, updateAddress, registerCreditCard, getUserCreditCards, removeCreditCard, getProductsByCategory, getProductsByFilters, createOrderAsync, getReviewsByIdAsync, addReviewAsync, putAsync, forgotPassword, OrderHistoryBySignedIn }}>
                {props.children}
            </ApiContext.Provider>
        </>
    )
}

export default ApiProvider;