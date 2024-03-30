import "./registration.css"
import { NavLink } from "react-router-dom"

const RegistrationSuccess = () => {

    return (
        <>
            <div className="container box-registration mt-5">
            <div className="row">

            <div className="container div-top-register-success"></div>
            
            <h3>Manero</h3>

            <div className="col-lg-12 mt-5">
            <img className="img-registration-success" src={img}/>
            </div>

            <div className="col-lg-12 top-registration mt-3">
            <span className="line-login"></span>
            <h2 className="heading-standard mt-3">Account Created</h2>
            </div>

            <div className="col-lg-12 standard-text">
            Your account had been created successfully.
            </div>

            <div className="col-lg-12">
           <NavLink to="/login"><button className="dark-btn-standard mt-5">SHOP NOW</button></NavLink>
            </div>

            </div>
            </div>
        </>
    )

}

export default RegistrationSuccess;