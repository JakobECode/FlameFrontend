import { useContext, useState } from 'react';
import { AddressContext } from "../../../../contexts/AddressProvider";
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../../../contexts/ApiProvider';


const EditAddress = () => {

const { editAdress } = useContext(AddressContext)
const { updateAddress } = useContext(ApiContext);

  const [title, setTitle] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [validation, setValidation] = useState ("");
  const [editSuccess, setRegisterSuccess] = useState("");

  const handleSumit = async (event) => {

    event.preventDefault();

    if(title.length < 2 || streetName.length < 2 || city.length < 2 || postalCode < 2 || country < 2){
      setRegisterSuccess(""); 
      setValidation("Update failure")
       return;
    }
    setValidation("")
    const address = { Title : title, StreetName : streetName, PostalCode : postalCode, City : city, Country : country, AddressItemId : editAdress.id }

    if(await updateAddress(address)){
      setRegisterSuccess('Address updated successfully')
      return;
    } else {
      setValidation("Update failure")
    }
 };

return (

  <form onSubmit={handleSumit}>
  <div className="container mt-5"> 

  <div className="row">
        <div className="col-4"><NavLink className="nav-standard" to="/address"><i className="fa-solid fa-angle-left"></i></NavLink></div>
        <div className="col-4 adress-title">Update current adress</div>
        <div className="col-4"></div>
    </div>
      
    <div className="col-lg-12 mt-5 input-wrapper">
    <label htmlFor="title">Title</label>
    <input placeholder={editAdress.title} name="title" value={title} onChange={(event) => setTitle(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#title").innerHTML = "Not a valid title"
       } 
      else 
       {
         document.querySelector("#title").innerHTML = ""
       }}}>
    </input>
    <div id="title" className="text-danger ml-5"></div>
    </div>

    <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="streetAdress">Street name</label>
    <input placeholder={editAdress.streetName} name="streetAdress" value={streetName} onChange={(event) => setStreetName(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#streetName").innerHTML = "Not a valid street name"
       } 
      else 
       {
         document.querySelector("#streetName").innerHTML = ""
       }}}>
    </input>
    <div id="streetName" className="text-danger ml-5"></div>
    </div>

    <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="city">City</label>
    <input placeholder={editAdress.city} name="city" value={city} onChange={(event) => setCity(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#city").innerHTML = "Not a valid city"
       } 
      else 
       {
         document.querySelector("#city").innerHTML = ""
       }}}>
    </input>
    <div id="city" className="text-danger ml-5"></div>
    </div>

    <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="postalCode">Postal Code</label>
    <input placeholder={editAdress.postalCode} name="postalCode" value={postalCode} onChange={(event) => setPostalCode(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#postalCode").innerHTML = "Not a valid postal code"
       } 
      else 
       {
         document.querySelector("#postalCode").innerHTML = ""
       }}}>
    </input>
    <div id="postalCode" className="text-danger ml-5"></div>
    </div>

    <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="country">Country</label>
    <input placeholder={editAdress.country} name="country" value={country} onChange={(event) => setCountry(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#country").innerHTML = "Not a valid country"
       } 
      else 
       {
         document.querySelector("#country").innerHTML = ""
       }}}>
    </input>
    <div id="country" className="text-danger ml-5"></div>
    </div>

    <div className="validation text-danger mt-3">{validation}</div>
    <div className="validation text-success mt-3">{editSuccess}</div>


    <button className="dark-btn-standard my-5" type="submit">Update Adress</button>

 </div>
</form> 
   

)}


export default EditAddress;