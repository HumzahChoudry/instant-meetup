import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="" className="nav-bar">
          <div className="brand-logo-div">
            <a href="#" className="brand-logo">
              Logo
            </a>
          </div>
          <div className="nav-links">
            {props.user.id ? (
              <li>
                <button className="nav-link" onClick={props.logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-link">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/meetups">Meetups</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
