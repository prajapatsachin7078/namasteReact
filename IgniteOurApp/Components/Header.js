import { logoURL } from "../utils/constants";

import React, { useContext, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import SearchCityContext from "../utils/context/SearchCityContext";
export const Header = (props) => {
  // const [logIN_OUT,setLogIN_OUT] = useState('Log In');
  const onlineStatus = useOnlineStatus();
  const [city, setCity] = useState('');
  const {handleCityNameUpdate} = useContext(SearchCityContext);
    return (
        <nav className="container-fluid w-100 navbar navbar-expand-lg bg-body-tertiary">
        <div className="container position-relative">
            <Link to="/" className="navbar-brand" >
            <img src={logoURL} alt="Logo" width="80" className=" d-inline-block rounded-circle me-2"/>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse w-100 position-absolute end-0  navbar-collapse mb-2" id="navbarSupportedContent">
            <div className="navbar-nav mt-2 me-auto w-25" style={{
              marginLeft: "100px"
            }}>
              <input
                  type="text"
                  className="w-75 form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Search city"
                  onChange={(e)=>{
                    setCity(e.target.value);
                  }}
                />
              <Link to="/"><button className="ms-2 btn btn-outline-success" type="submit"
                onClick={
                  ()=>{
                    handleCityNameUpdate(city);
                  }
                }
              >Search</button></Link>
            </div>
            <ul className="navbar-nav w-75 ms-5 me-auto mb-lg-0">
              <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link active ${isActive ? "border-bottom border-danger text-danger" : "text-secondary"}`
                } 
                aria-current="page" 
                to="/">Home
              </NavLink>

              </li>
              <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "border-bottom border-danger text-danger" : "text-secondary"}`
                } 
                aria-current="page" 
                to="/about">About
              </NavLink>

              </li>
              <li className="nav-item">
                <NavLink  className={({ isActive }) => 
                  `nav-link  ${isActive ? "border-bottom border-danger text-danger" : "text-secondary"}`
                }  aria-current="page" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
              <NavLink  className={({ isActive }) => 
                  `nav-link  ${isActive ? "border-bottom border-danger text-danger" : "text-secondary"}`
                }  aria-current="page" to="/grocery">Grocery</NavLink>
              </li>

              <li className=" ms-5  nav-item border rounded text-align-center p-2">
                Online Status : {onlineStatus ? "✅":"🔴"}
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 border rounded"
                 aria-current="page" href="#">Sign In</a>
              </li>

              <li className=" ms-5 nav-item border rounded text-align-center ">
                <a className="nav-link border w-100  rounded"
                  aria-current="page" href="#">Cart 🛒</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};