import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ApiContext } from "../../../../contexts/ApiProvider";

const ResetPassword = () => {
  const { recoverPassword } = useContext(ApiContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState("");
  const regEx = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!regEx.test(newPassword) || newPassword != confirmPassword){
      setValidation("Faild to reset password")
      return;
    }
     setValidation("");

    let params = new URLSearchParams(window.location.search);
    var userEmail = params.get('email')
    var userToken = params.get('token')

     await recoverPassword(userEmail, userToken, newPassword)
    .then((response) => {
        if (response == true) {
            navigate("/login");
        }
        else {
            throw new Error("Failed to reset password");
        }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
     <div className="row">
          <div className="col-4"><NavLink className="nav-standard" to="/"><i className="fa-solid fa-angle-left"></i></NavLink></div>
          <div className="col-4 adress-title">Reset Password</div>
          <div className="mt-4 standard-text">Enter a new password and confirm</div>
     
    <form onSubmit={handleSubmit}>

     <div className="col-lg-12 mt-4 input-wrapper">
     <label> New Password </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          onKeyUp={(e) => {
            if(!regEx.test(e.target.value)){
              document.querySelector("#password").innerHTML = "Not a valid password"
            }
            else {
              document.querySelector("#password").innerHTML = ""
            }
          }}
        />
        <div id="password" className="text-danger ml-5"></div>
      </div>

      <div className="col-lg-12 mt-5 input-wrapper">
      <label> Confirm Password </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onKeyUp={(e) => {
            if(e.target.value != newPassword){
              document.querySelector("#confirmPassword").innerHTML = "Password and confirm password do not match"
            }
            else {
              document.querySelector("#confirmPassword").innerHTML = ""
            }
          }}
        />
        <div id="confirmPassword" className="text-danger ml-5"></div>
      </div>

      <div className="validation text-danger mt-3">
        {validation}
      </div>

      <button className="dark-btn-standard my-5" type="submit">CHANGE PASSWORD</button>
     
    </form>
</div>
</div>
    
  );
}

export default ResetPassword;