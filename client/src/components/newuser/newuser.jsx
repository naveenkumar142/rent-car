import React from "react";
import "./newuser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
const Newuser=()=>{
  const newusersubmit=async(event)=>{
    event.preventDefault()
    let type_of_user=document.getElementById("type_of_user").value;
    let  enter_your_full_name=document.querySelector('#enter_your_full_name').value;
   let  enter_your_password=document.querySelector('#enter_your_password').value;
   let  enter_your_number=document.querySelector('#enter_your_number').value;
   let enter_your_email_id=document.querySelector('#enter_your_email_id').value;
   let location=document.querySelector('#location').value;

   if(type_of_user===''){
    alert("select anyone option'");
   }
   else if(enter_your_full_name===''){
    alert("enter your name");
   }
   else if(enter_your_password===''){
    alert("enter the password");
   }
   else if(enter_your_number===''){
    alert("enter phone number");
   }
   else if(enter_your_email_id===''){
    alert("enter correct email_id");
   }
   else if(location===''){
    alert("enter your location");
   }

   let key={
    "type_of_user":type_of_user,
    "enter_your_full_name":enter_your_full_name,
    "enter_your_password":enter_your_password,
    "enter_your_number":enter_your_number,
    "enter_your_email_id":enter_your_email_id,
    "location":location
   }
  await axios.post("http://localhost:3005/user-register",key)
  .then((res)=>{
    if(res.data.status==='error'){
      alert("data not inserted");
    }
    else if(res.data.status==='result'){
      alert("data inserted successfully");
      window.location.href="/back-to-login";
    }
  })
  }
  return(
    <>
    <div className="container-fluid bg-black text-center newuser-main">
      <div className="container mx-auto text-white p-5">
        <h2>Registration form</h2>
        <form onSubmit={newusersubmit}> 

          {/* <div> */}
            <select id="type_of_user">
              <option>Type of user</option>
            <option value="Owner">Owner</option>
            <option value="Buyer">Buyer</option>
            </select>
          {/* </div> */}

          <div className="mt-2 register-name-div  mx-auto col-lg-3 
           d-flex">
          <FontAwesomeIcon icon={faUser} className="mt-1"/>
            <input placeholder="Enter your full name" type="text" id="enter_your_full_name" name="enter_your_full_name"  className="register-name "/>
          </div>

          <div className="mt-2 register-name-div  mx-auto col-lg-3 d-flex">
          <FontAwesomeIcon icon={faLock} className="mt-1"/>
            <input placeholder="Enter your password" id="enter_your_password" name="enter_your_password" type="password" className="register-name"/>
          </div>

          <div className="mt-2 register-name-div  mx-auto col-lg-3 d-flex">
          <FontAwesomeIcon icon={faPhone} className="mt-1"/>
            <input placeholder="Enter phone number" type="number" id="enter_your_number" name="enter_your_number" className="register-name"/>
          </div>

          <div className="mt-2 register-name-div  mx-auto col-lg-3 d-flex">
          <FontAwesomeIcon icon={faEnvelope}className="mt-1" />
            <input placeholder="Enter your email_id" type="email"  id="enter_your_email_id" name="enter_your_email_id" className="register-name"/>
          </div>

          <div className="mt-2 register-name-div  mx-auto col-lg-3 d-flex" >
          <FontAwesomeIcon icon={faLocationDot} className="mt-1"/>
            <input placeholder="Location" type="text" id="location" name="location" className="register-name"/>
          </div>
          <button className=" mx-auto col-lg-2 button-login-reg  mt-2 col-lg-3 col-12" type="submit">Submit</button>
         
        </form>
      </div>
    </div>
    </>
  )
}
export default Newuser;