import React from "react";
import logo from "./Untitled design (1).png";
import "./admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Admin=()=>{
  return(
    <>
                      <nav class="navbar navbar-expand-lg">
                          <div class="container-fluid  bg-black text-white ">
                              <a class="navbar-brand" href="#">
                              <img src={logo} alt="Bootstrap" width="80" height="74" className="owner-logoimg"/> 
                              </a>

                                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon "></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-lg-end " id="navbarNav">
                                  <ul class="navbar-nav">
                                    
                                    <li class="nav-item d-flex">
                                    <FontAwesomeIcon icon={faUser} className="mt-2 owner-logout"/>
                                      <Link to="/admin-view-client-details" class="nav-link active text-white" aria-current="page">View Client</Link>
                                    </li>
                                    
                                    <li class="nav-item d-flex">
                                    <FontAwesomeIcon icon={faPeopleGroup} className="mt-2 owner-logout"/>
                                      <Link to="/admin-view-owner-details" class="nav-link text-white">View owner</Link>
                                    </li>
                                    <li class="nav-item d-flex">
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="mt-2 owner-logout"/>
                                      <Link to="/admin-back-to-loginpage"class="nav-link text-white">Logout</Link>
                                    </li>
                                  </ul>
                                </div>
                          </div>
                  </nav>
    </>
  )
}
export default Admin;