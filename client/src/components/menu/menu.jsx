import React from "react";
import "./menu.css";
import logo from "./Untitled design (1).png"
import { Link } from "react-router-dom";
const Menu=()=>{
  return(
    <>
    <nav className="navbar  navbar-expand-lg  bg-black">
                  <div className="container-fluid bg-black ">
                    <a className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" width="70" className="main-logo-size" height="65"/>
                    </a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item text-white">
                          <Link to="/aboutus" className="nav-link text-white fs-6" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/contact' className="nav-link text-white fs-6" href="#">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
               
    </>
  )
}
export default Menu;