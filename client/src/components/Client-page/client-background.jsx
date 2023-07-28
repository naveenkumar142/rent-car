import React, { useEffect, useState } from "react";
import "./client-background.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const ClientBackground=()=>{
  const phoneNumber = '+7676178241';
  const[details,setdetails]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3005/client-info/")
    .then(res=>res.json())
    .then(output=>setdetails(output))
  },[])
  const handleCallButtonClick = () => {
   
      // Replace 'PHONE_NUMBER' with the actual phone number you want to call on WhatsApp
      const phoneNumber = '7676178241';
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
  
      // Redirect the user to the WhatsApp link
      window.location.href = url;
  };
  return(
    <>
    <div className=" client-bg-color mb-0 pt-2">
      <div className=" ms-5 col-lg-12 text-center row pt-2">
        {
          details.map((values,index)=>{
            return(
              <>
                <div class="card col-lg-3 text-center mt-4 m-2 client row">
                  <img src={values.add_image_link} class="card-img-top" alt="image"/>
                  <div class="card-body">
                    <h5 class="card-title">Vehicle name:{values.vehicle_name}</h5>
                    <h5 class="card-title">Owner name:{values. owner_name}</h5>
                    <h5 class="card-title">Location:{values.location}</h5>
                    <h5 class="card-title">Description:{values.description}</h5>
                    <h5 class="card-title">Expected price:{values.expected_price}/hr</h5>
                    <button className="btn btn-success pl-5 pr-5 mt-3" onClick={handleCallButtonClick}>   <span className="me-2"><FontAwesomeIcon icon={faPhone} /></span> 
                      Click here to book your slot</button>
                  </div>
                </div>
              </>
            )
          })
        }
        </div>
      </div>
    </>
  )
}
export default ClientBackground;