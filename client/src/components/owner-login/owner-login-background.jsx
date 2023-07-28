import React, { useEffect, useState } from "react";
import "./owner-back-ground.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const OwnerLoginBackground=()=>{
  const[details,setdetails]=useState([])
  let {registration_id}=useParams();
  useEffect(()=>{
    fetch("http://localhost:3005/get-vehicle-data/"+registration_id)
    .then(res=>res.json())
    .then(output=>setdetails(output))
  },[])

  function delet(registration_id){
    let key={registration_id:registration_id}
    axios.post("http://localhost:3005/delete-owner-data",key)
    .then((res)=>{
      if(res.data.status==="error"){
        alert("data not deleted");
      }
      else if(res.data.status==="result"){
        alert("data deleted succesfully");
        window.location.href="/add-vehicle/:registration_id"
      }
    })
  }
  return(
    <>
     <div className="conatiner-fluid owner-bg-color mb-5 pt-5">
      <div className="container text-center col-4  pt-2">
        {
          details.map((values,index)=>{
            return(
              <>
                <div class="card">
                  <img src={values.add_image_link} class="card-img-top" alt="image"/>
                  <div class="card-body">
                    <h5 class="card-title">Vehicle name:{values.vehicle_name}</h5>
                    <h5 class="card-title">Owner name:{values. owner_name}</h5>
                    <h5 class="card-title">Location:{values.location}</h5>
                    <h5 class="card-title">Description:{values.description}</h5>
                    <h5 class="card-title">Expected price:{values.expected_price}/hr</h5>
                    <div className="container">
                      <Link to={`/update-owner-details/${registration_id}`}><button className="btn btn-success col-lg-5 me-4">Update</button></Link>
                    <button className="btn btn-danger col-lg-5 " onClick={()=>{delet(values.registration_id)}}>Delete</button>
                  </div>
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
export default OwnerLoginBackground;