import React from "react";
import "./add.vehicle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import addvehicle1 from "./cta-add-cars.png"
import {Link, useParams } from "react-router-dom";
import axios from "axios";
const Addvehicle=()=>{
  let {registration_id}=useParams()
  const handlesubmitadd=async(event)=>{
    event.preventDefault()
    let owner_name=document.querySelector('#owner_name').value;
    let vehicle_name=document.querySelector('#vehicle_name').value;
    let vehicle_number=document.querySelector('#vehicle_number').value;
    let location=document.querySelector('#location').value;
    let description=document.querySelector('#description').value;
    let expected_price=document.querySelector('#expected_price').value;
    let add_image_link=document.querySelector('#add_image_link').value;

  if(owner_name===''){
    alert("owner name cant be empty");
  }
  else if(vehicle_name===''){
    alert("vehicle name cant be empty");
  }
  else if(vehicle_number===''){
    alert("vehicle number cant be empty");
  }
  else if(location===''){
    alert("location cant be empty");
  }
  else if(description===''){
    alert("description cant be empty");
  }
  else if(expected_price===''){
    alert("expected price cant be empty");
  }
  else if(add_image_link===''){
    alert("cant be empty");
  }
  let key={
    "owner_name":owner_name,
    "vehicle_name":vehicle_name,
    "vehicle_number":vehicle_number,
    "location":location,
    "description":description,
    "expected_price":expected_price,
    "add_image_link":add_image_link
  }
  await axios.post("http://localhost:3005/add-vehicle-info/"+registration_id,key)
  .then((res)=>{
    if(res.data.status==='error'){
      alert("data not inserted");
    }
    else if(res.data.status==='result'){
      alert("data inserted successfully");
      window.location.href=`/owner-view-page/${registration_id}`;
    }
  })
}

  return(
    <>
    <div className="container-fluid add-vehicle bg-black pt-2">
      <div className="container bg-white add-vehicle-main1 text-center">
        <div className="text-center">
          <img src={addvehicle1} col-10/>
        </div>
        <h1 className="text-center">ADD DETAILS</h1>

        <form onSubmit={handlesubmitadd}>
        <div className="mt-2 mx-auto col-lg-2 add-vehicle-div">
        <FontAwesomeIcon icon={faUser} />
            <input placeholder="Owner name" type="text" name="owner_name" id="owner_name" className=" add-vehicle-input"/>
          </div>

          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faCar} />
            <input placeholder="vehicle name"  type="text" className=" add-vehicle-input" id="vehicle_name" name="vehicle_name"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faCar} />
            <input placeholder="vehicle number"  type="text" className=" add-vehicle-input" id="vehicle_number" name="vehicle_number"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faLocationDot} />
            <input placeholder="location" className="  add-vehicle-input"  type="text" id="location" name="location"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faFile} />
            <input placeholder="Description" className=" add-vehicle-input"  type="text" id="description" name="description"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faMoneyBill} />
            <input placeholder="expected price" className=" add-vehicle-input"  type="number" id="expected_price" name="expected_price"/>
          </div>

          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faImage} />
            <input placeholder="add image link" className=" add-vehicle-input"  type="text" id="add_image_link" name="add_image_link"/>
          </div>
          <div className="mt-2">
           
            <button className="col-lg-1 btn btn-success" type="submit">Submit</button>
          </div>
        </form>

      </div>
    </div>
    </>
  )
}
export default Addvehicle;