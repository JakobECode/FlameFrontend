import { NavLink } from "react-router-dom";
import "./profile.css"
import { useContext, useState } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";

const AddCreditCard = ()=>{

    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [expireMonth, setExpireMonth] = useState("");
    const [expireYear, setExpireYear] = useState("");
    const [cvv, setCvv] = useState("");
    const [messageError, setMessageError] = useState("");
    const {registerCreditCard} = useContext(ApiContext);

    const submitCard = async (event)=>{
        event.preventDefault();
        let date = new Date();
        if(nameOnCard.length < 4){
            document.querySelector("#nameOnCard").innerHTML = "Name is too short";
            return;
        }
        else if(expireMonth > 12 || expireMonth < 1 || parseInt("20" + expireYear) < date.getFullYear() || parseInt("20" + expireYear) > date.getFullYear() + 5){
            document.querySelector("#expireDate").innerHTML = "Not a valid month/year";
            return;
        }
        else if(!Number(cvv) || cvv.length < 3){
            document.querySelector("#cvv").innerHTML = "Not a valid CVV input";
            return;
        }
        else if(!Number(cardNo)){
            document.querySelector("#cardNo").innerHTML = "Not a valid card number";
            return;
        }
        setMessageError("");
        const creditCard = {nameOnCard : nameOnCard, cardNo : cardNo, expireMonth : parseInt(expireMonth), expireYear : parseInt(("20" + expireYear)), cvv : cvv }

        let result = await registerCreditCard(creditCard);
        if(result)
        {
            setMessageError("");
            window.history.back();
        }
        else
        {
            setMessageError("Something went wrong when adding the card, please try again!");
        }
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4"><NavLink className="nav-standard" to="/paymentmethod"><i className="fa-solid fa-angle-left"></i></NavLink></div>
                    <div className="col-4 add-new-card">Add a new card<br/><br/><i className="fa-sharp fa-light fa-dash fa-rotate-90 fa-lg"></i></div>
                    <div className="col-4"></div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className="card-icon">
                        <div className="card-icon-visa"><i className="fa-brands fa-cc-visa"></i></div>
                        <div className="card-icon-name">{nameOnCard}</div>
                        <div className="card-icon-card-no">{cardNo.substring(0,4)}  {cardNo.substring(4,8)}  {cardNo.substring(8,12)}  {cardNo.substring(12,17)}</div>
                        <div className="card-icon-exp-end">EXP.END<br/>{expireMonth}/{expireYear}</div>
                    </div>
                </div>
                <form onSubmit={submitCard} noValidate>
                    <div className="col-lg-12 mt-5 input-wrapper">
                        <label htmlFor="cardNo">Card Number</label>
                        <input onKeyUp={(e)=>{
                            if(!Number(e.target.value))
                            {
                                document.querySelector("#cardNo").innerHTML = "Only numbers are valid";
                                setCardNo(e.target.value)
                            }                    
                            else
                            {
                                setCardNo(e.target.value)  
                                document.querySelector("#cardNo").innerHTML = "";
                            }
                            if(e.target.value === "") 
                                document.querySelector("#cardNo").innerHTML = "";
                            }} maxLength="16"></input>
                    </div>
                    <span id="cardNo" className="text-danger ml-5"></span>
                    <div className="col-lg-12 mt-5 input-wrapper">
                        <label htmlFor="nameOnCard">Name On Card</label>
                        <input onKeyUp={(e)=>{
                            if(Number(e.target.value))
                            {
                                document.querySelector("#nameOnCard").innerHTML = "Only letters are valid";
                                setNameOnCard(e.target.value)
                            }
                            else if(e.target.value.length < 4)
                            {
                                document.querySelector("#nameOnCard").innerHTML = "Name is too short";
                                setNameOnCard(e.target.value)
                            }
                            else
                            {
                                setNameOnCard(e.target.value)
                                document.querySelector("#nameOnCard").innerHTML = "";
                            }
                            if(e.target.value === "") 
                                document.querySelector("#nameOnCard").innerHTML = "";
                        }}></input>
                    </div>
                    <span id="nameOnCard" className="text-danger ml-5"></span>
                    <div className="row mt-5">
                        <div className="col input-wrapper">  
                            <label>MM/YY</label>
                            <input onKeyUp={(e)=>{
                                if(!Number(e.target.value))
                                {
                                    document.querySelector("#expireDate").innerHTML = "Only numbers are valid"; 
                                    setExpireMonth(e.target.value.substring(0,2))
                                    setExpireYear(e.target.value.substring(2,4))    
                                }                    
                                else
                                {
                                    setExpireMonth(e.target.value.substring(0,2))
                                    setExpireYear(e.target.value.substring(2,4))  
                                    document.querySelector("#expireDate").innerHTML = "";
                                }  
                                if(e.target.value === "") 
                                    document.querySelector("#expireDate").innerHTML = "";                             
                                }} maxLength="4"></input>
                            <span id="expireDate" className="text-danger ml-5"></span>
                        </div>
                        <div className="col input-wrapper">
                            <label htmlFor="cvv">CVV</label>
                            <input onKeyUp={(e)=>{
                                if(!Number(e.target.value))
                                {
                                    document.querySelector("#cvv").innerHTML = "Only numbers are valid";
                                    setCvv(e.target.value)
                                }                    
                                else
                                {
                                    setCvv(e.target.value)  
                                    document.querySelector("#cvv").innerHTML = "";
                                }
                                if(e.target.value === "") 
                                    document.querySelector("#cvv").innerHTML = "";
                                }} maxLength="3"></input>
                            <span id="cvv" className="text-danger ml-5"></span>
                        </div>
                    </div>
                    <span className="text-danger"><small>{messageError}</small></span>
                    <button className="dark-btn-standard my-5" type="submit">Add Card</button>
                </form>
            </div>

        </>
    );
}
export default AddCreditCard;