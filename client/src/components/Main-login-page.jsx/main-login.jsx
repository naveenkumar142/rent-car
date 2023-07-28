import React from "react";
import "./main-login.css";
import logoimage from "./login-pic.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";


const MainLoginPage=()=>{
  const handlelogin=async(event)=>{
    event.preventDefault();
    let user_name=document.querySelector('#user_name').value;
    // alert(user_name);
    let enter_your_password=document.querySelector('#enter_your_password').value;
    // alert(enter_your_password);

    let key={
      "user_name":user_name,
      "enter_your_password":enter_your_password
    }
    await axios.post("http://localhost:3005/login",key)
    .then(function(res){
      if(res.data.status==='error'){
        alert('contact admin');
        window.location.reload();
      }
      else if(res.data.status==='success'){
        let type_of_user=res.data.type_of_user;
        let registration_id=res.data.registration_id;
        if(type_of_user==='admin'){
          alert(type_of_user);
          localStorage.setItem("type_of_user",type_of_user);
          window.location.href="/admin";
        }
        else if(type_of_user==='Owner'){
          alert(type_of_user);
          localStorage.setItem("registration_id",registration_id);
          window.location.href=`/owner-view-page/${registration_id}`;
        }
        else if(type_of_user==='Buyer'){
          alert(type_of_user);
          localStorage.setItem("registration_id",registration_id);
          window.location.href='/clent-view-page';
        }
      }
      else if(res.data.status==='inavlid_details'){
        alert("invalid password");
      }
      else if(res.data.status==='inavlid'){
        alert('invalid data`s');
      }
    })
     
  }
  return(
    <>
    {/* <div className="container-fluid main-loginimg"> */}
<div className="container-fluid main-loginimg">

      <div className="conatiner pt-5">
        <div className="text-center">
          <img src={logoimage} className="col-lg-1 col-5"></img>
        </div>
        <div className="text-center">
          <form onSubmit={handlelogin}>
                <div className="main-page-logo-user-div mx-auto col-lg-2 col-10">
                  <FontAwesomeIcon icon={faUser} className="text-white" />
                <input placeholder="username" type="text" id="user_name" name="user_name" className="main-page-logo-user text-white" />
                </div>
                <div className="main-page-logo-user-div mx-auto col-lg-2 col-10 mt-2">
                <FontAwesomeIcon icon={faLock} className="text-white"/>
                <input placeholder="Password" type="password" id="enter_your_password" name="enter_your_password" className="mt-2 main-page-logo-pass text-white"/>
                </div>
                <div>
                  <button className="mx-auto col-lg-2 button-login mt-2 col-lg-2 col-10 " type="submit">Get started</button>
                </div>
          </form>
         
        </div>
      </div>

      <div className="mt-4 mx-auto">
        <div className="text-center">
        <Link to="/newuser" className="text-decoration-none"><p className="fs-6  text-white">New User? Click here..</p></Link>  
        </div>
      </div>

      {/* <div>
        <Link to="/clent-view-page"><p>Client</p></Link>
        <Link to="/owner-view-page"><p>Owner</p></Link>
      </div> */}
</div>

      </>
  )
}
export default MainLoginPage;