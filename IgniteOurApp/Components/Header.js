import { logoURL } from "../utils/constants";

import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = (props) => {
  const [logIN_OUT,setLogIN_OUT] = useState('Log In');
  const onlineStatus = useOnlineStatus();
    return (
        <nav className=" navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand text-dark fs-4" >
            <img src={logoURL} alt="Logo" width="80" className=" d-inline-block rounded-circle me-2"/>
            F🥘OD COURT
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mb-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
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

              <li className="nav-item border text-align-center p-2">
                Online Status : {onlineStatus ? "✅":"🔴"}
              </li>
            </ul>
            
            <button className="ms-2 btn btn-outline-success" type="submit"
              onClick={
                ()=>{
                  setLogIN_OUT(logIN_OUT === 'Log In'?'Log Out':'Log In');
                }
              }
            >{logIN_OUT}</button>
          </div>
        </div>
      </nav>
    );
};