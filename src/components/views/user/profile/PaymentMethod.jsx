import { NavLink, useLocation } from "react-router-dom";
import "./profile.css";
import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";


const PaymentMethod = () =>{
    const {getUserCreditCards, removeCreditCard} = useContext(ApiContext);
    const [creditCards, setCreditCards] = useState([]);
    const [chosenCreditCard, setChosenCreditCard] = useState({});
    const [navigationSource, setNavigationSource] = useState('');
    const [chosenDiv, setChosenDiv] = useState({});
    const location = useLocation();
  
  

    const getNavigationSource = () => {
           return location.pathname;
    };

    useEffect(() => {
    getAllUserCreditCards();
    setNavigationSource(getNavigationSource());
    }, []);

    const getAllUserCreditCards = async ()=>{
        const data = await getUserCreditCards();
        setCreditCards(data.map((item) => ({...item})))
    }

    const handleRemoveCard = async (id)=>{
        let result = await removeCreditCard(id);
        if(result)
            getAllUserCreditCards();
    }

    const replaceNumbers = (string) => {
        const hiddenString = string.replace(/./g, '*');
        return hiddenString;

    }

    const declarePayment = (id) => {
      setChosenCreditCard(creditCards.filter(card => card.id === id))
        setChosenDiv(id)
    }

    const renderContent = () => {
    switch (navigationSource) {
      default:
        return(
        <>
            <div className="container my-5">
                <div className="row mb-5">
                    <div className="col-4"><NavLink className="nav-standard" to="/profile"><i className="fa-solid fa-angle-left"></i></NavLink></div>
                    <div className="col-4 payment-title">Payment method</div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="cards-title col">Cards</div>
                    <div className="addcard-title col">Add a new credit card<span className="addcard-icon"><NavLink to="/addcreditcard" className="nav-standard"><i className="fa-duotone fa-plus fa-xl"></i></NavLink></span></div>
                </div>
                <div className="row mb-5">
                    <div className="card-container">
                        <div className="slider-wrapper">
                            <ul className="slides-container" id="slides-container">
                            {creditCards.map((c) =>{
                                return(
                                <li className="slide">
                                    <div className="card-icon-small mt-5">
                                        <div className="card-icon-visa-small"><i className="fa-brands fa-cc-visa"></i></div>
                                        <div className="card-icon-name-small">{c.nameOnCard}</div>
                                        <div className="card-icon-card-no-small">{c.cardNo.substring(0,4)}  {c.cardNo.substring(4,8)}  {c.cardNo.substring(8,12)}  {c.cardNo.substring(12,17)}</div>
                                        <div className="card-icon-exp-end-small">EXP.END<br/>{c.expireMonth}/{c.expireYear}</div>
                                        <div className="delete-card-icon"><div className="col profile-arrow"><i id="delete-icon" className="fa-sharp fa-regular fa-xmark" onClick={() => {handleRemoveCard(c.id)}}></i></div></div>
                                    </div>
                                </li>
                                )})} 
                            </ul>
                        </div>
                    </div>                    
                <div className="row profile-content">
                    <hr className="mt-5"/>       
                        <div className="col">
                        <span className="profile-text">Apple Pay</span>
                        </div>
                        <div className="col profile-arrow">
                        <i className="fa-thin fa-pen"></i>
                        </div>
                    </div>     
                    <div className="row profile-content">
                    <hr className="mt-3"/>       
                        <div className="col">
                        <span className="profile-text">Pay Pal</span>
                        </div>
                        <div className="col profile-arrow">
                        <i className="fa-thin fa-pen"></i>
                        </div>
                    </div>  
                    <div className="row profile-content">
                    <hr className="mt-3"/>       
                        <div className="col">
                        <span className="profile-text">Payoneer</span>
                        </div>
                        <div className="col profile-arrow">
                        <i className="fa-duotone fa-plus fa-xl"></i>
                        </div>
                    <hr className="mb-4 mt-3"/>
                    </div>  
                </div>
            </div>
        </>
    );
      case '/checkout':
      return(
        <>
            <div className="container my-5">
                <div className="row mb-5">
                    <div className="col-4"></div>
                    <div className="col-4 payment-title">Payment method</div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="cards-title col">Credit Cards</div>
                </div>
                    <div className="card-container">
                        {creditCards.map((c) =>{
                            return (
                            <div className="row profile-content" onClick={() => {declarePayment(c.id)}}>
                            <hr className="mt-3"/>       
                                <div className="col">
                                <span className="profile-text">{c.cardNo.substring(0, 4)}  {replaceNumbers(c.cardNo.substring(4, 12))} {c.cardNo.substring(12, 17)}</span>
                                </div>
                                    <div className="col profile-arrow-default text-end">
                                            {chosenDiv == c.id ? (
                                    <i className="fa-sharp fa-solid fa-circle text-end"></i>
                                    ) : (
                                    <i className="fa-sharp fa-regular fa-circle text-end"></i>
                                    )}
                                </div>
                            </div>  
                        )})} 
                  </div>      
                <div className="row profile-content" onClick={() => {declarePayment("swish")}}> 
                    <hr className="mt-3"/>       
                        <div className="col">
                        <span className="profile-text">Swish</span>
                        </div>
                        <div className="col profile-arrow-default text-end">
                            {chosenDiv == "swish" ? (
                            <i className="fa-sharp fa-solid fa-circle text-end"></i>
                            ) : (
                            <i className="fa-sharp fa-regular fa-circle text-end"></i>
                            )}
                        </div>
                    </div>     
                    <div className="row profile-content" onClick={() => {declarePayment("directPay")}}>
                    <hr className="mt-3"/>       
                        <div className="col">
                        <span className="profile-text">Direct Payment</span>
                        </div>
                        <div className="col profile-arrow-default text-end">
                            {chosenDiv == "directPay" ? (
                            <i className="fa-sharp fa-solid fa-circle text-end"></i>
                            ) : (
                            <i className="fa-sharp fa-regular fa-circle text-end"></i>
                            )}
                        </div>
                    </div>  
                    <div className="row profile-content" onClick={() => {declarePayment("klarna")}}>
                    <hr className="mt-3"/>       
                        <div className="col">
                        <span className="profile-text">Klarna Invoice</span>
                        </div>
                        <div className="col profile-arrow-default text-end">
                            {chosenDiv == "klarna" ? (
                            <i className="fa-sharp fa-solid fa-circle text-end"></i>
                            ) : (
                            <i className="fa-sharp fa-regular fa-circle text-end"></i>
                            )}
                        </div>
                    <hr className="mb-4 mt-3"/>
                    </div>  
                </div>
        </>
    );
    }
  };
 
    return <div>{renderContent()}</div>;

}

export default PaymentMethod;
 