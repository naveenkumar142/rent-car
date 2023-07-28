import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import addvehicle1 from "./cta-add-cars.png";
import {Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const UpdateDetails=()=>{
  let {registration_id}=useParams()
  const[owner_name,SetOwner_name]=useState("");
    const[vehicle_name,SetVehicle_name]=useState("");
    const[vehicle_number,SetVehicle_number]=useState("");
    const[location,SetLocation]=useState("");
    const[description,SetDescription]=useState("");
    const[expected_price,SetExpected_price]=useState("");
    const[add_image_link,SetAdd_image_link]=useState("");

    useEffect(()=>{
      fetch("http://localhost:3005/updated-details/"+registration_id)
      .then(response=>response.json())
      .then((res)=>{
        SetOwner_name(res[0].owner_name)
        SetVehicle_name(res[0].vehicle_name)
        SetVehicle_number(res[0].vehicle_number)
        SetLocation(res[0].location)
        SetDescription(res[0].description)
        SetExpected_price(res[0].expected_price)
        SetAdd_image_link(res[0].
          add_image_link)
      })
    },[])


  const handlesubmitadd=async(event)=>{
    event.preventDefault();
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

  await axios.put('http://localhost:3005/update-details/'+registration_id,key)
  .then((res)=>{
    if(res.data.status==="error"){
      alert("data not updated");
    }
    else if(res.data.status==='result'){
      alert("data updated succesffuly");
      window.location.href=`/owner-view-page/${registration_id}
      `;
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
        <h1 className="text-center">UPADTE DETAILS</h1>

        <form onSubmit={handlesubmitadd}>
        <div className="mt-2 mx-auto col-lg-2 add-vehicle-div">
        <FontAwesomeIcon icon={faUser} />
            <input placeholder="Owner name" type="text" name="owner_name" id="owner_name" value={owner_name} onChange={(e)=>{SetOwner_name(e.target.value)}} className=" add-vehicle-input"/>
          </div>

          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faCar} />
            <input placeholder="vehicle name"  type="text" className=" add-vehicle-input" value={vehicle_name} onChange={(e)=>{SetVehicle_name(e.target.value)}} id="vehicle_name" name="vehicle_name"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faCar} />
            <input placeholder="vehicle number"  type="text" className=" add-vehicle-input" value={vehicle_number} onChange={(e)=>{SetVehicle_number(e.target.value)}} id="vehicle_number" name="vehicle_number"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faLocationDot} />
            <input placeholder="location" className="  add-vehicle-input"  value={location} onChange={(e)=>{SetLocation(e.target.value)}} type="text" id="location" name="location"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faFile} />
            <input placeholder="Description" className=" add-vehicle-input"  value={description} onChange={(e)=>{SetDescription(e.target.value)}} type="text" id="description" name="description"/>
          </div>
          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faMoneyBill} />
            <input placeholder="expected price" className=" add-vehicle-input" value={expected_price} onChange={(e)=>{SetExpected_price(e.target.value)}}  type="number" id="expected_price" name="expected_price"/>
          </div>

          <div className="mt-2  mx-auto col-lg-2 add-vehicle-div">
          <FontAwesomeIcon icon={faImage} />
            <input placeholder="add image link" className=" add-vehicle-input"  value={add_image_link} onChange={(e)=>{SetAdd_image_link(e.target.value)}} type="text" id="add_image_link" name="add_image_link"/>
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
export default UpdateDetails;