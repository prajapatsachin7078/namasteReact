import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import SearchCityContext from "../utils/context/SearchCityContext";
import { useSelector } from "react-redux";
import { logoURL } from "../utils/constants";

export const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
 
  const onlineStatus = useOnlineStatus();
  const [city, setCity] = useState('');
  const { handleCityNameUpdate } = useContext(SearchCityContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logoURL} alt="Logo" width="80" className="rounded-circle" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Search city"
                onChange={(e) => setCity(e.target.value)}
              />
              <Link to="/">
                <button
                  className="btn btn-outline-success ms-2"
                  type="button"
                  onClick={() => handleCityNameUpdate(city)}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active border-bottom border-danger text-danger" : "text-secondary"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active border-bottom border-danger text-danger" : "text-secondary"}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active border-bottom border-danger text-danger" : "text-secondary"}`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active border-bottom border-danger text-danger" : "text-secondary"}`
                }
                to="/grocery"
              >
                Grocery
              </NavLink>
            </li>
            <li className="nav-item mb-2 d-flex align-items-center">
              <span className={`ms-3 ${onlineStatus ? "text-success" : "text-danger"}`}>
                {onlineStatus ? "Online ✅" : "Offline 🔴"}
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart" className=" nav-link fs-4 ">
                🛒
              </Link>
              <span
                className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-success"
                style={{ fontSize: "12px"}}
              >
                {cartItem.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
