import React, { useEffect, useState } from "react";
import "./view-client.css"
import clinetlog from"./clinet-2.jpg";
const AdminViewclient=()=>{
  const[details,setdetails]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3005/admin-client-view")
    .then(res=>res.json())
    .then(output=>setdetails(output))
  },[])
  return(
    <>
    <div className=" client-bg-color mb-0 pt-2">
      <div className=" ms-5 col-lg-12 text-center row pt-2">
        {
          details.map((values,index)=>{
            return(
              <>
                <div class="card col-lg-3 text-center mt-4 m-2 client row">
                  <img src={clinetlog} class="card-img-top" alt="image"/>
                  <div class="card-body">
                    <h5 class="card-title">Client-Id:{values.registration_id}</h5>
                    <h5 class="card-title">Client-Full-Name:{values.enter_your_full_name}</h5>
                    <h5 class="card-title">Client-Phone-Number:{values.enter_your_number}</h5>
                    <h5 class="card-title">Client-Email-id:{values.enter_your_email_id}</h5>
                    <h5 class="card-title">Client-Location:{values.location}</h5>
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
export default AdminViewclient;