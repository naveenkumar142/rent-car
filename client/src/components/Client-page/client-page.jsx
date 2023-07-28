import logo from "./Untitled design (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ClientPage=()=>{
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
                                      <Link to="/back-to-login-page" class="nav-link text-white">Logout</Link>
                                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="mt-2 owner-logout"/>
                                    </li>
                                  </ul>
                                </div>
                          </div>
                  </nav>
    
    </>
  )
}
export default ClientPage;