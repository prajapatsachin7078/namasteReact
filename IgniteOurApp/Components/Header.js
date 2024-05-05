import { logoURL } from "../utils/constants";
import React, { useState, useEffect } from "react";
export const Header = (props) => {
  const filterData = props.filterData;
  const [logIN_OUT,setLogIN_OUT] = useState('Log In');
  const [searchText, setSearchText] = useState('');
  console.log(searchText)
    return (
        <nav className=" navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand text-success" href="#">
            <img src={logoURL} alt="Logo" width="80" className=" d-inline-block rounded-circle me-2"/>
            Food Court
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cart</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" value = {searchText} onChange={(e)=>{
                setSearchText(e.target.value);
                filterData(searchText);
                // console.log(searchText); 
              }}/>
              <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
                e.preventDefault();
                filterData(searchText);
              }}>Search</button>
            </form>
            <button className="ms-2 btn btn-outline-info" type="submit"
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