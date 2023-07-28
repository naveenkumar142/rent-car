import React from "react";
import "./contactus.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const ContactForm = () =>{
  return(
    <>
    <div className="container-fluid contact-us-main pt-5 text-center">
      <div className="container contact-us-main2 bg-white text-black col-lg-6">
        <div className="container mt-5">
        <h1>Contact Us</h1>
        <div className="conatiner mt-5">

          <div className="mt-3 contact-us-div col-lg-5 mx-auto">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Enter your name" className="contact-us-input1" />
          </div>

         <div className="mt-3 contact-us-div col-lg-5 mx-auto">
         <FontAwesomeIcon icon={faEnvelope} />
         <input type="text" placeholder="Enter your email address" className="text-black contact-us-input1"/>
         </div>

         <div className="mt-3 contact-us-div col-lg-5 mx-auto">
         <FontAwesomeIcon icon={faClipboard} />
          <input type="text" placeholder="describe your problem" className="text-black contact-us-input1"/>
         </div>
        </div>

        <button className=" mx-auto  button-login-contact  mt-2 col-lg-5 col-12">Submit</button>
        </div>


        <div className="container mt-5">
          <div className="col-lg-12 col-12">
          <h4>You Can Also Contact Us Through:</h4>
          </div>

          <div className="col-lg-12  row">
          <div className="col-lg-4 col-4">
          <FontAwesomeIcon icon={faInstagram} className="instagram-contact text-danger"/>
          </div>


          <div className="col-lg-4 col-4">
          <FontAwesomeIcon icon={faTwitter} className="twitter-contact text-primary" />
          </div>

          <div className="col-lg-4 col-4">
          <FontAwesomeIcon icon={faFacebook} className="facebook-contact text-primary" />
          </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}
export default ContactForm;