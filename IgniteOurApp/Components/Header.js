import { logoURL } from "../utils/constants";

import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
export const Header = (props) => {
  const [logIN_OUT,setLogIN_OUT] = useState('Log In');
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <a className="nav-link text-secondary" aria-current="page" href="#">Cart</a>
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